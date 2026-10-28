"use client";
export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <section className="section empty-state">
      <p className="eyebrow">UNA PAUSA EN EL CAMINO</p>
      <h1>No pudimos cargar esta página.</h1>
      <p>Puedes volver a intentarlo en un momento.</p>
      <button className="button primary" onClick={reset}>
        Volver a intentar
      </button>
    </section>
  );
}
