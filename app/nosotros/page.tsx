import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageIntro, Timeline, CommercialCta } from "@/components/ui";
import { metadata as seo } from "@/lib/seo";
export const metadata = seo(
  "El proyecto y Trinidad Carvajal",
  "Conoce el origen de Resilientes Totales, el proyecto audiovisual de Trinidad Carvajal que visibiliza las historias humanas detrás del deporte chileno.",
  "/nosotros",
);
export default function About() {
  return (
    <>
      <PageIntro
        eyebrow="EL PROYECTO / NUESTRA MIRADA"
        title="Mirar más allá de la meta."
        description="El resultado dura un instante. El camino que lo hace posible puede cambiar la forma en que miramos el deporte."
      />
      <section className="section about-grid">
        <div className="about-graphic" aria-hidden="true">
          <span>
            HAY
            <br />
            MUCHO
            <br />
            MÁS.
          </span>
          <small>RESILIENTES TOTALES / CHILE</small>
        </div>
        <div className="prose">
          <p className="eyebrow">UNA IDEA DE TRINIDAD CARVAJAL</p>
          <h2>Contar lo que no aparece en el marcador.</h2>
          <p>
            Resilientes Totales nace de una inquietud de la periodista Trinidad
            Carvajal: acercar a las personas a la realidad de los deportistas
            chilenos. Conocerlos por sus experiencias, sus decisiones y aquello
            que les permite continuar.
          </p>
          <p>
            La idea tomó forma como un proyecto audiovisual dedicado a escuchar.
            Entrenamientos, dificultades económicas, familia y vida cotidiana se
            encuentran en conversaciones que sitúan a la persona en el centro
            del relato.
          </p>
          <p>
            Trinidad creó y conduce el programa, estrenado en 13C en octubre de
            2023. Las temporadas de 2024 y 2025 ampliaron esa mirada a nuevas
            disciplinas y recorridos.
          </p>
          <a
            href="https://austerra.org/articulos/resilientes-totales-el-programa-deportivo-de-trinidad-carvajal-que-visibiliza-las-historias-de-esfuerzo-detras-de-cada-profesional/"
            className="text-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lee sobre el origen del proyecto en Austerra{" "}
            <ArrowUpRight size={17} />
          </a>
        </div>
      </section>
      <section className="section principles">
        <p className="eyebrow">NUESTRA FILOSOFÍA EDITORIAL</p>
        <h2>
          Escuchar. Acompañar.
          <br />
          <em>Contar con respeto.</em>
        </h2>
        <div className="three-columns">
          <article>
            <span>01</span>
            <h3>La persona primero.</h3>
            <p>
              Cada trayectoria tiene matices. Nos interesan las experiencias
              humanas, además de las competencias.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Un país de historias.</h3>
            <p>
              Disciplinas y territorios distintos nos permiten acercarnos a
              otras formas de vivir el deporte en Chile.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>La mirada permanece.</h3>
            <p>
              Una historia puede abrir conversaciones sobre esfuerzo, comunidad
              y las oportunidades que necesita el deporte.
            </p>
          </article>
        </div>
      </section>
      <section className="section">
        <p className="eyebrow">TRAYECTORIA DOCUMENTADA</p>
        <h2>
          De la primera historia
          <br />a nuevos horizontes.
        </h2>
        <Timeline />
        <p className="footnote">
          La trayectoria en 13C corresponde a emisiones documentadas. La
          distribución de futuras producciones se acuerda para cada proyecto.
        </p>
        <Link href="/historias" className="text-link">
          Explora el portafolio <ArrowUpRight size={17} />
        </Link>
      </section>
      <CommercialCta />
    </>
  );
}
