import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Header } from "@/components/header";
import { Footer } from "@/components/ui";
import { site } from "@/content/site";
import { siteUrl, jsonLd } from "@/lib/seo";
import "./globals.css";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl()),
  title: {
    default: "Resilientes Totales | Historias detrás del deporte chileno",
    template: "%s | Resilientes Totales",
  },
  description: site.description,
  openGraph: {
    type: "website",
    locale: "es_CL",
    siteName: site.name,
    images: ["/opengraph-image"],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-CL">
      <body>
        <a className="skip-link" href="#contenido">
          Saltar al contenido
        </a>
        <Header />
        <main id="contenido">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: jsonLd({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: site.name,
              url: siteUrl(),
              sameAs: [site.instagram],
              description: site.description,
              founder: { "@type": "Person", name: "Trinidad Carvajal" },
            }),
          }}
        />
        {process.env.NEXT_PUBLIC_ANALYTICS_ENABLED === "true" && <Analytics />}
      </body>
    </html>
  );
}
