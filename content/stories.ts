export type Story = {
  id: string;
  slug: string;
  nombre: string;
  disciplina: string;
  temporada: number;
  año: number;
  categoría: string;
  título: string;
  resumen: string;
  descripción: string[];
  imagen: string;
  imagenEstado?: "provisional" | "oficial";
  alt: string;
  videoUrl: string | null;
  videoProvider: "external" | "youtube" | "vimeo";
  sourceUrl: string;
  destacado: boolean;
  orden: number;
  sourceDate: string;
};
const root = "https://www.13.cl/c/programas/resilientes-totales/capitulos/";
export const stories: Story[] = [
  {
    id: "rt-2025-01",
    slug: "katherinne-wollermann",
    nombre: "Katherinne Wollermann",
    disciplina: "Paracanotaje",
    categoría: "Deporte paralímpico",
    temporada: 3,
    año: 2025,
    título: "La libertad de remar.",
    resumen:
      "El agua, un nuevo propósito y una historia que va mucho más allá del podio.",
    descripción: [
      "En su conversación con Trinidad Carvajal, Katherinne Wollermann repasa sus comienzos en el canotaje y el sentido que encontró en esta disciplina. El capítulo se detiene en la autonomía, los desafíos y el recorrido personal detrás de sus resultados.",
      "La campeona de los 200 metros KL1 en París 2024 también recuerda sus primeras competencias en Curauma. Una mirada al camino que precede a una medalla y a la relación entre el deporte y la libertad.",
    ],
    imagen: "/art/water.svg",
    alt: "Composición editorial abstracta de ondas. Portada provisional, no fotografía de Katherinne Wollermann.",
    videoUrl: null,
    videoProvider: "external",
    sourceUrl: root + "katherinne-wollermann-la-deportista-paralimpica-chilena",
    destacado: true,
    orden: 1,
    sourceDate: "2025-04-21",
  },
  {
    id: "rt-2025-02",
    slug: "yasmani-acosta",
    nombre: "Yasmani Acosta",
    disciplina: "Lucha grecorromana",
    categoría: "Deporte olímpico",
    temporada: 3,
    año: 2025,
    título: "El peso de un sueño.",
    resumen:
      "Un viaje desde Cuba a Chile. Una vida dedicada a encontrar su lugar en la lucha.",
    descripción: [
      "Yasmani Acosta conversa sobre sus inicios deportivos en Cuba, los años en que combinó estudios y entrenamiento y su llegada a Chile en 2015. Su relato permite conocer las decisiones que precedieron a su participación olímpica.",
      "En el episodio reflexiona sobre la plata que obtuvo en París 2024 y sobre lo que significa compartir ese logro con otras personas. El resultado es una puerta de entrada a una historia de formación y perseverancia.",
    ],
    imagen: "/art/earth.svg",
    alt: "Composición editorial abstracta de círculos. Portada provisional, no fotografía de Yasmani Acosta.",
    videoUrl: null,
    videoProvider: "external",
    sourceUrl:
      root + "yasmani-acosta-habla-de-su-medalla-de-plata-en-paris-2024",
    destacado: true,
    orden: 2,
    sourceDate: "2025-06-23",
  },
  {
    id: "rt-2025-03",
    slug: "valentina-ukrow",
    nombre: "Valentina Ukrow",
    disciplina: "Escalada",
    categoría: "Outdoor",
    temporada: 3,
    año: 2025,
    título: "Encontrar su propia ruta.",
    resumen:
      "La roca, la naturaleza y la determinación de seguir haciendo lo que ama.",
    descripción: [
      "Valentina Ukrow comparte su vínculo con la escalada en roca y la importancia de su familia y amigos en su recorrido deportivo. En el capítulo de 2025, habla de los desafíos que ha enfrentado y de su gusto por encontrar caminos en la naturaleza.",
      "La conversación también recoge una experiencia de escalada en España y sus sueños de conocer nuevas montañas. Una historia sobre la paciencia que exige una ruta y el valor de volver a intentarlo.",
    ],
    imagen: "/art/rock.svg",
    alt: "Composición editorial abstracta de relieve. Portada provisional, no fotografía de Valentina Ukrow.",
    videoUrl: null,
    videoProvider: "external",
    sourceUrl:
      root + "conoce-a-valentina-ukrow-la-joven-de-14-anos-que-triunfa",
    destacado: true,
    orden: 3,
    sourceDate: "2025-05-12",
  },
  {
    id: "rt-2025-04",
    slug: "primos-grimalt",
    nombre: "Primos Grimalt",
    disciplina: "Vóley playa",
    categoría: "Deporte olímpico",
    temporada: 3,
    año: 2025,
    título: "Volver a la arena.",
    resumen:
      "Marco y Esteban Grimalt: aprender juntos, perder juntos y volver a competir.",
    descripción: [
      "En el estreno de la tercera temporada, Marco y Esteban Grimalt conversan con Trinidad Carvajal sobre los aprendizajes que han acompañado su carrera en el vóley playa. Recuerdan derrotas, entrenamientos y el significado de representar a Chile.",
      "El episodio de abril de 2025 recoge sus aspiraciones de una nueva clasificación olímpica. Más allá de ese objetivo, la historia muestra una relación construida a través de años de trabajo compartido.",
    ],
    imagen: "/art/sand.svg",
    alt: "Composición editorial abstracta de líneas de arena. Portada provisional, no fotografía de los primos Grimalt.",
    videoUrl: null,
    videoProvider: "external",
    sourceUrl:
      root + "primos-grimalt-se-sinceran-en-resilientes-totales-de-13c",
    destacado: true,
    orden: 4,
    sourceDate: "2025-04-14",
  },
  {
    id: "rt-2025-05",
    slug: "lucas-nervi",
    nombre: "Lucas Nervi",
    disciplina: "Lanzamiento de disco",
    categoría: "Deporte olímpico",
    temporada: 3,
    año: 2025,
    título: "Más lejos que una marca.",
    resumen:
      "La concentración, el disfrute y el deseo de aportar a la cultura deportiva chilena.",
    descripción: [
      "Lucas Nervi recuerda su participación en los Juegos Panamericanos de Santiago 2023, donde obtuvo el oro en lanzamiento de disco. En la conversación cuenta cómo vivió la concentración antes de competir y la emoción que siguió a ese resultado.",
      "El capítulo también aborda su inicio en la disciplina a los 13 años y sus objetivos deportivos. En su relato, disfrutar del deporte y contribuir a la cultura deportiva tienen un lugar tan relevante como los resultados.",
    ],
    imagen: "/art/disc.svg",
    alt: "Composición editorial abstracta de un disco. Portada provisional, no fotografía de Lucas Nervi.",
    videoUrl: null,
    videoProvider: "external",
    sourceUrl:
      root + "lucas-nervi-lanzador-de-disco-quiero-estar-en-los-juegos",
    destacado: false,
    orden: 5,
    sourceDate: "2025-05-08",
  },
  {
    id: "rt-2025-06",
    slug: "martin-sigren",
    nombre: "Martín Sigren",
    disciplina: "Rugby",
    categoría: "Deporte colectivo",
    temporada: 3,
    año: 2025,
    título: "Nadie llega solo.",
    resumen:
      "La familia, el compromiso y la fuerza de construir un camino en equipo.",
    descripción: [
      "En su entrevista de mayo de 2025, Martín Sigren recorre su relación con el rugby desde los años de colegio. Habla de su familia, de las personas que lo acompañaron y de las decisiones que marcaron su compromiso con el deporte.",
      "La historia se acerca a la preparación de Los Cóndores y al trabajo colectivo de la selección chilena. Es una conversación sobre disciplina, segundas oportunidades y pertenencia.",
    ],
    imagen: "/art/field.svg",
    alt: "Composición editorial abstracta de un campo. Portada provisional, no fotografía de Martín Sigren.",
    videoUrl: null,
    videoProvider: "external",
    sourceUrl: root + "martin-sigren-revela-como-los-condores-se-preparan-para",
    destacado: false,
    orden: 6,
    sourceDate: "2025-05-22",
  },
];
export const getStory = (slug: string) =>
  stories.find((story) => story.slug === slug);
export const featuredStories = stories
  .filter((s) => s.destacado)
  .sort((a, b) => a.orden - b.orden);
