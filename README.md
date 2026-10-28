# Resilientes Totales

Portafolio audiovisual del proyecto chileno creado y conducido por Trinidad Carvajal. Sitio editorial con catálogo de historias verificadas, trayectoria, oportunidades para marcas y contacto comercial.

## Stack y requisitos

Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4 y CSS editorial, Lucide, Zod, Resend y Vercel Web Analytics. Node.js 22 o 24; npm. No requiere base de datos, autenticación ni CMS.

## Instalación y ejecución

```sh
npm ci
cp .env.example .env.local
npm run dev
```

Abrir http://localhost:3000. Para producción local: `npm run build` y `npm start`.

```sh
npm run typecheck
npm run lint
npm test
npm run build
```

## Estructura

- `app/`: inicio, historias, fichas, proyecto, marcas, contacto, privacidad, sitemap, robots, imagen social y errores.
- `app/api/contacto/route.ts`: envío validado a Resend.
- `components/`: navegación móvil, catálogo, tarjetas, formulario, compartir y componentes editoriales.
- `content/stories.ts`: catálogo tipado y fuentes por episodio.
- `content/site.ts`: temporadas, fuentes de trayectoria y modalidades comerciales.
- `lib/`: validación, control de intentos y SEO.
- `public/art/`: composiciones SVG originales y provisionales.
- `tests/`: validación, límites de intentos e integridad de fichas.
- `docs/`: fuentes, verificación y configuración pendiente.

## Variables de entorno

| Variable                        | Alcance           | Uso                                                                                                                                               |
| ------------------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL`          | Pública           | Origen canónico real, sin barra final; en local `http://localhost:3000`. En Vercel se puede omitir para detectar `VERCEL_PROJECT_PRODUCTION_URL`. |
| `NEXT_PUBLIC_ANALYTICS_ENABLED` | Pública           | `true` solo después de habilitar Web Analytics en Vercel. Por defecto no se carga.                                                                |
| `RESEND_API_KEY`                | Servidor, secreto | API key de Resend con permiso de envío.                                                                                                           |
| `CONTACT_FROM_EMAIL`            | Servidor          | Remitente autorizado con dominio verificado en Resend.                                                                                            |
| `CONTACT_TO_EMAIL`              | Servidor          | Buzón real autorizado del proyecto.                                                                                                               |

No se inventó una dirección oficial ni se agregaron credenciales. Configurar secretos directamente en Vercel → proyecto → Settings → Environment Variables. No enviarlos por chat ni agregarlos a Git. Tras cambios de variables públicas, desplegar otra vez.

## Habilitar el formulario

1. Crear/configurar Resend y verificar el dominio del remitente.
2. Configurar las tres variables de correo en Vercel, inicialmente solo Production; usar credenciales de prueba independientes para Preview.
3. Desplegar y enviar una solicitud controlada con un correo propio.
4. Confirmar la entrega en el buzón y la respuesta mediante Reply-To.

El formulario se deshabilita e informa del estado cuando faltan variables. El endpoint devuelve 503 si no está configurado. Solo devuelve éxito cuando Resend devuelve un identificador de correo. Esto acredita aceptación por el proveedor, no garantiza entrega al buzón. No hay almacenamiento persistente ni suscripción publicitaria; los leads quedan en el correo receptor. Los errores no exponen credenciales ni mensajes del proveedor.

Protecciones: Zod en cliente y servidor, honeypot, comprobación de origen, máximo de tamaño y cinco intentos por ventana de diez minutos. El límite es por instancia serverless, en memoria y con capacidad acotada: no es un límite distribuido. Si aumenta el tráfico, complementar con Vercel Firewall o un almacén compartido. No se registran datos del formulario en logs.

## Agregar un documental

Agregar un objeto `Story` a `content/stories.ts`. Campos: `id`, `slug`, `nombre`, `disciplina`, `temporada`, `año`, `categoría`, `título`, `resumen`, `descripción`, `imagen`, `alt`, `videoUrl`, `videoProvider`, `sourceUrl`, `destacado`, `orden`, `sourceDate`.

1. Verificar participación, disciplina, año y temporada en fuentes oficiales.
2. Usar un slug único y estable. Escribir resumen y descripción originales, sin copiar artículos.
3. Agregar una imagen autorizada en `public/`, su ruta y texto alternativo.
4. Mantener `videoUrl: null` y `videoProvider: 'external'` cuando solo exista un enlace al capítulo. `sourceUrl` debe apuntar al episodio oficial, nunca a un video simulado.
5. Marcar `destacado: true` y definir `orden` para mostrarlo en inicio.
6. Ejecutar los checks, crear PR e integrar en main.

La ficha, filtros, relacionados, metadata y sitemap se generan desde el catálogo. Las temporadas 1 y 2 tienen trayectoria verificada, pero todavía no fichas individuales: sus filtros muestran un estado vacío con acceso al archivo original. Para un futuro CMS se puede sustituir la capa de contenido por una función de consulta que conserve `Story`.

## Reemplazar imágenes e identidad

No hay fotografías, videos ni logo oficial en el repositorio original. Las portadas SVG y la composición del hero son diseños abstractos propios, señalados como provisionales. No representan al deportista ni son capturas del programa.

Para reemplazar: incorporar archivos autorizados WebP/AVIF/JPEG y actualizar `imagen`/`alt` en el catálogo. Usar 16:9, preferentemente 1600×900, y comprimir los originales. Las tarjetas usan Next Image con tamaños responsive y carga diferida. Configurar `imagenEstado: "oficial"` solo en las fichas cuyas portadas se hayan sustituido con material autorizado; la etiqueta provisional se oculta automáticamente en esas fichas. El hero se encuentra en `app/page.tsx`; los colores y tipografía en `app/globals.css`; la marca tipográfica en `components/header.tsx` y `components/ui.tsx`.

Solicitar: logo vectorial, manual de marca, fotos por episodio, retrato de Trinidad, tráiler con permiso de reproducción, créditos y confirmación de derechos para web y redes. No descargar contenidos protegidos para republicarlos.

## SEO y audiovisuales

Metadata única, canónicas, Open Graph/Twitter Cards, imagen social PNG generada, robots y sitemap. Datos estructurados Organization y CreativeWork con fuentes. No se declara VideoObject porque todavía no existe un video embebido autorizado con URL y datos de publicación verificados. No se usa una fecha de artículo como fecha de subida de un video.

Los episodios se abren en 13C y su disponibilidad depende del proveedor. No hay streaming propio ni reproductores ficticios. Cuando existan URLs oficiales de embed autorizadas se podrá integrar un reproductor con carga bajo demanda y metadatos VideoObject completos.

## Analítica y conversión

La integración está instalada y controlada por `NEXT_PUBLIC_ANALYTICS_ENABLED`. Habilitar Web Analytics en el panel de Vercel antes de activar la variable. Registra visitas y eventos preparados: `documental_click`, `colaboracion_click`, `solicitar_reunion_click`, `formulario_inicio`, `formulario_enviado`, `instagram_click`, `episodio_externo_click`. Los eventos no contienen datos personales. La disponibilidad de eventos personalizados depende del plan contratado; no se contrata un plan de pago automáticamente. En Hobby mantener la variable desactivada hasta decidir si se requieren solo visitas o eventos avanzados.

## GitHub y Vercel

Único repositorio: https://github.com/Fabit77/Resilientes-totales. Producción desde `main`. Trabajar en una rama `codex/…`, ejecutar checks y abrir PR. Vercel usa integración GitHub para construir previews y publicar producción al integrar en main.

Proyecto Vercel: `resilientes-totales`, equipo `fabits-projects`. Framework Next.js, raíz del repositorio, instalación `npm ci`, build `npm run build`, Node 24. La URL real verificada y el resultado de pruebas se registran en `docs/VERIFICACION.md` al finalizar la publicación. No establecer una URL inventada.

Para dominio propio: agregarlo en Vercel, configurar DNS, esperar validación TLS y cambiar `NEXT_PUBLIC_SITE_URL` a su origen definitivo antes de volver a desplegar. Registrar el sitemap en Google Search Console desde una cuenta propietaria.
