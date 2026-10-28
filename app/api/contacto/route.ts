import { NextRequest, NextResponse } from "next/server";
import { createHash } from "node:crypto";
import { Resend } from "resend";
import { contactSchema, contactConfigured, RateLimiter } from "@/lib/contact";
import { siteUrl } from "@/lib/seo";
export const runtime = "nodejs";
const limiter = new RateLimiter();
const response = (body: object, status: number) =>
  NextResponse.json(body, { status, headers: { "Cache-Control": "no-store" } });
export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (!origin || ![siteUrl(), new URL(request.url).origin].includes(origin))
    return response({ error: "Solicitud no permitida." }, 403);
  if (!request.headers.get("content-type")?.includes("application/json"))
    return response({ error: "Formato no admitido." }, 415);
  if (Number(request.headers.get("content-length") || 0) > 20000)
    return response({ error: "El mensaje es demasiado extenso." }, 413);
  const ip = process.env.VERCEL
    ? request.headers.get("x-vercel-forwarded-for") || "unknown"
    : "local";
  const key = createHash("sha256").update(ip).digest("hex");
  if (!limiter.consume(key))
    return NextResponse.json(
      { error: "Demasiados intentos. Vuelve a intentarlo en 10 minutos." },
      {
        status: 429,
        headers: { "Retry-After": "600", "Cache-Control": "no-store" },
      },
    );
  let raw: unknown;
  try {
    const text = await request.text();
    if (Buffer.byteLength(text) > 20000)
      return response({ error: "El mensaje es demasiado extenso." }, 413);
    raw = JSON.parse(text);
  } catch {
    return response({ error: "No se pudo leer la solicitud." }, 400);
  }
  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success)
    return response({ error: "Revisa los campos del formulario." }, 400);
  if (parsed.data.website)
    return response({ error: "No se pudo procesar la solicitud." }, 400);
  if (!contactConfigured())
    return response(
      {
        error:
          "El formulario aún no está habilitado. Puedes contactarnos por Instagram.",
      },
      503,
    );
  const d = parsed.data;
  try {
    const { data, error } = await new Resend(
      process.env.RESEND_API_KEY,
    ).emails.send({
      from: process.env.CONTACT_FROM_EMAIL!,
      to: process.env.CONTACT_TO_EMAIL!,
      replyTo: d.email,
      subject: `Resilientes Totales · ${d.tipo}`,
      text: `Solicitud comercial\n\nNombre: ${d.nombre}\nEmpresa: ${d.empresa}\nCargo: ${d.cargo || "No informado"}\nCorreo: ${d.email}\nTipo: ${d.tipo}\n\n${d.mensaje}\n\nConsentimiento de privacidad: aceptado.`,
    });
    if (error || !data?.id)
      return response(
        {
          error:
            "No se pudo enviar el mensaje. Conservamos tus campos para que puedas volver a intentarlo.",
        },
        502,
      );
    return response({ ok: true }, 200);
  } catch {
    return response(
      {
        error:
          "El servicio de correo no está disponible. Vuelve a intentarlo más tarde.",
      },
      502,
    );
  }
}
