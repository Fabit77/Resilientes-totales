"use client";
import Link from "next/link";
import { useRef, useState } from "react";
import { ArrowUpRight, LoaderCircle, CheckCircle2 } from "lucide-react";
import { collaborationTypes, contactSchema } from "@/lib/contact";
import { record } from "./tracked-link";
export function ContactForm({
  enabled,
  initialType,
}: {
  enabled: boolean;
  initialType: string;
}) {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const started = useRef(false);
  const result = useRef<HTMLDivElement>(null);
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy || !enabled) return;
    setMessage("");
    const form = new FormData(event.currentTarget);
    const parsed = contactSchema.safeParse({
      ...Object.fromEntries(form),
      consentimiento: form.get("consentimiento") === "on",
    });
    if (!parsed.success) {
      const fields: Record<string, string> = {};
      parsed.error.issues.forEach((i) => {
        const field = String(i.path[0]);
        if (!fields[field]) fields[field] = i.message;
      });
      setErrors(fields);
      document.getElementById(Object.keys(fields)[0])?.focus();
      return;
    }
    setErrors({});
    setBusy(true);
    try {
      const response = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      const data = await response.json();
      if (!response.ok || !data.ok)
        throw new Error(
          data.error || "No se pudo enviar. Inténtalo nuevamente.",
        );
      setSuccess(true);
      record("formulario_enviado");
      setTimeout(() => result.current?.focus(), 0);
    } catch (error) {
      setMessage(
        error instanceof Error
          ? error.message
          : "No se pudo enviar el mensaje.",
      );
    } finally {
      setBusy(false);
    }
  }
  function field(name: string, label: string, type = "text", required = true) {
    return (
      <label className="form-field" htmlFor={name}>
        <span>
          {label}
          {!required && <small> Opcional</small>}
        </span>
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          maxLength={name === "email" ? 254 : 160}
          autoComplete={
            name === "nombre"
              ? "name"
              : name === "email"
                ? "email"
                : name === "empresa"
                  ? "organization"
                  : "organization-title"
          }
          aria-invalid={Boolean(errors[name])}
          aria-describedby={errors[name] ? `${name}-error` : undefined}
        />
        {errors[name] && (
          <span className="field-error" id={`${name}-error`}>
            {errors[name]}
          </span>
        )}
      </label>
    );
  }
  if (success)
    return (
      <div className="form-success" ref={result} tabIndex={-1} role="status">
        <CheckCircle2 size={38} />
        <h2>Tu mensaje fue enviado.</h2>
        <p>
          Gracias por escribirnos. Recibimos tu solicitud y podremos responder
          al correo que indicaste.
        </p>
        <Link className="text-link" href="/historias">
          Sigue descubriendo historias <ArrowUpRight size={17} />
        </Link>
      </div>
    );
  return (
    <form
      onSubmit={submit}
      noValidate
      onFocus={() => {
        if (!started.current) {
          record("formulario_inicio");
          started.current = true;
        }
      }}
      className="contact-form"
    >
      {!enabled && (
        <div className="form-notice" role="status">
          <strong>El formulario todavía no recibe mensajes.</strong>
          <p>
            Estamos habilitando el canal de correo. Mientras tanto, puedes
            escribirnos desde{" "}
            <a
              href="https://www.instagram.com/resilientestotales/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram oficial ↗
            </a>
            .
          </p>
        </div>
      )}
      <div className="form-row">
        {field("nombre", "Nombre completo")}
        {field("empresa", "Empresa u organización")}
      </div>
      <div className="form-row">
        {field("cargo", "Cargo", "text", false)}
        {field("email", "Correo electrónico", "email")}
      </div>
      <label className="form-field" htmlFor="tipo">
        <span>Tipo de colaboración</span>
        <select
          id="tipo"
          name="tipo"
          required
          defaultValue={initialType}
          aria-invalid={Boolean(errors.tipo)}
          aria-describedby={errors.tipo ? "tipo-error" : undefined}
        >
          <option value="">Selecciona una opción</option>
          {collaborationTypes.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
        {errors.tipo && (
          <span className="field-error" id="tipo-error">
            {errors.tipo}
          </span>
        )}
      </label>
      <label className="form-field" htmlFor="mensaje">
        <span>¿Qué historia podemos construir juntos?</span>
        <textarea
          name="mensaje"
          id="mensaje"
          rows={5}
          maxLength={5000}
          minLength={20}
          required
          placeholder="Cuéntanos sobre tu marca, tu idea o el tipo de colaboración que imaginas."
          aria-invalid={Boolean(errors.mensaje)}
          aria-describedby={errors.mensaje ? "mensaje-error" : undefined}
        />
        {errors.mensaje && (
          <span className="field-error" id="mensaje-error">
            {errors.mensaje}
          </span>
        )}
      </label>
      <div className="honeypot" aria-hidden="true">
        <label htmlFor="website">Deja este campo vacío</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <label className="consent" htmlFor="consentimiento">
        <input
          type="checkbox"
          name="consentimiento"
          id="consentimiento"
          required
          aria-invalid={Boolean(errors.consentimiento)}
          aria-describedby={
            errors.consentimiento ? "consentimiento-error" : undefined
          }
        />
        <span>
          Acepto la <Link href="/privacidad">política de privacidad</Link> y el
          uso de mis datos para responder a esta solicitud.
        </span>
      </label>
      {errors.consentimiento && (
        <p className="field-error" id="consentimiento-error">
          {errors.consentimiento}
        </p>
      )}
      <p role="alert" className="field-error">
        {message}
      </p>
      <button
        type="submit"
        className="button primary"
        disabled={busy || !enabled}
      >
        {busy ? (
          <>
            <LoaderCircle size={17} className="spinner" /> Enviando…
          </>
        ) : (
          <>
            Enviar solicitud <ArrowUpRight size={18} />
          </>
        )}
      </button>
      <p className="footnote">
        Solo confirmaremos el envío cuando el servicio de correo lo haya
        aceptado. No te suscribiremos a comunicaciones comerciales.
      </p>
    </form>
  );
}
