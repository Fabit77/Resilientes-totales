import Link from "next/link";
export default function NotFound() {
  return (
    <section className="section empty-state not-found">
      <p className="eyebrow">404 / FUERA DE RUTA</p>
      <h1>
        El camino sigue
        <br />
        por otro lado.
      </h1>
      <p>
        Esta página no existe. Hay otras historias esperando ser descubiertas.
      </p>
      <Link href="/historias" className="button primary">
        Explorar historias ↗
      </Link>
    </section>
  );
}
