window.CURSO = window.CURSO || { modulos: [] };

var IMG_DEMO = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='100'%3E%3Crect width='100%25' height='100%25' fill='%2393c5fd'/%3E%3C/svg%3E";

/* ===================== 6. IMÁGENES Y MULTIMEDIA ===================== */
window.CURSO.modulos.push({
  id: "html-multimedia",
  orden: 6,
  area: "HTML",
  nivel: "Intermedio",
  titulo: "Imágenes y multimedia",
  resumen: "Cómo incrustar imágenes, vídeo, audio y contenido externo de forma accesible, rápida y adaptable a cada pantalla.",
  mdn: "https://developer.mozilla.org/es/docs/Learn_web_development/Core/Structuring_content/HTML_images",
  conceptos: [
    {
      titulo: "La etiqueta `<img>`",
      texto: "`<img>` es un elemento vacío (void element) que incrusta una imagen. Necesita `src` (ruta) y, en la práctica, siempre `alt`. Indicar `width` y `height` permite al navegador reservar el espacio antes de cargar la imagen.",
      puntos: [
        "`src`: ruta o URL de la imagen",
        "`alt`: texto alternativo (obligatorio en la práctica)",
        "`width` / `height`: dimensiones en píxeles; evitan saltos de diseño (layout shift)",
        "`loading=\"lazy\"`: difiere la carga hasta que la imagen está cerca de verse"
      ],
      codigo: `<img src="gato.jpg" alt="Gato naranja dormido en un sofá"
     width="400" height="300" loading="lazy">`,
      lenguaje: "html",
      ojo: "`<img>` no tiene etiqueta de cierre. Y `loading=\"lazy\"` no se pone en imágenes visibles al cargar la página (la principal de arriba): retrasaría lo más importante."
    },
    {
      titulo: "Texto alternativo (alt)",
      texto: "El `alt` se lee en lectores de pantalla, se muestra si la imagen falla y lo usan los buscadores. Debe describir la función o el contenido de la imagen, no decir \"imagen de...\". Si la imagen es meramente decorativa, se deja `alt=\"\"` (vacío) para que se ignore.",
      puntos: [
        "Describe lo que aporta la imagen en ese contexto",
        "No empieces con \"imagen de\" o \"foto de\": el lector ya anuncia que es una imagen",
        "Decorativa: `alt=\"\"` (presente pero vacío)",
        "Si la imagen es un enlace, el alt describe el destino del enlace"
      ],
      codigo: `<img src="logo.png" alt="Jumbo Tours, página de inicio">
<img src="adorno.png" alt="">`,
      lenguaje: "html",
      ojo: "`alt=\"\"` (vacío) y no poner `alt` NO son lo mismo: sin atributo, el lector puede leer el nombre del archivo."
    },
    {
      titulo: "`<figure>` y `<figcaption>`; contenido vs decoración",
      texto: "`<figure>` agrupa contenido autocontenido (imagen, diagrama, código) y `<figcaption>` le da una leyenda. Regla práctica: si la imagen forma parte del contenido, va con `<img>` en el HTML; si es puramente decorativa, va en CSS con `background-image`.",
      puntos: [
        "`<figcaption>` es hijo directo de `<figure>` (primero o último)",
        "Imagen de contenido: `<img>` con `alt`",
        "Imagen decorativa (fondos, adornos): CSS `background-image`, sin alt",
        "El `alt` y el `figcaption` se complementan, no se repiten"
      ],
      codigo: `<figure>
  <img src="mapa.png" alt="Mapa con la ruta de la excursión">
  <figcaption>Figura 1. Ruta de la excursión.</figcaption>
</figure>`,
      lenguaje: "html",
      ojo: "Una imagen en `background-image` no tiene alt: si la información importa, no la pongas solo como fondo CSS."
    },
    {
      titulo: "Formatos de imagen y SVG",
      texto: "Elegir bien el formato reduce el peso. Para fotos van bien JPEG, WebP o AVIF; para gráficos con transparencia, PNG; para logos e iconos escalables, SVG. SVG es vectorial: no pierde calidad al ampliar y puede ir en línea o como archivo.",
      puntos: [
        "JPEG: fotos, con pérdida, sin transparencia",
        "PNG: sin pérdida, con transparencia; capturas y gráficos",
        "GIF: animaciones simples, solo 256 colores",
        "WebP y AVIF: modernos, muy buena compresión (AVIF suele pesar menos)",
        "SVG: vectorial; en línea (`<svg>` en el HTML) se puede estilar con CSS y manipular con JS; con `<img src=\"x.svg\">` se cachea pero no se puede estilar por dentro"
      ],
      codigo: `<img src="logo.svg" alt="Logo de la empresa">

<svg width="40" height="40" role="img" aria-label="Círculo rojo">
  <circle cx="20" cy="20" r="18" fill="red"/>
</svg>`,
      lenguaje: "html",
      ojo: "SVG no es adecuado para fotografías: es para formas geométricas, logos e iconos."
    },
    {
      titulo: "Imágenes responsivas: srcset y sizes",
      texto: "`srcset` ofrece varias versiones de la misma imagen para que el navegador elija la más adecuada (cambio de resolución). Con descriptores `w` (ancho real en px) hay que añadir `sizes`, que indica qué ancho ocupará la imagen en pantalla. Con descriptores `x` se indica la densidad de píxeles.",
      puntos: [
        "Descriptor `w`: ancho intrínseco de cada archivo; requiere `sizes`",
        "Descriptor `x`: densidad de píxeles (1x, 2x), sin `sizes`",
        "`sizes`: condiciones de medios y ancho previsto, p. ej. `(max-width: 600px) 100vw, 50vw`",
        "Siempre se mantiene `src` como alternativa"
      ],
      codigo: `<img src="foto-800.jpg"
     srcset="foto-400.jpg 400w, foto-800.jpg 800w, foto-1600.jpg 1600w"
     sizes="(max-width: 600px) 100vw, 50vw"
     alt="Playa al atardecer">`,
      lenguaje: "html",
      ojo: "El navegador decide qué archivo carga; `srcset` es una pista, no una orden."
    },
    {
      titulo: "`<picture>` y dirección de arte",
      texto: "`<picture>` contiene varios `<source>` y un `<img>` final obligatorio. Se usa para dirección de arte (art direction): mostrar recortes distintos según la pantalla con `media`, o para ofrecer formatos distintos con `type`. El navegador usa el primer `<source>` que cumpla.",
      puntos: [
        "`<source media=\"(min-width: 800px)\">`: imagen distinta según la pantalla",
        "`<source type=\"image/avif\">`: formato alternativo si el navegador lo soporta",
        "El `<img>` dentro de `<picture>` es obligatorio y lleva el `alt`",
        "Cambio de resolución: `srcset`; dirección de arte: `<picture>`"
      ],
      codigo: `<picture>
  <source media="(min-width: 800px)" srcset="ancha.jpg">
  <source type="image/webp" srcset="foto.webp">
  <img src="foto.jpg" alt="Montaña nevada">
</picture>`,
      lenguaje: "html",
      ojo: "Si olvidas el `<img>` interno, `<picture>` no muestra nada. El `alt` va en el `<img>`, no en `<picture>`."
    },
    {
      titulo: "`<video>`, `<audio>` y `<track>`",
      texto: "`<video>` y `<audio>` incrustan multimedia sin plugins. Se pueden dar varios `<source>` con `type` para que el navegador use el formato que soporte, y texto dentro como contenido alternativo para navegadores sin soporte. `<track>` añade subtítulos en formato WebVTT.",
      puntos: [
        "`controls`: muestra los controles del navegador",
        "`autoplay`: normalmente solo funciona si va con `muted`",
        "`loop`: repite; `poster`: imagen mostrada antes de reproducir (solo vídeo)",
        "`<track kind=\"subtitles\" src=\"es.vtt\" srclang=\"es\" label=\"Español\">`: subtítulos WebVTT"
      ],
      codigo: `<video controls poster="portada.jpg" width="480">
  <source src="clip.webm" type="video/webm">
  <source src="clip.mp4" type="video/mp4">
  <track kind="subtitles" src="es.vtt" srclang="es" label="Español">
  Tu navegador no soporta vídeo. <a href="clip.mp4">Descárgalo</a>.
</video>`,
      lenguaje: "html",
      ojo: "Los navegadores bloquean `autoplay` con sonido; se permite con `muted`. Además, reproducir solo sin que el usuario lo pida es mala práctica de accesibilidad."
    },
    {
      titulo: "`<iframe>`: incrustar otra página",
      texto: "`<iframe>` inserta otro documento HTML dentro de la página (mapas, vídeos de terceros). Siempre lleva `title` para accesibilidad. Incrustar contenido ajeno tiene riesgos de seguridad: se limita con `sandbox` y solo se incrusta contenido de fuentes de confianza.",
      puntos: [
        "`src`: URL del documento; `title`: descripción para lectores de pantalla",
        "`allowfullscreen`: permite pantalla completa",
        "`sandbox`: restringe lo que puede hacer el contenido (scripts, formularios, etc.); se relajan permisos con valores como `allow-scripts`",
        "Riesgos: clickjacking, scripts maliciosos, rendimiento; usa HTTPS"
      ],
      codigo: `<iframe src="https://example.com/mapa" title="Mapa de la oficina"
        width="400" height="300" sandbox="allow-scripts"
        allowfullscreen></iframe>`,
      lenguaje: "html",
      ojo: "Un `sandbox` vacío aplica TODAS las restricciones; cada valor `allow-...` quita una. No combines `allow-scripts` con `allow-same-origin` en contenido no confiable."
    }
  ],
  chuleta: [
    ["<img>", "Elemento vacío que incrusta una imagen; requiere `src` y `alt`."],
    ["alt=\"\"", "Alt vacío: marca la imagen como decorativa; los lectores la ignoran."],
    ["width / height", "Dimensiones que reservan espacio y evitan saltos de diseño."],
    ["loading=\"lazy\"", "Carga diferida: la imagen se descarga cuando se acerca a la vista."],
    ["<figure> / <figcaption>", "Contenido autocontenido con su leyenda."],
    ["srcset", "Lista de versiones de la imagen con descriptores `w` o `x`."],
    ["sizes", "Ancho previsto de la imagen en pantalla; acompaña a `srcset` con `w`."],
    ["<picture>", "Contenedor de `<source>` + `<img>`; dirección de arte o formatos."],
    ["SVG", "Formato vectorial para logos e iconos; escala sin perder calidad."],
    ["WebP / AVIF", "Formatos modernos con mejor compresión que JPEG/PNG."],
    ["<video> / <audio>", "Multimedia nativa; `controls`, `loop`, `poster` (solo vídeo)."],
    ["<track>", "Subtítulos o descripciones en WebVTT para audio/vídeo."],
    ["<iframe>", "Incrusta otro documento; lleva `title` y se protege con `sandbox`."],
    ["autoplay + muted", "El autoplay suele requerir silenciar el medio."]
  ],
  ejemplo: {
    consigna: "Cambia el texto del `alt` y los atributos `width`/`height` de la imagen; observa cómo cambia el tamaño reservado y la leyenda del `figure`.",
    html: `<figure>
  <img src="` + IMG_DEMO + `" alt="Rectángulo azul de ejemplo" width="160" height="100">
  <figcaption>Figura 1. Imagen de ejemplo con leyenda.</figcaption>
</figure>`,
    css: `figure { border: 2px solid #3b82f6; padding: 10px; display: inline-block; background: #eff6ff; margin: 8px; }
figcaption { font-style: italic; color: #1e3a8a; margin-top: 6px; }`
  },
  reto: {
    enunciado: "Dentro del `<figure>`, añade una `<img>` con `src` y un `alt` significativo (no vacío), y conserva el `<figcaption>` con texto.",
    pista: "La imagen va dentro de `<figure>`; usa este src: el data URI de la plantilla (cópialo del comentario) y describe lo que muestra en el alt.",
    html: `<!-- src de ejemplo: ` + IMG_DEMO + ` -->
<figure>
  <!-- aquí va tu imagen -->
  <figcaption>Figura 1. Un rectángulo azul.</figcaption>
</figure>`,
    css: `figure { border: 2px solid #3b82f6; padding: 10px; display: inline-block; background: #eff6ff; }`,
    solucion: {
      html: `<figure>
  <img src="` + IMG_DEMO + `" alt="Rectángulo azul claro">
  <figcaption>Figura 1. Un rectángulo azul.</figcaption>
</figure>`,
      css: `figure { border: 2px solid #3b82f6; padding: 10px; display: inline-block; background: #eff6ff; }`
    },
    validar: function (doc, win) {
      try {
        var fig = doc.querySelector("figure");
        if (!fig) return { ok: false, msg: "No encuentro el <figure> (no lo borres)." };
        var img = fig.querySelector("img");
        if (!img) return { ok: false, msg: "Falta una <img> dentro del <figure>." };
        if (!img.getAttribute("src")) return { ok: false, msg: "La imagen necesita el atributo src." };
        var alt = (img.getAttribute("alt") || "").trim();
        if (alt.length < 3) return { ok: false, msg: "La imagen necesita un alt descriptivo (no vacío)." };
        var cap = fig.querySelector("figcaption");
        if (!cap || !cap.textContent.trim()) return { ok: false, msg: "El <figure> debe conservar un <figcaption> con texto." };
        return { ok: true, msg: "¡Correcto! Imagen con alt significativo dentro de un figure con figcaption." };
      } catch (e) {
        return { ok: false, msg: "No pude comprobar la solución." };
      }
    }
  },
  preguntas: [
    {
      tipo: "opcion",
      enunciado: "Una imagen es puramente decorativa y no aporta información. ¿Qué debes poner en su atributo `alt`?",
      opciones: ["No poner el atributo `alt`", "`alt=\"imagen decorativa\"`", "`alt=\"\"` (vacío)", "`alt=\"null\"`"],
      correcta: 2,
      explicacion: "`alt=\"\"` indica a los lectores de pantalla que la ignoren. Sin atributo, algunos leen el nombre del archivo; y un texto como \"imagen decorativa\" solo añade ruido."
    },
    {
      tipo: "opcion",
      enunciado: "¿Para qué sirven principalmente los atributos `width` y `height` en una `<img>`?",
      opciones: ["Para que el navegador reserve el espacio y evite saltos de diseño al cargar", "Para comprimir la imagen", "Para que el lector de pantalla describa su tamaño", "Para cambiar el formato del archivo"],
      correcta: 0,
      explicacion: "Con las dimensiones el navegador calcula la proporción antes de descargar la imagen y no desplaza el contenido cuando aparece."
    },
    {
      tipo: "opcion",
      enunciado: "Si usas descriptores `w` en `srcset`, ¿qué atributo necesitas para que el navegador elija bien?",
      codigo: `<img src="a-800.jpg" srcset="a-400.jpg 400w, a-800.jpg 800w" alt="...">`,
      lenguaje: "html",
      opciones: ["`media`", "`type`", "`loading`", "`sizes`"],
      correcta: 3,
      explicacion: "Con `w` el navegador necesita saber cuánto ancho ocupará la imagen: eso lo indica `sizes`. `media` y `type` van en `<source>` de `<picture>`."
    },
    {
      tipo: "opcion",
      enunciado: "Quieres mostrar un recorte vertical de una foto en móvil y uno panorámico en escritorio. ¿Qué usas?",
      opciones: ["`srcset` con descriptores `x`", "`<picture>` con `<source media>`", "`loading=\"lazy\"`", "`<figure>` con `<figcaption>`"],
      correcta: 1,
      explicacion: "Cambiar el recorte según la pantalla es dirección de arte, que se resuelve con `<picture>` y `media`. `srcset` solo cambia la resolución de la misma imagen."
    },
    {
      tipo: "opcion",
      enunciado: "Para que un vídeo con `autoplay` se reproduzca de forma fiable en los navegadores actuales, ¿qué suele hacer falta?",
      opciones: ["Añadir `poster`", "Añadir `controls`", "Añadir `muted`", "Añadir `loop`"],
      correcta: 2,
      explicacion: "Los navegadores bloquean el autoplay con sonido; se permite si el vídeo está silenciado con `muted`."
    },
    {
      tipo: "opcion",
      enunciado: "¿Qué formato elegirías para un logotipo que debe verse nítido a cualquier tamaño?",
      opciones: ["SVG", "JPEG", "GIF", "PNG"],
      correcta: 0,
      explicacion: "SVG es vectorial y escala sin perder calidad. JPEG y PNG son de mapa de bits y se pixelan al ampliar; GIF es limitado en colores."
    },
    {
      tipo: "opcion",
      enunciado: "¿Para qué sirve el atributo `sandbox` de un `<iframe>`?",
      opciones: ["Para permitir pantalla completa", "Para mostrar un título accesible", "Para cargar el marco más rápido", "Para restringir lo que puede hacer el contenido incrustado"],
      correcta: 3,
      explicacion: "`sandbox` aplica restricciones de seguridad (scripts, formularios, ventanas...) que se relajan con valores `allow-...`. La pantalla completa es `allowfullscreen` y el título es `title`."
    },
    {
      tipo: "opcion",
      enunciado: "¿Cuál es la estructura correcta de una imagen con leyenda?",
      opciones: ["`<img>` con `<figcaption>` hermano, sin contenedor", "`<figure>` que contiene `<img>` y `<figcaption>`", "`<figcaption>` que contiene `<figure>` e `<img>`", "`<picture>` que contiene `<figcaption>`"],
      correcta: 1,
      explicacion: "`<figcaption>` debe ser hijo directo de `<figure>`, junto al contenido que describe."
    },
    {
      tipo: "completar",
      enunciado: "Escribe el valor del atributo `loading` que hace que la imagen se cargue solo cuando se acerque a la vista.",
      respuestas: ["lazy", "\"lazy\"", "loading=\"lazy\"", "loading='lazy'", "loading=lazy"],
      explicacion: "`loading=\"lazy\"` difiere la descarga; el valor por defecto es `eager`."
    },
    {
      tipo: "completar",
      enunciado: "¿Qué elemento (escribe la etiqueta) se coloca dentro de `<video>` para añadir subtítulos WebVTT?",
      respuestas: ["track", "<track>", "<track/>", "<track />"],
      explicacion: "`<track kind=\"subtitles\" src=\"...vtt\" srclang=\"es\">` enlaza un archivo WebVTT con los subtítulos."
    }
  ]
});

/* ===================== 7. TABLAS ===================== */
window.CURSO.modulos.push({
  id: "html-tablas",
  orden: 7,
  area: "HTML",
  nivel: "Intermedio",
  titulo: "Tablas",
  resumen: "Cómo presentar datos tabulares con una estructura semántica y accesible (y por qué no sirven para maquetar).",
  mdn: "https://developer.mozilla.org/es/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics",
  conceptos: [
    {
      titulo: "Cuándo usar (y cuándo no) una tabla",
      texto: "Las tablas son para datos tabulares: información que se relaciona en filas y columnas (horarios, precios, estadísticas). Usarlas para maquetar la página (layout) es una práctica obsoleta: es difícil de mantener, poco flexible y mala para la accesibilidad. Para maquetar se usa CSS (Flexbox, Grid).",
      puntos: [
        "Sí: datos con relación entre filas y columnas",
        "No: colocar menús, columnas o imágenes de la página",
        "Los lectores de pantalla anuncian las celdas con sus cabeceras, y eso confunde en una maqueta"
      ],
      ojo: "Maquetar con tablas está obsoleto; en el examen la respuesta correcta es siempre CSS."
    },
    {
      titulo: "Estructura básica",
      texto: "`<table>` envuelve la tabla; `<tr>` define una fila (table row); `<td>` una celda de datos y `<th>` una celda de cabecera (table header), que por defecto va en negrita y centrada.",
      puntos: [
        "`<table>` > `<tr>` > `<td>` / `<th>`",
        "Cada `<tr>` es una fila; cada celda es una columna dentro de esa fila",
        "`<th>` indica cabecera, no solo estilo"
      ],
      codigo: `<table>
  <tr><th>Nombre</th><th>Edad</th></tr>
  <tr><td>Ana</td><td>30</td></tr>
</table>`,
      lenguaje: "html",
      ojo: "Una `<td>` no puede estar fuera de un `<tr>`; no existe una etiqueta de columna que contenga celdas."
    },
    {
      titulo: "caption, thead, tbody y tfoot",
      texto: "`<caption>` es el título de la tabla y debe ser el primer hijo de `<table>`. `<thead>`, `<tbody>` y `<tfoot>` agrupan las filas de cabecera, cuerpo y pie, dando estructura semántica y permitiendo estilos por sección.",
      puntos: [
        "`<caption>`: título accesible de la tabla",
        "`<thead>`: filas de cabecera; `<tbody>`: datos; `<tfoot>`: totales o resumen",
        "Aunque `<tfoot>` se escriba al final, el navegador lo trata como pie de tabla"
      ],
      codigo: `<table>
  <caption>Ventas por trimestre</caption>
  <thead><tr><th>Trimestre</th><th>Ventas</th></tr></thead>
  <tbody><tr><td>T1</td><td>100</td></tr></tbody>
  <tfoot><tr><td>Total</td><td>100</td></tr></tfoot>
</table>`,
      lenguaje: "html",
      ojo: "`<caption>` va justo después de abrir `<table>`, antes que `<thead>` o cualquier fila."
    },
    {
      titulo: "colspan y rowspan",
      texto: "Una celda puede ocupar varias columnas con `colspan` o varias filas con `rowspan`. El valor es un número de celdas. Las celdas que quedan cubiertas se eliminan del marcado.",
      puntos: [
        "`colspan=\"2\"`: la celda ocupa 2 columnas",
        "`rowspan=\"2\"`: la celda ocupa 2 filas",
        "Al fusionar, quita las celdas sobrantes para no desajustar la tabla"
      ],
      codigo: `<tr>
  <th colspan="2">Contacto</th>
</tr>
<tr>
  <td>Teléfono</td><td>Correo</td>
</tr>`,
      lenguaje: "html",
      ojo: "Si usas `colspan=\"2\"` pero dejas todas las celdas de la fila, la tabla se deforma: cada fila debe sumar el mismo número de columnas."
    },
    {
      titulo: "Accesibilidad: scope, id y headers",
      texto: "`scope` en un `<th>` indica a qué celdas es cabecera: `col` (columna) o `row` (fila). Para tablas complejas con cabeceras multinivel se asocian celdas y cabeceras con `id` en el `<th>` y `headers` en la `<td>`.",
      puntos: [
        "`scope=\"col\"`: cabecera de la columna",
        "`scope=\"row\"`: cabecera de la fila",
        "`headers=\"id1 id2\"`: lista de `id` de cabeceras que aplican a la celda",
        "Siempre usa `<th>` para cabeceras, no `<td>` en negrita"
      ],
      codigo: `<tr>
  <th scope="col">Producto</th>
  <th scope="col">Precio</th>
</tr>
<tr>
  <th scope="row">Mesa</th><td>50 €</td>
</tr>`,
      lenguaje: "html",
      ojo: "`scope` solo tiene sentido en `<th>`. `headers` se escribe en la `<td>` y contiene ids de `<th>`."
    },
    {
      titulo: "Columnas con `<colgroup>` y `<col>`, y CSS",
      texto: "`<colgroup>` agrupa columnas y cada `<col>` permite dar estilo a una columna entera sin repetirlo en cada celda. Con CSS, `border-collapse: collapse` fusiona los bordes de celdas contiguas en uno solo.",
      puntos: [
        "`<colgroup>` va justo tras `<caption>` y antes de `<thead>`/`<tr>`",
        "`<col>` es vacío; acepta `span` y estilos como fondo, borde o anchura",
        "`border-collapse: collapse` evita el doble borde por defecto (`separate`)",
        "Para estilos de filas se usa `tr:nth-child(even)` o clases"
      ],
      codigo: `table { border-collapse: collapse; }
td, th { border: 1px solid #333; padding: 6px; }`,
      lenguaje: "css",
      ojo: "Sobre `<col>` solo funcionan algunas propiedades (borde, fondo, anchura, visibility), no todas."
    }
  ],
  chuleta: [
    ["<table>", "Contenedor de una tabla de datos."],
    ["<tr>", "Fila de la tabla (table row)."],
    ["<td>", "Celda de datos."],
    ["<th>", "Celda de cabecera (table header)."],
    ["<caption>", "Título de la tabla; primer hijo de `<table>`."],
    ["<thead> / <tbody> / <tfoot>", "Agrupan filas de cabecera, cuerpo y pie."],
    ["colspan", "Número de columnas que ocupa una celda."],
    ["rowspan", "Número de filas que ocupa una celda."],
    ["scope=\"col|row\"", "Indica si un `<th>` es cabecera de columna o de fila."],
    ["headers / id", "Asocian una celda con sus cabeceras en tablas complejas."],
    ["<colgroup> / <col>", "Agrupan columnas para darles estilo conjunto."],
    ["border-collapse", "`collapse` fusiona los bordes de celdas contiguas."],
    ["Tablas para maquetar", "Obsoleto y perjudicial para la accesibilidad; usar CSS."]
  ],
  ejemplo: {
    consigna: "Cambia `colspan` y `border-collapse` y observa cómo se fusionan las celdas y los bordes.",
    html: `<table>
  <caption>Notas del curso</caption>
  <thead>
    <tr><th scope="col">Alumno</th><th scope="col" colspan="2">Notas</th></tr>
  </thead>
  <tbody>
    <tr><th scope="row">Ana</th><td>8</td><td>9</td></tr>
    <tr><th scope="row">Luis</th><td>6</td><td>7</td></tr>
  </tbody>
</table>`,
    css: `table { border-collapse: collapse; width: 260px; }
caption { font-weight: bold; padding: 6px; }
th, td { border: 1px solid #1e40af; padding: 6px; text-align: center; }
thead th { background: #bfdbfe; }
tbody th { background: #dbeafe; }`
  },
  reto: {
    enunciado: "Construye una tabla con `<caption>`, un `<thead>` con celdas `<th scope=\"col\">` y al menos una celda con `colspan` mayor que 1.",
    pista: "El caption va primero dentro de la tabla; el atributo `colspan=\"2\"` va en una celda `<th>` o `<td>`.",
    html: `<!-- construye tu tabla aquí -->
`,
    css: `table { border-collapse: collapse; }
th, td { border: 1px solid #333; padding: 6px; }`,
    solucion: {
      html: `<table>
  <caption>Resultados</caption>
  <thead>
    <tr><th scope="col">Equipo</th><th scope="col" colspan="2">Puntos</th></tr>
  </thead>
  <tbody>
    <tr><td>Rojo</td><td>3</td><td>1</td></tr>
  </tbody>
</table>`,
      css: `table { border-collapse: collapse; }
th, td { border: 1px solid #333; padding: 6px; }`
    },
    validar: function (doc, win) {
      try {
        var t = doc.querySelector("table");
        if (!t) return { ok: false, msg: "No encuentro ninguna <table>." };
        var cap = t.querySelector("caption");
        if (!cap || !cap.textContent.trim()) return { ok: false, msg: "Falta un <caption> con texto dentro de la tabla." };
        if (!t.querySelector("thead")) return { ok: false, msg: "Falta el <thead>." };
        var ths = t.querySelectorAll("thead th[scope='col']");
        if (ths.length < 1) return { ok: false, msg: "El <thead> necesita al menos un <th scope=\"col\">." };
        var celdas = t.querySelectorAll("td, th"), hay = false;
        for (var i = 0; i < celdas.length; i++) {
          if (parseInt(celdas[i].getAttribute("colspan"), 10) > 1) { hay = true; break; }
        }
        if (!hay) return { ok: false, msg: "Falta una celda con colspan mayor que 1." };
        return { ok: true, msg: "¡Correcto! Tabla con caption, cabeceras con scope y un colspan." };
      } catch (e) {
        return { ok: false, msg: "No pude comprobar la solución." };
      }
    }
  },
  preguntas: [
    {
      tipo: "opcion",
      enunciado: "¿Para qué NO deben usarse las tablas HTML?",
      opciones: ["Para mostrar horarios", "Para maquetar la estructura de la página", "Para mostrar precios y características", "Para estadísticas"],
      correcta: 1,
      explicacion: "Las tablas son para datos tabulares. Maquetar con ellas es obsoleto y perjudica la accesibilidad; se usa CSS (Flexbox/Grid)."
    },
    {
      tipo: "opcion",
      enunciado: "¿Qué diferencia hay entre `<td>` y `<th>`?",
      opciones: ["`<th>` es una fila y `<td>` una columna", "`<td>` es de cabecera y `<th>` de datos", "No hay ninguna: son sinónimos", "`<th>` es una celda de cabecera y `<td>` una celda de datos"],
      correcta: 3,
      explicacion: "`<th>` (table header) es una cabecera y semánticamente lo anuncian los lectores de pantalla; `<td>` (table data) es una celda de datos."
    },
    {
      tipo: "opcion",
      enunciado: "¿Dónde debe colocarse `<caption>`?",
      opciones: ["Al final de la tabla", "Como primer hijo de `<table>`", "Dentro de `<thead>`", "Dentro de cada `<tr>`"],
      correcta: 1,
      explicacion: "`<caption>` es el título de la tabla y debe ser su primer hijo, antes de `<colgroup>`, `<thead>` y las filas."
    },
    {
      tipo: "opcion",
      enunciado: "¿Qué hace este código?",
      codigo: `<td colspan="3">Total</td>`,
      lenguaje: "html",
      opciones: ["Crea tres celdas", "Aplica 3 píxeles de relleno", "La celda ocupa tres filas", "La celda ocupa tres columnas"],
      correcta: 3,
      explicacion: "`colspan` fusiona celdas en horizontal (columnas). Para filas se usa `rowspan`."
    },
    {
      tipo: "opcion",
      enunciado: "¿Qué indica `scope=\"row\"` en un `<th>`?",
      opciones: ["Que el `<th>` es cabecera de la fila", "Que el `<th>` es cabecera de la columna", "Que la fila no se ve", "Que la celda ocupa toda la fila"],
      correcta: 0,
      explicacion: "`scope=\"row\"` asocia el `<th>` con las celdas de su fila; `scope=\"col\"` lo asocia con las de su columna. No cambia el aspecto, mejora la accesibilidad."
    },
    {
      tipo: "opcion",
      enunciado: "En una tabla compleja con cabeceras multinivel, ¿cómo se asocia una `<td>` con sus cabeceras?",
      opciones: ["Con `scope` en la `<td>`", "Con `colspan` y `rowspan`", "Con `headers` en la `<td>` con los `id` de los `<th>`", "Con `<colgroup>`"],
      correcta: 2,
      explicacion: "Cada `<th>` lleva un `id` y la `<td>` lista esos ids en `headers`. `scope` va en el `<th>` y no sirve para estructuras complejas."
    },
    {
      tipo: "opcion",
      enunciado: "Quieres dar fondo gris a toda una columna sin repetir estilos en cada celda. ¿Qué usas?",
      opciones: ["`<thead>`", "`<tfoot>`", "`<caption>`", "`<colgroup>` y `<col>`"],
      correcta: 3,
      explicacion: "`<col>` dentro de `<colgroup>` representa columnas y permite aplicarles estilos como el fondo."
    },
    {
      tipo: "opcion",
      enunciado: "Por defecto, las celdas de una tabla muestran doble borde. ¿Qué propiedad CSS los fusiona en uno?",
      opciones: ["`border-collapse: collapse`", "`border-spacing: 0` solo", "`border-style: single`", "`table-layout: fixed`"],
      correcta: 0,
      explicacion: "`border-collapse: collapse` fusiona los bordes contiguos. `border-spacing: 0` reduce la separación, pero no los fusiona."
    },
    {
      tipo: "completar",
      enunciado: "¿Qué etiqueta (escríbela sin símbolos si quieres) define una fila de la tabla?",
      respuestas: ["tr", "<tr>", "<tr></tr>"],
      explicacion: "`<tr>` (table row) agrupa las celdas `<td>` y `<th>` de una fila."
    },
    {
      tipo: "completar",
      enunciado: "Escribe el atributo (solo el nombre) que hace que una celda ocupe varias filas.",
      respuestas: ["rowspan", "rowspan=\"2\"", "rowspan=2"],
      explicacion: "`rowspan` fusiona celdas en vertical; `colspan` lo hace en horizontal."
    }
  ]
});

/* ===================== 8. FORMULARIOS ===================== */
window.CURSO.modulos.push({
  id: "html-formularios",
  orden: 8,
  area: "HTML",
  nivel: "Avanzado",
  titulo: "Formularios",
  resumen: "Cómo recoger datos del usuario con controles nativos, asociarlos a etiquetas y validarlos en el navegador.",
  mdn: "https://developer.mozilla.org/es/docs/Learn_web_development/Extensions/Forms",
  conceptos: [
    {
      titulo: "El elemento `<form>`: action, method y name",
      texto: "`<form>` agrupa controles y los envía al servidor. `action` es la URL de destino y `method` el verbo HTTP. Cada control necesita `name` para que su valor se envíe; el valor es lo que haya en `value` o lo que escriba el usuario.",
      puntos: [
        "`GET`: datos en la URL (query string); para consultas, búsquedas; visibles y con límite de tamaño",
        "`POST`: datos en el cuerpo de la petición; para acciones que cambian datos o información sensible",
        "Sin `name`, el control NO se envía",
        "`value`: valor que se envía (en `submit` es también el texto del botón)"
      ],
      codigo: `<form action="/buscar" method="get">
  <input type="text" name="q">
  <button>Buscar</button>
</form>`,
      lenguaje: "html",
      ojo: "Contraseñas y datos sensibles nunca por GET: quedan en la URL, el historial y los registros."
    },
    {
      titulo: "Etiquetas: `<label>` y placeholder",
      texto: "`<label for=\"id\">` se asocia al control cuyo `id` coincide; también puede envolver al control. Mejora la accesibilidad (el lector anuncia la etiqueta) y amplía el área de clic: al pulsar la etiqueta se enfoca el control.",
      puntos: [
        "`for` del label = `id` del input (no `name`)",
        "Alternativa: `<label>Nombre <input></label>`",
        "`placeholder` es una pista de formato, NO sustituye a `<label>` (desaparece al escribir y puede tener poco contraste)"
      ],
      codigo: `<label for="correo">Correo</label>
<input type="email" id="correo" name="correo"
       placeholder="nombre@dominio.com">`,
      lenguaje: "html",
      ojo: "`for` apunta al `id`, no al `name`. Un label sin control asociado no sirve."
    },
    {
      titulo: "Tipos de `<input>` de texto y valores",
      texto: "El atributo `type` cambia el control y activa validaciones y teclados móviles específicos. Si no se indica `type`, es `text`.",
      puntos: [
        "Texto: `text`, `email`, `password`, `tel`, `url`, `search`",
        "Numéricos: `number` (con `min`, `max`, `step`), `range` (deslizador)",
        "Fecha y hora: `date`, `time`; color: `color`",
        "`email` y `url` validan el formato; `tel` no valida (los teléfonos varían)"
      ],
      codigo: `<input type="email" name="correo">
<input type="number" name="edad" min="18" max="99">
<input type="range" name="vol" min="0" max="10" step="1">`,
      lenguaje: "html",
      ojo: "`type=\"number\"` y `type=\"range\"` entregan texto al servidor; la conversión a número es cosa tuya."
    },
    {
      titulo: "checkbox, radio, file, hidden y botones",
      texto: "`checkbox` permite elegir cero o varias opciones; `radio` solo una dentro de un grupo, y el grupo se forma dando el mismo `name` a todos los radios. `file` sube archivos, `hidden` envía un valor invisible y `submit`/`reset` son botones de envío y restablecimiento.",
      puntos: [
        "`checked`: marcado por defecto (checkbox y radio)",
        "`disabled`: desactiva el control y NO se envía",
        "`readonly`: no editable pero SÍ se envía (solo texto)",
        "`autocomplete`: `on`/`off` o tokens como `email`, `new-password`"
      ],
      codigo: `<input type="radio" name="talla" value="s" id="s" checked>
<label for="s">S</label>
<input type="radio" name="talla" value="m" id="m">
<label for="m">M</label>`,
      lenguaje: "html",
      ojo: "Radios con distinto `name` no forman grupo: se pueden marcar todos. `disabled` no se envía; `readonly` sí."
    },
    {
      titulo: "`<select>`, `<option>`, `<optgroup>` y `<datalist>`",
      texto: "`<select>` crea una lista desplegable con `<option>`; `value` es lo que se envía y `selected` marca la opción inicial. `<optgroup label>` agrupa opciones y `multiple` permite elegir varias. `<datalist>` ofrece sugerencias para un `<input>` que se enlaza con `list`.",
      puntos: [
        "`<option value=\"es\">España</option>`: se envía `es`, se ve \"España\"",
        "Sin `value`, se envía el texto de la opción",
        "`multiple`: selección múltiple",
        "`<datalist id>` + `<input list=\"id\">`: sugerencias, pero se puede escribir otro valor"
      ],
      codigo: `<select name="pais">
  <optgroup label="Europa">
    <option value="es" selected>España</option>
    <option value="fr">Francia</option>
  </optgroup>
</select>
<input list="navegadores" name="nav">
<datalist id="navegadores"><option value="Firefox"><option value="Chrome"></datalist>`,
      lenguaje: "html",
      ojo: "Un `<datalist>` solo sugiere: el usuario puede escribir algo que no esté en la lista."
    },
    {
      titulo: "`<textarea>`, `<button>` y `<fieldset>`",
      texto: "`<textarea>` es un campo de varias líneas (`rows`/`cols`) y su contenido inicial va ENTRE las etiquetas, no en `value`. `<button>` tiene tres tipos: `submit` (por defecto dentro de un form), `button` (sin acción) y `reset`. `<fieldset>` agrupa controles relacionados y `<legend>` es su título.",
      puntos: [
        "`<textarea rows=\"4\" cols=\"30\">Texto inicial</textarea>`",
        "`<button>` sin `type` dentro de un form es `submit`",
        "`type=\"button\"` para botones que solo ejecutan JavaScript",
        "`<fieldset>` + `<legend>`: grupos de radios o checkboxes accesibles"
      ],
      codigo: `<fieldset>
  <legend>Método de pago</legend>
  <label><input type="radio" name="pago" value="tarjeta"> Tarjeta</label>
  <label><input type="radio" name="pago" value="paypal"> PayPal</label>
</fieldset>
<button type="button">Cancelar</button>`,
      lenguaje: "html",
      ojo: "Un `<button>` sin `type` dentro de un `<form>` envía el formulario. `<textarea>` no es un elemento vacío: lleva cierre."
    },
    {
      titulo: "Validación nativa del navegador",
      texto: "El navegador valida antes de enviar usando atributos: `required` (obligatorio), `minlength`/`maxlength` (longitud de texto), `min`/`max`/`step` (rango y paso numéricos o de fecha), `pattern` (expresión regular) y el propio `type` (`email`, `url`).",
      puntos: [
        "`required`: no se envía vacío",
        "`minlength` / `maxlength`: longitud del texto",
        "`min` / `max` / `step`: para `number`, `range`, `date`...",
        "`pattern=\"[0-9]{5}\"`: el valor debe cumplir la expresión regular completa",
        "Pseudoclases CSS `:valid` y `:invalid` permiten estilar según el estado"
      ],
      codigo: `<input type="text" name="cp" required pattern="[0-9]{5}"
       title="Cinco dígitos">
<input type="password" name="clave" minlength="8" required>`,
      lenguaje: "html",
      ojo: "`minlength`/`maxlength` no se aplican a `number` (ahí se usa `min`/`max`)."
    },
    {
      titulo: "novalidate y validación en el servidor",
      texto: "`novalidate` en el `<form>` desactiva la validación nativa al enviar. Aunque el cliente valide, SIEMPRE hay que validar también en el servidor: el HTML se puede manipular desde las herramientas del navegador o saltarse con peticiones directas.",
      puntos: [
        "`novalidate`: desactiva la validación del navegador",
        "Cliente: mejor experiencia de usuario, respuesta inmediata",
        "Servidor: seguridad; es la validación que realmente cuenta"
      ],
      codigo: `<form action="/registro" method="post" novalidate>
  ...
</form>`,
      lenguaje: "html",
      ojo: "La validación del cliente NO sustituye a la del servidor: cualquiera puede saltarse el HTML."
    }
  ],
  chuleta: [
    ["action", "URL del servidor que recibe los datos del formulario."],
    ["method=\"get\"", "Datos en la URL; para consultas y búsquedas."],
    ["method=\"post\"", "Datos en el cuerpo de la petición; para acciones y datos sensibles."],
    ["name", "Imprescindible: sin él el control no se envía."],
    ["<label for=\"id\">", "Asocia la etiqueta a un control por su `id`; amplía el área de clic."],
    ["placeholder", "Pista de formato; no sustituye al `<label>`."],
    ["radio", "Un solo valor del grupo; el grupo lo define el mismo `name`."],
    ["disabled / readonly", "`disabled` no se envía; `readonly` sí y no se edita."],
    ["<select> / <option>", "Lista desplegable; `value` se envía, `selected` marca la inicial."],
    ["<textarea>", "Varias líneas; el texto inicial va entre etiquetas."],
    ["<button>", "Por defecto `submit` dentro de un form; también `button` y `reset`."],
    ["<fieldset> / <legend>", "Agrupa controles y da título al grupo."],
    ["required", "Campo obligatorio."],
    ["minlength / maxlength", "Longitud mínima y máxima de texto."],
    ["min / max / step", "Rango y paso para números, fechas y `range`."],
    ["pattern", "Expresión regular que debe cumplir el valor."]
  ],
  ejemplo: {
    consigna: "Rellena el formulario y pulsa Enviar: verás qué datos se mandarían. Prueba a dejar vacío el correo o a escribir una clave corta.",
    html: `<form action="/registro" method="post">
  <p><label for="correo">Correo</label>
     <input type="email" id="correo" name="correo" required></p>
  <p><label for="clave">Clave (mín. 8)</label>
     <input type="password" id="clave" name="clave" minlength="8" required></p>
  <fieldset>
    <legend>Plan</legend>
    <label><input type="radio" name="plan" value="gratis" checked> Gratis</label>
    <label><input type="radio" name="plan" value="pro"> Pro</label>
  </fieldset>
  <p><button type="submit">Enviar</button></p>
</form>`,
    css: `form { max-width: 280px; font-family: sans-serif; }
input:invalid { border: 2px solid #dc2626; }
input:valid { border: 2px solid #16a34a; }
fieldset { border: 2px solid #3b82f6; }`
  },
  reto: {
    enunciado: "Crea un formulario de registro con: un campo `email` obligatorio (`required`), un campo `password` con `minlength=\"8\"` y un grupo de al menos 2 radios con el mismo `name`. Todos los controles deben tener un `<label>` asociado.",
    pista: "Cada `<label for>` debe coincidir con el `id` de su input, y los radios comparten `name` pero tienen `id` distintos.",
    html: `<form>
  <!-- tus campos aquí -->
  <button type="submit">Registrarme</button>
</form>`,
    css: `form { font-family: sans-serif; }
label { display: block; margin-top: 6px; }`,
    solucion: {
      html: `<form>
  <label for="email">Correo</label>
  <input type="email" id="email" name="email" required>
  <label for="clave">Contraseña</label>
  <input type="password" id="clave" name="clave" minlength="8" required>
  <p>Perfil:</p>
  <input type="radio" id="p1" name="perfil" value="estudiante">
  <label for="p1">Estudiante</label>
  <input type="radio" id="p2" name="perfil" value="docente">
  <label for="p2">Docente</label>
  <button type="submit">Registrarme</button>
</form>`,
      css: `form { font-family: sans-serif; }
label { display: block; margin-top: 6px; }`
    },
    validar: function (doc, win) {
      try {
        var f = doc.querySelector("form");
        if (!f) return { ok: false, msg: "No encuentro el <form> (no lo borres)." };
        function tieneLabel(el) {
          if (el.labels && el.labels.length > 0) return true;
          if (el.id && doc.querySelector("label[for='" + el.id + "']")) return true;
          var p = el.parentNode;
          while (p && p !== f) { if (p.tagName === "LABEL") return true; p = p.parentNode; }
          return false;
        }
        var em = f.querySelector("input[type='email']");
        if (!em) return { ok: false, msg: "Falta un <input type=\"email\">." };
        if (!em.hasAttribute("required")) return { ok: false, msg: "El correo debe ser obligatorio (required)." };
        if (!tieneLabel(em)) return { ok: false, msg: "El campo de correo necesita un <label> asociado (for + id)." };
        var pw = f.querySelector("input[type='password']");
        if (!pw) return { ok: false, msg: "Falta un <input type=\"password\">." };
        var ml = parseInt(pw.getAttribute("minlength"), 10);
        if (!(ml >= 8)) return { ok: false, msg: "La contraseña necesita minlength de 8 o más." };
        if (!tieneLabel(pw)) return { ok: false, msg: "El campo de contraseña necesita un <label> asociado." };
        var radios = f.querySelectorAll("input[type='radio']"), grupos = {}, ok = false, i, n;
        for (i = 0; i < radios.length; i++) {
          n = radios[i].getAttribute("name");
          if (n) { grupos[n] = (grupos[n] || 0) + 1; if (grupos[n] >= 2) ok = true; }
        }
        if (!ok) return { ok: false, msg: "Faltan al menos 2 radios con el mismo name." };
        for (i = 0; i < radios.length; i++) {
          if (!tieneLabel(radios[i])) return { ok: false, msg: "Cada radio necesita su <label> asociado." };
        }
        return { ok: true, msg: "¡Correcto! Formulario con labels, validación nativa y grupo de radios." };
      } catch (e) {
        return { ok: false, msg: "No pude comprobar la solución." };
      }
    }
  },
  preguntas: [
    {
      tipo: "opcion",
      enunciado: "¿Qué método HTTP es más adecuado para un formulario de inicio de sesión con contraseña?",
      opciones: ["`GET`, porque es más rápido", "`GET`, porque se ve en la barra de direcciones", "`POST`, porque los datos no viajan en la URL", "Cualquiera, es indiferente"],
      correcta: 2,
      explicacion: "`POST` envía los datos en el cuerpo de la petición. Con `GET` la contraseña quedaría en la URL, el historial y los logs."
    },
    {
      tipo: "opcion",
      enunciado: "Un `<input>` no tiene atributo `name`. ¿Qué ocurre al enviar el formulario?",
      opciones: ["Su valor se envía con el nombre `input`", "Su valor no se envía", "Se produce un error de validación", "Se usa su `id` como nombre"],
      correcta: 1,
      explicacion: "El `name` es la clave con la que se envía el valor. Sin él, el control no forma parte de los datos enviados."
    },
    {
      tipo: "opcion",
      enunciado: "¿Cómo se asocia correctamente un label con su input?",
      codigo: `<label ____>Correo</label>
<input type="email" id="correo" name="mail">`,
      lenguaje: "html",
      opciones: ["`for=\"mail\"`", "`name=\"correo\"`", "`for=\"email\"`", "`for=\"correo\"`"],
      correcta: 3,
      explicacion: "`for` del label debe coincidir con el `id` del input (`correo`), no con su `name`."
    },
    {
      tipo: "opcion",
      enunciado: "¿Cómo se agrupan varios radios para que solo se pueda marcar uno?",
      opciones: ["Dándoles el mismo `name`", "Dándoles el mismo `id`", "Poniéndolos dentro de un `<div>`", "Dándoles el mismo `value`"],
      correcta: 0,
      explicacion: "El grupo lo forma el mismo `name`. Los `id` deben ser únicos y un `<div>` no agrupa radios por sí solo."
    },
    {
      tipo: "opcion",
      enunciado: "¿Qué diferencia hay entre `disabled` y `readonly` en un campo de texto?",
      opciones: ["Son sinónimos", "`readonly` no se envía y `disabled` sí", "`disabled` no se puede enfocar y no se envía; `readonly` se puede enfocar y sí se envía", "`readonly` funciona en botones y `disabled` solo en texto"],
      correcta: 2,
      explicacion: "Un control `disabled` no se envía ni recibe foco. Uno `readonly` no se puede editar, pero se envía."
    },
    {
      tipo: "opcion",
      enunciado: "Dentro de un `<form>`, ¿qué hace `<button>Enviar</button>` sin atributo `type`?",
      opciones: ["Nada, necesita `type`", "Restablece el formulario", "Es un botón sin acción", "Envía el formulario (type por defecto: submit)"],
      correcta: 3,
      explicacion: "El tipo por defecto de `<button>` es `submit`. Para un botón que no envíe, usa `type=\"button\"`."
    },
    {
      tipo: "opcion",
      enunciado: "¿Dónde se escribe el contenido inicial de un `<textarea>`?",
      opciones: ["En el atributo `value`", "Entre sus etiquetas de apertura y cierre", "En el atributo `placeholder`", "En el atributo `text`"],
      correcta: 1,
      explicacion: "`<textarea>` no usa `value` en el HTML: el texto inicial va como contenido del elemento. `placeholder` es solo una pista que desaparece al escribir."
    },
    {
      tipo: "opcion",
      enunciado: "La validación con atributos (`required`, `pattern`...) del navegador:",
      opciones: ["Sustituye por completo a la validación del servidor", "Solo funciona con JavaScript", "No sirve de nada porque se puede ignorar", "Mejora la experiencia, pero no sustituye a la validación del servidor"],
      correcta: 3,
      explicacion: "Se puede saltar desde las herramientas del navegador o con peticiones directas; el servidor debe validar siempre."
    },
    {
      tipo: "completar",
      enunciado: "Escribe el atributo (solo el nombre) que hace obligatorio un campo.",
      respuestas: ["required"],
      explicacion: "`required` impide enviar el formulario si el campo está vacío."
    },
    {
      tipo: "completar",
      enunciado: "¿Qué etiqueta (escríbela) da un título a un `<fieldset>`?",
      respuestas: ["legend", "<legend>", "<legend></legend>"],
      explicacion: "`<legend>` es el título del grupo del `<fieldset>`; los lectores de pantalla lo leen al entrar al grupo."
    }
  ]
});

/* ===================== 9. ACCESIBILIDAD Y BUENAS PRÁCTICAS ===================== */
window.CURSO.modulos.push({
  id: "html-accesibilidad",
  orden: 9,
  area: "HTML",
  nivel: "Avanzado",
  titulo: "Accesibilidad y buenas prácticas",
  resumen: "Cómo escribir HTML que pueda usar cualquier persona y que sea válido, empezando por la semántica nativa.",
  mdn: "https://developer.mozilla.org/es/docs/Learn_web_development/Core/Accessibility/HTML",
  conceptos: [
    {
      titulo: "Qué es la accesibilidad (a11y)",
      texto: "La accesibilidad (accessibility, abreviada a11y) consiste en que cualquier persona pueda usar un sitio web: con discapacidad visual, auditiva, motriz o cognitiva, pero también con una conexión lenta, un dispositivo pequeño o una lesión temporal. Beneficia a todos, no solo a un colectivo.",
      puntos: [
        "Lectores de pantalla, navegación solo con teclado, ampliación y subtítulos",
        "Una web accesible suele ser también más usable y mejor posicionada",
        "El HTML semántico es la base: da gratis gran parte de la accesibilidad"
      ],
      ojo: "Accesibilidad no es un añadido final: se diseña desde el principio con HTML correcto."
    },
    {
      titulo: "HTML semántico, idioma y encabezados",
      texto: "Usa el elemento correcto para cada cosa (`<nav>`, `<main>`, `<button>`, `<ul>`...). Declara el idioma con `lang` en `<html>` para que el lector de pantalla use la pronunciación adecuada. Los encabezados `<h1>`–`<h6>` forman un esquema: no saltes niveles ni los uses solo por su tamaño.",
      puntos: [
        "`<html lang=\"es\">`: idioma principal",
        "Un `<h1>` por página; no saltar de `<h2>` a `<h4>`",
        "Los encabezados dan navegación rápida a usuarios de lector de pantalla",
        "El tamaño visual se cambia con CSS, no eligiendo un nivel por su aspecto"
      ],
      codigo: `<html lang="es">
<body>
  <main>
    <h1>Título de la página</h1>
    <h2>Sección</h2>
  </main>
</body>`,
      lenguaje: "html",
      ojo: "Elegir `<h3>` solo porque queda más pequeño es un error: la jerarquía es semántica, el estilo es CSS."
    },
    {
      titulo: "Texto alternativo, etiquetas, enlaces y tablas",
      texto: "Toda imagen con significado necesita `alt` (vacío si es decorativa); todo control de formulario, un `<label>` asociado; los enlaces, un texto descriptivo que tenga sentido fuera de contexto; y las tablas de datos, `<caption>`, `<th>` y `scope`.",
      puntos: [
        "Enlaces: \"Descargar la guía (PDF)\" mejor que \"haz clic aquí\"",
        "`<label for>` en cada control; el placeholder no basta",
        "Tablas: `<caption>`, `<th scope=\"col|row\">`",
        "Evita dar significado solo con el color o solo con una imagen"
      ],
      codigo: `<a href="guia.pdf">Descargar la guía de estudio (PDF)</a>
<img src="grafico.png" alt="Ventas crecen un 20 % en 2025">`,
      lenguaje: "html",
      ojo: "\"Haz clic aquí\" y \"leer más\" son textos de enlace malos: un lector de pantalla puede listar enlaces fuera de contexto."
    },
    {
      titulo: "Teclado, foco y tabindex",
      texto: "Muchos usuarios navegan solo con teclado (Tab, Enter, Espacio). Los elementos nativos interactivos (enlaces, botones, controles de formulario) ya son enfocables y operables. Todo elemento enfocable debe mostrar un indicador de foco visible.",
      puntos: [
        "No quites `outline` sin ofrecer una alternativa visible (por ejemplo con `:focus-visible`)",
        "`tabindex=\"0\"`: añade el elemento al orden natural de tabulación",
        "`tabindex=\"-1\"`: enfocable por script, pero fuera del orden con Tab",
        "Evita `tabindex` positivos: rompen el orden lógico y son difíciles de mantener"
      ],
      codigo: `a:focus-visible, button:focus-visible {
  outline: 3px solid #1d4ed8;
  outline-offset: 2px;
}`,
      lenguaje: "css",
      ojo: "`outline: none` sin sustituto deja a los usuarios de teclado sin saber dónde están."
    },
    {
      titulo: "Usa `<button>`, no un `<div>` clicable",
      texto: "Un `<div onclick>` no es enfocable, no responde a Enter/Espacio y el lector de pantalla no sabe que es un botón. Un `<button>` lo da todo de serie. Si algo navega a otra página, usa `<a href>`; si ejecuta una acción, `<button>`.",
      puntos: [
        "`<button>`: foco, teclado, rol y estado incluidos",
        "`<a href>`: para navegar; `<button>`: para acciones",
        "Imitar un botón con `<div>` obliga a añadir `role`, `tabindex` y manejo de teclado a mano"
      ],
      codigo: `<!-- Mal -->
<div class="boton" onclick="guardar()">Guardar</div>

<!-- Bien -->
<button type="button" onclick="guardar()">Guardar</button>`,
      lenguaje: "html",
      ojo: "La primera regla de ARIA: si existe un elemento HTML nativo que haga el trabajo, úsalo en vez de añadir ARIA a un genérico."
    },
    {
      titulo: "Contraste de color",
      texto: "El texto debe contrastar lo suficiente con su fondo. Las pautas WCAG (nivel AA) piden una relación de contraste mínima de 4,5:1 para texto normal y 3:1 para texto grande. No transmitas información solo con el color.",
      puntos: [
        "Texto normal: al menos 4,5:1 (AA)",
        "Texto grande: al menos 3:1",
        "Herramientas de contraste del navegador o comprobadores web",
        "Los errores de formulario no pueden indicarse solo con rojo: añade texto o icono"
      ],
      ojo: "Gris claro sobre blanco es el fallo más común de contraste."
    },
    {
      titulo: "ARIA: cuándo y cómo",
      texto: "ARIA (Accessible Rich Internet Applications) añade información de accesibilidad cuando el HTML no basta. Primera regla: si hay un elemento nativo, úsalo. ARIA no añade comportamiento ni foco; solo cambia lo que ven las tecnologías de apoyo.",
      puntos: [
        "`aria-label`: nombre accesible cuando no hay texto visible (p. ej. un botón con solo un icono)",
        "`aria-hidden=\"true\"`: oculta el elemento a las tecnologías de apoyo (no lo uses en elementos enfocables)",
        "`role`: define el rol de un elemento sin semántica",
        "Landmarks implícitos: `<header>`, `<nav>`, `<main>`, `<aside>`, `<footer>`, `<section>` con nombre, `<form>` con nombre"
      ],
      codigo: `<button aria-label="Cerrar">&times;</button>
<nav aria-label="Principal">...</nav>`,
      lenguaje: "html",
      ojo: "Mal ARIA es peor que ningún ARIA: no pongas `role=\"button\"` en un `<div>` si puedes usar `<button>`."
    },
    {
      titulo: "Validar el HTML y errores típicos",
      texto: "El navegador es muy tolerante y corrige errores en silencio, de modo que el HTML inválido puede \"verse bien\" y aun así romper accesibilidad o comportarse distinto entre navegadores. Valida con el validador de HTML del W3C (Nu HTML Checker).",
      puntos: [
        "Etiquetas sin cerrar (`<p>`, `<li>`, `<div>`)",
        "Anidamiento incorrecto: `<b><i>texto</b></i>`",
        "Atributos duplicados en un mismo elemento",
        "`id` repetidos: deben ser únicos en el documento",
        "Elementos fuera de lugar: `<td>` sin `<tr>`, bloques dentro de `<p>`"
      ],
      codigo: `<!-- Inválido -->
<p>Uno
<div id="a">Hola</div>
<div id="a">Adiós</div>`,
      lenguaje: "html",
      ojo: "Que el navegador lo muestre bien no significa que sea válido ni accesible."
    }
  ],
  chuleta: [
    ["a11y", "Abreviatura de accesibilidad (accessibility)."],
    ["HTML semántico", "Usar el elemento adecuado: base de la accesibilidad."],
    ["lang", "Idioma del documento; en `<html lang=\"es\">`."],
    ["Encabezados", "Jerarquía h1-h6 sin saltar niveles; no usarlos por su tamaño."],
    ["alt", "Texto alternativo; vacío (`alt=\"\"`) si la imagen es decorativa."],
    ["<label for>", "Etiqueta asociada a un control; el placeholder no la reemplaza."],
    ["outline", "Indicador de foco; no quitarlo sin una alternativa visible."],
    ["tabindex=\"0\" / \"-1\"", "0: entra en el orden de Tab; -1: solo por script. Evitar valores positivos."],
    ["<button> vs <div>", "Usa `<button>` para acciones; un `<div>` clicable no es accesible."],
    ["Contraste", "WCAG AA: 4,5:1 texto normal, 3:1 texto grande."],
    ["Primera regla de ARIA", "Si existe un elemento HTML nativo, úsalo en lugar de ARIA."],
    ["aria-label / aria-hidden", "Da nombre accesible / oculta a las tecnologías de apoyo."],
    ["Landmarks", "`<header>`, `<nav>`, `<main>`, `<aside>`, `<footer>` ya son regiones."],
    ["Validador W3C", "Detecta etiquetas sin cerrar, ids repetidos y anidamientos incorrectos."]
  ],
  ejemplo: {
    consigna: "Pulsa Tab para recorrer los elementos: el botón real y el enlace reciben el foco, el `<div>` no. Cambia el estilo de `:focus-visible` y observa.",
    html: `<a href="#destino">Ir al destino</a>
<button type="button">Botón real</button>
<div class="falso">Div clicable (no enfocable)</div>`,
    css: `a, button, .falso { display: inline-block; margin: 6px; padding: 8px 12px; border: 2px solid #1e40af; background: #dbeafe; color: #1e3a8a; }
.falso { border-style: dashed; }
a:focus-visible, button:focus-visible { outline: 4px solid #f59e0b; outline-offset: 2px; }`
  },
  reto: {
    enunciado: "Arregla el fragmento: añade un `alt` no vacío a la imagen, asocia un `<label>` al `<input>` (con `for` e `id`) y sustituye el `<div>` clicable por un `<button>` real.",
    pista: "El `<input>` necesita un `id` y un `<label for>` con ese mismo valor; el botón puede ser `<button type=\"button\">Enviar</button>`.",
    html: `<img src="` + IMG_DEMO + `">
<input type="text" id="nombre" placeholder="Tu nombre">
<div class="boton" onclick="alert('Enviado')">Enviar</div>`,
    css: `.boton, button { display: inline-block; padding: 8px 14px; background: #2563eb; color: white; border: 0; cursor: pointer; }
input { display: block; margin: 8px 0; }`,
    solucion: {
      html: `<img src="` + IMG_DEMO + `" alt="Rectángulo azul de ejemplo">
<label for="nombre">Nombre</label>
<input type="text" id="nombre" placeholder="Tu nombre">
<button type="button" onclick="alert('Enviado')">Enviar</button>`,
      css: `.boton, button { display: inline-block; padding: 8px 14px; background: #2563eb; color: white; border: 0; cursor: pointer; }
input { display: block; margin: 8px 0; }`
    },
    validar: function (doc, win) {
      try {
        var img = doc.querySelector("img");
        if (!img) return { ok: false, msg: "No encuentro la <img> (no la borres)." };
        if ((img.getAttribute("alt") || "").trim().length < 3) return { ok: false, msg: "La imagen necesita un alt descriptivo no vacío." };
        var inp = doc.querySelector("input");
        if (!inp) return { ok: false, msg: "No encuentro el <input> (no lo borres)." };
        var conLabel = (inp.labels && inp.labels.length > 0) || (inp.id && doc.querySelector("label[for='" + inp.id + "']"));
        if (!conLabel) {
          var p = inp.parentNode;
          while (p && p.tagName !== "BODY") { if (p.tagName === "LABEL") { conLabel = true; break; } p = p.parentNode; }
        }
        if (!conLabel) return { ok: false, msg: "El input necesita un <label> asociado (for + id)." };
        if (!doc.querySelector("button")) return { ok: false, msg: "Falta un <button> real en lugar del <div> clicable." };
        if (doc.querySelector("div[onclick]")) return { ok: false, msg: "Aún queda un <div> con onclick: sustitúyelo por el <button>." };
        return { ok: true, msg: "¡Correcto! Imagen con alt, input con label y un botón real." };
      } catch (e) {
        return { ok: false, msg: "No pude comprobar la solución." };
      }
    }
  },
  preguntas: [
    {
      tipo: "opcion",
      enunciado: "¿Qué enuncia la «primera regla de ARIA»?",
      opciones: ["Añadir siempre `role` a todos los elementos", "Usar un elemento HTML nativo con la semántica necesaria en lugar de añadir ARIA", "Poner `aria-label` en todos los enlaces", "Usar ARIA solo en formularios"],
      correcta: 1,
      explicacion: "Si existe un elemento nativo que haga el trabajo (como `<button>`), úsalo: ya trae rol, foco y teclado. ARIA es el último recurso."
    },
    {
      tipo: "opcion",
      enunciado: "¿Por qué un `<div onclick>` es peor que un `<button>`?",
      opciones: ["Porque `<div>` es más lento", "Porque no puede tener estilos", "Porque no se enfoca con el teclado ni se anuncia como botón", "Porque no puede contener texto"],
      correcta: 2,
      explicacion: "El `<div>` no es enfocable, no responde a Enter/Espacio y no tiene rol de botón; el `<button>` lo incluye todo de serie."
    },
    {
      tipo: "opcion",
      enunciado: "¿Cuál es un texto de enlace descriptivo?",
      opciones: ["Haz clic aquí", "Leer más", "Aquí", "Descargar el temario del curso (PDF)"],
      correcta: 3,
      explicacion: "El texto debe tener sentido fuera de contexto, porque los lectores de pantalla pueden listar todos los enlaces."
    },
    {
      tipo: "opcion",
      enunciado: "¿Qué ocurre con `tabindex=\"3\"` (valor positivo)?",
      opciones: ["Es la forma recomendada de ordenar el foco", "Rompe el orden natural de tabulación y debe evitarse", "Solo lo ignoran los lectores de pantalla", "Hace el elemento invisible"],
      correcta: 1,
      explicacion: "Los valores positivos fuerzan un orden artificial y se vuelven inmantenibles. Se recomienda `0` o `-1` y ordenar bien el HTML."
    },
    {
      tipo: "opcion",
      enunciado: "Para texto normal, ¿qué contraste mínimo exige WCAG AA?",
      opciones: ["4,5:1", "2:1", "3:1", "7:1"],
      correcta: 0,
      explicacion: "AA pide 4,5:1 para texto normal y 3:1 para texto grande; 7:1 es el nivel AAA."
    },
    {
      tipo: "opcion",
      enunciado: "Un botón solo muestra un icono de lupa. ¿Cómo le das nombre accesible?",
      codigo: `<button><img src="lupa.svg" alt=""></button>`,
      lenguaje: "html",
      opciones: ["Añadir `placeholder=\"Buscar\"`", "Añadir `title` al `<img>` vacío", "Añadir `aria-hidden=\"true\"` al botón", "Añadir `aria-label=\"Buscar\"` al botón"],
      correcta: 3,
      explicacion: "`aria-label` da nombre accesible cuando no hay texto visible. `placeholder` no existe en botones y `aria-hidden` lo ocultaría."
    },
    {
      tipo: "opcion",
      enunciado: "¿Cuál de estos NO es un error típico que el navegador \"perdona\" pero el validador marca?",
      opciones: ["`id` repetidos", "Etiquetas sin cerrar", "Usar `<main>` una vez por página", "Atributos duplicados"],
      correcta: 2,
      explicacion: "Un único `<main>` por página es correcto. Los ids repetidos, etiquetas sin cerrar y atributos duplicados son inválidos aunque se vean bien."
    },
    {
      tipo: "opcion",
      enunciado: "¿Para qué sirve `<html lang=\"es\">`?",
      opciones: ["Para que el lector de pantalla use la pronunciación y reglas del idioma correcto", "Para traducir automáticamente la página", "Para activar la validación del navegador", "Solo para posicionamiento en buscadores"],
      correcta: 0,
      explicacion: "Declara el idioma del contenido. Los lectores de pantalla seleccionan la voz según `lang`; no traduce nada por sí mismo."
    },
    {
      tipo: "completar",
      enunciado: "Escribe el atributo que oculta un elemento a las tecnologías de apoyo (lectores de pantalla).",
      respuestas: ["aria-hidden", "aria-hidden=\"true\"", "aria-hidden=true"],
      explicacion: "`aria-hidden=\"true\"` retira el elemento del árbol de accesibilidad; no debe usarse en elementos enfocables."
    },
    {
      tipo: "completar",
      enunciado: "Escribe el valor de `tabindex` que añade un elemento al orden de tabulación sin alterar el orden natural.",
      respuestas: ["0", "tabindex=\"0\"", "tabindex=0"],
      explicacion: "`tabindex=\"0\"` hace enfocable el elemento en su posición natural. `-1` solo permite enfocarlo por script."
    }
  ]
});
