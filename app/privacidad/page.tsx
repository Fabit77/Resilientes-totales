import Link from "next/link";
import { PageIntro } from "@/components/ui";
import { metadata as seo } from "@/lib/seo";
export const metadata = seo(
  "Privacidad",
  "Información sobre el tratamiento de datos del formulario de contacto y la analítica del sitio Resilientes Totales.",
  "/privacidad",
);
export default function Privacy() {
  return (
    <>
      <PageIntro
        eyebrow="INFORMACIÓN DEL SITIO"
        title="Privacidad."
        description="Última actualización: 28 de octubre de 2026."
      />
      <article className="section prose privacy">
        <h2>Qué datos solicitamos y para qué</h2>
        <p>
          El formulario de Resilientes Totales solicita nombre, organización,
          cargo opcional, correo, tipo de colaboración y mensaje. Cuando el
          canal esté habilitado, utilizaremos esos datos únicamente para evaluar
          y responder tu consulta y coordinar una eventual colaboración. No los
          usaremos para suscribirte a publicidad.
        </p>
        <h2>Estado del formulario</h2>
        <p>
          Si el formulario informa que el servicio de correo no está habilitado,
          no permite enviar solicitudes. Escribir en sus campos no almacena los
          datos en una base de datos del sitio. Al enviar con el servicio
          habilitado, Resend procesa el correo y lo entrega al buzón configurado
          del proyecto.
        </p>
        <h2>Prestadores y conservación</h2>
        <p>
          Vercel aloja el sitio y puede procesar registros técnicos necesarios
          para su funcionamiento y seguridad. Resend presta el servicio de
          correo cuando está configurado. Estos proveedores pueden tratar
          información fuera de Chile conforme a sus propias políticas. El sitio
          no mantiene una base de datos de solicitudes; los mensajes recibidos
          permanecen en el buzón del proyecto mientras sean necesarios para
          atender la consulta y las obligaciones aplicables.
        </p>
        <h2>Seguridad y prevención de abuso</h2>
        <p>
          El servidor valida los campos, limita el tamaño de las solicitudes y
          aplica un límite temporal de intentos. Para ese control utiliza una
          huella técnica de la dirección IP en memoria, sin incorporarla al
          correo. El límite se reinicia al finalizar su ventana temporal o al
          reiniciarse la instancia.
        </p>
        <h2>Analítica</h2>
        <p>
          La integración de Vercel Web Analytics se carga únicamente si se
          habilita en la configuración del sitio. Permite conocer páginas
          visitadas y acciones generales, como abrir una historia o enviar una
          solicitud. Los eventos propios no incluyen nombres, correos ni el
          contenido de los mensajes. No incorporamos píxeles publicitarios.
        </p>
        <h2>Plataformas externas</h2>
        <p>
          Los enlaces a Instagram, 13C, WhatsApp y LinkedIn te llevan a
          servicios con sus propias políticas. Los episodios se abren en la
          plataforma original; el sitio no carga reproductores externos
          automáticamente.
        </p>
        <h2>Tus consultas y derechos</h2>
        <p>
          Puedes solicitar información, acceso, corrección o eliminación de los
          datos de tu consulta mediante el canal oficial de{" "}
          <a
            href="https://www.instagram.com/resilientestotales/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram de Resilientes Totales
          </a>
          . Evita compartir información sensible en un primer contacto. Cuando
          el canal de correo esté habilitado, también podrás responder al
          mensaje recibido del proyecto.
        </p>
        <Link href="/contacto" className="text-link">
          Volver a contacto ↗
        </Link>
      </article>
    </>
  );
}
