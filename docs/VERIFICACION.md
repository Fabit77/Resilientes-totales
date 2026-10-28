# Verificación de entrega

Fecha: 28 de octubre de 2026.

## Código y validación local

- Next.js 16.4.3, React 19.3.1, Node 24.
- `npm run typecheck`: correcto.
- `npm run lint`: correcto, sin advertencias.
- `npm test`: cuatro pruebas correctas (datos, validación y límite temporal).
- `npm run build`: correcto, 18 entradas generadas; seis fichas precompiladas.
- `node scripts/check-http.mjs`: 12 páginas con HTTP 200, títulos únicos, descripción, canónica, Open Graph y datos estructurados. Sitemap, robots e imagen PNG responden 200. Dos rutas inexistentes devuelven 404.
- Endpoint de contacto: 403 para origen ajeno, 400 para datos inválidos o honeypot y 503 para falta de credenciales. Sin falsos éxitos y sin correos enviados.
- npm audit durante instalación: cero vulnerabilidades reportadas.

## Navegador

- Catálogo: búsqueda de Yasmani devuelve una historia; filtro Escalada devuelve Valentina; temporada 2023 muestra el estado vacío documentado y acceso al archivo original.
- Móvil 390×844: hero legible, menú abre, enlace Para marcas navega y cierra menú.
- CTA Hablemos de tu marca navega a contacto con Patrocinio preseleccionado.
- Formulario muestra la configuración pendiente y botón de envío deshabilitado.
- Ficha de Yasmani muestra datos, fuente oficial, acceso a 13C, compartir y relacionados.

## Publicación

Proyecto Vercel `prj_TK9xlRqJQm4x2bK6XZfx2VKuzOjO`, equipo `fabits-projects`, conectado a `Fabit77/Resilientes-totales`, producción desde `main`.

La URL asignada al proyecto es `https://resilientes-totales.vercel.app`. La validación de despliegue y commit final se incorporará una vez termine el build remoto.

## Pendientes reales

- Correo: faltan RESEND_API_KEY, CONTACT_FROM_EMAIL y CONTACT_TO_EMAIL. No se verificó entrega de correo real.
- Analítica: instalada y eventos preparados, desactivada por configuración. El equipo usa plan Hobby y los eventos personalizados pueden requerir otro plan; no se ha contratado una ampliación.
- Assets: faltan logo, fotografías y tráiler autorizados. Se usan gráficos originales explícitamente provisionales.
- No se embeben videos ni se declara VideoObject sin fuente de video autorizada y metadatos verificables.
- Temporadas 2023 y 2024: trayectoria verificada; incorporación de fichas individuales pendiente de verificación editorial por episodio.
- Core Web Vitals reales y posicionamiento requieren tráfico y medición después del lanzamiento; no se afirman puntuaciones ni resultados de Google.
