import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Play } from "lucide-react";
import { stories, getStory } from "@/content/stories";
import { StoryCard, SectionTitle } from "@/components/ui";
import { Share } from "@/components/share";
import { TrackedLink } from "@/components/tracked-link";
import { metadata as seo, jsonLd, siteUrl } from "@/lib/seo";
export function generateStaticParams() {
  return stories.map((s) => ({ slug: s.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = getStory(slug);
  return s
    ? seo(`${s.nombre}: ${s.título}`, s.resumen, `/historias/${s.slug}`)
    : { title: "Historia no encontrada" };
}
export default async function Story({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const s = getStory(slug);
  if (!s) notFound();
  const related = stories
    .filter((v) => v.slug !== s.slug)
    .sort(
      (a, b) =>
        Number(b.categoría === s.categoría) -
        Number(a.categoría === s.categoría),
    )
    .slice(0, 2);
  return (
    <>
      <section className="story-hero section">
        <Link href="/historias" className="text-link back-link">
          <ArrowLeft size={16} /> Todas las historias
        </Link>
        <p className="eyebrow">
          {s.disciplina} / TEMPORADA {s.temporada} / {s.año}
        </p>
        <h1>{s.nombre}</h1>
        <p className="story-subtitle">{s.título}</p>
        <div className="story-wide-art">
          <Image src={s.imagen} alt={s.alt} fill priority sizes="100vw" />
          {s.imagenEstado !== "oficial" && <span className="art-label">COMPOSICIÓN EDITORIAL · PORTADA PROVISIONAL</span>}
          <span className="wide-art-title">{s.título}</span>
        </div>
      </section>
      <section className="story-body section">
        <aside>
          <p className="eyebrow">LA HISTORIA</p>
          <dl>
            <dt>Protagonista</dt>
            <dd>{s.nombre}</dd>
            <dt>Disciplina</dt>
            <dd>{s.disciplina}</dd>
            <dt>Temporada / año</dt>
            <dd>03 / {s.año}</dd>
            <dt>Publicación de referencia</dt>
            <dd>
              {new Intl.DateTimeFormat("es-CL", {
                dateStyle: "long",
                timeZone: "UTC",
              }).format(new Date(s.sourceDate))}
            </dd>
            <dt>Fuente</dt>
            <dd>
              <a href={s.sourceUrl} target="_blank" rel="noopener noreferrer">
                13C · Sitio oficial ↗
              </a>
            </dd>
          </dl>
        </aside>
        <div className="story-copy">
          <h2>{s.resumen}</h2>
          {s.descripción.map((p) => (
            <p key={p}>{p}</p>
          ))}
          <div className="watch-panel">
            <Play size={28} />
            <h3>La historia, en su plataforma original.</h3>
            <p>
              Consulta el episodio y el contenido publicado por 13C. El
              reproductor y su disponibilidad dependen de la plataforma de
              origen.
            </p>
            <TrackedLink
              className="button primary"
              href={s.sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              event="episodio_externo_click"
              eventData={{ slug: s.slug }}
            >
              Ver en 13C <ArrowUpRight size={17} />
            </TrackedLink>
          </div>
          <Share title={`${s.nombre} · Resilientes Totales`} />
        </div>
      </section>
      <section className="section">
        <SectionTitle
          eyebrow="EL CAMINO SIGUE"
          title="Otras historias que descubrir."
        />
        <div className="story-grid">
          {related.map((v, i) => (
            <StoryCard key={v.id} story={v} index={i} />
          ))}
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: `${s.nombre}: ${s.título}`,
            description: s.resumen,
            url: `${siteUrl()}/historias/${s.slug}`,
            inLanguage: "es-CL",
            about: { "@type": "Person", name: s.nombre },
            isBasedOn: s.sourceUrl,
          }),
        }}
      />
    </>
  );
}
