import { test } from "node:test";
import assert from "node:assert/strict";
import { contactSchema, RateLimiter } from "../lib/contact";
const valid = {
  nombre: "Persona de prueba",
  empresa: "Organización de prueba",
  email: "test@example.org",
  tipo: "Patrocinio",
  mensaje: "Quiero conversar sobre una colaboración documental.",
  consentimiento: true,
  website: "",
};
test("el contacto requiere consentimiento, correo válido y un mensaje suficiente", () => {
  assert.equal(contactSchema.safeParse(valid).success, true);
  for (const override of [
    { consentimiento: false },
    { email: "no-valido" },
    { mensaje: "hola" },
    { empresa: "" },
    { tipo: "No permitido" },
  ])
    assert.equal(
      contactSchema.safeParse({ ...valid, ...override }).success,
      false,
    );
});
test("rechaza mensajes extensos y limpia espacios del nombre", () => {
  assert.equal(
    contactSchema.safeParse({ ...valid, mensaje: "x".repeat(5001) }).success,
    false,
  );
  assert.equal(
    contactSchema.parse({ ...valid, nombre: "  Nombre Apellido  " }).nombre,
    "Nombre Apellido",
  );
});
test("el límite mantiene bloqueos activos y vence después de la ventana", () => {
  const limiter = new RateLimiter(2, 1000, 2);
  assert.equal(limiter.consume("a", 100), true);
  assert.equal(limiter.consume("a", 101), true);
  assert.equal(limiter.consume("a", 102), false);
  assert.equal(limiter.consume("b", 103), true);
  assert.equal(limiter.consume("c", 104), false);
  assert.equal(limiter.consume("a", 1101), true);
});
