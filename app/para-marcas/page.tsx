import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { formats } from "@/content/site";
import { featuredStories } from "@/content/stories";
import { StoryCard, SectionTitle, Timeline } from "@/components/ui";
import { TrackedLink } from "@/components/tracked-link";
import { metadata as seo } from "@/lib/seo";
export const metadata = seo(
  "Para marcas: patrocinio y branded content",
  "Explora oportunidades de patrocinio de documentales, branded content y colaboraciones audiovisuales con Resilientes Totales. Conversemos sobre tu marca.",
  "/para-marcas",
);
export default function Brands() {
  return (
    <>
      <section className="brands-hero section">
        <p className="eyebrow">RESILIENTES TOTALES × TU MARCA</p>
        <h1>
          Hay historias que
          <br />
          merecen ser contadas.
          <br />
          <em>Hagámoslas posibles.</em>
        </h1>
        <div className="brands-hero-bottom">
          <p>
            Conectamos marcas con historias deportivas auténticas. Documentales
            y contenido audiovisual que abren conversaciones y crean
            oportunidades de encuentro.
          </p>
          <div>
            <TrackedLink
              className="button primary"
              href="/contacto?tipo=Patrocinio"
              event="solicitar_reunion_click"
            >
              Hablemos de tu marca <ArrowUpRight size={18} />
            </TrackedLink>
            <Link className="text-link" href="#portafolio">
              Explorar nuestros trabajos ↓
            </Link>
          </div>
        </div>
      </section>
      <section className="section">
        <SectionTitle
          eyebrow="01 / POR QUÉ RESILIENTES TOTALES"
          title="Una historia real tiene otra fuerza."
        />
        <div className="three-columns">
          <article>
            <span>VERDAD</span>
            <h3>Personas, antes que mensajes.</h3>
            <p>
              Un relato construido a partir de experiencias reales. La conexión
              empieza por escuchar y comprender a sus protagonistas.
            </p>
          </article>
          <article>
            <span>PERTENENCIA</span>
            <h3>Deporte con identidad chilena.</h3>
            <p>
              Territorios, disciplinas y comunidades que ofrecen una oportunidad
              para acercarse al deporte nacional desde sus historias.
            </p>
          </article>
          <article>
            <span>CONTENIDO</span>
            <h3>Una mirada audiovisual propia.</h3>
            <p>
              Documentales que pueden dar origen a cápsulas y otros formatos.
              Cada canal y derecho de uso se define en conjunto.
            </p>
          </article>
        </div>
      </section>
      <section className="section formats">
        <SectionTitle
          eyebrow="02 / POSIBILIDADES DE COLABORACIÓN"
          title="Encontremos el punto de encuentro."
        />
        <div className="format-list">
          {formats.map((f, i) => (
            <article key={f.title}>
              <span className="format-number">0{i + 1}</span>
              <div>
                <p className="eyebrow">{f.label}</p>
                <h3>{f.title}</h3>
              </div>
              <p>{f.text}</p>
              <ArrowUpRight size={24} />
            </article>
          ))}
        </div>
        <p className="footnote">
          Estos son formatos posibles de colaboración. El alcance, la inversión,
          los derechos y la distribución se acuerdan caso a caso. No constituyen
          paquetes ni resultados garantizados.
        </p>
      </section>
      <section className="section" id="portafolio">
        <SectionTitle
          eyebrow="03 / EL TRABAJO HABLA"
          title="Historias que ya son parte del camino."
        />
        <div className="story-grid">
          {featuredStories.slice(0, 2).map((s, i) => (
            <StoryCard story={s} key={s.id} index={i} />
          ))}
        </div>
      </section>
      <section className="section">
        <SectionTitle
          eyebrow="04 / TRAYECTORIA"
          title="Un proyecto que sigue contando."
        />
        <Timeline />
        <p className="footnote">
          Antecedentes de emisión en 13C. Las alianzas futuras y sus plataformas
          de distribución requieren acuerdos específicos.
        </p>
      </section>
      <section className="section brand-opportunities">
        <p className="eyebrow">05 / LO QUE PODEMOS EXPLORAR</p>
        <h2>
          Un propósito compartido.
          <br />
          <em>Muchas formas de encontrarnos.</em>
        </h2>
        <ul>
          <li>Asociación contextual con historias relevantes.</li>
          <li>Producción de contenido audiovisual original.</li>
          <li>Encuentros con comunidades deportivas.</li>
          <li>Activaciones en distintas plataformas.</li>
          <li>Storytelling vinculado a los valores de tu organización.</li>
          <li>Apoyo a nuevas historias del deporte nacional.</li>
        </ul>
      </section>
      <section className="commercial section">
        <p className="eyebrow">LA PRÓXIMA CONVERSACIÓN</p>
        <h2>
          Construyamos
          <br />
          <em>una historia juntos.</em>
        </h2>
        <div className="commercial-bottom">
          <p>Cuéntanos qué busca tu marca y exploremos una colaboración.</p>
          <TrackedLink
            href="/contacto?tipo=Alianza%20estratégica"
            className="button light"
            event="solicitar_reunion_click"
          >
            Solicitar reunión <ArrowUpRight size={18} />
          </TrackedLink>
        </div>
      </section>
    </>
  );
}
