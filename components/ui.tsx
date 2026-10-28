import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { Story } from "@/content/stories";
import { seasons, site } from "@/content/site";
import { TrackedLink } from "./tracked-link";
export function StoryCard({
  story,
  index = 0,
}: {
  story: Story;
  index?: number;
}) {
  return (
    <article className="story-card">
      <TrackedLink
        href={`/historias/${story.slug}`}
        event="documental_click"
        eventData={{ slug: story.slug }}
        className="story-card-link"
      >
        <div className="card-art">
          <Image
            src={story.imagen}
            alt={story.alt}
            fill
            sizes="(max-width: 700px) 100vw, 50vw"
          />
          <span className="card-number">
            {String(index + 1).padStart(2, "0")} / RT
          </span>
          <span className="card-cover-name">{story.nombre}</span>
          {story.imagenEstado !== "oficial" && <span className="art-label">PORTADA EDITORIAL PROVISIONAL</span>}
          <span className="circle-arrow">
            <ArrowUpRight size={24} />
          </span>
        </div>
        <div className="card-meta">
          <span>{story.disciplina}</span>
          <span>
            T{story.temporada} · {story.año}
          </span>
        </div>
        <h3>{story.título}</h3>
        <p>{story.nombre}</p>
      </TrackedLink>
    </article>
  );
}
export function SectionTitle({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {children}
    </div>
  );
}
export function Timeline() {
  return (
    <div className="timeline">
      {seasons.map((s) => (
        <article key={s.year}>
          <div className="timeline-top">
            <span>TEMPORADA 0{s.number}</span>
            <ArrowUpRight size={18} />
          </div>
          <h3>{s.year}</h3>
          <h4>{s.title}</h4>
          <p>{s.text}</p>
          <div className="timeline-links">
            <Link href={`/historias?temporada=${s.number}`}>
              Explorar <ArrowRight size={14} />
            </Link>
            <a href={s.source} target="_blank" rel="noopener noreferrer">
              Fuente 13C ↗
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}
export function CommercialCta() {
  return (
    <section className="commercial section">
      <p className="eyebrow">LA PRÓXIMA HISTORIA PUEDE EMPEZAR CONTIGO</p>
      <h2>
        Las grandes historias
        <br />
        también necesitan
        <br />
        <em>quienes crean en ellas.</em>
      </h2>
      <div className="commercial-bottom">
        <p>
          Marcas, personas e ideas que se encuentran para dar vida a nuevos
          relatos.
        </p>
        <TrackedLink
          href="/para-marcas"
          className="button light"
          event="colaboracion_click"
        >
          Conversemos sobre una colaboración <ArrowUpRight size={18} />
        </TrackedLink>
      </div>
    </section>
  );
}
export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="page-intro section">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      {description && <p className="intro-description">{description}</p>}
    </section>
  );
}
export function Footer() {
  return (
    <footer className="footer section">
      <div className="footer-top">
        <Link href="/" className="wordmark footer-wordmark">
          RESILIENTES<span>TOTALES</span>
        </Link>
        <p>
          Historias humanas.
          <br />
          Deporte chileno.
          <br />
          Más allá de la meta.
        </p>
        <nav aria-label="Navegación del pie">
          <Link href="/historias">Historias</Link>
          <Link href="/nosotros">El proyecto</Link>
          <Link href="/para-marcas">Para marcas</Link>
          <Link href="/contacto">Contacto</Link>
        </nav>
        <div>
          <TrackedLink
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            event="instagram_click"
          >
            Instagram <ArrowUpRight size={15} />
          </TrackedLink>
          <a href={site.archive} target="_blank" rel="noopener noreferrer">
            Archivo en 13C <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Resilientes Totales · Chile</span>
        <Link href="/privacidad">Privacidad</Link>
        <span>Identidad tipográfica y portadas provisionales.</span>
      </div>
      <p className="rights-note">
        Las composiciones gráficas son originales y no representan fotografías
        de los deportistas. Los episodios y materiales de 13C se consultan en su
        plataforma original.
      </p>
    </footer>
  );
}
