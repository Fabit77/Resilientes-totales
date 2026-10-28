import Link from "next/link";
import { ArrowDown, ArrowUpRight, ArrowRight } from "lucide-react";
import { featuredStories } from "@/content/stories";
import {
  StoryCard,
  SectionTitle,
  Timeline,
  CommercialCta,
} from "@/components/ui";
import { TrackedLink } from "@/components/tracked-link";
import { metadata as seo } from "@/lib/seo";
export const metadata = seo(
  "Historias detrás del deporte chileno",
  "Documentales deportivos de Resilientes Totales. Conoce las historias humanas de deportistas chilenos y descubre cómo colaborar con el proyecto.",
  "/",
);
export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-art" aria-hidden="true">
          <div className="hero-orbit" />
          <div className="hero-grid" />
          <span className="hero-rt">RT</span>
        </div>
        <div className="hero-topline">
          <span>
            <i /> DOCUMENTALES · DEPORTE · CHILE
          </span>
          <span>UNA MIRADA MÁS ALLÁ DE LA META</span>
        </div>
        <div className="hero-content">
          <p className="eyebrow">
            RESILIENTES TOTALES / EL LADO HUMANO DEL DEPORTE
          </p>
          <h1>
            Detrás de
            <br />
            cada logro,
            <br />
            <span>una historia.</span>
          </h1>
          <div className="hero-bottom">
            <p>
              Hay una historia que merece ser contada.
              <br />
              Documentales sobre el esfuerzo, los desafíos y las personas detrás
              del deporte chileno.
            </p>
            <div className="hero-actions">
              <Link href="/historias" className="button primary">
                Explorar historias <ArrowUpRight size={18} />
              </Link>
              <TrackedLink
                href="/para-marcas"
                className="text-link"
                event="colaboracion_click"
              >
                Colabora con nosotros <ArrowRight size={17} />
              </TrackedLink>
            </div>
          </div>
        </div>
        <div className="hero-caption">
          <span>COMPOSICIÓN EDITORIAL ORIGINAL · VISUAL PROVISIONAL</span>
          <a href="#historias" aria-label="Descubrir historias destacadas">
            DESCUBRE <ArrowDown size={14} />
          </a>
        </div>
      </section>
      <div className="editorial-strip">
        <span>NO SOLO EL RESULTADO.</span>
        <span>TODO LO QUE HAY DETRÁS.</span>
        <span className="strip-star">✳</span>
        <span>RESILIENTES TOTALES</span>
      </div>
      <section className="section" id="historias">
        <SectionTitle
          eyebrow="01 / EL PORTAFOLIO"
          title="Historias que se quedan."
        >
          <Link href="/historias" className="text-link">
            Todas las historias <ArrowUpRight size={18} />
          </Link>
        </SectionTitle>
        <div className="story-grid">
          {featuredStories.map((s, i) => (
            <StoryCard key={s.id} story={s} index={i} />
          ))}
        </div>
      </section>
      <section className="project-intro section">
        <div>
          <p className="eyebrow">02 / EL PROYECTO</p>
          <span className="large-mark" aria-hidden="true">
            RT.
          </span>
        </div>
        <div>
          <h2>
            El deporte es el punto
            <br />
            de partida.
            <br />
            <em>Las personas, el centro.</em>
          </h2>
          <p>
            Una medalla cuenta una parte. Nosotros queremos conocer el camino:
            los días de entrenamiento, las decisiones difíciles y las personas
            que acompañan.
          </p>
          <p>
            Creado por la periodista Trinidad Carvajal, Resilientes Totales
            llegó a las pantallas de 13C en octubre de 2023 para acercarnos a
            las historias humanas del deporte chileno.
          </p>
          <Link href="/nosotros" className="text-link">
            Conoce el proyecto <ArrowUpRight size={18} />
          </Link>
        </div>
      </section>
      <section className="section">
        <SectionTitle
          eyebrow="03 / UN CAMINO COMPARTIDO"
          title="Tres temporadas. Una mirada."
        />
        <Timeline />
      </section>
      <section className="manifesto section">
        <p className="eyebrow">04 / MÁS ALLÁ DEL DEPORTE</p>
        <h2>
          Antes del aplauso,
          <br />
          están los días
          <br />
          <em>que nadie ve.</em>
        </h2>
        <div className="manifesto-bottom">
          <span>EL ESFUERZO NO SIEMPRE HACE RUIDO.</span>
          <p>
            La familia. El equipo. La duda. El volver a empezar. Contamos lo que
            ocurre cuando una competencia termina y la vida continúa.
          </p>
        </div>
      </section>
      <CommercialCta />
    </>
  );
}
