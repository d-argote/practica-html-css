window.CURSO = window.CURSO || { modulos: [] };

/* ====================================================================
   MÓDULO 1 — Fundamentos de HTML
   ==================================================================== */
window.CURSO.modulos.push({
  id: "html-intro",
  orden: 1,
  area: "HTML",
  nivel: "Básico",
  titulo: "Fundamentos de HTML",
  resumen: "HTML describe la estructura y el significado del contenido de una página mediante elementos, atributos y anidamiento.",
  mdn: "https://developer.mozilla.org/es/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax",
  conceptos: [
    {
      titulo: "Qué es HTML",
      texto: "HTML (HyperText Markup Language) es un **lenguaje de marcado** (markup language): usa etiquetas para indicar qué es cada parte del contenido (un título, un párrafo, un enlace). **No es un lenguaje de programación**: no tiene variables, bucles ni condiciones. El navegador lo interpreta y construye el DOM; el aspecto lo decide CSS y el comportamiento JavaScript.",
      puntos: [
        "HTML = estructura y significado; CSS = presentación; JavaScript = comportamiento",
        "Las mayúsculas y minúsculas no importan en etiquetas y atributos (`<P>` = `<p>`), pero se recomienda escribir siempre en **minúsculas**",
        "Un archivo HTML es texto plano con extensión `.html`"
      ],
      ojo: "Es una pregunta típica: HTML es un lenguaje de **marcado**, no de programación.",
    },
    {
      titulo: "Anatomía de un elemento",
      texto: "Un **elemento** (element) completo se compone de la etiqueta de apertura, el contenido y la etiqueta de cierre. La etiqueta de cierre lleva una barra `/` antes del nombre.",
      puntos: [
        "Etiqueta de apertura (opening tag): `<p>`",
        "Contenido (content): el texto u otros elementos de dentro",
        "Etiqueta de cierre (closing tag): `</p>`",
        "Elemento = apertura + contenido + cierre (la etiqueta sola no es el elemento entero)"
      ],
      codigo: `<p>Hola, mundo</p>
<!-- <p> apertura | Hola, mundo contenido | </p> cierre -->`,
      lenguaje: "html",
      ojo: "Olvidar la etiqueta de cierre no siempre da error visible, pero rompe la estructura: el navegador intenta adivinar dónde termina el elemento."
    },
    {
      titulo: "Atributos",
      texto: "Los **atributos** (attributes) dan información extra a un elemento. Van en la etiqueta de apertura con la forma `nombre=\"valor\"`, separados del nombre del elemento y entre sí por un espacio.",
      puntos: [
        "Se recomienda poner siempre el valor entre comillas (obligatorias si el valor tiene espacios)",
        "**Atributos booleanos** (boolean attributes): basta con escribir el nombre (`disabled`, `checked`, `required`); su presencia ya significa «verdadero»",
        "Ejemplos: `href` en `<a>`, `src` y `alt` en `<img>`, `class`, `id`, `lang`"
      ],
      codigo: `<a href="https://developer.mozilla.org" title="Documentación">MDN</a>
<input type="text" disabled>`,
      lenguaje: "html",
      ojo: "`disabled=\"false\"` sigue siendo verdadero: en un atributo booleano lo que cuenta es que esté presente, no su valor. Para desactivarlo hay que quitar el atributo."
    },
    {
      titulo: "Anidamiento y elementos vacíos",
      texto: "Los elementos se pueden **anidar** (nesting) unos dentro de otros, pero deben cerrarse en el orden inverso al que se abrieron. Los **elementos vacíos** (void elements) no tienen contenido ni etiqueta de cierre.",
      puntos: [
        "Correcto: `<p>Texto <strong>importante</strong></p>`",
        "Incorrecto (se cruzan): `<p>Texto <strong>importante</p></strong>`",
        "Elementos vacíos: `<img>`, `<br>`, `<hr>`, `<input>`, `<meta>`, `<link>`",
        "Escribir `<br/>` es válido pero la barra final es opcional"
      ],
      codigo: `<p>Línea uno<br>Línea dos</p>
<img src="foto.png" alt="Una foto">`,
      lenguaje: "html",
      ojo: "Un elemento vacío no se cierra con `</br>` ni `</img>`: esas etiquetas de cierre no existen."
    },
    {
      titulo: "Estructura mínima de un documento",
      texto: "Todo documento HTML5 sigue una estructura básica: el doctype, el elemento raíz `<html>` con su idioma, la cabecera `<head>` (metadatos, no se muestra) y el cuerpo `<body>` (lo visible).",
      puntos: [
        "`<!DOCTYPE html>`: activa el modo estándar del navegador; no es una etiqueta HTML normal y va en la primera línea",
        "`<html lang=\"es\">`: raíz del documento; `lang` indica el idioma",
        "`<head>`: título, codificación, enlaces a CSS... nada visible en la página",
        "`<body>`: todo el contenido visible"
      ],
      codigo: `<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <title>Mi página</title>
  </head>
  <body>
    <h1>Hola</h1>
  </body>
</html>`,
      lenguaje: "html",
      ojo: "El contenido de `<head>` (salvo `<title>`, que va en la pestaña) no aparece en la página; lo visible va siempre en `<body>`."
    },
    {
      titulo: "Comentarios y entidades de carácter",
      texto: "Los **comentarios** se escriben entre `<!--` y `-->` y el navegador no los muestra. Los caracteres que HTML usa como sintaxis (`<`, `>`, `&`, `\"`) se escriben con **referencias de entidad** (character entity references) cuando quieres mostrarlos como texto.",
      puntos: [
        "`&lt;` → <   y   `&gt;` → >",
        "`&amp;` → &   y   `&quot;` → \"",
        "`&nbsp;` → espacio de no separación (non-breaking space)",
        "Los comentarios pueden ocupar varias líneas"
      ],
      codigo: `<!-- Esto no se ve en la página -->
<p>Para un párrafo se escribe &lt;p&gt;texto&lt;/p&gt;</p>`,
      lenguaje: "html",
      ojo: "Aunque no se vean, los comentarios viajan al navegador y cualquiera los puede leer: no pongas contraseñas ni datos privados."
    },
    {
      titulo: "El espacio en blanco se colapsa",
      texto: "El navegador **colapsa el espacio en blanco** (whitespace collapsing): varios espacios, tabuladores y saltos de línea seguidos se muestran como un único espacio. Sirve para sangrar y ordenar el código sin afectar al resultado.",
      puntos: [
        "Para un salto de línea real: `<br>` (o mejor, otro `<p>`)",
        "Para conservar el espaciado tal cual: `<pre>`",
        "Para un espacio que no se colapsa: `&nbsp;` (no lo uses para maquetar)"
      ],
      codigo: `<p>Esto     se     ve
con espacios      simples.</p>`,
      lenguaje: "html",
      ojo: "Pulsar Enter varias veces en el código no crea saltos de línea en la página."
    },
    {
      titulo: "Elementos de bloque y en línea",
      texto: "Tradicionalmente se distingue entre elementos de **bloque** (block-level), que empiezan en una línea nueva y ocupan todo el ancho (`<p>`, `<div>`, `<h1>`, `<ul>`), y elementos **en línea** (inline), que fluyen dentro del texto (`<a>`, `<span>`, `<strong>`, `<em>`, `<img>`). Hoy la especificación habla de **categorías de contenido** (flujo, frasing...), y el aspecto real lo decide la propiedad CSS `display`.",
      puntos: [
        "Bloque: nueva línea y ancho completo por defecto",
        "En línea: solo ocupan lo necesario y no rompen la línea",
        "Un elemento en línea no debería contener elementos de bloque (`<a>` es la excepción: puede envolverlos)",
        "CSS puede cambiarlo con `display: block` o `display: inline`"
      ],
      codigo: `<p>Un párrafo (bloque) con un <strong>texto en línea</strong>.</p>
<p>Otro párrafo en una línea nueva.</p>`,
      lenguaje: "html",
      ojo: "`<p>` no puede contener un `<div>` (cierra el párrafo automáticamente). Y recuerda: bloque/en línea es el comportamiento por defecto, no una propiedad fija."
    }
  ],
  chuleta: [
    ["HTML", "Lenguaje de marcado que da estructura y significado al contenido; no es de programación."],
    ["Elemento", "Etiqueta de apertura + contenido + etiqueta de cierre."],
    ["Atributo", "Información extra en la etiqueta de apertura: `nombre=\"valor\"`."],
    ["Atributo booleano", "Basta con escribirlo (`disabled`); su presencia = verdadero."],
    ["Elemento vacío (void)", "Sin contenido ni cierre: `<img>`, `<br>`, `<hr>`, `<input>`, `<meta>`, `<link>`."],
    ["`<!DOCTYPE html>`", "Primera línea; activa el modo estándar del navegador."],
    ["`<html lang>`", "Elemento raíz; `lang` declara el idioma del documento."],
    ["`<head>`", "Metadatos del documento; no se muestra en la página."],
    ["`<body>`", "Contenido visible del documento."],
    ["`<!-- ... -->`", "Comentario: el navegador no lo muestra."],
    ["`&lt;` `&gt;` `&amp;` `&quot;`", "Entidades para mostrar <, >, & y \" como texto."],
    ["`&nbsp;`", "Espacio de no separación; no colapsa."],
    ["Colapso de espacios", "Varios espacios o saltos seguidos se ven como uno solo."],
    ["Bloque vs en línea", "Bloque: línea nueva y ancho completo; en línea: fluye en el texto. `display` manda."],
    ["Anidamiento", "Cerrar en orden inverso al de apertura: `<a><b></b></a>`."]
  ],
  ejemplo: {
    consigna: "Prueba a escribir varios espacios y saltos de línea en el párrafo y observa que se colapsan. Añade un comentario y una entidad como `&lt;`.",
    html: `<h1>Mi primera página</h1>
<p>Este     párrafo   tiene
muchos espacios, pero se ven <strong>colapsados</strong>.</p>
<!-- Este comentario no se muestra -->
<p>Para escribir la etiqueta &lt;p&gt; se usan entidades.</p>
<img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='100'%3E%3Crect width='100%25' height='100%25' fill='%2393c5fd'/%3E%3C/svg%3E" alt="Rectángulo azul">`,
    css: `body { font-family: sans-serif; padding: 12px; }
h1 { background: #fde68a; }
p { border: 1px solid #94a3b8; padding: 6px; }
strong { background: #bbf7d0; }`
  },
  reto: {
    enunciado: "Completa la estructura mínima: añade el idioma español al elemento `<html>`, un `<title>` con texto dentro del `<head>`, y en el `<body>` un `<h1>` y un `<p>` que contenga un `<strong>`.",
    pista: "`lang` es un atributo de `<html>`; el `<title>` va dentro de `<head>`; `<strong>` va anidado dentro del `<p>`.",
    completo: true,
    html: `<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
  </head>
  <body>
    <!-- Escribe aquí el h1 y el párrafo -->
  </body>
</html>`,
    css: `h1 { color: #1d4ed8; }
p { border: 1px solid #94a3b8; padding: 6px; }`,
    solucion: {
      html: `<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <title>Mi página</title>
  </head>
  <body>
    <h1>Bienvenido</h1>
    <p>Esto es <strong>importante</strong>.</p>
  </body>
</html>`,
      css: `h1 { color: #1d4ed8; }
p { border: 1px solid #94a3b8; padding: 6px; }`
    },
    validar: function (doc, win) {
      try {
        var html = doc.documentElement;
        var lang = html ? (html.getAttribute("lang") || "") : "";
        if (!/^es/i.test(lang)) return { ok: false, msg: "Falta el idioma: pon lang=\"es\" en la etiqueta <html>." };
        var t = doc.querySelector("head title");
        if (!t || !t.textContent.trim()) return { ok: false, msg: "Falta un <title> con texto dentro del <head>." };
        if (!doc.querySelector("body h1")) return { ok: false, msg: "Falta un <h1> dentro del <body>." };
        var p = doc.querySelector("body p");
        if (!p) return { ok: false, msg: "Falta un <p> dentro del <body>." };
        if (!p.querySelector("strong")) return { ok: false, msg: "El <p> debe contener un <strong> anidado." };
        return { ok: true, msg: "¡Correcto! Documento con idioma, título, encabezado y párrafo con elemento anidado." };
      } catch (e) {
        return { ok: false, msg: "No pude comprobar el documento." };
      }
    }
  },
  preguntas: [
    {
      tipo: "opcion",
      enunciado: "¿Cómo se clasifica HTML?",
      opciones: ["Lenguaje de programación", "Lenguaje de marcado", "Lenguaje de estilos", "Lenguaje de base de datos"],
      correcta: 1,
      explicacion: "HTML es un lenguaje de marcado: etiqueta el contenido para darle estructura y significado. No tiene lógica (variables, bucles), por eso no es de programación; los estilos son cosa de CSS."
    },
    {
      tipo: "opcion",
      enunciado: "¿Cuál de estos es un elemento vacío (void element)?",
      opciones: ["`<img>`", "`<p>`", "`<div>`", "`<span>`"],
      correcta: 0,
      explicacion: "`<img>` no tiene contenido ni etiqueta de cierre. `<p>`, `<div>` y `<span>` sí llevan contenido y cierre."
    },
    {
      tipo: "opcion",
      enunciado: "¿Qué ocurre con este atributo?",
      codigo: `<input type="text" disabled="false">`,
      lenguaje: "html",
      opciones: [
        "El campo queda habilitado porque el valor es false",
        "Da un error de sintaxis",
        "El navegador ignora el atributo",
        "El campo queda deshabilitado, porque basta con que el atributo esté presente"
      ],
      correcta: 3,
      explicacion: "En los atributos booleanos cuenta su presencia, no su valor. Para habilitar el campo hay que eliminar el atributo `disabled`."
    },
    {
      tipo: "opcion",
      enunciado: "¿Cuál de estos anidamientos es correcto?",
      opciones: [
        "`<p>Hola <strong>mundo</p></strong>`",
        "`<strong><p>Hola mundo</strong></p>`",
        "`<p>Hola <strong>mundo</strong></p>`",
        "`<p>Hola <strong>mundo</p>`"
      ],
      correcta: 2,
      explicacion: "Los elementos deben cerrarse en orden inverso al de apertura: lo último que se abre es lo primero que se cierra."
    },
    {
      tipo: "opcion",
      enunciado: "¿Para qué sirve `<!DOCTYPE html>`?",
      opciones: [
        "Para declarar el idioma del documento",
        "Para indicar al navegador que use el modo estándar con HTML5",
        "Para enlazar la hoja de estilos",
        "Para definir el título de la pestaña"
      ],
      correcta: 1,
      explicacion: "El doctype activa el modo estándar y va en la primera línea. El idioma se declara con `lang` en `<html>`, el título con `<title>` y los estilos con `<link>`."
    },
    {
      tipo: "opcion",
      enunciado: "¿Qué muestra el navegador con este código?",
      codigo: `<p>Hola     mundo
   cruel</p>`,
      lenguaje: "html",
      opciones: [
        "Hola     mundo cruel (conserva los espacios)",
        "Hola mundo cruel (en una línea, con espacios simples)",
        "Hola mundo y debajo cruel",
        "Un error de sintaxis"
      ],
      correcta: 1,
      explicacion: "El espacio en blanco se colapsa: espacios, tabuladores y saltos de línea consecutivos se ven como un único espacio. Para forzar un salto se usa `<br>` o `<pre>` para respetar el formato."
    },
    {
      tipo: "opcion",
      enunciado: "¿Qué escribirías para mostrar literalmente el texto `<b>` en una página sin que se interprete como etiqueta?",
      opciones: ["`&lt;b&gt;`", "`<b>`", "`&nbsp;b&nbsp;`", "`&amp;b&amp;`"],
      correcta: 0,
      explicacion: "`&lt;` representa < y `&gt;` representa >. `&nbsp;` es un espacio de no separación y `&amp;` representa el símbolo &."
    },
    {
      tipo: "opcion",
      enunciado: "Sobre mayúsculas y minúsculas en etiquetas HTML, ¿cuál es la afirmación correcta?",
      opciones: [
        "`<P>` y `<p>` son elementos distintos",
        "HTML distingue mayúsculas solo en los atributos",
        "Da igual a efectos de funcionamiento, pero se recomienda escribir en minúsculas",
        "Las etiquetas deben escribirse en mayúsculas"
      ],
      correcta: 2,
      explicacion: "HTML no distingue mayúsculas en nombres de etiquetas y atributos, pero la convención y buena práctica es usar minúsculas."
    },
    {
      tipo: "completar",
      enunciado: "Escribe el atributo de `<html>` que declara el idioma del documento (solo el nombre del atributo).",
      respuestas: ["lang", "lang=", "`lang`"],
      explicacion: "`<html lang=\"es\">` ayuda a lectores de pantalla, traductores y buscadores a saber en qué idioma está la página."
    },
    {
      tipo: "completar",
      enunciado: "Escribe la entidad de carácter que muestra el símbolo & como texto.",
      respuestas: ["&amp;", "&amp"],
      explicacion: "El carácter & inicia las entidades, así que para mostrarlo se escribe `&amp;`."
    }
  ]
});

/* ====================================================================
   MÓDULO 2 — El head y los metadatos
   ==================================================================== */
window.CURSO.modulos.push({
  id: "html-head",
  orden: 2,
  area: "HTML",
  nivel: "Básico",
  titulo: "El head y los metadatos",
  resumen: "El `<head>` contiene información sobre el documento (título, codificación, estilos, scripts) que no se muestra en la página pero la configura.",
  mdn: "https://developer.mozilla.org/es/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata",
  conceptos: [
    {
      titulo: "Para qué sirve el head",
      texto: "El `<head>` contiene **metadatos** (metadata): datos sobre el documento, no contenido visible. Incluye el título, la codificación de caracteres, enlaces a hojas de estilo y scripts, e información para buscadores y redes sociales.",
      puntos: [
        "Su contenido **no se muestra** en la página (salvo el `<title>`, que aparece en la pestaña)",
        "Va dentro de `<html>`, antes de `<body>`",
        "Elementos típicos: `<title>`, `<meta>`, `<link>`, `<script>`, `<style>`"
      ],
      ojo: "Nada de lo que escribas dentro de `<head>` (texto suelto, `<h1>`, `<p>`) debe ser contenido visible: va en `<body>`."
    },
    {
      titulo: "title frente a h1",
      texto: "`<title>` es el título del **documento**: aparece en la pestaña del navegador, en los marcadores (favoritos) y como enlace en los resultados de los buscadores. `<h1>` es el título del **contenido** que se ve dentro de la página.",
      puntos: [
        "`<title>` va en `<head>` y solo puede haber uno",
        "`<h1>` va en `<body>` y se ve en la página",
        "Conviene que `<title>` sea descriptivo y único para cada página"
      ],
      codigo: `<head>
  <title>Receta de tortilla | Mi cocina</title>
</head>
<body>
  <h1>Tortilla de patatas</h1>
</body>`,
      lenguaje: "html",
      ojo: "`<title>` y `<h1>` no son lo mismo: uno es metadato del documento, el otro es contenido visible."
    },
    {
      titulo: "Codificación y viewport",
      texto: "`<meta charset=\"utf-8\">` declara la **codificación de caracteres** (UTF-8 es la recomendada) para que tildes, ñ y símbolos se vean bien. `<meta name=\"viewport\">` controla cómo se ajusta la página en móviles; sin él, el navegador móvil muestra la página como si fuera de escritorio, en miniatura.",
      codigo: `<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">`,
      lenguaje: "html",
      puntos: [
        "`charset` debe ir cuanto antes dentro del `<head>` (en los primeros 1024 bytes)",
        "`width=device-width` ajusta el ancho al del dispositivo; `initial-scale=1` fija el zoom inicial"
      ],
      ojo: "Sin `charset` correcto verás caracteres rotos (como \"Ã±\" en lugar de \"ñ\"). Sin viewport el diseño adaptable (responsive) no funciona bien en móvil."
    },
    {
      titulo: "Descripción, autor y Open Graph",
      texto: "Con `<meta name=\"...\" content=\"...\">` se añaden metadatos con nombre. `description` resume la página y los buscadores suelen mostrarla bajo el título en los resultados; `author` indica el autor. Las etiquetas **Open Graph** (`property=\"og:title\"`, `og:description`, `og:image`) controlan cómo se ve el enlace al compartirlo en redes sociales.",
      codigo: `<meta name="description" content="Aprende HTML desde cero.">
<meta name="author" content="Ana Pérez">
<meta property="og:title" content="Aprende HTML">`,
      lenguaje: "html",
      puntos: [
        "`name` indica el tipo de metadato y `content` su valor",
        "Open Graph es un protocolo creado por Facebook que usan muchas redes"
      ]
    },
    {
      titulo: "Enlazar CSS e icono: link",
      texto: "`<link>` (elemento vacío) conecta el documento con recursos externos. `rel` dice qué relación tiene el recurso y `href` dónde está. `rel=\"stylesheet\"` enlaza una hoja de estilos CSS; `rel=\"icon\"` define el icono de la pestaña (favicon).",
      codigo: `<link rel="stylesheet" href="estilos.css">
<link rel="icon" href="favicon.ico">`,
      lenguaje: "html",
      puntos: [
        "`<link>` va en el `<head>` y no lleva etiqueta de cierre",
        "El CSS externo se enlaza con `<link>`, no con `<a>` ni `<script>`"
      ],
      ojo: "Confundir `<link>` (recursos del documento, va en `<head>`) con `<a>` (enlace para que el usuario navegue)."
    },
    {
      titulo: "Scripts: script y defer",
      texto: "`<script src=\"...\">` carga código JavaScript. Con el atributo booleano **`defer`** el navegador descarga el script en paralelo y lo ejecuta cuando ya ha terminado de analizar el documento, respetando el orden. Así puedes colocar el script en el `<head>` sin que bloquee la carga de la página.",
      codigo: `<script src="app.js" defer></script>`,
      lenguaje: "html",
      puntos: [
        "Sin `defer`, un script en el `<head>` detiene el análisis del HTML mientras se descarga y ejecuta",
        "`async` también descarga en paralelo, pero ejecuta en cuanto llega, sin garantizar orden"
      ],
      ojo: "`<script>` siempre necesita etiqueta de cierre, incluso con `src`."
    },
    {
      titulo: "El idioma: lang en html",
      texto: "El atributo `lang` del elemento `<html>` declara el idioma principal del documento (`es`, `en`, `fr`...). Es importante para **accesibilidad** (los lectores de pantalla eligen la pronunciación correcta), traducción automática y buscadores.",
      codigo: `<html lang="es">`,
      lenguaje: "html",
      puntos: [
        "Puedes indicar un cambio de idioma en un fragmento: `<p lang=\"en\">Hello</p>`",
        "Se pueden añadir variantes regionales: `es-MX`, `en-GB`"
      ],
      ojo: "`lang` no va en `<head>` ni en `<meta>`: se pone en la etiqueta `<html>`."
    }
  ],
  chuleta: [
    ["`<head>`", "Contiene metadatos del documento; no se muestra en la página."],
    ["`<title>`", "Título del documento: pestaña, marcadores y resultados de buscadores. Solo uno."],
    ["`<h1>` vs `<title>`", "`<h1>` es contenido visible; `<title>` es metadato del documento."],
    ["`<meta charset=\"utf-8\">`", "Codificación de caracteres; evita tildes y ñ rotas."],
    ["`<meta name=\"viewport\">`", "Ajusta el ancho a móviles: `width=device-width, initial-scale=1`."],
    ["`<meta name=\"description\">`", "Resumen de la página que suelen mostrar los buscadores."],
    ["`<meta name=\"author\">`", "Autor de la página."],
    ["Open Graph (`og:title`...)", "Metadatos para controlar cómo se ve el enlace al compartirlo en redes."],
    ["`<link rel=\"stylesheet\" href>`", "Enlaza una hoja de estilos CSS externa."],
    ["`<link rel=\"icon\" href>`", "Icono de la pestaña (favicon)."],
    ["`<script src>`", "Carga JavaScript externo; necesita cierre `</script>`."],
    ["`defer`", "Descarga en paralelo y ejecuta tras analizar el documento, en orden."],
    ["`<html lang=\"es\">`", "Idioma principal: accesibilidad, traducción y buscadores."]
  ],
  ejemplo: {
    consigna: "Cambia el texto de `<title>` y de `<h1>`: el `<h1>` se ve en la página, pero el `<title>` no (solo aparece en la pestaña del navegador).",
    completo: true,
    html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="Una página de ejemplo.">
  <title>Título de la pestaña</title>
</head>
<body>
  <h1>Título visible en la página</h1>
  <p>El contenido de &lt;head&gt; no se muestra aquí.</p>
</body>
</html>`,
    css: `body { font-family: sans-serif; padding: 12px; }
h1 { background: #fde68a; }`
  },
  reto: {
    enunciado: "Al documento le faltan metadatos esenciales: añade dentro del `<head>` un `<title>` con texto, `<meta charset=\"utf-8\">` y el `<meta name=\"viewport\">` con `width=device-width, initial-scale=1`.",
    pista: "Los tres van dentro de `<head>`. El viewport es un `<meta>` con `name=\"viewport\"` y su valor en `content`.",
    completo: true,
    html: `<!DOCTYPE html>
<html lang="es">
<head>
  <link rel="icon" href="data:,">
</head>
<body>
  <h1>Mi página</h1>
  <p>Hola, mundo.</p>
</body>
</html>`,
    css: `h1 { color: #1d4ed8; }`,
    solucion: {
      html: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Mi página</title>
  <link rel="icon" href="data:,">
</head>
<body>
  <h1>Mi página</h1>
  <p>Hola, mundo.</p>
</body>
</html>`,
      css: `h1 { color: #1d4ed8; }`
    },
    validar: function (doc, win) {
      try {
        var t = doc.querySelector("head title");
        if (!t || !t.textContent.trim()) return { ok: false, msg: "Falta un <title> con texto dentro del <head>." };
        var c = doc.querySelector("head meta[charset]");
        if (!c) return { ok: false, msg: "Falta <meta charset=\"utf-8\"> dentro del <head>." };
        if (!/^utf-?8$/i.test((c.getAttribute("charset") || "").trim())) return { ok: false, msg: "El charset debería ser utf-8." };
        var v = doc.querySelector("head meta[name=viewport]");
        if (!v) return { ok: false, msg: "Falta <meta name=\"viewport\"> dentro del <head>." };
        var content = (v.getAttribute("content") || "").replace(/\s+/g, "");
        if (content.indexOf("width=device-width") === -1) return { ok: false, msg: "El viewport debe incluir width=device-width en su content." };
        return { ok: true, msg: "¡Correcto! Ya tienes título, codificación y viewport." };
      } catch (e) {
        return { ok: false, msg: "No pude comprobar el documento." };
      }
    }
  },
  preguntas: [
    {
      tipo: "opcion",
      enunciado: "¿Qué se muestra del contenido de `<head>` en la página?",
      opciones: [
        "Todo, justo encima del contenido de `<body>`",
        "Nada de su contenido aparece en la página; el `<title>` solo se ve en la pestaña",
        "Solo los elementos `<meta>`",
        "Solo lo que esté dentro de `<link>`"
      ],
      correcta: 1,
      explicacion: "El `<head>` guarda metadatos. Su contenido no forma parte de la página visible; el `<title>` se usa en la pestaña, marcadores y buscadores."
    },
    {
      tipo: "opcion",
      enunciado: "¿Cuál es la diferencia entre `<title>` y `<h1>`?",
      opciones: [
        "Son equivalentes, solo cambia el tamaño",
        "`<h1>` va en el `<head>` y `<title>` en el `<body>`",
        "`<title>` es el título del documento (pestaña, buscadores) y `<h1>` es un título visible dentro de la página",
        "`<title>` se puede repetir y `<h1>` no"
      ],
      correcta: 2,
      explicacion: "`<title>` vive en `<head>` y es metadato del documento; `<h1>` vive en `<body>` y es contenido. Además, solo debe haber un `<title>`."
    },
    {
      tipo: "opcion",
      enunciado: "¿Para qué sirve `<meta charset=\"utf-8\">`?",
      opciones: [
        "Para que la página se adapte al ancho del móvil",
        "Para declarar el idioma del documento",
        "Para evitar que Google indexe la página",
        "Para indicar la codificación de caracteres y que tildes y ñ se vean bien"
      ],
      correcta: 3,
      explicacion: "Declara la codificación (UTF-8). El ajuste al móvil es del viewport y el idioma se declara con `lang` en `<html>`."
    },
    {
      tipo: "opcion",
      enunciado: "¿Qué etiqueta se usa para aplicar una hoja de estilos externa `estilos.css`?",
      opciones: [
        "`<link rel=\"stylesheet\" href=\"estilos.css\">`",
        "`<a rel=\"stylesheet\" href=\"estilos.css\">`",
        "`<script src=\"estilos.css\">`",
        "`<style src=\"estilos.css\">`"
      ],
      correcta: 0,
      explicacion: "`<link rel=\"stylesheet\">` en el `<head>` es la forma estándar. `<style>` incrusta CSS directamente y no admite `src`; `<script>` es para JavaScript."
    },
    {
      tipo: "opcion",
      enunciado: "¿Qué hace el atributo `defer` en este script?",
      codigo: `<script src="app.js" defer></script>`,
      lenguaje: "html",
      opciones: [
        "Lo carga solo en móviles",
        "Descarga el script en paralelo y lo ejecuta cuando el documento ya se ha analizado",
        "Impide que el script se ejecute",
        "Lo ejecuta antes de que exista ningún elemento"
      ],
      correcta: 1,
      explicacion: "`defer` evita que el script bloquee el análisis del HTML: se descarga a la vez y se ejecuta al terminar el análisis, en orden."
    },
    {
      tipo: "opcion",
      enunciado: "¿Dónde se declara el idioma principal de la página?",
      opciones: [
        "`<meta lang=\"es\">` dentro de `<head>`",
        "`<title lang=\"es\">`",
        "`<html lang=\"es\">`",
        "`<body language=\"es\">`"
      ],
      correcta: 2,
      explicacion: "El atributo `lang` de `<html>` declara el idioma; lo usan lectores de pantalla, traductores y buscadores."
    },
    {
      tipo: "opcion",
      enunciado: "¿Qué ocurre si falta `<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">`?",
      opciones: [
        "Las tildes se ven mal",
        "En móviles la página se muestra como de escritorio, reducida, y el diseño adaptable no funciona bien",
        "El documento no es HTML válido y no se muestra",
        "El título no aparece en la pestaña"
      ],
      correcta: 1,
      explicacion: "Sin viewport, los navegadores móviles asumen un ancho de escritorio y reducen la página. Las tildes dependen del `charset` y el título de `<title>`."
    },
    {
      tipo: "opcion",
      enunciado: "¿Para qué se usan normalmente las etiquetas Open Graph como `og:title`?",
      opciones: [
        "Para controlar cómo se muestra el enlace al compartirlo en redes sociales",
        "Para definir la codificación de caracteres",
        "Para cargar fuentes tipográficas",
        "Para ejecutar scripts de forma diferida"
      ],
      correcta: 0,
      explicacion: "Open Graph son metadatos (`<meta property=\"og:...\">`) que usan las redes sociales para generar la vista previa del enlace."
    },
    {
      tipo: "completar",
      enunciado: "Escribe el valor del atributo `rel` que se usa en `<link>` para enlazar una hoja de estilos.",
      respuestas: ["stylesheet", "rel=\"stylesheet\"", "rel=stylesheet"],
      explicacion: "`<link rel=\"stylesheet\" href=\"...\">` conecta el documento con un archivo CSS externo."
    },
    {
      tipo: "completar",
      enunciado: "Escribe el nombre de la etiqueta del `<head>` cuyo texto aparece en la pestaña del navegador.",
      respuestas: ["title", "<title>", "<title></title>"],
      explicacion: "`<title>` define el título del documento mostrado en la pestaña, los marcadores y los resultados de buscadores."
    }
  ]
});

/* ====================================================================
   MÓDULO 3 — Texto: encabezados, párrafos y listas
   ==================================================================== */
window.CURSO.modulos.push({
  id: "html-texto",
  orden: 3,
  area: "HTML",
  nivel: "Básico",
  titulo: "Texto: encabezados, párrafos y listas",
  resumen: "Los elementos de texto dan significado a cada fragmento: títulos jerárquicos, párrafos, listas, énfasis, citas y código.",
  mdn: "https://developer.mozilla.org/es/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs",
  conceptos: [
    {
      titulo: "Encabezados h1–h6",
      texto: "Los **encabezados** (headings) van de `<h1>` (el más importante) a `<h6>` y forman la jerarquía del documento. Los lectores de pantalla y los buscadores los usan para entender la estructura.",
      puntos: [
        "Buena práctica: **un solo `<h1>`** por página, que describa el contenido principal",
        "No saltar niveles: tras un `<h2>` va un `<h3>`, no un `<h5>`",
        "No uses encabezados solo para agrandar texto: para el tamaño usa CSS"
      ],
      codigo: `<h1>Guía de HTML</h1>
<h2>Texto</h2>
<h3>Listas</h3>`,
      lenguaje: "html",
      ojo: "El nivel del encabezado expresa jerarquía, no tamaño. Elegir `<h3>` porque «se ve más pequeño» es un error."
    },
    {
      titulo: "Párrafos, salto de línea y línea horizontal",
      texto: "`<p>` marca un **párrafo** (paragraph): un bloque de texto. `<br>` fuerza un salto de línea dentro de un texto y `<hr>` representa un cambio temático (thematic break), normalmente dibujado como una línea horizontal. Ambos son elementos vacíos.",
      puntos: [
        "Usa `<br>` solo cuando el salto es parte del contenido (versos de un poema, líneas de una dirección)",
        "No uses `<br>` para separar párrafos ni para dar espacio: usa `<p>` y CSS",
        "`<hr>` marca un cambio de tema, no es una simple decoración"
      ],
      codigo: `<p>Calle Mayor 1<br>28001 Madrid</p>
<hr>
<p>Otro tema distinto.</p>`,
      lenguaje: "html",
      ojo: "Varios `<br>` seguidos para separar bloques es una mala práctica; usa párrafos y márgenes CSS."
    },
    {
      titulo: "Listas desordenadas y ordenadas",
      texto: "`<ul>` crea una lista **desordenada** (unordered list, con viñetas) y `<ol>` una lista **ordenada** (ordered list, numerada). Los elementos de la lista son siempre `<li>`. Las listas se pueden **anidar** colocando una lista dentro de un `<li>`.",
      puntos: [
        "`<ol start=\"5\">`: empieza a contar desde 5",
        "`<ol reversed>`: cuenta hacia atrás (atributo booleano)",
        "`<ol type=\"a\">`: tipo de numeración (`1`, `a`, `A`, `i`, `I`)",
        "Los únicos hijos directos de `<ul>` y `<ol>` deben ser `<li>`"
      ],
      codigo: `<ol start="3">
  <li>Mezclar</li>
  <li>Hornear
    <ul>
      <li>40 minutos</li>
      <li>180 grados</li>
    </ul>
  </li>
</ol>`,
      lenguaje: "html",
      ojo: "La lista anidada va dentro del `<li>` correspondiente, no directamente dentro de `<ul>` o `<ol>`."
    },
    {
      titulo: "Listas de descripción",
      texto: "Una **lista de descripción** (description list) `<dl>` agrupa pares término-descripción: `<dt>` (description term) es el término y `<dd>` (description details) su descripción. Sirve para glosarios y pares clave-valor.",
      codigo: `<dl>
  <dt>HTML</dt>
  <dd>Lenguaje de marcado para la web.</dd>
  <dt>CSS</dt>
  <dd>Lenguaje de estilos.</dd>
</dl>`,
      lenguaje: "html",
      puntos: [
        "`<dl>` contiene `<dt>` y `<dd>`, no `<li>`",
        "Un término puede tener varias descripciones y viceversa"
      ],
      ojo: "No uses `<li>` dentro de `<dl>`: sus hijos son `<dt>` y `<dd>`."
    },
    {
      titulo: "Énfasis: semántica frente a presentación",
      texto: "`<em>` (énfasis) y `<strong>` (importancia fuerte) tienen **significado semántico**: los lectores de pantalla pueden cambiar la entonación. `<i>` y `<b>` marcan texto con una voz o atención distinta sin añadir énfasis ni importancia: se usan por convención (términos técnicos, nombres de naves, palabras clave). `<u>` marca una anotación no textual (por ejemplo, señalar una falta de ortografía). `<mark>` resalta texto por relevancia en un contexto.",
      puntos: [
        "`<em>` suele verse en cursiva; `<strong>` en negrita (el aspecto es por defecto)",
        "`<i>`: voz alternativa o término técnico; `<b>`: atención sin importancia extra",
        "`<u>`: anotación no textual; no la uses para subrayar texto normal (se confunde con un enlace)",
        "`<mark>`: resaltado, como un marcador fluorescente"
      ],
      codigo: `<p>Es <em>muy</em> <strong>importante</strong> entregar el trabajo.</p>
<p>El término <i>nodo</i> aparece en <mark>este fragmento</mark>.</p>`,
      lenguaje: "html",
      ojo: "Para solo negrita o cursiva visual, la opción correcta es CSS (`font-weight`, `font-style`); usa `<strong>`/`<em>` cuando el texto realmente sea importante o enfatizado."
    },
    {
      titulo: "Citas: blockquote, q y cite",
      texto: "`<blockquote>` es una cita **en bloque** (larga) y su atributo `cite` guarda la URL de la fuente. `<q>` es una cita **corta en línea**: el navegador añade las comillas. `<cite>` marca el **título de la obra** citada.",
      codigo: `<blockquote cite="https://developer.mozilla.org/es/">
  <p>HTML es el lenguaje de marcado de la web.</p>
</blockquote>
<p>Como dijo él: <q>nada es imposible</q>. Fuente: <cite>Mi libro</cite>.</p>`,
      lenguaje: "html",
      puntos: [
        "`<blockquote>`: bloque, con sangría por defecto",
        "`<q>`: en línea, sin escribir tú las comillas",
        "`cite` (atributo) es una URL y no se muestra; `<cite>` (elemento) es texto visible con el título de la obra"
      ],
      ojo: "No confundas el atributo `cite` (URL de la fuente, invisible) con el elemento `<cite>` (título de la obra, visible)."
    },
    {
      titulo: "Más elementos de texto: abbr, address, time, sup, sub y código",
      texto: "`<abbr title>` indica una abreviatura y su significado completo. `<address>` es la información de contacto del autor de la página o artículo. `<time datetime>` marca fechas y horas de forma que las entiendan las máquinas. `<sup>` es superíndice y `<sub>` subíndice. Para informática: `<code>` (código), `<pre>` (texto preformateado: respeta espacios y saltos), `<kbd>` (entrada de teclado), `<samp>` (salida de un programa) y `<var>` (variable).",
      codigo: `<p><abbr title="HyperText Markup Language">HTML</abbr>, H<sub>2</sub>O, x<sup>2</sup></p>
<address>Escríbenos a info@ejemplo.com</address>
<p>Publicado el <time datetime="2026-11-05">5 de noviembre</time>.</p>
<p>Pulsa <kbd>Ctrl</kbd>+<kbd>C</kbd>; verás <samp>Copiado</samp>.</p>
<pre><code>let x = 5;
let y = 6;</code></pre>`,
      lenguaje: "html",
      puntos: [
        "`<pre>` conserva espacios y saltos de línea (no se colapsan)",
        "`<pre><code>...</code></pre>` es la forma habitual de un bloque de código",
        "`datetime` usa formato estándar (`2026-11-05`) aunque el texto visible sea otro"
      ],
      ojo: "`<address>` es para datos de contacto de la página o artículo, no para cualquier dirección postal."
    }
  ],
  chuleta: [
    ["`<h1>`–`<h6>`", "Encabezados jerárquicos; un `<h1>` por página, sin saltar niveles."],
    ["`<p>`", "Párrafo."],
    ["`<br>` / `<hr>`", "Salto de línea / cambio temático. Ambos son vacíos; no para dar espacio."],
    ["`<ul>` / `<ol>` / `<li>`", "Lista con viñetas / numerada / elemento de lista."],
    ["`start`, `reversed`, `type`", "Atributos de `<ol>`: inicio, cuenta atrás y tipo de numeración."],
    ["`<dl>` `<dt>` `<dd>`", "Lista de descripción: lista, término y descripción."],
    ["`<em>` / `<strong>`", "Énfasis / importancia fuerte (semánticos)."],
    ["`<i>` / `<b>` / `<u>`", "Voz alternativa / atención / anotación no textual (sin énfasis semántico)."],
    ["`<mark>`", "Texto resaltado por relevancia."],
    ["`<blockquote cite>`", "Cita en bloque; `cite` es la URL de la fuente."],
    ["`<q>` / `<cite>`", "Cita corta en línea (con comillas automáticas) / título de la obra citada."],
    ["`<abbr title>`", "Abreviatura con su significado en `title`."],
    ["`<time datetime>`", "Fecha u hora legible por máquinas."],
    ["`<sup>` / `<sub>`", "Superíndice / subíndice."],
    ["`<code>` `<pre>` `<kbd>` `<samp>` `<var>`", "Código / texto preformateado / teclado / salida de programa / variable."]
  ],
  ejemplo: {
    consigna: "Cambia `<ul>` por `<ol>` y prueba los atributos `start=\"5\"` y `reversed`. Observa también la diferencia entre `<em>`, `<strong>` y `<mark>`.",
    html: `<h1>Receta rápida</h1>
<p>Es <em>muy</em> <strong>importante</strong> medir bien; <mark>no te olvides de la sal</mark>.</p>
<h2>Pasos</h2>
<ul>
  <li>Cortar la cebolla</li>
  <li>Freír
    <ul>
      <li>Fuego medio</li>
    </ul>
  </li>
  <li>Servir</li>
</ul>
<dl>
  <dt>Tortilla</dt>
  <dd>Plato de huevos y patata.</dd>
</dl>
<pre><code>let x = 5;
let y = 6;</code></pre>`,
    css: `body { font-family: sans-serif; padding: 12px; }
h1 { background: #fde68a; }
li { background: #e0f2fe; margin: 2px 0; }
pre { background: #f1f5f9; border: 1px solid #94a3b8; padding: 6px; }
dt { font-weight: bold; }`
  },
  reto: {
    enunciado: "Convierte el texto en una estructura correcta: el primer párrafo debe ser un `<h1>`, los tres productos deben formar una lista (`<ul>` u `<ol>`) con tres `<li>`, y la palabra «importante» debe ir dentro de un `<strong>`.",
    pista: "Sustituye el primer `<p>` por un `<h1>`; envuelve los tres elementos en una lista y pon cada uno en un `<li>`.",
    html: `<p>Mi lista de la compra</p>
<p>Pan</p>
<p>Leche</p>
<p>Huevos</p>
<p>Es importante no olvidar el pan.</p>`,
    css: `h1 { color: #1d4ed8; }
li { background: #e0f2fe; margin: 2px 0; }
strong { background: #fde68a; }`,
    solucion: {
      html: `<h1>Mi lista de la compra</h1>
<ul>
  <li>Pan</li>
  <li>Leche</li>
  <li>Huevos</li>
</ul>
<p>Es <strong>importante</strong> no olvidar el pan.</p>`,
      css: `h1 { color: #1d4ed8; }
li { background: #e0f2fe; margin: 2px 0; }
strong { background: #fde68a; }`
    },
    validar: function (doc, win) {
      try {
        var h1 = doc.querySelector("h1");
        if (!h1) return { ok: false, msg: "Falta un <h1> con el título de la lista." };
        var lista = doc.querySelector("ul, ol");
        if (!lista) return { ok: false, msg: "Falta la lista: usa <ul> u <ol>." };
        var items = lista.querySelectorAll("li");
        if (items.length < 3) return { ok: false, msg: "La lista debe tener al menos tres <li> (pan, leche, huevos)." };
        var s = doc.querySelector("strong");
        if (!s) return { ok: false, msg: "Falta un <strong> alrededor de la palabra «importante»." };
        if (!/importante/i.test(s.textContent)) return { ok: false, msg: "El <strong> debe contener la palabra «importante»." };
        return { ok: true, msg: "¡Correcto! Encabezado, lista de tres elementos y énfasis semántico." };
      } catch (e) {
        return { ok: false, msg: "No pude comprobar el documento." };
      }
    }
  },
  preguntas: [
    {
      tipo: "opcion",
      enunciado: "¿Cuál es la buena práctica respecto a `<h1>`?",
      opciones: [
        "Usarlo en cualquier texto que quieras ver más grande",
        "Usar varios `<h1>` seguidos para mejorar el SEO",
        "Usar `<h1>` solo para títulos de listas",
        "Usar un único `<h1>` por página que describa el contenido principal"
      ],
      correcta: 3,
      explicacion: "Se recomienda un solo `<h1>` por página. Los encabezados expresan jerarquía y no sirven para cambiar el tamaño (eso es CSS)."
    },
    {
      tipo: "opcion",
      enunciado: "¿Cuál es la diferencia correcta entre `<strong>` y `<b>`?",
      opciones: [
        "`<strong>` indica importancia fuerte (semántica) y `<b>` solo llama la atención sin darle importancia",
        "No hay diferencia, son equivalentes siempre",
        "`<b>` es el elemento semántico y `<strong>` el presentacional",
        "`<strong>` solo funciona dentro de `<p>`"
      ],
      correcta: 0,
      explicacion: "`<strong>` expresa importancia; `<b>` se usa para texto que destaca por convención sin añadir importancia. Ambos suelen verse en negrita, pero su significado es distinto."
    },
    {
      tipo: "opcion",
      enunciado: "¿Qué atributo hace que una lista ordenada empiece a numerar desde el 5?",
      codigo: `<ol ___>
  <li>Uno</li>
  <li>Dos</li>
</ol>`,
      lenguaje: "html",
      opciones: ["`begin=\"5\"`", "`from=\"5\"`", "`start=\"5\"`", "`type=\"5\"`"],
      correcta: 2,
      explicacion: "`start` fija el primer número de la lista. `type` cambia el estilo de numeración (`1`, `a`, `A`, `i`, `I`). `begin` y `from` no existen."
    },
    {
      tipo: "opcion",
      enunciado: "¿Qué elementos componen una lista de descripción?",
      opciones: [
        "`<ul>` y `<li>`",
        "`<dl>`, `<dt>` y `<dd>`",
        "`<ol>`, `<dt>` y `<li>`",
        "`<dl>`, `<li>` y `<dd>`"
      ],
      correcta: 1,
      explicacion: "`<dl>` contiene pares `<dt>` (término) y `<dd>` (descripción). No lleva `<li>`."
    },
    {
      tipo: "opcion",
      enunciado: "¿Qué diferencia hay entre el atributo `cite` de `<blockquote>` y el elemento `<cite>`?",
      opciones: [
        "Son lo mismo escritos de dos formas",
        "El atributo es un texto visible y el elemento una URL",
        "El atributo guarda la URL de la fuente (no se muestra); el elemento marca el título de la obra citada (visible)",
        "El elemento solo funciona dentro de `<q>`"
      ],
      correcta: 2,
      explicacion: "El atributo `cite` de `<blockquote>`/`<q>` es una URL de la fuente y no se ve. El elemento `<cite>` es visible y contiene el título de la obra."
    },
    {
      tipo: "opcion",
      enunciado: "¿Cuándo es adecuado usar `<br>`?",
      opciones: [
        "Para separar párrafos",
        "Para dar espacio vertical entre secciones",
        "Cuando el salto de línea forma parte del contenido, como en un poema o una dirección",
        "Para centrar el texto"
      ],
      correcta: 2,
      explicacion: "`<br>` es para saltos que forman parte del contenido. Para separar bloques se usan `<p>` y CSS, no varios `<br>`."
    },
    {
      tipo: "opcion",
      enunciado: "¿Qué ocurre con los espacios y saltos de línea dentro de `<pre>`?",
      opciones: [
        "Se colapsan igual que en un párrafo",
        "Se conservan tal y como están escritos",
        "Se eliminan todos",
        "Se convierten en `&nbsp;` visibles"
      ],
      correcta: 1,
      explicacion: "`<pre>` es texto preformateado: conserva espacios y saltos y suele usarse con `<code>` para bloques de código."
    },
    {
      tipo: "opcion",
      enunciado: "¿Cuál es la estructura correcta de una lista anidada?",
      opciones: [
        "`<ul><li>A</li><ul><li>B</li></ul></ul>`",
        "`<ul><li>A<ul><li>B</li></ul></li></ul>`",
        "`<ul><li>A</li></ul><li><ul><li>B</li></ul></li>`",
        "`<ul><ul><li>A</li><li>B</li></ul></ul>`"
      ],
      correcta: 1,
      explicacion: "La lista interna va dentro del `<li>` al que pertenece. Los hijos directos de `<ul>` deben ser `<li>`."
    },
    {
      tipo: "completar",
      enunciado: "Escribe la etiqueta que se usa para marcar una abreviatura (junto con su atributo `title`).",
      respuestas: ["abbr", "<abbr>", "<abbr></abbr>"],
      explicacion: "`<abbr title=\"HyperText Markup Language\">HTML</abbr>` muestra la forma larga al pasar el ratón y la entienden los lectores de pantalla."
    },
    {
      tipo: "completar",
      enunciado: "Escribe la etiqueta que representa una cita corta en línea y a la que el navegador añade comillas automáticamente.",
      respuestas: ["q", "<q>", "<q></q>"],
      explicacion: "`<q>` es para citas cortas en línea; para citas largas en bloque se usa `<blockquote>`."
    }
  ]
});

/* ====================================================================
   MÓDULO 4 — Enlaces (hipervínculos)
   ==================================================================== */
window.CURSO.modulos.push({
  id: "html-enlaces",
  orden: 4,
  area: "HTML",
  nivel: "Básico",
  titulo: "Enlaces (hipervínculos)",
  resumen: "El elemento `<a>` crea hipervínculos a otras páginas, secciones del mismo documento, archivos, correos o teléfonos.",
  mdn: "https://developer.mozilla.org/es/docs/Learn_web_development/Core/Structuring_content/Creating_links",
  conceptos: [
    {
      titulo: "El elemento a y el atributo href",
      texto: "`<a>` (anchor) crea un **hipervínculo** (hyperlink). Su atributo `href` (hypertext reference) indica el destino; el contenido del elemento es lo que el usuario pulsa. Sin `href` no es un enlace real.",
      codigo: `<a href="https://developer.mozilla.org/es/">Documentación de MDN</a>`,
      lenguaje: "html",
      puntos: [
        "El contenido puede ser texto, una imagen u otros elementos",
        "Los enlaces suelen verse en azul y subrayados por defecto"
      ],
      ojo: "El destino se escribe en `href`, no en `src` (que es para incrustar imágenes, scripts...)."
    },
    {
      titulo: "URL absolutas y relativas",
      texto: "Una URL **absoluta** (absolute) incluye el protocolo y el dominio completos. Una URL **relativa** (relative) se interpreta a partir de la ubicación del documento actual, y es lo habitual dentro de un mismo sitio.",
      puntos: [
        "Absoluta: `https://ejemplo.com/pagina.html`",
        "Mismo directorio: `pagina.html` o `./pagina.html`",
        "Subir un nivel de carpeta: `../pagina.html`",
        "Desde la raíz del sitio: `/carpeta/pagina.html`",
        "Entrar en una subcarpeta: `carpeta/pagina.html`"
      ],
      codigo: `<a href="contacto.html">Contacto</a>
<a href="../index.html">Volver</a>
<a href="/blog/articulo.html">Desde la raíz</a>`,
      lenguaje: "html",
      ojo: "`../` sube una carpeta; `/` al inicio parte de la raíz del sitio, no de la carpeta actual."
    },
    {
      titulo: "Enlaces a fragmentos (#id)",
      texto: "Un **fragmento** (fragment) es la parte de la URL tras `#` y lleva a un elemento con ese `id`. Sirve para saltar a una sección del mismo documento (`href=\"#seccion\"`) o de otro documento (`pagina.html#seccion`).",
      codigo: `<a href="#conclusion">Ir a la conclusión</a>
<a href="manual.html#instalacion">Instalación en el manual</a>

<h2 id="conclusion">Conclusión</h2>`,
      lenguaje: "html",
      puntos: [
        "El destino necesita un atributo `id` único",
        "En el `href` se escribe `#` seguido del `id`; en el `id` no se escribe `#`"
      ],
      ojo: "El `id` va sin almohadilla (`id=\"conclusion\"`) pero el `href` sí la lleva (`href=\"#conclusion\"`)."
    },
    {
      titulo: "Nueva pestaña y seguridad: target y rel",
      texto: "Con `target=\"_blank\"` el enlace se abre en una nueva pestaña. Se recomienda acompañarlo de `rel=\"noopener noreferrer\"`: `noopener` evita que la página abierta controle a la original mediante `window.opener` y `noreferrer` no envía la cabecera Referer.",
      codigo: `<a href="https://ejemplo.com" target="_blank" rel="noopener noreferrer">
  Abrir ejemplo (nueva pestaña)
</a>`,
      lenguaje: "html",
      puntos: [
        "`_blank` nueva pestaña o ventana; `_self` (por defecto) la misma",
        "Los navegadores modernos ya aplican `noopener` implícitamente con `_blank`, pero se sigue recomendando escribirlo"
      ],
      ojo: "`target=\"_blank\"` sin `rel` era un riesgo de seguridad clásico (el examen suele preguntarlo)."
    },
    {
      titulo: "title y download",
      texto: "El atributo `title` añade información extra, normalmente mostrada como tooltip al pasar el ratón. El atributo booleano `download` indica que el destino debe **descargarse** en lugar de navegar hasta él; puede llevar un valor con el nombre de archivo sugerido.",
      codigo: `<a href="informe.pdf" download="informe-2026.pdf" title="Descargar el informe">
  Descargar informe (PDF, 2 MB)
</a>`,
      lenguaje: "html",
      puntos: [
        "`title` complementa el texto del enlace, no lo sustituye (no es accesible en táctil)",
        "`download` funciona con recursos del mismo origen (same-origin)"
      ],
      ojo: "No dependas de `title` para información esencial: no se ve en móviles ni con teclado."
    },
    {
      titulo: "Correo y teléfono: mailto y tel",
      texto: "Además de URL web, `href` admite otros esquemas. `mailto:` abre el cliente de correo con una dirección (y opcionalmente asunto con `?subject=`) y `tel:` inicia una llamada en dispositivos que lo permiten.",
      codigo: `<a href="mailto:profe@ejemplo.com?subject=Duda%20del%20examen">Escribir al profesor</a>
<a href="tel:+34600123456">Llamar al +34 600 123 456</a>`,
      lenguaje: "html",
      puntos: [
        "`mailto:` admite parámetros como `subject`, `cc`, `bcc` y `body`, el primero tras `?` y los siguientes con `&`",
        "Los espacios en el asunto se codifican como `%20`",
        "En `tel:` conviene usar el prefijo internacional"
      ]
    },
    {
      titulo: "Buenas prácticas y enlace frente a botón",
      texto: "El texto del enlace debe ser **descriptivo** y entenderse fuera de contexto (los lectores de pantalla listan los enlaces). Evita «haz clic aquí» o «más». Avisa al usuario si el enlace descarga un archivo o abre una nueva pestaña. Se puede envolver con `<a>` un bloque entero (por ejemplo una tarjeta con título e imagen), porque `<a>` admite contenido de bloque. Un enlace sirve para **navegar**; un `<button>` sirve para **realizar una acción**.",
      puntos: [
        "Mal: «Haz clic aquí»; bien: «Descargar la guía de estilo (PDF, 2 MB)»",
        "Indica el formato y tamaño de las descargas",
        "Enlace = ir a otro recurso o lugar; botón = enviar un formulario, abrir un menú, ejecutar una acción",
        "Envolver bloques enteros en `<a>` es válido, pero no metas otros enlaces o botones dentro"
      ],
      codigo: `<a href="curso.html">
  <h3>Curso de HTML</h3>
  <p>Aprende desde cero.</p>
</a>`,
      lenguaje: "html",
      ojo: "Usar `<a href=\"#\">` como si fuera un botón (o `<div onclick>`) es mala práctica: usa `<button>` para acciones."
    }
  ],
  chuleta: [
    ["`<a href>`", "Hipervínculo; `href` es el destino."],
    ["URL absoluta", "Con protocolo y dominio: `https://ejemplo.com/x.html`."],
    ["`./` y `../`", "Carpeta actual / subir una carpeta."],
    ["`/` inicial", "Parte desde la raíz del sitio."],
    ["`#id`", "Fragmento: salta al elemento con ese `id` (mismo o distinto documento)."],
    ["`target=\"_blank\"`", "Abre el enlace en una pestaña nueva."],
    ["`rel=\"noopener noreferrer\"`", "Seguridad y privacidad al usar `_blank`."],
    ["`title`", "Información adicional (tooltip); no sustituye al texto del enlace."],
    ["`download`", "Indica que el recurso se descarga en lugar de abrirse."],
    ["`mailto:`", "Abre el correo; `?subject=` define el asunto."],
    ["`tel:`", "Inicia una llamada telefónica."],
    ["Texto descriptivo", "Evita «clic aquí»; el texto debe tener sentido fuera de contexto."],
    ["Enlace vs botón", "Enlace navega; botón ejecuta una acción."]
  ],
  ejemplo: {
    consigna: "Cambia el texto de los enlaces y prueba a añadir `target=\"_blank\"`. Comprueba cómo el enlace al fragmento `#fin` salta al final de la página.",
    html: `<h1>Enlaces</h1>
<p><a href="https://developer.mozilla.org/es/" target="_blank" rel="noopener noreferrer">MDN Web Docs (nueva pestaña)</a></p>
<p><a href="#fin">Ir al final de esta página</a></p>
<p><a href="mailto:profe@ejemplo.com?subject=Hola">Escribir al profesor</a></p>
<p><a href="tel:+34600123456">Llamar</a></p>
<div style="height: 400px; background: #f1f5f9;">Espacio de relleno</div>
<h2 id="fin">Final de la página</h2>`,
    css: `body { font-family: sans-serif; padding: 12px; }
a { color: #1d4ed8; }
h2 { background: #fde68a; }`
  },
  reto: {
    enunciado: "Crea tres enlaces: uno a `https://developer.mozilla.org/` que se abra en una nueva pestaña con `rel` que incluya `noopener` y con un texto descriptivo (no «clic aquí»); y otro a `mailto:profe@example.com` con un texto de tu elección.",
    pista: "Sustituye el texto plano por `<a>`: usa `target=\"_blank\"` y `rel=\"noopener noreferrer\"` en el enlace a MDN.",
    html: `<p>Documentación: clic aquí</p>
<p>Contacto: profe@example.com</p>`,
    css: `a { color: #1d4ed8; }
p { border: 1px solid #94a3b8; padding: 6px; }`,
    solucion: {
      html: `<p>Documentación: <a href="https://developer.mozilla.org/" target="_blank" rel="noopener noreferrer">Documentación de MDN Web Docs (nueva pestaña)</a></p>
<p>Contacto: <a href="mailto:profe@example.com">Escribir al profesor</a></p>`,
      css: `a { color: #1d4ed8; }
p { border: 1px solid #94a3b8; padding: 6px; }`
    },
    validar: function (doc, win) {
      try {
        var enlaces = doc.querySelectorAll("a[href]");
        var mdn = null, i;
        for (i = 0; i < enlaces.length; i++) {
          if (/^https?:\/\/developer\.mozilla\.org/i.test(enlaces[i].getAttribute("href") || "")) { mdn = enlaces[i]; break; }
        }
        if (!mdn) return { ok: false, msg: "Falta un enlace <a href> a https://developer.mozilla.org/." };
        if ((mdn.getAttribute("target") || "") !== "_blank") return { ok: false, msg: "El enlace a MDN debe abrirse en nueva pestaña (target=\"_blank\")." };
        var rel = (mdn.getAttribute("rel") || "").toLowerCase();
        if (rel.indexOf("noopener") === -1) return { ok: false, msg: "Añade rel=\"noopener noreferrer\" al enlace con target=\"_blank\"." };
        var texto = (mdn.textContent || "").trim();
        if (texto.length < 8 || /clic|click|aqu[ií]\s*$/i.test(texto)) return { ok: false, msg: "Usa un texto descriptivo para el enlace (no «clic aquí»)." };
        var mail = doc.querySelector("a[href^='mailto:']");
        if (!mail) return { ok: false, msg: "Falta el enlace mailto: con el correo." };
        if ((mail.getAttribute("href") || "").indexOf("profe@example.com") === -1) return { ok: false, msg: "El mailto debe apuntar a profe@example.com." };
        return { ok: true, msg: "¡Correcto! Enlaces con nueva pestaña segura, texto descriptivo y mailto." };
      } catch (e) {
        return { ok: false, msg: "No pude comprobar el documento." };
      }
    }
  },
  preguntas: [
    {
      tipo: "opcion",
      enunciado: "¿Cuál es la forma correcta de enlazar a la sección con `id=\"contacto\"` en la misma página?",
      opciones: [
        "`<a href=\"#contacto\">Contacto</a>`",
        "`<a href=\"contacto\">Contacto</a>`",
        "`<a id=\"#contacto\">Contacto</a>`",
        "`<a href=\"@contacto\">Contacto</a>`"
      ],
      correcta: 0,
      explicacion: "Los fragmentos se enlazan con `#` seguido del `id` del destino. El `id` en sí no lleva `#`."
    },
    {
      tipo: "opcion",
      enunciado: "¿Qué significa `../imagenes/foto.jpg` en un `href` o `src`?",
      opciones: [
        "Desde la raíz del sitio, carpeta imagenes",
        "Un archivo en la carpeta actual",
        "Sube una carpeta respecto al documento actual y entra en `imagenes`",
        "Una URL absoluta"
      ],
      correcta: 2,
      explicacion: "`../` sube un nivel. La raíz del sitio se indica con `/` inicial y la carpeta actual con `./` o sin prefijo."
    },
    {
      tipo: "opcion",
      enunciado: "¿Qué atributo deberías añadir junto a `target=\"_blank\"` por seguridad?",
      opciones: [
        "`download`",
        "`rel=\"noopener noreferrer\"`",
        "`title=\"seguro\"`",
        "`rel=\"stylesheet\"`"
      ],
      correcta: 1,
      explicacion: "`noopener` impide que la nueva pestaña acceda a la original mediante `window.opener`; `noreferrer` además oculta la cabecera Referer."
    },
    {
      tipo: "opcion",
      enunciado: "¿Qué hace el atributo `download` en un enlace?",
      opciones: [
        "Abre el archivo en una nueva pestaña",
        "Bloquea el enlace para que no se pueda pulsar",
        "Convierte el enlace en un botón",
        "Indica que el recurso se debe descargar en lugar de navegar hasta él"
      ],
      correcta: 3,
      explicacion: "Sugiere al navegador descargar el archivo (opcionalmente con el nombre dado en su valor). Funciona con recursos del mismo origen."
    },
    {
      tipo: "opcion",
      enunciado: "¿Cuál es el enlace correcto para escribir un correo con asunto predefinido?",
      opciones: [
        "`<a href=\"email:ana@ej.com?subject=Hola\">`",
        "`<a href=\"mailto:ana@ej.com&subject=Hola\">`",
        "`<a href=\"mailto:ana@ej.com?subject=Hola\">`",
        "`<a href=\"mail=ana@ej.com;subject=Hola\">`"
      ],
      correcta: 2,
      explicacion: "El esquema es `mailto:`; los parámetros empiezan con `?` y se separan con `&`."
    },
    {
      tipo: "opcion",
      enunciado: "¿Cuál de estos textos de enlace es la mejor práctica?",
      opciones: [
        "Haz clic aquí",
        "Descargar la guía de estilo (PDF, 2 MB)",
        "Más",
        "https"
      ],
      correcta: 1,
      explicacion: "El texto debe ser descriptivo y entenderse fuera de contexto, e idealmente avisar del formato y tamaño. «Clic aquí» y «más» no dicen nada a quien navega por una lista de enlaces."
    },
    {
      tipo: "opcion",
      enunciado: "Un control debe abrir un menú desplegable al pulsarlo, sin ir a otra página. ¿Qué elemento es el adecuado?",
      opciones: [
        "`<a href=\"#\">`",
        "`<div>` con un evento de clic",
        "`<button>`",
        "`<link>`"
      ],
      correcta: 2,
      explicacion: "Un enlace sirve para navegar; un botón sirve para ejecutar una acción. `<button>` además es accesible por teclado de serie."
    },
    {
      tipo: "opcion",
      enunciado: "¿Es válido envolver un título `<h3>` y un párrafo dentro de un único `<a>`?",
      opciones: [
        "No, `<a>` solo admite texto",
        "Solo si se usa `<div>` en lugar de `<h3>`",
        "No, los elementos de bloque no pueden estar en un enlace",
        "Sí, `<a>` puede envolver contenido de bloque, por ejemplo una tarjeta entera"
      ],
      correcta: 3,
      explicacion: "El contenido de `<a>` es transparente: puede contener bloques (sin anidar otros enlaces o botones). Es habitual en tarjetas clicables."
    },
    {
      tipo: "completar",
      enunciado: "Escribe el valor de `target` que abre un enlace en una nueva pestaña.",
      respuestas: ["_blank", "target=\"_blank\"", "target=_blank"],
      explicacion: "`_blank` abre en una pestaña o ventana nueva; `_self` (por defecto) en la misma."
    },
    {
      tipo: "completar",
      enunciado: "Escribe el nombre del atributo de `<a>` que indica el destino del enlace.",
      respuestas: ["href", "href=", "`href`"],
      explicacion: "`href` (hypertext reference) contiene la URL de destino; sin él, `<a>` no es un hipervínculo funcional."
    }
  ]
});

/* ====================================================================
   MÓDULO 5 — Estructura semántica de la página
   ==================================================================== */
window.CURSO.modulos.push({
  id: "html-semantica",
  orden: 5,
  area: "HTML",
  nivel: "Intermedio",
  titulo: "Estructura semántica de la página",
  resumen: "Los elementos semánticos (`<header>`, `<nav>`, `<main>`, `<article>`...) describen la función de cada zona de la página en lugar de usar `<div>` para todo.",
  mdn: "https://developer.mozilla.org/es/docs/Learn_web_development/Core/Structuring_content/Structuring_documents",
  conceptos: [
    {
      titulo: "Por qué usar semántica",
      texto: "Un elemento **semántico** (semantic) comunica su significado y no solo su aspecto. Usarlos mejora la **accesibilidad** (los lectores de pantalla permiten saltar entre zonas como navegación o contenido principal), el **SEO** (los buscadores entienden mejor la estructura) y el **mantenimiento** (el código es más legible que una montaña de `<div>`).",
      puntos: [
        "Más legible: `<nav>` dice más que `<div class=\"menu\">`",
        "Los lectores de pantalla ofrecen atajos a regiones (landmarks)",
        "El aspecto visual se decide con CSS, no con la etiqueta"
      ],
      codigo: `<!-- Sin semántica -->
<div class="cabecera">...</div>
<!-- Con semántica -->
<header>...</header>`,
      lenguaje: "html",
      ojo: "Los elementos semánticos no traen un estilo especial propio (la mayoría son bloques sin más): su valor está en el significado."
    },
    {
      titulo: "header, nav y footer",
      texto: "`<header>` es contenido introductorio o de navegación (logo, título, buscador); `<nav>` agrupa los enlaces de **navegación principal**; `<footer>` es el pie, con información como autoría, copyright o enlaces legales. `<header>` y `<footer>` pueden aparecer también dentro de un `<article>` o `<section>` para su propia cabecera y pie.",
      codigo: `<header>
  <h1>Mi blog</h1>
  <nav>
    <ul>
      <li><a href="/">Inicio</a></li>
      <li><a href="/contacto">Contacto</a></li>
    </ul>
  </nav>
</header>
<footer><p>© 2026 Mi blog</p></footer>`,
      lenguaje: "html",
      puntos: [
        "`<nav>` solo para bloques principales de navegación, no para cualquier grupo de enlaces",
        "Es habitual construir el menú con una lista dentro de `<nav>`"
      ],
      ojo: "`<header>` no es lo mismo que `<head>`: `<head>` es metadatos (invisible), `<header>` es contenido visible de cabecera."
    },
    {
      titulo: "main",
      texto: "`<main>` contiene el **contenido principal** y único de la página, lo que no se repite en otras (sin el menú, pie, etc.). Solo debe haber **un `<main>` visible** por página y **no puede ser descendiente** de `<article>`, `<aside>`, `<header>`, `<footer>` o `<nav>`.",
      codigo: `<body>
  <header>...</header>
  <main>
    <h2>Contenido principal</h2>
  </main>
  <footer>...</footer>
</body>`,
      lenguaje: "html",
      puntos: [
        "Uno por página",
        "Hijo directo de `<body>` (o de contenedores genéricos) en la práctica",
        "Los lectores de pantalla permiten saltar directamente a él"
      ],
      ojo: "Poner `<main>` dentro de `<article>` o repetirlo varias veces es incorrecto."
    },
    {
      titulo: "article",
      texto: "`<article>` representa contenido **independiente y reutilizable**: tendría sentido por sí solo si se sacara de la página o se compartiera (una entrada de blog, una noticia, un comentario, una ficha de producto). Suele llevar su propio encabezado.",
      codigo: `<article>
  <h2>Noticia del día</h2>
  <p>Texto de la noticia...</p>
</article>`,
      lenguaje: "html",
      puntos: [
        "Prueba rápida: ¿se podría distribuir o publicar por separado? Entonces es `<article>`",
        "Un `<article>` puede contener otros `<article>` (por ejemplo, comentarios de una entrada)"
      ]
    },
    {
      titulo: "section y article frente a section",
      texto: "`<section>` es una **agrupación temática** de contenido, normalmente con un encabezado propio. No es independiente: tiene sentido dentro del conjunto. Si el contenido se puede distribuir por separado, usa `<article>`; si solo necesitas un contenedor para estilo, usa `<div>`.",
      codigo: `<section>
  <h2>Servicios</h2>
  <p>Lo que ofrecemos...</p>
</section>`,
      lenguaje: "html",
      puntos: [
        "`<article>`: independiente y reutilizable",
        "`<section>`: parte temática de un conjunto, con encabezado",
        "`<div>`: sin significado, solo para agrupar por estilo"
      ],
      ojo: "Pregunta típica: `<section>` sin encabezado y usada solo para dar estilo es mala señal; para eso está `<div>`."
    },
    {
      titulo: "aside",
      texto: "`<aside>` es contenido **tangencialmente relacionado** con lo que lo rodea, que podría quitarse sin perder el sentido del contenido principal: barras laterales, recuadros, anuncios, enlaces relacionados, notas al margen.",
      codigo: `<aside>
  <h2>También te puede interesar</h2>
  <ul><li><a href="#">Otro artículo</a></li></ul>
</aside>`,
      lenguaje: "html",
      puntos: [
        "No tiene por qué estar a un lado: la posición la decide CSS",
        "Su relación con el contenido principal es secundaria"
      ]
    },
    {
      titulo: "div y span: contenedores genéricos",
      texto: "`<div>` (bloque) y `<span>` (en línea) son contenedores **genéricos sin significado semántico**: solo sirven para agrupar contenido y aplicar estilo con CSS o manipulación con JavaScript. Úsalos como **último recurso**, cuando no exista un elemento semántico adecuado.",
      puntos: [
        "`<div>`: contenedor de bloque",
        "`<span>`: contenedor en línea, para envolver parte de un texto",
        "Se suelen identificar con `class` o `id`"
      ],
      codigo: `<div class="tarjeta">
  <p>Precio: <span class="oferta">9 €</span></p>
</div>`,
      lenguaje: "html",
      ojo: "Si existe un elemento semántico (`<nav>`, `<footer>`, `<article>`...), úsalo en lugar de `<div class=\"...\">`."
    },
    {
      titulo: "figure, figcaption, details y summary",
      texto: "`<figure>` encapsula contenido autónomo (imagen, diagrama, código) referenciado desde el texto, con `<figcaption>` como leyenda. `<details>` crea un **widget de divulgación** (disclosure) que el usuario abre y cierra; `<summary>` es su título visible siempre.",
      codigo: `<figure>
  <img src="grafico.png" alt="Gráfico de ventas">
  <figcaption>Figura 1: ventas anuales</figcaption>
</figure>
<details>
  <summary>Más información</summary>
  <p>Este texto aparece al desplegar.</p>
</details>`,
      lenguaje: "html",
      puntos: [
        "`<figcaption>` va dentro de `<figure>`, al principio o al final",
        "`<details open>` lo muestra desplegado de inicio",
        "`<summary>` debe ser el primer hijo de `<details>`; funciona sin JavaScript"
      ],
      ojo: "`<summary>` siempre es visible; el resto del contenido de `<details>` se oculta hasta abrirlo."
    }
  ],
  chuleta: [
    ["`<header>`", "Contenido introductorio o cabecera (logo, título, navegación)."],
    ["`<nav>`", "Enlaces de navegación principal."],
    ["`<main>`", "Contenido principal y único; uno por página; no dentro de article/aside/header/footer/nav."],
    ["`<article>`", "Contenido independiente y reutilizable (noticia, entrada, comentario)."],
    ["`<section>`", "Agrupación temática, normalmente con encabezado."],
    ["`<aside>`", "Contenido tangencial (barra lateral, recuadros, relacionados)."],
    ["`<footer>`", "Pie: autoría, copyright, enlaces legales."],
    ["`<div>`", "Contenedor de bloque sin semántica; último recurso."],
    ["`<span>`", "Contenedor en línea sin semántica."],
    ["`<figure>` / `<figcaption>`", "Contenido autónomo (imagen, diagrama) con su leyenda."],
    ["`<details>` / `<summary>`", "Desplegable nativo / su título siempre visible."],
    ["Article vs section", "Article = independiente; section = parte temática de un todo, con encabezado."],
    ["`<header>` vs `<head>`", "`<header>` es contenido visible; `<head>` es metadatos del documento."]
  ],
  ejemplo: {
    consigna: "Observa cómo cada zona semántica tiene su elemento. Cambia el `<aside>` de lugar o añade otro `<article>` y mira el efecto con los bordes de colores.",
    html: `<header>
  <h1>Mi blog</h1>
  <nav><a href="#">Inicio</a> | <a href="#">Artículos</a></nav>
</header>
<main>
  <article>
    <h2>Primer artículo</h2>
    <p>Contenido independiente.</p>
    <section>
      <h3>Una sección temática</h3>
      <p>Parte del artículo.</p>
    </section>
  </article>
  <aside>
    <h2>Relacionado</h2>
    <p>Contenido tangencial.</p>
  </aside>
</main>
<footer><p>© 2026 Mi blog</p></footer>`,
    css: `body { font-family: sans-serif; padding: 8px; }
header { background: #fde68a; padding: 6px; }
nav { background: #fed7aa; padding: 4px; }
main { border: 2px solid #94a3b8; padding: 6px; margin: 6px 0; }
article { background: #bbf7d0; padding: 6px; }
section { background: #dcfce7; padding: 6px; border: 1px dashed #16a34a; }
aside { background: #bfdbfe; padding: 6px; margin-top: 6px; }
footer { background: #e2e8f0; padding: 6px; }`
  },
  reto: {
    enunciado: "La página está hecha solo con `<div>`. Conviértela en semántica: usa `<header>`, `<nav>`, `<main>` (con un `<article>` o `<section>` dentro) y `<footer>` en lugar de los `<div>` con clases.",
    pista: "La cabecera pasa a `<header>`, el menú a `<nav>`, el contenedor central a `<main>` y la entrada a `<article>`; el pie a `<footer>`.",
    html: `<div class="cabecera"><h1>Mi blog</h1></div>
<div class="menu"><a href="#">Inicio</a> <a href="#">Artículos</a></div>
<div class="contenido">
  <div class="entrada">
    <h2>Primer artículo</h2>
    <p>Texto del artículo.</p>
  </div>
</div>
<div class="pie"><p>© 2026 Mi blog</p></div>`,
    css: `body { font-family: sans-serif; padding: 8px; }
header, .cabecera { background: #fde68a; padding: 6px; }
nav, .menu { background: #fed7aa; padding: 4px; }
main, .contenido { border: 2px solid #94a3b8; padding: 6px; margin: 6px 0; }
article, section, .entrada { background: #bbf7d0; padding: 6px; }
footer, .pie { background: #e2e8f0; padding: 6px; }`,
    solucion: {
      html: `<header><h1>Mi blog</h1></header>
<nav><a href="#">Inicio</a> <a href="#">Artículos</a></nav>
<main>
  <article>
    <h2>Primer artículo</h2>
    <p>Texto del artículo.</p>
  </article>
</main>
<footer><p>© 2026 Mi blog</p></footer>`,
      css: `body { font-family: sans-serif; padding: 8px; }
header, .cabecera { background: #fde68a; padding: 6px; }
nav, .menu { background: #fed7aa; padding: 4px; }
main, .contenido { border: 2px solid #94a3b8; padding: 6px; margin: 6px 0; }
article, section, .entrada { background: #bbf7d0; padding: 6px; }
footer, .pie { background: #e2e8f0; padding: 6px; }`
    },
    validar: function (doc, win) {
      try {
        if (!doc.querySelector("header")) return { ok: false, msg: "Falta un <header> para la cabecera." };
        var nav = doc.querySelector("nav");
        if (!nav) return { ok: false, msg: "Falta un <nav> para el menú." };
        if (!nav.querySelector("a")) return { ok: false, msg: "El <nav> debe contener los enlaces del menú." };
        var main = doc.querySelector("main");
        if (!main) return { ok: false, msg: "Falta un <main> para el contenido principal." };
        if (doc.querySelectorAll("main").length > 1) return { ok: false, msg: "Solo debe haber un <main>." };
        if (!main.querySelector("article, section")) return { ok: false, msg: "Dentro de <main> debe haber un <article> o <section>." };
        if (!doc.querySelector("footer")) return { ok: false, msg: "Falta un <footer> para el pie." };
        if (main.querySelector("main") || main.closest("header, footer, nav, article, aside")) return { ok: false, msg: "<main> no puede estar dentro de header, footer, nav, article ni aside." };
        return { ok: true, msg: "¡Correcto! Ya tienes header, nav, main con article/section y footer." };
      } catch (e) {
        return { ok: false, msg: "No pude comprobar el documento." };
      }
    }
  },
  preguntas: [
    {
      tipo: "opcion",
      enunciado: "¿Cuál es una ventaja real de usar elementos semánticos en lugar de `<div>` para todo?",
      opciones: [
        "Los elementos semánticos se ven mejor por defecto",
        "Mejoran la accesibilidad, el SEO y la legibilidad del código",
        "Hacen que la página cargue el doble de rápido",
        "Evitan tener que usar CSS"
      ],
      correcta: 1,
      explicacion: "Los semánticos aportan significado: ayudan a lectores de pantalla y buscadores y hacen el código más legible. No cambian el rendimiento ni sustituyen a CSS."
    },
    {
      tipo: "opcion",
      enunciado: "¿Qué regla cumple `<main>`?",
      opciones: [
        "Puede haber uno por cada sección",
        "Debe ir dentro de `<header>`",
        "Solo debe haber uno visible por página y no puede estar dentro de `<article>`, `<aside>`, `<header>`, `<footer>` ni `<nav>`",
        "Debe contener el menú de navegación"
      ],
      correcta: 2,
      explicacion: "`<main>` es el contenido principal y único del documento. El menú y el pie quedan fuera de él."
    },
    {
      tipo: "opcion",
      enunciado: "Una noticia completa (título, texto y firma) que tendría sentido publicada por sí sola. ¿Qué elemento encaja mejor?",
      opciones: ["`<section>`", "`<aside>`", "`<div>`", "`<article>`"],
      correcta: 3,
      explicacion: "`<article>` es para contenido independiente y reutilizable. `<section>` agrupa por tema dentro de un conjunto; `<div>` no tiene semántica."
    },
    {
      tipo: "opcion",
      enunciado: "¿Cuál es la diferencia principal entre `<article>` y `<section>`?",
      opciones: [
        "`<article>` es independiente y reutilizable; `<section>` agrupa contenido por tema dentro de un conjunto, normalmente con encabezado",
        "No hay diferencia, son intercambiables",
        "`<section>` es siempre independiente y `<article>` no",
        "`<article>` solo puede usarse una vez por página"
      ],
      correcta: 0,
      explicacion: "Prueba rápida: si el fragmento se podría distribuir por separado, es `<article>`; si es una parte temática del todo, `<section>`. Ninguno está limitado a uno por página."
    },
    {
      tipo: "opcion",
      enunciado: "¿Para qué sirve `<aside>`?",
      opciones: [
        "Para el contenido principal de la página",
        "Para contenido tangencialmente relacionado, como una barra lateral o notas relacionadas",
        "Solo para colocar contenido a la derecha de la pantalla",
        "Para la navegación principal"
      ],
      correcta: 1,
      explicacion: "`<aside>` es contenido accesorio respecto al principal; su posición la decide CSS, no el elemento."
    },
    {
      tipo: "opcion",
      enunciado: "¿Cuándo es correcto usar `<div>`?",
      opciones: [
        "Siempre, en lugar de `<header>` y `<footer>`",
        "Para marcar la navegación principal",
        "Para el título de la página",
        "Como último recurso, cuando no hay un elemento semántico adecuado y solo se necesita agrupar para estilo o scripts"
      ],
      correcta: 3,
      explicacion: "`<div>` no tiene significado. Si existe un elemento semántico apropiado, hay que preferirlo."
    },
    {
      tipo: "opcion",
      enunciado: "¿Cuál es la estructura correcta de un desplegable nativo?",
      opciones: [
        "`<details><p>Texto</p><summary>Título</summary></details>`",
        "`<details><summary>Título</summary><p>Texto</p></details>`",
        "`<summary><details>Título</details><p>Texto</p></summary>`",
        "`<details title=\"Título\"><p>Texto</p></details>`"
      ],
      correcta: 1,
      explicacion: "`<summary>` es el primer hijo de `<details>` y es el título siempre visible; el resto se muestra al abrir."
    },
    {
      tipo: "opcion",
      enunciado: "¿Qué diferencia hay entre `<header>` y `<head>`?",
      opciones: [
        "Ninguna, son sinónimos",
        "`<head>` guarda metadatos no visibles y `<header>` es contenido visible de cabecera de página, artículo o sección",
        "`<header>` guarda los metadatos y `<head>` la cabecera visible",
        "`<head>` solo se usa en `<article>`"
      ],
      correcta: 1,
      explicacion: "Nombre parecido, función distinta: `<head>` va dentro de `<html>` y es invisible; `<header>` va en `<body>` y se ve."
    },
    {
      tipo: "completar",
      enunciado: "Escribe la etiqueta semántica que se usa para el bloque de navegación principal de enlaces.",
      respuestas: ["nav", "<nav>", "<nav></nav>"],
      explicacion: "`<nav>` agrupa los enlaces principales de navegación; suele contener una lista de enlaces."
    },
    {
      tipo: "completar",
      enunciado: "Escribe la etiqueta que contiene el título visible (siempre mostrado) de un elemento `<details>`.",
      respuestas: ["summary", "<summary>", "<summary></summary>"],
      explicacion: "`<summary>` es el rótulo del desplegable; al pulsarlo se abre o cierra el contenido restante de `<details>`."
    }
  ]
});
