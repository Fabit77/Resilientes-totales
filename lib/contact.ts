import { z } from "zod";
export const collaborationTypes = [
  "Patrocinio",
  "Branded content",
  "Alianza estratégica",
  "Prensa",
  "Otro",
] as const;
export const contactSchema = z.object({
  nombre: z.string().trim().min(2, "Escribe tu nombre completo.").max(120),
  empresa: z
    .string()
    .trim()
    .min(2, "Escribe el nombre de tu organización.")
    .max(160),
  cargo: z.string().trim().max(120).optional().default(""),
  email: z.email("Escribe un correo válido.").max(254),
  tipo: z.enum(collaborationTypes, {
    error: "Selecciona un tipo de colaboración.",
  }),
  mensaje: z
    .string()
    .trim()
    .min(20, "Cuéntanos un poco más (al menos 20 caracteres).")
    .max(5000, "El mensaje admite hasta 5.000 caracteres."),
  consentimiento: z.literal(true, {
    error: "Necesitamos tu consentimiento para responder.",
  }),
  website: z.string().max(300).optional().default(""),
});
export function contactConfigured() {
  return Boolean(
    process.env.RESEND_API_KEY &&
      process.env.CONTACT_TO_EMAIL &&
      process.env.CONTACT_FROM_EMAIL,
  );
}
export class RateLimiter {
  private entries = new Map<string, { count: number; expires: number }>();
  constructor(
    private max = 5,
    private windowMs = 600000,
    private capacity = 10000,
  ) {}
  consume(key: string, now = Date.now()) {
    for (const [id, value] of this.entries)
      if (value.expires <= now) this.entries.delete(id);
    const entry = this.entries.get(key);
    if (entry && entry.count >= this.max) return false;
    if (entry) {
      entry.count++;
      return true;
    }
    // Reject new buckets when saturated; do not evict active limits.
    if (this.entries.size >= this.capacity) return false;
    this.entries.set(key, { count: 1, expires: now + this.windowMs });
    return true;
  }
}
