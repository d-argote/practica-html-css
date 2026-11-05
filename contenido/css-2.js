window.CURSO = window.CURSO || { modulos: [] };

/* ===================== 15 · TEXTO Y TIPOGRAFÍA ===================== */
window.CURSO.modulos.push({
  id: "css-texto",
  orden: 15,
  area: "CSS",
  nivel: "Básico",
  titulo: "Texto y tipografía",
  resumen: "Cómo controlar la fuente, el tamaño, el espaciado, la alineación, las listas y los estilos de los enlaces.",
  mdn: "https://developer.mozilla.org/es/docs/Learn_web_development/Core/Text_styling",
  conceptos: [
    {
      titulo: "font-family: la pila de fuentes",
      texto: "`font-family` recibe una lista de fuentes por orden de preferencia (pila de fuentes, font stack). El navegador usa la primera que tenga disponible, así que al final siempre se pone una familia genérica como respaldo.",
      puntos: [
        "Familias genéricas: `serif`, `sans-serif`, `monospace`, `cursive`, `fantasy` y `system-ui`",
        "Si el nombre de la fuente tiene espacios, va entre comillas: `\"Times New Roman\"`",
        "La genérica va sin comillas y siempre la última",
        "Fuentes seguras para web (web safe fonts): Arial, Verdana, Times New Roman, Courier New, Georgia, etc., presentes en casi todos los sistemas"
      ],
      codigo: `body {
  font-family: "Helvetica Neue", Arial, sans-serif;
}
code {
  font-family: "Courier New", monospace;
}`,
      lenguaje: "css",
      ojo: "Poner comillas a `sans-serif` (la genérica) hace que el navegador la busque como si fuera el nombre de una fuente instalada."
    },
    {
      titulo: "Fuentes propias: @font-face y Google Fonts",
      texto: "Si la fuente no está en el sistema del usuario, se puede descargar. Con `@font-face` defines un nombre en `font-family` y su archivo en `src` con `url()` y `format()`. El formato recomendado hoy es `woff2`. Google Fonts hace lo mismo con un `<link>` en el `<head>`.",
      puntos: [
        "`@font-face` define `font-family` (el nombre que tú elijas) y `src`",
        "`src: url(...) format(\"woff2\")` indica el archivo y su formato",
        "Después usas ese nombre en `font-family` como cualquier otra fuente",
        "Google Fonts: `<link href=\"https://fonts.googleapis.com/...\" rel=\"stylesheet\">` y copias el `font-family` que te da"
      ],
      codigo: `@font-face {
  font-family: "MiFuente";
  src: url("mifuente.woff2") format("woff2");
}
h1 {
  font-family: "MiFuente", serif;
}`,
      lenguaje: "css",
      ojo: "Aunque cargues una fuente propia, mantén una genérica al final de la pila por si el archivo no se descarga."
    },
    {
      titulo: "Tamaño, peso y estilo de la fuente",
      texto: "`font-size` fija el tamaño, `font-weight` el grosor y `font-style` la cursiva. El atajo (shorthand) `font` junta todo en una sola declaración, pero exige como mínimo el tamaño y la familia.",
      puntos: [
        "`font-weight`: `normal` equivale a 400 y `bold` a 700 (hay valores numéricos de 100 a 900)",
        "`font-style`: `normal`, `italic` u `oblique`",
        "Orden del atajo: style, weight, size/line-height, family",
        "`font: italic bold 16px/1.5 Arial, sans-serif;` (el `/1.5` es el `line-height`)"
      ],
      codigo: `p {
  font-size: 1.125rem;
  font-weight: bold;
  font-style: italic;
}
.atajo {
  font: italic bold 16px/1.5 Arial, sans-serif;
}`,
      lenguaje: "css",
      ojo: "Si en el atajo `font` falta el tamaño o la familia, toda la declaración es inválida y el navegador la ignora."
    },
    {
      titulo: "Espaciado: line-height, letter-spacing, word-spacing",
      texto: "`line-height` controla la altura de cada línea (interlineado), `letter-spacing` el espacio entre letras y `word-spacing` el espacio entre palabras. Para que el texto sea legible se recomienda un `line-height` de 1.5 aproximadamente.",
      puntos: [
        "`line-height: 1.5` sin unidad es lo recomendado: se multiplica por el tamaño de fuente de cada elemento",
        "`letter-spacing: 2px` separa las letras",
        "`word-spacing: 4px` separa las palabras",
        "Con valor con unidad (por ejemplo `24px`) el interlineado no se adapta si cambia el tamaño de fuente"
      ],
      codigo: `p {
  line-height: 1.5;
  letter-spacing: 1px;
  word-spacing: 4px;
}`,
      lenguaje: "css",
      ojo: "Un `line-height` con unidad se hereda ya calculado en píxeles; el valor sin unidad se hereda como número y se recalcula en cada elemento."
    },
    {
      titulo: "Alineación, decoración, mayúsculas, sangría y sombra",
      texto: "Estas propiedades dan formato al texto: `text-align` alinea, `text-decoration` añade o quita subrayados, `text-transform` cambia mayúsculas, `text-indent` sangra la primera línea y `text-shadow` añade sombra.",
      puntos: [
        "`text-align`: `left`, `right`, `center`, `justify`",
        "`text-decoration: none` quita el subrayado de los enlaces",
        "`text-transform`: `uppercase`, `lowercase`, `capitalize`",
        "`text-indent: 2em` sangra la primera línea",
        "`text-shadow: 2px 2px 4px gray` (desplazamiento x, desplazamiento y, desenfoque, color)",
        "`white-space`: controla cómo se tratan espacios y saltos (`nowrap` evita el ajuste de línea, `pre` los respeta)"
      ],
      codigo: `h1 {
  text-align: center;
  text-transform: uppercase;
  text-shadow: 2px 2px 4px gray;
}
a {
  text-decoration: none;
}`,
      lenguaje: "css",
      ojo: "`text-align` se aplica al contenido del elemento contenedor (bloque), no a un elemento inline por sí mismo."
    },
    {
      titulo: "Estilos de listas",
      texto: "Las listas `<ul>` y `<ol>` se personalizan con propiedades `list-style-*`, que se pueden agrupar en el atajo `list-style`.",
      puntos: [
        "`list-style-type`: `disc`, `circle`, `square`, `decimal`, `lower-roman`, `none`…",
        "`list-style-position`: `outside` (por defecto) o `inside`",
        "`list-style-image: url(...)` usa una imagen como viñeta",
        "Atajo: `list-style: square inside;`"
      ],
      codigo: `ul {
  list-style-type: square;
  list-style-position: inside;
}
.limpia {
  list-style: none;
  padding: 0;
}`,
      lenguaje: "css",
      ojo: "`list-style: none` quita las viñetas, pero no el `padding` izquierdo que traen `<ul>` y `<ol>` por defecto."
    },
    {
      titulo: "Enlaces: estados y el orden LoVe HAte",
      texto: "Los enlaces tienen estados que se estilizan con pseudoclases. Como todas tienen la misma especificidad, gana la última que se escriba: por eso el orden importa. La regla mnemotécnica es LoVe HAte: `:link`, `:visited`, (`:focus`), `:hover`, `:active`.",
      puntos: [
        "`:link` enlace sin visitar; `:visited` ya visitado",
        "`:focus` cuando tiene el foco (teclado); `:hover` con el ratón encima; `:active` mientras se pulsa",
        "Orden recomendado: `:link`, `:visited`, `:focus`, `:hover`, `:active`",
        "Si `:hover` va antes de `:link`, la regla de `:link` la anulará siempre"
      ],
      codigo: `a:link    { color: blue; }
a:visited { color: purple; }
a:focus   { outline: 2px solid orange; }
a:hover   { text-decoration: underline; }
a:active  { color: red; }`,
      lenguaje: "css",
      ojo: "Quitar el subrayado con `text-decoration: none` y no cambiar nada en `:hover` ni `:focus` empeora la accesibilidad: el usuario deja de ver qué es un enlace."
    }
  ],
  chuleta: [
    ["font-family", "Lista de fuentes por preferencia; termina con una familia genérica."],
    ["Familias genéricas", "`serif`, `sans-serif`, `monospace`, `cursive`, `fantasy`, `system-ui`."],
    ["@font-face", "Define una fuente propia: `font-family` + `src: url() format()`."],
    ["font-weight", "Grosor: `normal` = 400, `bold` = 700."],
    ["font (atajo)", "style weight size/line-height family; exige tamaño y familia."],
    ["line-height", "Interlineado; se recomienda sin unidad (1.5)."],
    ["letter-spacing / word-spacing", "Espacio entre letras / entre palabras."],
    ["text-align", "`left`, `right`, `center`, `justify`."],
    ["text-decoration: none", "Quita el subrayado de los enlaces."],
    ["text-transform", "`uppercase`, `lowercase`, `capitalize`."],
    ["text-shadow", "x y desenfoque color: `2px 2px 4px gray`."],
    ["list-style", "Atajo de type, position e image de las listas."],
    ["LoVe HAte", "Orden de pseudoclases de enlace: link, visited, (focus), hover, active."]
  ],
  ejemplo: {
    consigna: "Cambia la pila de `font-family`, prueba `text-align: right` y cambia el `line-height`. Quita el `text-decoration: none` para ver cómo vuelve el subrayado.",
    html: `<article class="texto">
  <h1>Viajar por el mundo</h1>
  <p>Un texto de ejemplo para probar la tipografía. Cambia el interlineado y el espaciado de letras para ver el efecto en la lectura.</p>
  <ul>
    <li>Primer destino</li>
    <li>Segundo destino</li>
  </ul>
  <p><a href="#">Ver más destinos</a></p>
</article>`,
    css: `.texto {
  max-width: 420px;
  padding: 16px;
  background: #f1f5f9;
  font-family: Georgia, "Times New Roman", serif;
  line-height: 1.6;
}
h1 {
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  text-shadow: 2px 2px 4px #94a3b8;
}
ul {
  list-style: square inside;
}
a {
  text-decoration: none;
  color: #1d4ed8;
}
a:hover {
  text-decoration: underline;
}`
  },
  reto: {
    enunciado: "Estiliza el texto: pon una pila de fuentes que termine en `sans-serif` en el `body`, un `line-height` sin unidad (por ejemplo 1.5) en los párrafos o en el `body`, centra el título `h1` y quita el subrayado de todos los enlaces.",
    pista: "Una pila termina en la familia genérica; `line-height: 1.5` no lleva unidad; `text-align` y `text-decoration` son las propiedades que necesitas.",
    html: `<h1>Guía de viaje</h1>
<p>Descubre ciudades, playas y montañas con nuestras rutas.</p>
<p>Consulta también nuestras <a href="#">ofertas</a> y <a href="#">destinos</a>.</p>`,
    css: `body {
  padding: 16px;
  background: #f8fafc;
}`,
    solucion: {
      html: `<h1>Guía de viaje</h1>
<p>Descubre ciudades, playas y montañas con nuestras rutas.</p>
<p>Consulta también nuestras <a href="#">ofertas</a> y <a href="#">destinos</a>.</p>`,
      css: `body {
  padding: 16px;
  background: #f8fafc;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.5;
}
h1 {
  text-align: center;
}
a {
  text-decoration: none;
}`
    },
    validar: function (doc, win) {
      try {
        var h1 = doc.querySelector("h1");
        var p = doc.querySelector("p");
        var enlaces = doc.querySelectorAll("a");
        if (!h1 || !p || !enlaces.length) return { ok: false, msg: "No encuentro el h1, el párrafo o los enlaces (no los borres)." };
        var ff = win.getComputedStyle(p).fontFamily || "";
        if (ff.toLowerCase().indexOf("sans-serif") === -1) return { ok: false, msg: "La pila de fuentes del texto debe terminar en la familia genérica sans-serif." };
        var cs = win.getComputedStyle(p);
        var lh = parseFloat(cs.lineHeight);
        var fs = parseFloat(cs.fontSize);
        if (isNaN(lh) || isNaN(fs) || lh / fs < 1.2) return { ok: false, msg: "Falta un line-height mayor que el normal en los párrafos (por ejemplo 1.5)." };
        var sinUnidad = false;
        for (var i = 0; i < doc.styleSheets.length; i++) {
          var reglas;
          try { reglas = doc.styleSheets[i].cssRules; } catch (e) { continue; }
          for (var j = 0; j < reglas.length; j++) {
            var v = reglas[j].style && reglas[j].style.getPropertyValue("line-height");
            if (v && /^\s*[0-9.]+\s*$/.test(v)) sinUnidad = true;
          }
        }
        if (!sinUnidad) return { ok: false, msg: "Usa el line-height sin unidad (1.5, no 24px ni 150%)." };
        if (win.getComputedStyle(h1).textAlign !== "center") return { ok: false, msg: "El título h1 aún no está centrado (text-align: center)." };
        for (var k = 0; k < enlaces.length; k++) {
          if (win.getComputedStyle(enlaces[k]).textDecorationLine !== "none") return { ok: false, msg: "Algún enlace sigue subrayado: usa text-decoration: none." };
        }
        return { ok: true, msg: "¡Correcto! Pila sans-serif, line-height sin unidad, título centrado y enlaces sin subrayado." };
      } catch (e) {
        return { ok: false, msg: "No se pudo comprobar el resultado: revisa que el CSS sea válido." };
      }
    }
  },
  preguntas: [
    {
      tipo: "opcion",
      enunciado: "¿Dónde se coloca la familia genérica en una pila de `font-family`?",
      codigo: `body {
  font-family: "Georgia", serif;
}`,
      lenguaje: "css",
      opciones: ["Al final, como respaldo si no está ninguna de las anteriores", "Al principio, para que tenga prioridad", "Entre comillas y en medio de la lista", "No se puede combinar con fuentes concretas"],
      correcta: 0,
      explicacion: "El navegador prueba las fuentes en orden; la genérica va la última y sin comillas para garantizar que siempre haya una fuente de ese tipo."
    },
    {
      tipo: "opcion",
      enunciado: "¿Qué valor numérico equivale a `font-weight: bold`?",
      opciones: ["400", "700", "900", "100"],
      correcta: 1,
      explicacion: "`normal` es 400 y `bold` es 700. 100 es el más fino y 900 el más grueso."
    },
    {
      tipo: "opcion",
      enunciado: "¿Cuál de estas declaraciones del atajo `font` es válida?",
      opciones: ["`font: bold 16px;`", "`font: Arial, sans-serif;`", "`font: italic bold 16px/1.5 Arial, sans-serif;`", "`font: 16px bold Arial;`"],
      correcta: 2,
      explicacion: "El atajo exige tamaño y familia, y el orden es style, weight, size/line-height, family. La primera no tiene familia, la segunda no tiene tamaño y la última pone el peso después del tamaño."
    },
    {
      tipo: "opcion",
      enunciado: "¿Qué `line-height` es la opción recomendada para que el interlineado se adapte al tamaño de fuente?",
      opciones: ["`line-height: 24px`", "`line-height: 150%`", "`line-height: 1.5em`", "`line-height: 1.5`"],
      correcta: 3,
      explicacion: "El valor sin unidad se multiplica por el tamaño de fuente de cada elemento hijo. Con `px`, `%` o `em` el valor se calcula en el padre y se hereda ya resuelto."
    },
    {
      tipo: "opcion",
      enunciado: "¿Cómo se quita el subrayado de los enlaces?",
      opciones: ["`a { text-style: none; }`", "`a { text-decoration: none; }`", "`a { font-style: none; }`", "`a { underline: false; }`"],
      correcta: 1,
      explicacion: "El subrayado lo controla `text-decoration`. Las otras propiedades no existen o no hacen eso (`font-style` es para cursiva)."
    },
    {
      tipo: "opcion",
      enunciado: "¿Cuál es el orden recomendado de las pseudoclases de enlace?",
      opciones: ["`:hover`, `:active`, `:link`, `:visited`", "`:active`, `:hover`, `:visited`, `:link`", "`:link`, `:visited`, `:focus`, `:hover`, `:active`", "`:visited`, `:link`, `:active`, `:hover`"],
      correcta: 2,
      explicacion: "LoVe HAte: link, visited, hover, active, con `:focus` antes de `:hover`. Todas tienen la misma especificidad y gana la última; si `:link` va después de `:hover`, lo anula."
    },
    {
      tipo: "opcion",
      enunciado: "¿Qué hace `text-shadow: 2px 3px 4px gray`?",
      opciones: ["Sombra de 2px de grosor y 3px de altura", "Sombra desplazada 3px a la derecha y 2px hacia abajo", "Sombra desplazada 2px a la derecha, 3px hacia abajo, con 4px de desenfoque y color gris", "Sombra con 2px de desenfoque y 4px de expansión"],
      correcta: 2,
      explicacion: "El orden es desplazamiento x, desplazamiento y, desenfoque (opcional) y color. `text-shadow` no tiene valor de expansión (eso es de `box-shadow`)."
    },
    {
      tipo: "opcion",
      enunciado: "¿Qué hace `list-style: none` en una lista `<ul>`?",
      opciones: ["Quita las viñetas, pero no el `padding` por defecto de la lista", "Quita las viñetas y también el `padding` y el `margin`", "Convierte la lista en inline", "Elimina los elementos `<li>` de la página"],
      correcta: 0,
      explicacion: "Solo afecta a las viñetas (tipo, posición e imagen). El `padding-left` que trae `<ul>` hay que quitarlo aparte con `padding: 0`."
    },
    {
      tipo: "completar",
      enunciado: "Escribe la declaración CSS que centra el texto de un elemento.",
      respuestas: ["text-align: center", "text-align:center"],
      explicacion: "`text-align: center` centra el contenido en línea dentro de su contenedor de bloque."
    },
    {
      tipo: "completar",
      enunciado: "Escribe la propiedad CSS que permite definir una fuente propia con `src: url()` (la regla empieza por @).",
      respuestas: ["@font-face", "font-face"],
      explicacion: "`@font-face` define un nombre de fuente y el archivo desde el que se carga (`src: url() format()`)."
    }
  ]
});

/* ===================== 16 · FONDOS, BORDES Y TAMAÑO ===================== */
window.CURSO.modulos.push({
  id: "css-fondos",
  orden: 16,
  area: "CSS",
  nivel: "Intermedio",
  titulo: "Fondos, bordes y tamaño",
  resumen: "Cómo dar color, imágenes y degradados de fondo, añadir bordes y sombras, y controlar el tamaño de las cajas y su desbordamiento.",
  mdn: "https://developer.mozilla.org/es/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders",
  conceptos: [
    {
      titulo: "Color e imagen de fondo",
      texto: "`background-color` pone un color sólido y `background-image` una imagen con `url()` o un degradado. Los degradados (gradients) son imágenes generadas por CSS, no necesitan archivo.",
      puntos: [
        "`background-image: url(\"foto.jpg\")` carga una imagen",
        "`linear-gradient(dirección, color1, color2)`: por ejemplo `to right` o `45deg`",
        "`radial-gradient(color1, color2)` parte desde el centro",
        "Se pueden poner varias imágenes separadas por comas: la primera queda encima"
      ],
      codigo: `.caja {
  background-color: #fde68a;
  background-image: linear-gradient(to right, #f97316, #facc15);
}
.radial {
  background-image: radial-gradient(circle, white, #3b82f6);
}`,
      lenguaje: "css",
      ojo: "Una imagen de fondo tapa el `background-color`, que solo se ve como respaldo si la imagen no carga o tiene transparencias."
    },
    {
      titulo: "Repetición, posición, tamaño y fijación",
      texto: "Una imagen de fondo se repite por defecto. Con `background-repeat`, `background-position`, `background-size` y `background-attachment` controlas cómo se coloca y escala.",
      puntos: [
        "`background-repeat`: `repeat` (defecto), `no-repeat`, `repeat-x`, `repeat-y`",
        "`background-position: center` o `top right`",
        "`background-size: cover` rellena todo recortando; `contain` muestra la imagen entera sin recortar",
        "`background-attachment: fixed` mantiene la imagen fija al hacer scroll (`scroll` es el valor por defecto)"
      ],
      codigo: `.hero {
  background-image: url("playa.jpg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}`,
      lenguaje: "css",
      ojo: "`cover` puede recortar parte de la imagen; `contain` puede dejar huecos vacíos en la caja, que se repetirán si no pones `no-repeat`."
    },
    {
      titulo: "Atajo background y accesibilidad",
      texto: "El atajo `background` agrupa todas las propiedades de fondo. Por accesibilidad, una imagen de fondo no tiene texto alternativo: si la imagen transmite información, es mejor usar un `<img>` con `alt`.",
      puntos: [
        "En el atajo, el color de fondo va al final (en la última capa)",
        "Ejemplo: `background: url(a.png) no-repeat center / cover #eee;`",
        "Las imágenes decorativas pueden ser fondos; las que aportan contenido, `<img alt=\"...\">`"
      ],
      codigo: `.banner {
  background: url("logo.png") no-repeat center / contain #eee;
}`,
      lenguaje: "css",
      ojo: "Un texto sobre una imagen de fondo debe mantener buen contraste; y si el fondo no carga, el texto debe seguir leyéndose con el color de respaldo."
    },
    {
      titulo: "Bordes y esquinas redondeadas",
      texto: "`border` es el atajo de ancho, estilo y color. El estilo es obligatorio: sin él no se ve el borde (el valor por defecto es `none`). `border-radius` redondea las esquinas.",
      puntos: [
        "`border: 2px solid #333;` (ancho, estilo, color)",
        "Lados individuales: `border-top`, `border-right`, `border-bottom`, `border-left`",
        "`border-radius: 8px` redondea; `50%` en un elemento cuadrado lo convierte en círculo"
      ],
      codigo: `.tarjeta {
  border: 2px solid #334155;
  border-bottom: 4px dashed #ef4444;
  border-radius: 12px;
}
.avatar {
  width: 80px;
  height: 80px;
  border-radius: 50%;
}`,
      lenguaje: "css",
      ojo: "`border: 5px red;` no muestra nada: falta el estilo (`solid`, `dashed`...). Y `50%` solo da un círculo si el elemento es cuadrado; si no, es una elipse."
    },
    {
      titulo: "Sombras de caja: box-shadow",
      texto: "`box-shadow` añade una sombra alrededor de la caja del elemento sin cambiar su tamaño ni el diseño.",
      puntos: [
        "Orden: desplazamiento x, desplazamiento y, desenfoque, expansión y color",
        "`box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.3);`",
        "`inset` la dibuja dentro de la caja"
      ],
      codigo: `.tarjeta {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
}
.hundido {
  box-shadow: inset 0 2px 6px rgba(0, 0, 0, 0.4);
}`,
      lenguaje: "css",
      ojo: "No confundas `box-shadow` (caja, admite expansión e `inset`) con `text-shadow` (texto, sin expansión)."
    },
    {
      titulo: "Tamaño: width, height y límites",
      texto: "`width` y `height` fijan el tamaño del contenido de una caja. Con `min-` y `max-` pones límites para que el elemento se adapte sin pasarse.",
      puntos: [
        "`max-width: 600px` evita que la caja crezca más; si hay menos espacio se encoge",
        "`min-width` y `min-height` fijan un mínimo",
        "`max-height` limita la altura",
        "Un `width` fijo no se adapta a pantallas pequeñas; `max-width` sí"
      ],
      codigo: `.contenedor {
  width: 90%;
  max-width: 600px;
  min-height: 200px;
}`,
      lenguaje: "css",
      ojo: "Una `height` fija es peligrosa: si el contenido no cabe, se sale de la caja. Mejor `min-height`."
    },
    {
      titulo: "Desbordamiento (overflow) y object-fit",
      texto: "Cuando el contenido no cabe en una caja de tamaño fijo, se desborda. `overflow` decide qué hacer. Para imágenes `<img>` con un tamaño fijo, `object-fit` controla cómo se ajusta la imagen a la caja.",
      puntos: [
        "`overflow: visible` (por defecto): el contenido se sale de la caja",
        "`hidden` recorta; `scroll` pone barras siempre; `auto` solo si hace falta",
        "`overflow-x` y `overflow-y` controlan cada eje por separado",
        "`object-fit: cover` rellena recortando; `contain` muestra la imagen entera"
      ],
      codigo: `.caja {
  height: 100px;
  overflow: auto;
}
img.foto {
  width: 200px;
  height: 120px;
  object-fit: cover;
}`,
      lenguaje: "css",
      ojo: "`object-fit` es para elementos reemplazados como `<img>`; `background-size` es para imágenes de fondo. Cada uno tiene su equivalente de `cover` y `contain`."
    }
  ],
  chuleta: [
    ["background-image", "Imagen (`url()`) o degradado como fondo."],
    ["linear-gradient()", "Degradado lineal: dirección + colores (`to right, red, blue`)."],
    ["Varias imágenes de fondo", "Separadas por comas; la primera queda encima."],
    ["background-repeat", "`repeat` (defecto), `no-repeat`, `repeat-x`, `repeat-y`."],
    ["background-size", "`cover` rellena recortando; `contain` cabe entera."],
    ["background-attachment", "`scroll` (defecto) o `fixed` (no se mueve al hacer scroll)."],
    ["background (atajo)", "Todo en uno; el color va al final."],
    ["border", "Ancho + estilo + color; el estilo es obligatorio."],
    ["border-radius", "Esquinas redondeadas; `50%` en cuadrado = círculo."],
    ["box-shadow", "x y desenfoque expansión color; `inset` dentro."],
    ["max-width", "Límite superior de ancho; la caja se adapta si hay menos espacio."],
    ["overflow", "`visible` (defecto), `hidden`, `scroll`, `auto`."],
    ["object-fit", "Ajuste de `<img>` a su caja: `cover` o `contain`."]
  ],
  ejemplo: {
    consigna: "Cambia las direcciones y colores del degradado, prueba `box-shadow: inset`, y reduce la altura de `.caja` para ver el efecto de los distintos valores de `overflow`.",
    html: `<div class="tarjeta">
  <h2>Tarjeta</h2>
  <p>Fondo con degradado, borde redondeado y sombra.</p>
</div>
<div class="caja">
  Esta caja tiene una altura fija pequeña y mucho texto para que se desborde. Prueba overflow: hidden, scroll y auto para ver la diferencia entre ellos. Sigue habiendo más texto para asegurar que no cabe.
</div>`,
    css: `.tarjeta {
  max-width: 320px;
  padding: 16px;
  margin-bottom: 16px;
  color: white;
  background-image: linear-gradient(to right, #6366f1, #ec4899);
  border: 3px solid #1e1b4b;
  border-radius: 16px;
  box-shadow: 4px 6px 12px rgba(0, 0, 0, 0.35);
}
.caja {
  width: 260px;
  height: 60px;
  padding: 8px;
  background: #fef9c3;
  border: 2px dashed #ca8a04;
  overflow: visible;
}`
  },
  reto: {
    enunciado: "Convierte `.tarjeta` en una tarjeta con esquinas redondeadas (`border-radius`), una sombra (`box-shadow`), un fondo con degradado (`linear-gradient` o `radial-gradient`) y un `max-width` para que no se estire demasiado.",
    pista: "El degradado se pone en `background-image` (o en el atajo `background`); no es un `background-color`.",
    html: `<div class="tarjeta">
  <h2>Oferta de verano</h2>
  <p>Escápate a la playa con un 20% de descuento.</p>
</div>`,
    css: `.tarjeta {
  padding: 16px;
  border: 1px solid #94a3b8;
  background-color: #e2e8f0;
}`,
    solucion: {
      html: `<div class="tarjeta">
  <h2>Oferta de verano</h2>
  <p>Escápate a la playa con un 20% de descuento.</p>
</div>`,
      css: `.tarjeta {
  max-width: 400px;
  padding: 16px;
  border: 1px solid #94a3b8;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  background-image: linear-gradient(to right, #bae6fd, #e0e7ff);
}`
    },
    validar: function (doc, win) {
      try {
        var el = doc.querySelector(".tarjeta");
        if (!el) return { ok: false, msg: "No encuentro .tarjeta (no cambies las clases)." };
        var cs = win.getComputedStyle(el);
        if (cs.borderTopLeftRadius === "0px") return { ok: false, msg: "Faltan las esquinas redondeadas (border-radius)." };
        if (cs.boxShadow === "none") return { ok: false, msg: "Falta la sombra (box-shadow)." };
        if (cs.backgroundImage.indexOf("gradient") === -1) return { ok: false, msg: "Falta el degradado en background-image (linear-gradient o radial-gradient)." };
        if (cs.maxWidth === "none") return { ok: false, msg: "Falta limitar el ancho con max-width." };
        return { ok: true, msg: "¡Correcto! Tarjeta con borde redondeado, sombra, degradado y ancho máximo." };
      } catch (e) {
        return { ok: false, msg: "No se pudo comprobar el resultado: revisa que el CSS sea válido." };
      }
    }
  },
  preguntas: [
    {
      tipo: "opcion",
      enunciado: "¿Por qué no se ve el borde con esta regla?",
      codigo: `.caja {
  border: 4px red;
}`,
      lenguaje: "css",
      opciones: ["Porque falta el estilo del borde (por ejemplo `solid`)", "Porque 4px es demasiado grueso", "Porque `red` no es un color válido en bordes", "Porque `border` solo funciona con `border-radius`"],
      correcta: 0,
      explicacion: "El valor por defecto de `border-style` es `none`. Sin escribir un estilo (`solid`, `dashed`...), no se dibuja el borde aunque haya ancho y color."
    },
    {
      tipo: "opcion",
      enunciado: "¿Qué diferencia hay entre `background-size: cover` y `contain`?",
      opciones: ["`cover` repite la imagen y `contain` no", "`cover` rellena toda la caja pudiendo recortar la imagen; `contain` la muestra entera aunque queden huecos", "`cover` muestra la imagen entera y `contain` la recorta", "Ninguna, son sinónimos"],
      correcta: 1,
      explicacion: "`cover` escala la imagen hasta cubrir toda la caja (puede recortarla); `contain` la escala hasta que quepa entera (puede dejar espacios)."
    },
    {
      tipo: "opcion",
      enunciado: "En `background-image: url(a.png), url(b.png)`, ¿qué imagen queda encima?",
      opciones: ["`b.png`, la última", "Ninguna: solo se usa una", "Depende del `z-index`", "`a.png`, la primera de la lista"],
      correcta: 3,
      explicacion: "Con varias imágenes de fondo la primera de la lista queda encima y las siguientes quedan detrás. No intervienen `z-index` ni nada más."
    },
    {
      tipo: "opcion",
      enunciado: "En el atajo `background`, ¿dónde va el color de fondo?",
      opciones: ["Siempre al principio", "Al final (en la última capa)", "Entre la imagen y la posición", "Es obligatorio ponerlo en otra propiedad aparte"],
      correcta: 1,
      explicacion: "Con atajo, el color de fondo se escribe al final, después de imagen, repetición, posición y tamaño: `background: url(a.png) no-repeat center / cover #eee;`."
    },
    {
      tipo: "opcion",
      enunciado: "¿Qué valor de `overflow` es el predeterminado?",
      opciones: ["`hidden`", "`auto`", "`visible`", "`scroll`"],
      correcta: 2,
      explicacion: "Por defecto el contenido que no cabe se sale de la caja y se ve (`visible`). `hidden` lo recorta, `scroll` pone barras siempre y `auto` solo cuando hace falta."
    },
    {
      tipo: "opcion",
      enunciado: "¿Cómo conviertes en círculo un `<div>` de 100px por 100px con fondo de color?",
      opciones: ["`border-radius: 50%`", "`border-style: circle`", "`display: circle`", "`border-radius: 0`"],
      correcta: 0,
      explicacion: "Un `border-radius` del 50% redondea cada esquina hasta la mitad del lado y, en un elemento cuadrado, da un círculo. Los otros valores no existen o no redondean."
    },
    {
      tipo: "opcion",
      enunciado: "¿Qué significa cada valor en `box-shadow: 2px 4px 8px 1px black`?",
      opciones: ["Color, desenfoque, x, y, expansión", "Blur, spread, x, y, color", "x, y, desenfoque, expansión y color", "x, y, expansión, desenfoque y color"],
      correcta: 2,
      explicacion: "El orden es desplazamiento x, desplazamiento y, desenfoque (blur), expansión (spread) y color. `inset` es opcional y va al principio o al final."
    },
    {
      tipo: "opcion",
      enunciado: "Una caja tiene `height: 100px` y su contenido mide 300px. Sin tocar `overflow`, ¿qué ocurre?",
      opciones: ["La caja crece automáticamente hasta 300px", "El contenido se recorta", "Aparece una barra de scroll automáticamente", "El contenido se sale de la caja y se ve fuera de ella"],
      correcta: 3,
      explicacion: "Con `height` fija y `overflow: visible` por defecto, el contenido desborda visualmente la caja. Si no quieres eso, usa `min-height` o `overflow: auto/hidden`."
    },
    {
      tipo: "completar",
      enunciado: "Escribe la propiedad que limita el ancho máximo de una caja.",
      respuestas: ["max-width", "max-width:"],
      explicacion: "`max-width` hace que la caja crezca hasta ese límite y se encoja si hay menos espacio disponible."
    },
    {
      tipo: "completar",
      enunciado: "Escribe la propiedad que hace que una imagen `<img>` rellene su caja recortándose con `cover` (no `background-size`).",
      respuestas: ["object-fit", "object-fit:"],
      explicacion: "`object-fit` (con `cover` o `contain`) ajusta el contenido de un elemento reemplazado como `<img>`; `background-size` es solo para imágenes de fondo."
    }
  ]
});

/* ===================== 17 · POSICIONAMIENTO Y FLUJO ===================== */
window.CURSO.modulos.push({
  id: "css-position",
  orden: 17,
  area: "CSS",
  nivel: "Intermedio",
  titulo: "Posicionamiento y flujo",
  resumen: "Cómo se colocan los elementos en el flujo normal y cómo cambiarlo con position, z-index, floats y display.",
  mdn: "https://developer.mozilla.org/es/docs/Learn_web_development/Core/CSS_layout/Positioning",
  conceptos: [
    {
      titulo: "Flujo normal y display",
      texto: "En el flujo normal (normal flow) el navegador coloca los elementos uno tras otro según su tipo: los de bloque ocupan su propia línea y los inline se colocan en la línea de texto. La propiedad `display` cambia ese comportamiento.",
      puntos: [
        "`block`: ocupa todo el ancho y empieza en línea nueva; admite `width` y `height`",
        "`inline`: fluye con el texto; ignora `width` y `height`",
        "`inline-block`: en línea con el texto pero admite `width` y `height`",
        "`none`: el elemento desaparece y no ocupa espacio"
      ],
      codigo: `a.boton {
  display: inline-block;
  width: 120px;
  padding: 8px;
}
.oculto {
  display: none;
}`,
      lenguaje: "css",
      ojo: "`display: none` quita el elemento del diseño; `visibility: hidden` lo oculta pero conserva su hueco."
    },
    {
      titulo: "position: static y relative",
      texto: "`position` define cómo se coloca un elemento. `static` es el valor por defecto: sigue el flujo normal y `top`, `left`, etc. no tienen efecto. Con `relative` el elemento se desplaza respecto a su posición original y conserva su hueco en el flujo.",
      puntos: [
        "`static`: por defecto; ignora `top/right/bottom/left`",
        "`relative`: se desplaza desde su posición original; los demás elementos no se mueven, su hueco se mantiene",
        "Un elemento `relative` crea el contenedor de referencia para sus hijos `absolute`"
      ],
      codigo: `.caja {
  position: relative;
  top: 10px;
  left: 20px;
}`,
      lenguaje: "css",
      ojo: "Poner `top` o `left` en un elemento `static` no hace nada: hay que cambiar antes su `position`."
    },
    {
      titulo: "position: absolute",
      texto: "Un elemento `absolute` sale del flujo normal (no deja hueco) y se posiciona respecto al ancestro posicionado más cercano (el que tenga `position` distinto de `static`). Si no hay ninguno, se posiciona respecto al bloque contenedor inicial (initial containing block).",
      puntos: [
        "Sale del flujo: los hermanos ocupan su sitio",
        "Referencia: el ancestro posicionado más cercano",
        "Sin ancestro posicionado: el bloque contenedor inicial (la ventana/documento)",
        "Se usa con `top/right/bottom/left` y con `inset`"
      ],
      codigo: `.tarjeta {
  position: relative;
}
.insignia {
  position: absolute;
  top: 0;
  right: 0;
}`,
      lenguaje: "css",
      ojo: "Si olvidas `position: relative` en el padre, la insignia se colocará respecto a otro ancestro o a la página entera."
    },
    {
      titulo: "position: fixed y sticky",
      texto: "`fixed` coloca el elemento respecto al viewport (la ventana visible) y no se mueve al hacer scroll. `sticky` es un híbrido: se comporta como `relative` hasta que al hacer scroll alcanza un umbral y entonces se queda pegado como `fixed`.",
      puntos: [
        "`fixed`: respecto al viewport; sale del flujo; ideal para barras fijas",
        "`sticky`: necesita un umbral como `top` para funcionar",
        "`top`, `right`, `bottom`, `left` y su atajo `inset` fijan el desplazamiento"
      ],
      codigo: `.cabecera {
  position: sticky;
  top: 0;
}
.chat {
  position: fixed;
  bottom: 16px;
  right: 16px;
}`,
      lenguaje: "css",
      ojo: "Un `sticky` sin `top` (u otro umbral) se comporta como un elemento normal; no se queda pegado."
    },
    {
      titulo: "z-index y contexto de apilamiento",
      texto: "`z-index` decide qué elemento queda encima cuando se solapan. Solo funciona en elementos posicionados (cualquier `position` distinto de `static`) y en ítems de flex o grid. Los hijos quedan dentro del contexto de apilamiento (stacking context) de su padre.",
      puntos: [
        "Mayor `z-index` = más cerca del usuario",
        "Funciona con `relative`, `absolute`, `fixed`, `sticky` e ítems flex/grid",
        "Un hijo no puede salir del contexto de apilamiento de su padre, por muy alto que sea su `z-index`"
      ],
      codigo: `.fondo {
  position: relative;
  z-index: 1;
}
.encima {
  position: relative;
  z-index: 10;
}`,
      lenguaje: "css",
      ojo: "Si pones `z-index` en un elemento `static` (que no sea ítem flex/grid), no tiene ningún efecto."
    },
    {
      titulo: "Floats y clear",
      texto: "`float: left` o `float: right` saca el elemento hacia un lado y el texto lo rodea (como una imagen en un periódico). `clear` impide que un elemento quede junto a un float. Maquetar páginas con floats es una técnica antigua: hoy se usan Flexbox y Grid.",
      puntos: [
        "`float: left` / `right` y el texto fluye alrededor",
        "`clear: left | right | both` empuja el elemento por debajo del float",
        "Un contenedor con solo hijos flotantes se queda sin altura (colapsa)",
        "Solución moderna: `display: flow-root` en el contenedor (el clearfix era el truco antiguo)"
      ],
      codigo: `img.izq {
  float: left;
  margin-right: 12px;
}
.contenedor {
  display: flow-root;
}
.pie {
  clear: both;
}`,
      lenguaje: "css",
      ojo: "Los floats se pensaron para que el texto rodee imágenes; usarlos para maquetar columnas es obsoleto frente a Flexbox y Grid."
    }
  ],
  chuleta: [
    ["Flujo normal", "Elementos de bloque en vertical, inline en la línea de texto."],
    ["display", "`none`, `block`, `inline`, `inline-block`."],
    ["position: static", "Valor por defecto; `top/left` no tienen efecto."],
    ["position: relative", "Se desplaza desde su sitio original y conserva su hueco."],
    ["position: absolute", "Sale del flujo; respecto al ancestro posicionado más cercano."],
    ["position: fixed", "Respecto al viewport; no se mueve con el scroll."],
    ["position: sticky", "Híbrido relative/fixed; necesita `top` (u otro umbral)."],
    ["top / right / bottom / left", "Desplazamiento de elementos posicionados; `inset` es el atajo."],
    ["z-index", "Orden de apilamiento; solo en posicionados o ítems flex/grid."],
    ["float", "`left` / `right`: el texto rodea al elemento."],
    ["clear", "Impide quedar junto a un float (`left`, `right`, `both`)."],
    ["display: flow-root", "Hace que el contenedor contenga a sus floats."],
    ["Bloque contenedor inicial", "Referencia de un `absolute` sin ancestro posicionado."]
  ],
  ejemplo: {
    consigna: "Cambia la `position` de `.rojo` entre `static`, `relative` y `absolute` con `top` y `left`, y observa cómo cambia el hueco que deja. Prueba también `z-index`.",
    html: `<div class="contenedor">
  <div class="caja azul">Azul</div>
  <div class="caja rojo">Rojo</div>
  <div class="caja verde">Verde</div>
</div>`,
    css: `.contenedor {
  position: relative;
  height: 220px;
  border: 2px dashed #64748b;
  padding: 8px;
}
.caja {
  width: 100px;
  height: 60px;
  margin-bottom: 8px;
  color: white;
  text-align: center;
  line-height: 60px;
}
.azul { background: #2563eb; }
.rojo {
  background: #dc2626;
  position: relative;
  top: 20px;
  left: 40px;
  z-index: 2;
}
.verde { background: #16a34a; }`
  },
  reto: {
    enunciado: "Coloca la insignia (`.insignia`) en la esquina superior derecha de la tarjeta (`.tarjeta`): la tarjeta debe ser el contenedor de referencia (`position: relative`) y la insignia debe estar posicionada con `position: absolute`.",
    pista: "La tarjeta necesita `position: relative` y la insignia `position: absolute` con `top` y `right` (puede ser `0`).",
    html: `<div class="tarjeta">
  <span class="insignia">Nuevo</span>
  <h3>Viaje a Roma</h3>
  <p>Cinco días con vuelo incluido.</p>
</div>`,
    css: `.tarjeta {
  width: 280px;
  margin: 24px;
  padding: 16px;
  border: 2px solid #334155;
  background: #f1f5f9;
}
.insignia {
  background: #dc2626;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
}`,
    solucion: {
      html: `<div class="tarjeta">
  <span class="insignia">Nuevo</span>
  <h3>Viaje a Roma</h3>
  <p>Cinco días con vuelo incluido.</p>
</div>`,
      css: `.tarjeta {
  position: relative;
  width: 280px;
  margin: 24px;
  padding: 16px;
  border: 2px solid #334155;
  background: #f1f5f9;
}
.insignia {
  position: absolute;
  top: 0;
  right: 0;
  background: #dc2626;
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
}`
    },
    validar: function (doc, win) {
      try {
        var t = doc.querySelector(".tarjeta");
        var i = doc.querySelector(".insignia");
        if (!t || !i) return { ok: false, msg: "No encuentro .tarjeta o .insignia (no cambies las clases)." };
        if (win.getComputedStyle(t).position !== "relative") return { ok: false, msg: "La tarjeta debe ser el contenedor de referencia: position: relative." };
        if (win.getComputedStyle(i).position !== "absolute") return { ok: false, msg: "La insignia debe tener position: absolute." };
        var rt = t.getBoundingClientRect();
        var ri = i.getBoundingClientRect();
        var tol = 24;
        if (Math.abs(ri.top - rt.top) > tol) return { ok: false, msg: "La insignia no está arriba: usa top (por ejemplo top: 0)." };
        if (Math.abs(rt.right - ri.right) > tol) return { ok: false, msg: "La insignia no está a la derecha: usa right (por ejemplo right: 0)." };
        return { ok: true, msg: "¡Correcto! La insignia está en la esquina superior derecha de la tarjeta." };
      } catch (e) {
        return { ok: false, msg: "No se pudo comprobar el resultado: revisa que el CSS sea válido." };
      }
    }
  },
  preguntas: [
    {
      tipo: "opcion",
      enunciado: "¿Qué ocurre con `top: 20px` en un elemento con `position: static`?",
      opciones: ["No tiene ningún efecto", "Lo desplaza 20px hacia abajo", "Lo pega al borde superior de la ventana", "Lo saca del flujo normal"],
      correcta: 0,
      explicacion: "`static` es el valor por defecto y en él `top`, `right`, `bottom`, `left` y `z-index` no se aplican. Hay que cambiar la `position`."
    },
    {
      tipo: "opcion",
      enunciado: "¿Qué distingue a `position: relative` de `absolute`?",
      opciones: ["`relative` sale del flujo y `absolute` no", "`relative` se coloca respecto al viewport", "`relative` se desplaza desde su posición original y conserva su hueco; `absolute` sale del flujo", "No hay diferencia si se usa `top`"],
      correcta: 2,
      explicacion: "Un elemento `relative` mantiene su espacio en el flujo normal aunque se desplace visualmente. Un `absolute` deja de ocupar espacio y se coloca respecto al ancestro posicionado más cercano."
    },
    {
      tipo: "opcion",
      enunciado: "Un elemento `absolute` no tiene ningún ancestro posicionado. ¿Respecto a qué se coloca?",
      opciones: ["Respecto a su padre directo", "Respecto al `<body>`", "Respecto al viewport siempre, como `fixed`", "Respecto al bloque contenedor inicial"],
      correcta: 3,
      explicacion: "Sin ancestro posicionado, usa el bloque contenedor inicial (initial containing block). No es el padre directo salvo que este sea posicionado, y `fixed` es el que usa el viewport."
    },
    {
      tipo: "opcion",
      enunciado: "¿Qué comportamiento tiene `position: fixed`?",
      opciones: ["Se coloca respecto a su padre y se mueve con el scroll", "Se coloca respecto al viewport y no se mueve al hacer scroll", "Se queda pegado solo al superar un umbral", "Se comporta igual que `static`"],
      correcta: 1,
      explicacion: "`fixed` se posiciona respecto al viewport y permanece en el mismo sitio de la ventana aunque se haga scroll. El comportamiento del umbral es el de `sticky`."
    },
    {
      tipo: "opcion",
      enunciado: "¿Qué necesita `position: sticky` para funcionar?",
      opciones: ["Un `z-index` mayor que 1", "Un `float: left`", "Un umbral como `top: 0`", "Un `display: flex` en el padre"],
      correcta: 2,
      explicacion: "El elemento `sticky` se comporta como relativo hasta alcanzar el umbral definido (por ejemplo `top: 0`) y entonces se queda pegado. Sin umbral no se pega."
    },
    {
      tipo: "opcion",
      enunciado: "¿En qué elementos funciona `z-index`?",
      opciones: ["En todos los elementos", "Solo en elementos con `float`", "Solo en los `block`", "En elementos posicionados (no `static`) y en ítems de flex o grid"],
      correcta: 3,
      explicacion: "`z-index` solo se aplica a elementos posicionados y a ítems flex/grid. En un elemento `static` normal no hace nada."
    },
    {
      tipo: "opcion",
      enunciado: "Un contenedor solo tiene hijos con `float: left` y se queda con altura 0. ¿Qué solución moderna existe?",
      opciones: ["`display: flow-root` en el contenedor", "`float: none` en el contenedor", "`position: static` en los hijos", "`clear: left` en el contenedor"],
      correcta: 0,
      explicacion: "`display: flow-root` crea un contexto de formato de bloque que contiene los floats (reemplaza al antiguo clearfix). `clear` se aplica al elemento que queda debajo, no al contenedor."
    },
    {
      tipo: "opcion",
      enunciado: "Sobre los floats, ¿qué afirmación es correcta?",
      opciones: ["Son la técnica moderna recomendada para maquetar páginas", "Se pensaron para que el texto rodee una imagen; maquetar con ellos es una técnica antigua", "Mantienen al elemento en el flujo normal", "`clear` los convierte en `position: absolute`"],
      correcta: 1,
      explicacion: "Los floats sirven para que el texto rodee un elemento; el diseño de columnas con floats es la técnica antigua, hoy sustituida por Flexbox y Grid."
    },
    {
      tipo: "completar",
      enunciado: "Escribe la declaración que hace que un contenedor contenga a sus hijos flotantes sin usar clearfix.",
      respuestas: ["display: flow-root", "display:flow-root"],
      explicacion: "`display: flow-root` genera una caja que contiene sus floats."
    },
    {
      tipo: "completar",
      enunciado: "Escribe la declaración que impide que un elemento quede al lado de cualquier float, tanto a izquierda como a derecha.",
      respuestas: ["clear: both", "clear:both"],
      explicacion: "`clear: both` mueve el elemento por debajo de los floats izquierdos y derechos anteriores."
    }
  ]
});

/* ===================== 18 · FLEXBOX ===================== */
window.CURSO.modulos.push({
  id: "css-flexbox",
  orden: 18,
  area: "CSS",
  nivel: "Avanzado",
  titulo: "Flexbox",
  resumen: "Modelo de maquetación unidimensional para alinear y repartir el espacio entre elementos en una fila o una columna.",
  mdn: "https://developer.mozilla.org/es/docs/Learn_web_development/Core/CSS_layout/Flexbox",
  conceptos: [
    {
      titulo: "Contenedor flex e ítems flex",
      texto: "Flexbox (Flexible Box Layout) es un modelo unidimensional: coloca elementos en una sola dimensión (fila o columna). Con `display: flex` (o `inline-flex`) en un elemento, este se convierte en contenedor flex y sus hijos directos en ítems flex.",
      puntos: [
        "`display: flex` crea un contenedor de bloque; `inline-flex` uno en línea",
        "Solo los hijos directos son ítems flex, no los nietos",
        "Por defecto los ítems se colocan en fila"
      ],
      codigo: `.contenedor {
  display: flex;
}`,
      lenguaje: "css",
      ojo: "Las propiedades de los ítems (`flex`, `order`, `align-self`) solo funcionan si el padre directo es un contenedor flex."
    },
    {
      titulo: "Eje principal y transversal: flex-direction",
      texto: "Flexbox tiene un eje principal (main axis) y un eje transversal (cross axis), perpendicular a él. `flex-direction` define cuál es el eje principal y el sentido.",
      puntos: [
        "`row` (por defecto): principal horizontal, de izquierda a derecha",
        "`row-reverse`: horizontal en sentido inverso",
        "`column`: principal vertical, de arriba a abajo",
        "`column-reverse`: vertical en sentido inverso",
        "Con `column` los ejes se intercambian: el principal es vertical y el transversal horizontal"
      ],
      codigo: `.contenedor {
  display: flex;
  flex-direction: column;
}`,
      lenguaje: "css",
      ojo: "Al cambiar a `column`, `justify-content` pasa a actuar en vertical y `align-items` en horizontal."
    },
    {
      titulo: "Varias líneas: flex-wrap y flex-flow",
      texto: "Por defecto los ítems intentan caber en una sola línea (se encogen). Con `flex-wrap: wrap` pasan a una nueva línea cuando no caben. `flex-flow` es el atajo de `flex-direction` y `flex-wrap`.",
      puntos: [
        "`flex-wrap`: `nowrap` (defecto), `wrap`, `wrap-reverse`",
        "`flex-flow: row wrap;` equivale a las dos propiedades",
        "`gap` pone espacio entre ítems (filas y columnas)"
      ],
      codigo: `.contenedor {
  display: flex;
  flex-flow: row wrap;
  gap: 16px;
}`,
      lenguaje: "css",
      ojo: "Sin `flex-wrap: wrap`, los ítems no saltan de línea: se encogen y pueden desbordarse."
    },
    {
      titulo: "justify-content: alinear en el eje principal",
      texto: "`justify-content` reparte el espacio libre a lo largo del eje principal.",
      puntos: [
        "`flex-start` (por defecto): al inicio; `flex-end`: al final; `center`: centrado",
        "`space-between`: primer y último pegados a los extremos, espacio igual entre ítems",
        "`space-around`: espacio igual alrededor de cada ítem (los extremos tienen la mitad)",
        "`space-evenly`: espacio exactamente igual entre ítems y en los extremos"
      ],
      codigo: `.barra {
  display: flex;
  justify-content: space-between;
}`,
      lenguaje: "css",
      ojo: "`justify-content` actúa en el eje principal, que no siempre es el horizontal (depende de `flex-direction`)."
    },
    {
      titulo: "align-items y align-content: eje transversal",
      texto: "`align-items` alinea los ítems en el eje transversal dentro de su línea. `align-content` reparte las líneas entre sí cuando hay varias (con `flex-wrap`).",
      puntos: [
        "`align-items`: `stretch` (por defecto), `flex-start`, `flex-end`, `center`, `baseline`",
        "`stretch` estira los ítems a la altura del contenedor si no tienen alto fijo",
        "`align-content` solo tiene efecto si hay varias líneas",
        "`align-self` en un ítem sobrescribe `align-items` solo para ese ítem"
      ],
      codigo: `.contenedor {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: space-between;
}
.especial {
  align-self: flex-end;
}`,
      lenguaje: "css",
      ojo: "`align-content` no hace nada con una sola línea: ahí se usa `align-items`."
    },
    {
      titulo: "Dimensionar ítems: flex-grow, flex-shrink, flex-basis y flex",
      texto: "Estas propiedades de los ítems definen cuánto crecen, encogen y su tamaño base. `flex` las agrupa en un atajo: grow shrink basis.",
      puntos: [
        "`flex-grow`: cuánto crece para ocupar el espacio libre (0 por defecto)",
        "`flex-shrink`: cuánto se encoge si falta espacio (1 por defecto)",
        "`flex-basis`: tamaño inicial antes de repartir (`auto` por defecto)",
        "`flex: 1` equivale a `1 1 0`; `flex: auto` a `1 1 auto`; `flex: none` a `0 0 auto`"
      ],
      codigo: `.item {
  flex: 1;
}
.fijo {
  flex: none;
  width: 120px;
}`,
      lenguaje: "css",
      ojo: "Con `flex: 1` en todos los ítems, todos tienen el mismo tamaño (parten de base 0); con `flex: auto` se reparte el espacio sobrante a partir de su tamaño."
    },
    {
      titulo: "order y centrado perfecto",
      texto: "`order` cambia el orden visual de los ítems (por defecto 0; se colocan de menor a mayor). Centrar un elemento en horizontal y vertical es trivial con `justify-content: center` y `align-items: center`.",
      puntos: [
        "`order: -1` lo pone el primero visualmente",
        "`order` no cambia el orden del DOM: lectores de pantalla y navegación con teclado siguen el orden del HTML",
        "Centrado perfecto: `justify-content: center` + `align-items: center` (con altura en el contenedor)"
      ],
      codigo: `.centrado {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
}
.primero {
  order: -1;
}`,
      lenguaje: "css",
      ojo: "Cambiar el orden visual con `order` puede confundir a quien navega con teclado o lector de pantalla, porque su orden sigue siendo el del HTML."
    }
  ],
  chuleta: [
    ["display: flex", "Convierte al elemento en contenedor flex; sus hijos directos son ítems."],
    ["flex-direction", "`row` (defecto), `row-reverse`, `column`, `column-reverse`."],
    ["Eje principal / transversal", "Main axis según `flex-direction`; cross axis perpendicular."],
    ["flex-wrap", "`nowrap` (defecto), `wrap`, `wrap-reverse`."],
    ["flex-flow", "Atajo de `flex-direction` y `flex-wrap`."],
    ["justify-content", "Reparte los ítems en el eje principal."],
    ["align-items", "Alinea en el eje transversal; por defecto `stretch`."],
    ["align-content", "Reparte las líneas en el eje transversal (con varias líneas)."],
    ["gap", "Espacio entre ítems."],
    ["flex-grow", "Cuánto crece un ítem con el espacio libre."],
    ["flex-shrink", "Cuánto se encoge un ítem si falta espacio."],
    ["flex-basis", "Tamaño base del ítem antes de crecer o encoger."],
    ["flex: 1", "Equivale a `1 1 0`; ítems de igual tamaño."],
    ["align-self", "Alineación transversal de un solo ítem."],
    ["order", "Orden visual; no cambia el orden del DOM."]
  ],
  ejemplo: {
    consigna: "Cambia `flex-direction` a `column`, prueba valores de `justify-content` y `align-items`, y pon `flex: 1` o `order` en algún ítem para ver cómo se reparte el espacio.",
    html: `<div class="contenedor">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item grande">3</div>
</div>`,
    css: `.contenedor {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
  height: 160px;
  padding: 8px;
  background: #e2e8f0;
  border: 2px solid #64748b;
}
.item {
  width: 70px;
  padding: 12px;
  background: #3b82f6;
  color: white;
  text-align: center;
}
.grande {
  height: 100px;
  background: #ef4444;
}`
  },
  reto: {
    enunciado: "Construye una barra de navegación con Flexbox: `.barra` debe ser un contenedor flex con el logo (`.logo`) a la izquierda y los enlaces (`.enlaces`) a la derecha, todo centrado verticalmente, y con espacio entre los enlaces.",
    pista: "Usa `display: flex`, `justify-content: space-between` y `align-items: center` en `.barra`; los enlaces dentro de `.enlaces` también deben ir en fila con `gap` o margen.",
    html: `<nav class="barra">
  <span class="logo">MiLogo</span>
  <ul class="enlaces">
    <li><a href="#">Inicio</a></li>
    <li><a href="#">Destinos</a></li>
    <li><a href="#">Contacto</a></li>
  </ul>
</nav>`,
    css: `.barra {
  padding: 8px 16px;
  background: #1e293b;
  color: white;
}
.logo {
  font-weight: bold;
}
.enlaces {
  margin: 0;
  padding: 0;
  list-style: none;
}
.enlaces a {
  color: #e2e8f0;
  text-decoration: none;
}`,
    solucion: {
      html: `<nav class="barra">
  <span class="logo">MiLogo</span>
  <ul class="enlaces">
    <li><a href="#">Inicio</a></li>
    <li><a href="#">Destinos</a></li>
    <li><a href="#">Contacto</a></li>
  </ul>
</nav>`,
      css: `.barra {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  background: #1e293b;
  color: white;
}
.logo {
  font-weight: bold;
}
.enlaces {
  display: flex;
  gap: 16px;
  margin: 0;
  padding: 0;
  list-style: none;
}
.enlaces a {
  color: #e2e8f0;
  text-decoration: none;
}`
    },
    validar: function (doc, win) {
      try {
        var barra = doc.querySelector(".barra");
        var logo = doc.querySelector(".logo");
        var enlaces = doc.querySelectorAll(".enlaces a");
        if (!barra || !logo || enlaces.length < 2) return { ok: false, msg: "No encuentro .barra, .logo o los enlaces (no cambies la estructura ni las clases)." };
        var cs = win.getComputedStyle(barra);
        if (cs.display !== "flex" && cs.display !== "inline-flex") return { ok: false, msg: "La barra aún no es un contenedor flex (display: flex)." };
        var rb = barra.getBoundingClientRect();
        var rl = logo.getBoundingClientRect();
        var ultimo = enlaces[enlaces.length - 1].getBoundingClientRect();
        if (rl.left - rb.left > 40) return { ok: false, msg: "El logo debe quedar a la izquierda de la barra." };
        if (rb.right - ultimo.right > 40) return { ok: false, msg: "El último enlace debe quedar a la derecha (prueba justify-content: space-between)." };
        var centrado = cs.alignItems === "center" || Math.abs((rl.top + rl.height / 2) - (rb.top + rb.height / 2)) < 3;
        if (!centrado) return { ok: false, msg: "Falta centrar verticalmente con align-items: center." };
        var primero = enlaces[0].getBoundingClientRect();
        var segundo = enlaces[1].getBoundingClientRect();
        var mismaFila = Math.abs(primero.top - segundo.top) < 5;
        if (!mismaFila) return { ok: false, msg: "Los enlaces deben ir en fila: haz flex también el contenedor .enlaces." };
        if (segundo.left - primero.right < 4) return { ok: false, msg: "Falta espacio entre los enlaces (gap o margen)." };
        return { ok: true, msg: "¡Correcto! Logo a la izquierda, enlaces a la derecha, centrado vertical y con espacio entre enlaces." };
      } catch (e) {
        return { ok: false, msg: "No se pudo comprobar el resultado: revisa que el CSS sea válido." };
      }
    }
  },
  preguntas: [
    {
      tipo: "opcion",
      enunciado: "¿Qué elementos se convierten en ítems flex al poner `display: flex` en un contenedor?",
      opciones: ["Todos los descendientes", "Solo sus hijos directos", "Solo los `<div>`", "Solo los que tienen `flex` declarado"],
      correcta: 1,
      explicacion: "Solo los hijos directos del contenedor son ítems flex. Los nietos siguen su flujo normal salvo que su padre también sea flex."
    },
    {
      tipo: "opcion",
      enunciado: "Con `flex-direction: column`, ¿qué propiedad alinea los ítems en horizontal?",
      opciones: ["`justify-content`", "`align-content`", "`align-items`", "`flex-wrap`"],
      correcta: 2,
      explicacion: "Con `column` el eje principal es vertical y el transversal horizontal. `justify-content` actúa en el principal (vertical) y `align-items` en el transversal (horizontal)."
    },
    {
      tipo: "opcion",
      enunciado: "¿Qué reparte el espacio libre dejando espacio igual entre ítems y en los extremos?",
      opciones: ["`space-between`", "`space-around`", "`center`", "`space-evenly`"],
      correcta: 3,
      explicacion: "`space-evenly` deja el mismo espacio entre ítems y en los extremos. `space-between` pega los extremos y `space-around` deja medio espacio en los extremos."
    },
    {
      tipo: "opcion",
      enunciado: "¿Cuál es el valor por defecto de `align-items`?",
      opciones: ["`stretch`", "`flex-start`", "`center`", "`baseline`"],
      correcta: 0,
      explicacion: "Por defecto `align-items: stretch` estira los ítems en el eje transversal hasta llenar el contenedor (si no tienen alto fijo)."
    },
    {
      tipo: "opcion",
      enunciado: "¿A qué equivale `flex: 1`?",
      opciones: ["`0 0 auto`", "`1 1 0`", "`1 0 auto`", "`0 1 0`"],
      correcta: 1,
      explicacion: "`flex: 1` equivale a `flex-grow: 1; flex-shrink: 1; flex-basis: 0`. `none` es `0 0 auto`."
    },
    {
      tipo: "opcion",
      enunciado: "¿Cuándo tiene efecto `align-content`?",
      opciones: ["Siempre, con cualquier número de líneas", "Solo con `flex-direction: row`", "Cuando hay varias líneas, por ejemplo con `flex-wrap: wrap`", "Solo en ítems con `align-self`"],
      correcta: 2,
      explicacion: "`align-content` reparte las líneas en el eje transversal, así que necesita más de una línea (con `flex-wrap`). Con una sola línea se usa `align-items`."
    },
    {
      tipo: "opcion",
      enunciado: "¿Qué ocurre con el orden de lectura (lector de pantalla y teclado) al usar `order`?",
      opciones: ["Cambia igual que el orden visual", "Se invierte siempre", "No cambia: sigue el orden del DOM, aunque el visual sea otro", "Depende del valor de `gap`"],
      correcta: 2,
      explicacion: "`order` solo cambia el orden visual. Lectores de pantalla y tabulación siguen el orden del código HTML, lo que puede ser confuso."
    },
    {
      tipo: "opcion",
      enunciado: "¿Qué hace `flex-wrap: wrap`?",
      opciones: ["Hace que los ítems se encojan siempre", "Cambia el eje principal a vertical", "Reparte el espacio entre ítems", "Permite que los ítems pasen a una nueva línea si no caben"],
      correcta: 3,
      explicacion: "Por defecto (`nowrap`) todos los ítems van en una línea y se encogen. Con `wrap` pasan a una nueva línea cuando no caben."
    },
    {
      tipo: "completar",
      enunciado: "Escribe las dos declaraciones que centran un ítem perfectamente en ambos ejes: primero la del eje principal (valor `center`). Escribe solo la propiedad.",
      respuestas: ["justify-content", "justify-content:"],
      explicacion: "`justify-content: center` centra en el eje principal; junto con `align-items: center` centra en el transversal."
    },
    {
      tipo: "completar",
      enunciado: "Escribe el atajo que pone `flex-grow: 0`, `flex-shrink: 0` y `flex-basis: auto` (ítem de tamaño fijo, sin crecer ni encoger).",
      respuestas: ["flex: none", "flex:none"],
      explicacion: "`flex: none` equivale a `0 0 auto`: el ítem mantiene su tamaño y no crece ni se encoge."
    }
  ]
});
