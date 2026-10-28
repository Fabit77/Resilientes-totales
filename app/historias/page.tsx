import { PageIntro } from "@/components/ui";
import { Catalog } from "@/components/catalog";
import { metadata as seo } from "@/lib/seo";
export const metadata = seo(
  "Historias y documentales",
  "Explora historias verificadas de deportistas chilenos. Filtra por disciplina y temporada y accede a los episodios de Resilientes Totales en 13C.",
  "/historias",
);
export default async function Stories({
  searchParams,
}: {
  searchParams: Promise<{ temporada?: string }>;
}) {
  const { temporada } = await searchParams;
  return (
    <>
      <PageIntro
        eyebrow="EL ARCHIVO / PERSONAS ANTES QUE RESULTADOS"
        title="Cada historia, otro comienzo."
        description="Conoce a quienes están detrás de cada desafío. Una selección del archivo audiovisual de Resilientes Totales."
      />
      <Catalog
        initialSeason={
          ["1", "2", "3"].includes(temporada || "") ? temporada : ""
        }
      />
    </>
  );
}
