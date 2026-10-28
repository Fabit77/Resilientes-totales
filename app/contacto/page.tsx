import { PageIntro } from "@/components/ui";
import { ContactForm } from "@/components/contact-form";
import { contactConfigured, collaborationTypes } from "@/lib/contact";
import { site } from "@/content/site";
import { TrackedLink } from "@/components/tracked-link";
import { metadata as seo } from "@/lib/seo";
export const dynamic = "force-dynamic";
export const metadata = seo(
  "Contacto y colaboraciones",
  "Conversemos sobre patrocinios, branded content, alianzas o prensa. Contacta al proyecto audiovisual Resilientes Totales.",
  "/contacto",
);
export default async function Contact({
  searchParams,
}: {
  searchParams: Promise<{ tipo?: string }>;
}) {
  const { tipo } = await searchParams;
  return (
    <>
      <PageIntro
        eyebrow="CONTACTO / EL COMIENZO DE ALGO"
        title="Toda historia empieza con una conversación."
      />
      <section className="section contact-layout">
        <aside>
          <p className="eyebrow">CONVERSEMOS</p>
          <h2>
            Una idea.
            <br />
            Una marca.
            <br />
            <em>Un nuevo camino.</em>
          </h2>
          <p>
            Si quieres apoyar una historia, explorar una colaboración o conocer
            más del proyecto, este es el lugar.
          </p>
          <TrackedLink
            href={site.instagram}
            className="text-link"
            target="_blank"
            rel="noopener noreferrer"
            event="instagram_click"
          >
            @resilientestotales ↗
          </TrackedLink>
          <p className="footnote">
            Para solicitar una reunión, cuéntanos tu objetivo y disponibilidad
            en el mensaje.
          </p>
        </aside>
        <ContactForm
          enabled={contactConfigured()}
          initialType={collaborationTypes.find((t) => t === tipo) || ""}
        />
      </section>
    </>
  );
}
