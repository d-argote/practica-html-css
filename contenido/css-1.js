window.CURSO = window.CURSO || { modulos: [] };

/* ============ 1. Fundamentos de CSS ============ */
window.CURSO.modulos.push({
  id: "css-intro",
  orden: 10,
  area: "CSS",
  nivel: "Básico",
  titulo: "Fundamentos de CSS",
  resumen: "CSS separa la presentación (colores, tipografía, layout) del contenido HTML mediante reglas que el navegador aplica al DOM.",
  mdn: "https://developer.mozilla.org/es/docs/Learn_web_development/Core/Styling_basics/What_is_CSS",
  conceptos: [
    {
      titulo: "Qué es CSS",
      texto: "CSS (Cascading Style Sheets, hojas de estilo en cascada) es un lenguaje de hojas de estilo que describe cómo se presenta un documento HTML. Separa la **presentación** del **contenido**: el HTML dice qué es cada cosa y el CSS cómo se ve.",
      puntos: [
        "HTML = estructura y significado; CSS = aspecto",
        "Una misma hoja de estilo puede servir a muchas páginas",
        "Cambiar el diseño no obliga a tocar el HTML"
      ],
      ojo: "CSS no es un lenguaje de programación ni de marcado: es un lenguaje de hojas de estilo."
    },
    {
      titulo: "Anatomía de una regla",
      texto: "Una regla (ruleset) tiene un **selector** que indica a qué elementos se aplica y un **bloque de declaraciones** entre llaves `{}`. Cada declaración es un par **propiedad: valor** terminado en `;`.",
      puntos: [
        "Selector: `p`, `.aviso`, `#menu`...",
        "Declaración = propiedad + `:` + valor + `;`",
        "Las llaves `{}` delimitan el bloque de declaraciones",
        "El `;` separa declaraciones (el último es opcional, pero conviene ponerlo)"
      ],
      codigo: `p {            /* selector */
  color: red;  /* declaración: propiedad color, valor red */
  font-size: 18px;
}`,
      lenguaje: "css",
      ojo: "Olvidar un `;` hace que el navegador interprete mal esa declaración y la siguiente."
    },
    {
      titulo: "Tres formas de aplicar CSS",
      texto: "Hoja **externa** con `<link rel=\"stylesheet\" href=\"estilos.css\">` en el `<head>` (la forma recomendada), hoja **interna** con un elemento `<style>` y estilos **en línea** con el atributo `style`.",
      puntos: [
        "Externa: reutilizable, cacheable, un solo sitio que mantener",
        "Interna: `<style>` dentro de la página; sirve para una sola página",
        "En línea: `style=\"color: red\"` afecta solo a ese elemento"
      ],
      codigo: `<link rel="stylesheet" href="estilos.css">
<style> p { color: blue; } </style>
<p style="color: red">Texto</p>`,
      lenguaje: "html",
      ojo: "Evita los estilos en línea: mezclan presentación y contenido, no se reutilizan y son difíciles de sobrescribir (tienen una especificidad muy alta)."
    },
    {
      titulo: "Comentarios",
      texto: "Los comentarios CSS se escriben entre `/*` y `*/` y pueden ocupar varias líneas. El navegador los ignora.",
      codigo: `/* Esto es un comentario */
p { color: red; /* también aquí */ }`,
      lenguaje: "css",
      ojo: "`//` y `<!-- -->` NO son comentarios CSS."
    },
    {
      titulo: "Propiedades abreviadas (shorthand) y largas (longhand)",
      texto: "Las propiedades abreviadas (shorthand) fijan varias propiedades largas (longhand) a la vez, como `margin`, `padding`, `border`, `background` o `font`.",
      puntos: [
        "Longhand: `border-width`, `border-style`, `border-color`",
        "Shorthand: `border: 1px solid black`",
        "El shorthand **reinicia a su valor inicial** las longhand que no indicas"
      ],
      codigo: `.a {
  background-color: blue;
  background: url(img.png) no-repeat; /* el color vuelve a transparent */
}`,
      lenguaje: "css",
      ojo: "Un shorthand escrito después de una longhand puede borrar lo que esta había fijado."
    },
    {
      titulo: "Reglas @ (at-rules)",
      texto: "Las at-rules empiezan por `@` e instruyen al navegador sobre cómo comportarse, no sobre un elemento concreto.",
      puntos: [
        "`@media`: aplica reglas solo si se cumple una condición (ancho, preferencia de color...)",
        "`@import`: importa otra hoja de estilo (debe ir al principio)",
        "`@font-face`: define una fuente personalizada",
        "`@keyframes`: define los fotogramas de una animación"
      ],
      codigo: `@media (min-width: 600px) {
  body { font-size: 20px; }
}`,
      lenguaje: "css"
    },
    {
      titulo: "Cómo funciona CSS y qué pasa con los errores",
      texto: "El navegador carga el HTML y construye el **DOM**; luego aplica las reglas CSS a los nodos y finalmente **renderiza** (muestra) el resultado: HTML → DOM → aplicar CSS → render. Si una declaración es inválida, el navegador la **ignora** y sigue con el resto.",
      puntos: [
        "Propiedad desconocida o valor inválido: solo se descarta esa declaración",
        "No hay mensaje de error visible: mira las herramientas del desarrollador",
        "Esto permite usar CSS nuevo en navegadores viejos sin romper la página"
      ],
      ojo: "Un fallo de escritura en CSS no detiene la hoja: solo falla esa declaración."
    },
    {
      titulo: "Estilos por defecto del navegador",
      texto: "Cada navegador trae una hoja de estilos propia (user agent stylesheet): por eso un `<h1>` sale grande y en negrita y un `<a>` azul y subrayado aunque no escribas CSS. Tu CSS la sobrescribe.",
      puntos: [
        "Los estilos del autor tienen prioridad sobre los del user agent",
        "Por eso se usan a veces hojas de reinicio (reset)"
      ],
      ojo: "El margen que ves alrededor del `<body>` (8px) viene del navegador, no de tu CSS."
    }
  ],
  chuleta: [
    ["Selector", "Parte de la regla que indica a qué elementos se aplica."],
    ["Declaración", "Par propiedad: valor terminado en `;`."],
    ["Propiedad", "Aspecto a cambiar (`color`, `font-size`...)."],
    ["Valor", "Ajuste concreto de una propiedad (`red`, `18px`...)."],
    ["Bloque de declaraciones", "Conjunto de declaraciones entre `{}`."],
    ["`<link rel=\"stylesheet\">`", "Enlaza una hoja externa; forma recomendada."],
    ["`<style>`", "Hoja interna dentro del HTML."],
    ["Atributo `style`", "Estilos en línea; mejor evitarlos."],
    ["`/* */`", "Comentario CSS."],
    ["Shorthand", "Abreviada: fija varias longhand y reinicia las no indicadas."],
    ["`@media`", "Aplica reglas condicionadas (responsive)."],
    ["`@import`", "Importa otra hoja de estilo."],
    ["`@font-face`", "Define una fuente propia."],
    ["`@keyframes`", "Define los pasos de una animación."],
    ["Declaración inválida", "El navegador la ignora y sigue."],
    ["User agent stylesheet", "Estilos por defecto del navegador."]
  ],
  ejemplo: {
    consigna: "Cambia el color, el fondo y el tamaño de fuente. Prueba a romper una declaración (quita los `:`) y observa que solo esa deja de aplicarse.",
    html: `<h1>Título</h1>
<p class="aviso">Un párrafo de aviso.</p>`,
    css: `h1 {
  color: darkblue;
  font-size: 32px;
}
.aviso {
  background-color: #fef3c7;
  color: #92400e;
}`
  },
  reto: {
    enunciado: "Sin tocar el HTML: pon el color de texto de `.titulo` en azul (`blue`), el color de fondo de `.aviso` en amarillo (`yellow`) y el tamaño de fuente de `.nota` en `20px`.",
    pista: "Tres reglas, cada una con su selector de clase y la propiedad `color`, `background-color` o `font-size`.",
    html: `<h1 class="titulo">Mi página</h1>
<p class="aviso">Aviso importante</p>
<p class="nota">Una nota</p>`,
    css: `/* Escribe tus reglas aquí */
`,
    solucion: {
      html: `<h1 class="titulo">Mi página</h1>
<p class="aviso">Aviso importante</p>
<p class="nota">Una nota</p>`,
      css: `.titulo { color: blue; }
.aviso { background-color: yellow; }
.nota { font-size: 20px; }`
    },
    validar: function (doc, win) {
      var t = doc.querySelector(".titulo"), a = doc.querySelector(".aviso"), n = doc.querySelector(".nota");
      if (!t || !a || !n) return { ok: false, msg: "No encuentro .titulo, .aviso o .nota (no cambies el HTML)." };
      if (win.getComputedStyle(t).color !== "rgb(0, 0, 255)") return { ok: false, msg: "El color de texto de .titulo aún no es azul (blue)." };
      if (win.getComputedStyle(a).backgroundColor !== "rgb(255, 255, 0)") return { ok: false, msg: "El color de fondo de .aviso aún no es amarillo (yellow)." };
      if (win.getComputedStyle(n).fontSize !== "20px") return { ok: false, msg: "El font-size de .nota aún no es 20px." };
      return { ok: true, msg: "¡Correcto! Los tres estilos están aplicados." };
    }
  },
  preguntas: [
    {
      tipo: "opcion",
      enunciado: "¿Cuál es la forma recomendada de aplicar CSS a un sitio con muchas páginas?",
      opciones: ["El atributo `style` en cada elemento", "Una hoja externa enlazada con `<link rel=\"stylesheet\">`", "Un `<style>` repetido en cada página", "Un `@import` dentro del `<body>`"],
      correcta: 1,
      explicacion: "La hoja externa se reutiliza en todas las páginas y se mantiene en un solo sitio. El estilo en línea y el `<style>` repetido obligan a duplicar código."
    },
    {
      tipo: "opcion",
      enunciado: "En la declaración `h1 { color: red; }`, ¿qué es `color`?",
      opciones: ["El selector", "El valor", "La propiedad", "La regla completa"],
      correcta: 2,
      explicacion: "`h1` es el selector, `color` la propiedad y `red` el valor; todo junto con las llaves forma la regla."
    },
    {
      tipo: "opcion",
      enunciado: "Si una declaración tiene un valor inválido, ¿qué hace el navegador?",
      opciones: ["Ignora esa declaración y sigue con el resto", "Deja de procesar toda la hoja de estilo", "Muestra un mensaje de error en la página", "Aplica `initial` a todas las propiedades del elemento"],
      correcta: 0,
      explicacion: "CSS es tolerante: descarta solo la declaración inválida y continúa, sin avisar en la página."
    },
    {
      tipo: "opcion",
      enunciado: "¿De qué color queda el fondo de `.caja`?",
      codigo: `.caja {
  background-color: red;
  background: none;
}`,
      lenguaje: "css",
      opciones: ["Rojo", "No se aplica ninguna de las dos", "Azul por defecto", "Transparente: el shorthand reinicia `background-color`"],
      correcta: 3,
      explicacion: "`background` es un shorthand: fija todas sus longhand, y las no indicadas (como `background-color`) vuelven a su valor inicial (`transparent`)."
    },
    {
      tipo: "opcion",
      enunciado: "¿Cuál es un comentario válido en CSS?",
      opciones: ["`// comentario`", "`/* comentario */`", "`<!-- comentario -->`", "`# comentario`"],
      correcta: 1,
      explicacion: "CSS solo tiene comentarios de bloque `/* ... */`. `<!-- -->` es de HTML y `//` no existe en CSS."
    },
    {
      tipo: "opcion",
      enunciado: "¿Qué at-rule define los fotogramas de una animación?",
      opciones: ["`@keyframes`", "`@font-face`", "`@import`", "`@media`"],
      correcta: 0,
      explicacion: "`@keyframes` describe la animación; `@font-face` define fuentes, `@import` importa hojas y `@media` condiciona reglas."
    },
    {
      tipo: "opcion",
      enunciado: "¿Por qué se desaconseja usar el atributo `style`?",
      opciones: ["Los navegadores modernos no lo admiten", "Solo permite cambiar colores", "Mezcla presentación y contenido, no se reutiliza y es difícil de sobrescribir", "Siempre es más lento que una hoja externa"],
      correcta: 2,
      explicacion: "El estilo en línea acopla el diseño al HTML y gana a casi cualquier selector, lo que complica el mantenimiento. Sí funciona y admite cualquier propiedad."
    },
    {
      tipo: "opcion",
      enunciado: "¿Cuál es el orden en que el navegador procesa una página?",
      opciones: ["CSS → HTML → DOM → render", "DOM → HTML → CSS → render", "HTML → render → CSS → DOM", "HTML → DOM → aplicar CSS → render"],
      correcta: 3,
      explicacion: "Primero analiza el HTML y crea el DOM, después aplica las reglas CSS a sus nodos y por último pinta el resultado."
    },
    {
      tipo: "completar",
      enunciado: "Escribe el nombre de la etiqueta HTML que enlaza una hoja de estilo externa.",
      respuestas: ["link", "<link>", "<link />", "<link/>"],
      explicacion: "`<link rel=\"stylesheet\" href=\"...\">` va en el `<head>`."
    },
    {
      tipo: "completar",
      enunciado: "Escribe el nombre del atributo HTML que permite aplicar estilos en línea a un elemento.",
      respuestas: ["style"],
      explicacion: "El atributo `style` contiene declaraciones CSS que afectan solo a ese elemento."
    }
  ]
});

/* ============ 2. Selectores ============ */
window.CURSO.modulos.push({
  id: "css-selectores",
  orden: 11,
  area: "CSS",
  nivel: "Básico",
  titulo: "Selectores",
  resumen: "Los selectores indican a qué elementos del documento se aplica cada regla: por tipo, clase, ID, atributo, relación o estado.",
  mdn: "https://developer.mozilla.org/es/docs/Learn_web_development/Core/Styling_basics/Basic_selectors",
  conceptos: [
    {
      titulo: "Tipo, universal, clase e ID",
      texto: "El selector de tipo (type selector) usa el nombre del elemento (`p`); el universal `*` selecciona todo; la clase `.x` selecciona los elementos con `class=\"x\"`; el ID `#x` el elemento con `id=\"x\"`.",
      puntos: [
        "Un elemento puede tener varias clases: `class=\"a b\"` casa con `.a` y con `.b`",
        "El `id` debe ser **único** en la página",
        "`p.x`: un `p` que tiene la clase `x` (sin espacio)",
        "`p .x`: elementos `.x` descendientes de un `p` (con espacio)"
      ],
      codigo: `p { color: black; }
.aviso { color: red; }
#cabecera { background: #eee; }
p.aviso { font-weight: bold; }
* { margin: 0; }`,
      lenguaje: "css",
      ojo: "El espacio importa: `p.x` y `p .x` son selectores completamente distintos."
    },
    {
      titulo: "Selectores de atributo",
      texto: "Seleccionan por la presencia o el valor de un atributo, entre corchetes.",
      puntos: [
        "`[attr]`: tiene el atributo",
        "`[attr=\"v\"]`: valor exactamente `v`",
        "`[attr^=\"v\"]`: empieza por `v`; `[attr$=\"v\"]`: termina en `v`",
        "`[attr*=\"v\"]`: contiene `v`",
        "`[attr~=\"v\"]`: `v` es una de las palabras separadas por espacios"
      ],
      codigo: `a[href^="https"] { color: green; }
a[href$=".pdf"] { font-weight: bold; }
input[type="text"] { border: 1px solid gray; }`,
      lenguaje: "css",
      ojo: "`^` = inicio, `$` = final, `*` = contiene (no confundir)."
    },
    {
      titulo: "Lista de selectores",
      texto: "Separa selectores con comas para aplicar la misma regla a varios: `h1, h2, h3 { ... }`.",
      codigo: `h1, h2, h3 {
  font-family: Georgia, serif;
}`,
      lenguaje: "css",
      ojo: "Si uno de los selectores de la lista es inválido, **toda la regla se ignora** (salvo dentro de `:is()` y `:where()`, que toleran errores)."
    },
    {
      titulo: "Combinadores",
      texto: "Los combinadores relacionan selectores según su posición en el árbol del documento.",
      puntos: [
        "Descendiente (espacio): `article p` cualquier `p` dentro de `article`, a cualquier profundidad",
        "Hijo `>`: `article > p` solo hijos directos",
        "Hermano adyacente `+`: `h2 + p` el `p` que va justo después de `h2`",
        "Hermanos generales `~`: `h2 ~ p` todos los `p` hermanos posteriores de `h2`"
      ],
      codigo: `article p { color: navy; }
article > p { font-weight: bold; }
h2 + p { margin-top: 0; }
h2 ~ p { color: gray; }`,
      lenguaje: "css",
      ojo: "`+` y `~` solo miran hacia adelante y entre hermanos (mismo padre)."
    },
    {
      titulo: "Pseudoclases",
      texto: "Una pseudoclase (pseudo-class) empieza por `:` y selecciona un elemento según su **estado** o su posición.",
      puntos: [
        "Interacción: `:hover`, `:focus`, `:active`, `:visited` (enlaces ya visitados)",
        "Posición: `:first-child`, `:last-child`, `:nth-child(2n+1)` (impares), `:nth-of-type()`",
        "Estado de formulario: `:checked`",
        "`:not(sel)` excluye; `:is()` y `:where()` agrupan selectores"
      ],
      codigo: `a:hover { color: red; }
li:nth-child(2n+1) { background: #eee; }
li:not(:last-child) { border-bottom: 1px solid gray; }
:is(h1, h2) span { color: tomato; }`,
      lenguaje: "css",
      ojo: "`:nth-child(2n+1)` equivale a `odd` (impares); `2n` a `even` (pares). `:nth-of-type` cuenta solo elementos del mismo tipo."
    },
    {
      titulo: "Pseudoelementos",
      texto: "Un pseudoelemento (pseudo-element) empieza por `::` y selecciona una **parte** de un elemento o crea una que no existe en el HTML.",
      puntos: [
        "`::before` y `::after`: insertan contenido con la propiedad `content`",
        "`::first-line` y `::first-letter`: primera línea / primera letra",
        "`::placeholder`: texto de ayuda de un campo",
        "`::selection`: la parte seleccionada por el usuario"
      ],
      codigo: `p::first-letter { font-size: 2em; }
.nuevo::after { content: " (nuevo)"; color: green; }
input::placeholder { color: gray; }`,
      lenguaje: "css",
      ojo: "Sin la propiedad `content`, `::before` y `::after` no se muestran."
    },
    {
      titulo: "Pseudoclase vs pseudoelemento",
      texto: "La pseudoclase (`:`) elige el **elemento entero** cuando está en cierto estado; el pseudoelemento (`::`) elige una **parte** del elemento.",
      puntos: [
        "`a:hover`: el enlace cuando el puntero está encima (estado)",
        "`p::first-line`: la primera línea del párrafo (parte)"
      ],
      ojo: "Los pseudoelementos se escriben con dos dos puntos `::` (la sintaxis antigua con uno solo es solo por compatibilidad)."
    }
  ],
  chuleta: [
    ["`p`", "Selector de tipo: todos los `<p>`."],
    ["`*`", "Selector universal: todos los elementos."],
    ["`.x`", "Clase."],
    ["`#x`", "ID (único en la página)."],
    ["`p.x`", "Un `p` con clase `x`."],
    ["`p .x`", "Un `.x` dentro de un `p` (descendiente)."],
    ["`a, b`", "Lista de selectores; uno inválido anula toda la regla."],
    ["`a > b`", "`b` hijo directo de `a`."],
    ["`a + b`", "`b` hermano inmediatamente siguiente de `a`."],
    ["`a ~ b`", "`b` hermano posterior de `a` (todos)."],
    ["`[attr^=\"v\"]`", "Atributo que empieza por `v` (`$` termina, `*` contiene)."],
    ["`:nth-child(2n+1)`", "Hijos impares."],
    ["`:not(.x)`", "Elementos que no coinciden con `.x`."],
    ["`:hover` / `:focus` / `:active`", "Puntero encima / con foco / pulsado."],
    ["`::before` / `::after`", "Contenido generado (requiere `content`)."],
    ["`:` vs `::`", "Pseudoclase (estado) vs pseudoelemento (parte)."]
  ],
  ejemplo: {
    consigna: "Cambia `>` por un espacio en la segunda regla y mira qué párrafos cambian. Prueba también `:nth-child(even)`.",
    html: `<article>
  <p>Hijo directo</p>
  <div><p>Nieto (descendiente)</p></div>
</article>
<ul>
  <li>Uno</li><li>Dos</li><li>Tres</li><li>Cuatro</li>
</ul>`,
    css: `article > p { background: #fde68a; }
li:nth-child(2n+1) { background: #bfdbfe; }
li:last-child::after { content: " (último)"; }`
  },
  reto: {
    enunciado: "Sin modificar el HTML: pon en rojo (`red`) el texto solo de los `p` que son hijos directos de `.entrada`, y da fondo amarillo (`yellow`) solo a los `li` impares (1.º, 3.º, 5.º) de `.menu`. No debe cambiar el párrafo anidado ni la lista `.otra`.",
    pista: "Usa el combinador de hijo `>` y la pseudoclase `:nth-child(odd)` (o `2n+1`) acotada a `.menu`.",
    html: `<article class="entrada">
  <p>Hijo directo 1</p>
  <div><p class="anidado">Párrafo anidado</p></div>
  <p>Hijo directo 2</p>
</article>
<ul class="menu">
  <li>1</li><li>2</li><li>3</li><li>4</li><li>5</li>
</ul>
<ul class="otra">
  <li>A</li><li>B</li><li>C</li>
</ul>`,
    css: `/* Escribe tus reglas aquí */
`,
    solucion: {
      html: `<article class="entrada">
  <p>Hijo directo 1</p>
  <div><p class="anidado">Párrafo anidado</p></div>
  <p>Hijo directo 2</p>
</article>
<ul class="menu">
  <li>1</li><li>2</li><li>3</li><li>4</li><li>5</li>
</ul>
<ul class="otra">
  <li>A</li><li>B</li><li>C</li>
</ul>`,
      css: `.entrada > p { color: red; }
.menu li:nth-child(odd) { background-color: yellow; }`
    },
    validar: function (doc, win) {
      var gc = function (e) { return win.getComputedStyle(e); };
      var directos = doc.querySelectorAll(".entrada > p");
      var anid = doc.querySelector(".entrada .anidado");
      var lis = doc.querySelectorAll(".menu li");
      var otras = doc.querySelectorAll(".otra li");
      if (directos.length !== 2 || !anid || lis.length !== 5 || otras.length !== 3) return { ok: false, msg: "El HTML ha cambiado: no lo modifiques." };
      var i;
      for (i = 0; i < directos.length; i++) {
        if (gc(directos[i]).color !== "rgb(255, 0, 0)") return { ok: false, msg: "Los `p` hijos directos de .entrada aún no tienen color rojo." };
      }
      if (gc(anid).color === "rgb(255, 0, 0)") return { ok: false, msg: "El párrafo anidado también quedó en rojo: usa el combinador `>` en vez del espacio." };
      for (i = 0; i < lis.length; i++) {
        var amarillo = gc(lis[i]).backgroundColor === "rgb(255, 255, 0)";
        if (i % 2 === 0 && !amarillo) return { ok: false, msg: "El li n.º " + (i + 1) + " de .menu debería tener fondo amarillo." };
        if (i % 2 === 1 && amarillo) return { ok: false, msg: "El li n.º " + (i + 1) + " de .menu (par) no debería ser amarillo." };
      }
      for (i = 0; i < otras.length; i++) {
        if (gc(otras[i]).backgroundColor === "rgb(255, 255, 0)") return { ok: false, msg: "La lista .otra no debe cambiar: acota el selector a .menu." };
      }
      return { ok: true, msg: "¡Correcto! Los selectores afectan solo a los elementos pedidos." };
    }
  },
  preguntas: [
    {
      tipo: "opcion",
      enunciado: "¿Qué selecciona `p .nota` (con espacio)?",
      opciones: ["Los `p` que tienen la clase `nota`", "Elementos que son a la vez `p` y `.nota`", "Elementos con clase `nota` descendientes de un `p`", "Solo los hijos directos de `p` con clase `nota`"],
      correcta: 2,
      explicacion: "El espacio es el combinador descendiente. Los `p` con clase `nota` serían `p.nota` y los hijos directos `p > .nota`."
    },
    {
      tipo: "opcion",
      enunciado: "¿Qué es cierto sobre el selector de ID `#menu`?",
      opciones: ["Selecciona el elemento con `id=\"menu\"`, que debe ser único en la página", "Puede repetirse en tantos elementos como quieras", "Selecciona los elementos con `class=\"menu\"`", "Selecciona todos los elementos de la página"],
      correcta: 0,
      explicacion: "`#` selecciona por `id`, y un `id` no debe repetirse en el documento. Para varios elementos se usan clases."
    },
    {
      tipo: "opcion",
      enunciado: "¿Qué selecciona `h1 + p`?",
      opciones: ["Todos los `p` dentro de `h1`", "Todos los `p` hermanos posteriores de `h1`", "Los `p` hijos directos de `h1`", "El `p` que va inmediatamente después de un `h1` (mismo padre)"],
      correcta: 3,
      explicacion: "`+` es el hermano adyacente: solo el siguiente. Todos los hermanos posteriores serían `h1 ~ p`."
    },
    {
      tipo: "opcion",
      enunciado: "¿Qué enlaces selecciona `a[href^=\"https\"]`?",
      opciones: ["Aquellos cuyo `href` termina en `https`", "Aquellos cuyo `href` empieza por `https`", "Aquellos cuyo `href` contiene `https` en cualquier lugar", "Aquellos cuyo `href` es exactamente `https`"],
      correcta: 1,
      explicacion: "`^=` es \"empieza por\"; `$=` \"termina en\"; `*=` \"contiene\"; `=` \"es exactamente\"."
    },
    {
      tipo: "opcion",
      enunciado: "¿Qué elementos selecciona `li:nth-child(2n+1)`?",
      opciones: ["Los `li` pares", "Los dos primeros `li`", "Los `li` impares (1.º, 3.º, 5.º...)", "Solo el primer `li`"],
      correcta: 2,
      explicacion: "Con n = 0, 1, 2... `2n+1` da 1, 3, 5... Los pares son `2n` o `even`."
    },
    {
      tipo: "opcion",
      enunciado: "En `h1, h2, ..titulo { color: red; }`, el tercer selector es inválido. ¿Qué ocurre?",
      opciones: ["Se ignora toda la regla", "Solo se ignora el selector inválido y `h1`, `h2` sí funcionan", "Solo se aplica a `h1`", "El navegador corrige el selector"],
      correcta: 0,
      explicacion: "En una lista de selectores clásica, un selector inválido anula la regla entera. Las listas dentro de `:is()` y `:where()` sí toleran los inválidos."
    },
    {
      tipo: "opcion",
      enunciado: "¿Qué pseudoelemento permite insertar contenido generado con la propiedad `content`?",
      opciones: ["`::first-line`", "`::before`", "`::selection`", "`::placeholder`"],
      correcta: 1,
      explicacion: "`::before` (y `::after`) crean un elemento hijo virtual cuyo contenido se define con `content`."
    },
    {
      tipo: "opcion",
      enunciado: "¿Cuál es la diferencia entre pseudoclase y pseudoelemento?",
      opciones: ["La pseudoclase usa `::` y el pseudoelemento `:`", "No hay ninguna diferencia", "La pseudoclase elige partes del elemento y el pseudoelemento sus estados", "La pseudoclase elige el elemento según su estado; el pseudoelemento elige una parte de él"],
      correcta: 3,
      explicacion: "`a:hover` = el enlace en cierto estado; `p::first-line` = una parte del párrafo. Los pseudoelementos llevan `::`."
    },
    {
      tipo: "completar",
      enunciado: "Escribe el combinador que selecciona solo los hijos directos (ej.: `ul ? li`).",
      respuestas: [">"],
      explicacion: "`ul > li` selecciona solo los `li` que son hijos directos de `ul`."
    },
    {
      tipo: "completar",
      enunciado: "Escribe la pseudoclase que se activa cuando el puntero está sobre el elemento.",
      respuestas: [":hover", "hover"],
      explicacion: "`:hover` representa el estado en que el puntero está encima del elemento."
    }
  ]
});

/* ============ 3. Cascada, especificidad y herencia ============ */
window.CURSO.modulos.push({
  id: "css-cascada",
  orden: 12,
  area: "CSS",
  nivel: "Intermedio",
  titulo: "Cascada, especificidad y herencia",
  resumen: "Cuando varias reglas chocan, la cascada decide cuál gana según importancia, especificidad y orden; la herencia transmite algunas propiedades a los hijos.",
  mdn: "https://developer.mozilla.org/es/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts",
  conceptos: [
    {
      titulo: "La cascada",
      texto: "Cuando dos reglas afectan al mismo elemento y propiedad, la cascada (cascade) decide cuál gana. Mira, por este orden: **importancia** (origen, `!important`, capas), **especificidad** y **orden de aparición**.",
      puntos: [
        "Importancia: origen (navegador, usuario, autor), `!important` y `@layer`",
        "Si empatan, gana la regla de mayor especificidad",
        "Si vuelven a empatar, gana la **última** en el código"
      ],
      ojo: "A igual especificidad, gana la que aparece después; el orden de las reglas importa."
    },
    {
      titulo: "Cálculo de especificidad",
      texto: "La especificidad (specificity) se cuenta en tres columnas **ID–CLASE–TIPO**, que se comparan de izquierda a derecha (no se suman entre columnas).",
      puntos: [
        "ID: `#x` suma en la 1.ª columna",
        "CLASE: clases `.x`, atributos `[a]` y pseudoclases `:hover` suman en la 2.ª",
        "TIPO: elementos `p` y pseudoelementos `::before` suman en la 3.ª",
        "`*` y los combinadores (` `, `>`, `+`, `~`) no suman"
      ],
      codigo: `p              /* 0-0-1 */
.item          /* 0-1-0 */
#nav .item a   /* 1-1-1 */
ul li.activo:hover  /* 0-2-2 */
a::before      /* 0-0-2 */`,
      lenguaje: "css",
      ojo: "Un ID (1-0-0) gana a cualquier número de clases (0-n-0): no se desbordan a la columna izquierda."
    },
    {
      titulo: ":is(), :not() y :where() en la especificidad",
      texto: "`:is()` y `:not()` toman la especificidad de su argumento **más específico**; `:where()` siempre vale **0**.",
      codigo: `:is(#a, .b) p   /* 1-0-1 (por #a) */
:not(.x) p      /* 0-1-1 */
:where(#a) p    /* 0-0-1 */`,
      lenguaje: "css",
      ojo: "`:where()` sirve para escribir estilos base fáciles de sobrescribir."
    },
    {
      titulo: "Estilos en línea e !important",
      texto: "Un estilo en línea (atributo `style`) gana a cualquier selector de la hoja. `!important` en una declaración la pone por encima de las normales.",
      codigo: `p { color: red !important; }  /* gana incluso al estilo en línea normal */`,
      lenguaje: "css",
      ojo: "Evita `!important`: rompe el orden natural de la cascada y solo se puede vencer con otro `!important` más específico o posterior."
    },
    {
      titulo: "Herencia",
      texto: "La herencia (inheritance) hace que ciertos valores pasen del elemento padre a sus hijos si estos no los definen.",
      puntos: [
        "Se heredan, p. ej.: `color`, `font-family`, `font-size`, `line-height`, `text-align`",
        "No se heredan: `margin`, `padding`, `border`, `width`, `height`, `background`",
        "Un valor definido directamente en el hijo siempre gana a la herencia"
      ],
      ojo: "La herencia es el \"valor de respaldo\" más débil: cualquier regla directa sobre el elemento la vence, aunque sea del navegador."
    },
    {
      titulo: "Valores universales y all",
      texto: "Cualquier propiedad acepta valores que controlan la herencia, y `all` los aplica a todas las propiedades a la vez.",
      puntos: [
        "`inherit`: toma el valor del padre",
        "`initial`: valor inicial según la especificación",
        "`unset`: `inherit` si la propiedad se hereda; si no, `initial`",
        "`revert`: vuelve al valor de la hoja del navegador (o del usuario)",
        "`all: unset;` etc. afecta a todas las propiedades"
      ],
      codigo: `.hijo {
  border: inherit;     /* fuerza heredar aunque border no se herede */
}
button { all: unset; }`,
      lenguaje: "css"
    },
    {
      titulo: "Capas (@layer)",
      texto: "`@layer` agrupa reglas en capas con orden de prioridad propio; una capa posterior gana a una anterior independientemente de la especificidad. Las reglas sin capa ganan a las que están en capas.",
      codigo: `@layer base, componentes;
@layer base { p { color: gray; } }
@layer componentes { p { color: blue; } }`,
      lenguaje: "css",
      ojo: "Con capas, la especificidad solo compara reglas dentro de la misma capa."
    }
  ],
  chuleta: [
    ["Cascada", "Mecanismo que decide qué regla gana: importancia, especificidad, orden."],
    ["Especificidad", "Peso de un selector, en columnas ID–CLASE–TIPO."],
    ["`#x`", "1-0-0."],
    ["`.x`, `[a]`, `:hover`", "0-1-0 cada uno."],
    ["`p`, `::before`", "0-0-1 cada uno."],
    ["`*` y combinadores", "No suman."],
    ["`:where()`", "Especificidad 0."],
    ["`:is()` / `:not()`", "La del argumento más específico."],
    ["Estilo en línea", "Gana a cualquier selector (sin `!important`)."],
    ["`!important`", "Sube la prioridad; evitar."],
    ["Misma especificidad", "Gana la regla que aparece después."],
    ["Se hereda", "`color`, `font-*`, `line-height`, `text-align`."],
    ["No se hereda", "`margin`, `padding`, `border`, `width`, `background`."],
    ["`inherit`", "Toma el valor del padre."],
    ["`initial`", "Valor inicial de la especificación."],
    ["`unset`", "`inherit` o `initial` según la propiedad."],
    ["`revert`", "Vuelve a los estilos del navegador."]
  ],
  ejemplo: {
    consigna: "El párrafo sale azul porque `#caja .texto` (1-1-0) gana a `p` (0-0-1) aunque `p` esté después. Cambia el orden o los selectores y observa.",
    html: `<div id="caja">
  <p class="texto">¿De qué color soy?</p>
</div>`,
    css: `#caja .texto { color: blue; }  /* 1-1-0 */
.texto { color: green; }       /* 0-1-0 */
p { color: red; }              /* 0-0-1, la última pero la más débil */`
  },
  reto: {
    enunciado: "El texto de `.texto` sale azul. Hazlo rojo (`red`) **sin usar `!important`** y sin tocar el HTML (ni añadir `style`). Añade una regla con suficiente especificidad.",
    pista: "Iguala o supera la especificidad de `#caja .texto` (1-1-0) y colócala después.",
    html: `<div id="caja">
  <p class="texto">Texto en conflicto</p>
</div>`,
    css: `#caja .texto { color: blue; }
.texto { color: gray; }
`,
    solucion: {
      html: `<div id="caja">
  <p class="texto">Texto en conflicto</p>
</div>`,
      css: `#caja .texto { color: blue; }
.texto { color: gray; }
#caja p.texto { color: red; }`
    },
    validar: function (doc, win) {
      var el = doc.querySelector("#caja .texto");
      if (!el) return { ok: false, msg: "No encuentro #caja .texto (no cambies el HTML)." };
      if (el.getAttribute("style")) return { ok: false, msg: "No uses el atributo style en el HTML." };
      var css = "";
      try {
        var estilos = doc.querySelectorAll("style");
        for (var i = 0; i < estilos.length; i++) css += estilos[i].textContent;
      } catch (e) {}
      if (css.toLowerCase().indexOf("!important") !== -1) return { ok: false, msg: "No uses !important: sube la especificidad del selector." };
      if (win.getComputedStyle(el).color !== "rgb(255, 0, 0)") return { ok: false, msg: "El texto aún no es rojo: tu regla debe tener al menos la especificidad de `#caja .texto` y ir después." };
      return { ok: true, msg: "¡Correcto! Ganaste por especificidad, sin !important." };
    }
  },
  preguntas: [
    {
      tipo: "opcion",
      enunciado: "¿Cuál es la especificidad (ID-CLASE-TIPO) del selector `#nav .item a`?",
      opciones: ["0-2-1", "1-0-2", "1-2-1", "1-1-1"],
      correcta: 3,
      explicacion: "Un ID (`#nav`), una clase (`.item`) y un tipo (`a`): 1-1-1. El espacio (combinador) no suma."
    },
    {
      tipo: "opcion",
      enunciado: "¿Cuál es la especificidad de `ul li.activo:hover`?",
      opciones: ["0-1-2", "0-2-2", "0-3-0", "0-2-1"],
      correcta: 1,
      explicacion: "Dos tipos (`ul`, `li`) en la tercera columna y dos en la segunda: la clase `.activo` y la pseudoclase `:hover`. Total 0-2-2."
    },
    {
      tipo: "opcion",
      enunciado: "Entre `#a p` y `.x .y .z p`, ¿cuál gana si apuntan al mismo `p` y chocan?",
      opciones: ["`#a p` (1-0-1): un ID pesa más que cualquier cantidad de clases", "`.x .y .z p` (0-3-1): tiene más elementos", "Empatan y gana la última escrita", "Depende solo del orden en el archivo"],
      correcta: 0,
      explicacion: "Las columnas se comparan de izquierda a derecha: 1-0-1 es mayor que 0-3-1. Las clases nunca se acumulan hasta superar un ID."
    },
    {
      tipo: "opcion",
      enunciado: "¿Cuál de estas propiedades se hereda por defecto?",
      opciones: ["`margin`", "`border`", "`color`", "`width`"],
      correcta: 2,
      explicacion: "`color` (y `font-*`, `line-height`, `text-align`...) se heredan. `margin`, `border`, `width`, `padding` o `background` no."
    },
    {
      tipo: "opcion",
      enunciado: "¿Cuál es la especificidad de `:where(#a) p`?",
      opciones: ["1-0-1", "0-0-1", "0-1-1", "0-0-0"],
      correcta: 1,
      explicacion: "`:where()` siempre aporta 0, así que solo cuenta el `p`: 0-0-1."
    },
    {
      tipo: "opcion",
      enunciado: "Un elemento tiene `style=\"color: green\"` y la hoja dice `#caja p { color: red; }` (sin `!important`). ¿De qué color queda?",
      opciones: ["Rojo, por el ID", "Empatan: depende del orden", "Rojo, porque la hoja se carga después", "Verde: el estilo en línea gana a cualquier selector"],
      correcta: 3,
      explicacion: "Los estilos en línea tienen prioridad sobre cualquier selector de hoja, salvo que esa declaración lleve `!important`."
    },
    {
      tipo: "opcion",
      enunciado: "¿Qué hace `unset` sobre una propiedad que NO se hereda, como `margin`?",
      opciones: ["Actúa como `initial` (valor inicial)", "Actúa como `inherit`", "Actúa como `revert`", "No hace nada"],
      correcta: 0,
      explicacion: "`unset` = `inherit` si la propiedad se hereda de forma natural; en caso contrario = `initial`."
    },
    {
      tipo: "opcion",
      enunciado: "Dos reglas con la misma especificidad y la misma importancia apuntan al mismo elemento. ¿Cuál gana?",
      opciones: ["La primera que aparece", "Ninguna: es un error", "La última en orden de aparición", "La que tenga el selector más corto"],
      correcta: 2,
      explicacion: "A igual importancia y especificidad, la cascada desempata por el orden: gana la última."
    },
    {
      tipo: "completar",
      enunciado: "Escribe el valor CSS que hace que una propiedad tome el valor de su elemento padre.",
      respuestas: ["inherit"],
      explicacion: "`inherit` fuerza la herencia, incluso en propiedades que no se heredan por defecto."
    },
    {
      tipo: "completar",
      enunciado: "Escribe la marca que, añadida a una declaración, le da prioridad por encima de las normales (y que conviene evitar).",
      respuestas: ["!important", "important"],
      explicacion: "`color: red !important;` altera el orden natural de la cascada; es mejor ajustar la especificidad."
    }
  ]
});

/* ============ 4. El modelo de caja ============ */
window.CURSO.modulos.push({
  id: "css-caja",
  orden: 13,
  area: "CSS",
  nivel: "Básico",
  titulo: "El modelo de caja",
  resumen: "Todo elemento es una caja formada por contenido, padding, borde y margen; entender cómo se calcula su tamaño es la base del layout.",
  mdn: "https://developer.mozilla.org/es/docs/Learn_web_development/Core/Styling_basics/Box_model",
  conceptos: [
    {
      titulo: "Cajas de bloque y en línea",
      texto: "Una caja de bloque (block) empieza en una línea nueva y ocupa todo el ancho disponible; una caja en línea (inline) fluye dentro del texto. `inline-block` mezcla ambas.",
      puntos: [
        "Bloque: respeta `width`, `height`, `margin` y `padding` en todos los lados; salto de línea antes y después",
        "En línea: no respeta `width` ni `height`; el margen/padding vertical no desplaza otras líneas; no hay saltos",
        "`inline-block`: se coloca en línea pero respeta `width`, `height` y márgenes verticales"
      ],
      codigo: `div { display: block; }
span { display: inline; }
.boton { display: inline-block; width: 120px; }`,
      lenguaje: "css",
      ojo: "Ponerle `width` a un `<span>` (inline) no tiene efecto."
    },
    {
      titulo: "Display externo e interno",
      texto: "`display` tiene un tipo **externo** (cómo se comporta la caja entre sus hermanos: `block` o `inline`) y uno **interno** (cómo se colocan sus hijos: `flow`, `flex`, `grid`...).",
      puntos: [
        "`display: flex` → caja externa de **bloque** + layout interno flex",
        "`display: inline-flex` → caja externa en línea + layout interno flex"
      ]
    },
    {
      titulo: "Partes de la caja",
      texto: "De dentro hacia fuera: **contenido** (content), **relleno** (padding), **borde** (border) y **margen** (margin).",
      puntos: [
        "`padding`: espacio entre el contenido y el borde (lleva el fondo)",
        "`border`: línea alrededor del padding",
        "`margin`: espacio exterior, siempre transparente"
      ],
      codigo: `.caja {
  padding: 20px;
  border: 5px solid black;
  margin: 10px;
}`,
      lenguaje: "css",
      ojo: "El color de fondo llega hasta el borde (incluye el padding), pero no cubre el margen."
    },
    {
      titulo: "Modelo estándar vs alternativo",
      texto: "Con `box-sizing: content-box` (modelo estándar, por defecto) `width` mide **solo el contenido**; padding y borde se suman. Con `box-sizing: border-box` (modelo alternativo) `width` incluye contenido, padding y borde.",
      puntos: [
        "content-box: 200 + 20×2 (padding) + 5×2 (borde) = **250px** de ancho total",
        "border-box: el ancho total es **200px** y el contenido se reduce a 150px"
      ],
      codigo: `.caja {
  width: 200px;
  padding: 20px;
  border: 5px solid;
  box-sizing: content-box; /* total 250px */
}
.caja2 { box-sizing: border-box; /* total 200px */ }`,
      lenguaje: "css",
      ojo: "El margen nunca forma parte de `width` en ninguno de los dos modelos."
    },
    {
      titulo: "El truco global de box-sizing",
      texto: "Es habitual aplicar `border-box` a todo para que los anchos sean predecibles. Una variante hereda desde `html`.",
      codigo: `*, *::before, *::after {
  box-sizing: border-box;
}
/* variante con herencia */
html { box-sizing: border-box; }
*, *::before, *::after { box-sizing: inherit; }`,
      lenguaje: "css",
      ojo: "`box-sizing` no se hereda por defecto; por eso la variante usa `inherit`."
    },
    {
      titulo: "Márgenes y padding: shorthand",
      texto: "`margin` y `padding` aceptan 1 a 4 valores, en sentido horario: arriba, derecha, abajo, izquierda.",
      puntos: [
        "1 valor: todos los lados",
        "2 valores: arriba/abajo y derecha/izquierda",
        "3 valores: arriba, derecha/izquierda, abajo",
        "4 valores: arriba, derecha, abajo, izquierda",
        "Los márgenes pueden ser **negativos** (acercan o solapan elementos)"
      ],
      codigo: `margin: 10px;
margin: 10px 20px;
margin: 10px 20px 30px;
margin: 10px 20px 30px 40px;`,
      lenguaje: "css"
    },
    {
      titulo: "Colapso de márgenes y centrado",
      texto: "Los márgenes verticales de bloques adyacentes se **colapsan**: el espacio entre ellos es el mayor de los dos, no la suma. Un bloque con ancho se centra con `margin: 0 auto`.",
      codigo: `.a { margin-bottom: 30px; }
.b { margin-top: 20px; }  /* separación real: 30px */
.centrado { width: 300px; margin: 0 auto; }`,
      lenguaje: "css",
      ojo: "Los márgenes horizontales no colapsan. `margin: auto` no centra si el bloque no tiene un `width` menor que el del contenedor."
    },
    {
      titulo: "Ocultar y outline",
      texto: "`display: none` elimina la caja del layout (no ocupa espacio); `visibility: hidden` la oculta pero **conserva su espacio**. El `outline` se dibuja fuera de la caja y **no ocupa espacio** ni altera el tamaño.",
      ojo: "`border` sí suma al tamaño; `outline` no."
    }
  ],
  chuleta: [
    ["Contenido, padding, borde, margen", "Las cuatro capas de una caja, de dentro hacia fuera."],
    ["`display: block`", "Salto de línea y ancho completo; respeta width/height."],
    ["`display: inline`", "Fluye en el texto; ignora width/height."],
    ["`display: inline-block`", "En línea pero respeta width, height y márgenes."],
    ["`box-sizing: content-box`", "Modelo estándar: width = solo contenido."],
    ["`box-sizing: border-box`", "width incluye contenido, padding y borde."],
    ["200 + 2×20 + 2×5", "250px en content-box (200px en border-box)."],
    ["`*, *::before, *::after`", "Selector típico para aplicar border-box a todo."],
    ["`margin: 1 2 3 4`", "Arriba, derecha, abajo, izquierda (horario)."],
    ["`margin: 10px 20px`", "10 arriba/abajo, 20 izquierda/derecha."],
    ["Margen negativo", "Desplaza el elemento acercándolo a los vecinos."],
    ["Colapso de márgenes", "Margen vertical entre bloques = el mayor, no la suma."],
    ["`margin: 0 auto`", "Centra un bloque con ancho definido."],
    ["`display: none`", "Elimina la caja; no ocupa espacio."],
    ["`visibility: hidden`", "Invisible pero conserva su espacio."],
    ["`outline`", "Contorno fuera de la caja; no ocupa espacio."]
  ],
  ejemplo: {
    consigna: "Cambia `box-sizing` entre `content-box` y `border-box` y observa cómo varía el ancho total de la caja (ancho 200px, padding 20px, borde 5px).",
    html: `<div class="caja">Caja A</div>
<div class="caja b">Caja B</div>`,
    css: `.caja {
  width: 200px;
  padding: 20px;
  border: 5px solid #1d4ed8;
  background: #bfdbfe;
  margin-bottom: 10px;
  box-sizing: content-box;
}
.b { box-sizing: border-box; background: #fde68a; }`
  },
  reto: {
    enunciado: "Haz que `.caja` mida exactamente 300px de ancho en total (contenido + padding + borde) y que quede centrada horizontalmente. Conserva su padding y su borde.",
    pista: "Un cambio en `box-sizing` y un margen horizontal automático.",
    html: `<div class="caja">Contenido</div>`,
    css: `.caja {
  width: 300px;
  padding: 20px;
  border: 5px solid #1d4ed8;
  background: #bfdbfe;
}
`,
    solucion: {
      html: `<div class="caja">Contenido</div>`,
      css: `.caja {
  width: 300px;
  padding: 20px;
  border: 5px solid #1d4ed8;
  background: #bfdbfe;
  box-sizing: border-box;
  margin: 0 auto;
}`
    },
    validar: function (doc, win) {
      var el = doc.querySelector(".caja");
      if (!el) return { ok: false, msg: "No encuentro .caja (no cambies el HTML)." };
      var cs = win.getComputedStyle(el);
      if (parseFloat(cs.paddingLeft) <= 0 || parseFloat(cs.borderLeftWidth) <= 0) return { ok: false, msg: "Conserva el padding y el borde de la caja." };
      var r = el.getBoundingClientRect();
      if (Math.abs(r.width - 300) > 0.5) return { ok: false, msg: "El ancho total es " + Math.round(r.width) + "px; debe ser 300px (revisa box-sizing)." };
      var ancho = doc.documentElement.clientWidth;
      var izq = r.left, der = ancho - r.right;
      if (izq < 1 || Math.abs(izq - der) > 1.5) return { ok: false, msg: "La caja mide 300px pero no está centrada horizontalmente (revisa los márgenes izquierdo y derecho)." };
      return { ok: true, msg: "¡Correcto! 300px en total y centrada." };
    }
  },
  preguntas: [
    {
      tipo: "opcion",
      enunciado: "Una caja tiene `width: 200px; padding: 20px; border: 5px solid;` con `box-sizing: content-box`. ¿Cuánto ocupa en horizontal sin contar márgenes?",
      opciones: ["210px", "250px", "240px", "200px"],
      correcta: 1,
      explicacion: "200 de contenido + 2×20 de padding + 2×5 de borde = 250px."
    },
    {
      tipo: "opcion",
      enunciado: "La misma caja (`width: 200px; padding: 20px; border: 5px solid;`) pero con `box-sizing: border-box`. ¿Cuánto ocupa en horizontal?",
      opciones: ["250px", "240px", "210px", "200px"],
      correcta: 3,
      explicacion: "En el modelo alternativo `width` incluye padding y borde: el total es 200px y el contenido queda en 150px."
    },
    {
      tipo: "opcion",
      enunciado: "Con `margin: 10px 20px 30px 40px;`, ¿cuál es el margen izquierdo?",
      opciones: ["40px", "20px", "10px", "30px"],
      correcta: 0,
      explicacion: "Orden horario: arriba (10), derecha (20), abajo (30), izquierda (40)."
    },
    {
      tipo: "opcion",
      enunciado: "¿Qué significa `margin: 10px 20px;`?",
      opciones: ["10px a izquierda y derecha; 20px arriba y abajo", "10px arriba; 20px en los otros tres lados", "10px arriba y abajo; 20px a izquierda y derecha", "10px arriba y derecha; 20px abajo e izquierda"],
      correcta: 2,
      explicacion: "Con dos valores, el primero es vertical (arriba/abajo) y el segundo horizontal (derecha/izquierda)."
    },
    {
      tipo: "opcion",
      enunciado: "Dos bloques consecutivos: el primero con `margin-bottom: 30px` y el segundo con `margin-top: 20px`. ¿Qué separación vertical hay entre ellos?",
      opciones: ["50px", "20px", "10px", "30px"],
      correcta: 3,
      explicacion: "Los márgenes verticales adyacentes colapsan: el espacio es el mayor (30px), no la suma."
    },
    {
      tipo: "opcion",
      enunciado: "¿Cuál es la diferencia entre `display: none` y `visibility: hidden`?",
      opciones: ["Son idénticos", "`none` elimina la caja del layout; `hidden` la oculta pero conserva su espacio", "`hidden` elimina la caja del layout; `none` conserva su espacio", "`none` solo funciona con elementos de bloque"],
      correcta: 1,
      explicacion: "Con `display: none` la caja no existe en el layout. Con `visibility: hidden` es invisible pero sigue ocupando su sitio."
    },
    {
      tipo: "opcion",
      enunciado: "¿Qué valor de `display` hace que el elemento se coloque en línea con otros pero respete `width` y `height`?",
      opciones: ["`inline`", "`block`", "`inline-block`", "`contents`"],
      correcta: 2,
      explicacion: "`inline-block` es externamente en línea (sin salto de línea) e internamente un bloque que acepta dimensiones. `inline` las ignora y `block` fuerza salto de línea."
    },
    {
      tipo: "opcion",
      enunciado: "¿Qué afirmación sobre `outline` es correcta?",
      opciones: ["Se dibuja fuera de la caja y no ocupa espacio ni modifica el tamaño", "Suma su grosor al ancho total de la caja", "Es otro nombre del `border`", "Solo funciona en elementos en línea"],
      correcta: 0,
      explicacion: "El outline no forma parte de las dimensiones de la caja; el borde sí."
    },
    {
      tipo: "completar",
      enunciado: "Escribe la declaración que hace que `width` incluya padding y borde.",
      respuestas: ["box-sizing: border-box", "box-sizing:border-box"],
      explicacion: "`box-sizing: border-box` activa el modelo alternativo."
    },
    {
      tipo: "completar",
      enunciado: "Escribe la declaración abreviada que centra horizontalmente un bloque con ancho definido (0 arriba/abajo, automático a los lados).",
      respuestas: ["margin: 0 auto", "margin:0 auto"],
      explicacion: "Los márgenes izquierdo y derecho `auto` reparten el espacio sobrante a partes iguales."
    }
  ]
});

/* ============ 5. Valores y unidades ============ */
window.CURSO.modulos.push({
  id: "css-valores",
  orden: 14,
  area: "CSS",
  nivel: "Intermedio",
  titulo: "Valores y unidades",
  resumen: "Unidades absolutas y relativas, formatos de color, funciones de cálculo y variables CSS para escribir estilos flexibles y reutilizables.",
  mdn: "https://developer.mozilla.org/es/docs/Learn_web_development/Core/Styling_basics/Values_and_units",
  conceptos: [
    {
      titulo: "Unidades absolutas y relativas",
      texto: "Las unidades absolutas tienen un tamaño fijo: `px` es la habitual en pantalla; `cm`, `mm`, `in` o `pt` se usan casi solo para impresión. Las relativas dependen de otro valor.",
      puntos: [
        "`px`: unidad base en pantallas",
        "`pt`, `cm`...: pensadas sobre todo para impresión",
        "Las relativas hacen el diseño más flexible y accesible"
      ]
    },
    {
      titulo: "em y rem",
      texto: "`em` es relativo al `font-size` del elemento padre cuando se usa en `font-size`, y al `font-size` del propio elemento en otras propiedades. `rem` es relativo al `font-size` de la raíz (`html`).",
      puntos: [
        "`em` es **compuesto**: anidar `1.5em` multiplica en cada nivel",
        "`rem` no se acumula: siempre depende de `html`",
        "Si `html` es 16px: `1.5rem` = 24px"
      ],
      codigo: `html { font-size: 16px; }
.padre { font-size: 20px; }
.hijo { font-size: 1.5em; }   /* 30px */
.otro { font-size: 1.5rem; }  /* 24px */
.hijo { padding: 1em; }       /* 1em = font-size del propio hijo */`,
      lenguaje: "css",
      ojo: "Con `em` anidado el tamaño crece en cascada (efecto compuesto); `rem` lo evita."
    },
    {
      titulo: "Porcentajes y unidades del viewport",
      texto: "El `%` se calcula respecto a otra magnitud, que depende de la propiedad. `vw` y `vh` son el 1% del ancho y del alto del viewport (área visible).",
      puntos: [
        "`width: 50%`: la mitad del ancho del contenedor",
        "`padding` y `margin` en `%`: respecto al **ancho** del bloque contenedor (también los verticales)",
        "`font-size: 120%`: respecto al `font-size` del padre",
        "`100vw` / `100vh`: todo el ancho / alto del viewport; `dvh` (altura dinámica) ayuda en móviles",
        "`ch`: ancho del carácter \"0\" de la fuente"
      ],
      ojo: "`padding-top: 10%` se calcula sobre el ancho del contenedor, no sobre su alto."
    },
    {
      titulo: "Números sin unidad",
      texto: "Algunas propiedades aceptan números sin unidad. El más importante: `line-height`, que se recomienda sin unidad (`1.5`) porque se multiplica por el `font-size` de cada elemento, también el heredado.",
      codigo: `body { line-height: 1.5; }   /* recomendado */`,
      lenguaje: "css",
      ojo: "`0` es el único valor de longitud que puedes escribir sin unidad en general; `10` sin `px` en `margin` es inválido."
    },
    {
      titulo: "Colores",
      texto: "CSS admite palabras clave (`red`), hexadecimal (`#rrggbb`, `#rgb`, `#rrggbbaa`), `rgb()` y `hsl()` (tono 0-360, saturación y luminosidad en %). El canal alfa da transparencia.",
      puntos: [
        "`#ff0000` = `#f00` = `rgb(255 0 0)` = `hsl(0 100% 50%)`",
        "`rgb(0 0 0 / 50%)` o `#00000080`: color semitransparente",
        "`transparent`: totalmente transparente",
        "`currentColor`: el valor actual de `color`"
      ],
      codigo: `p { color: hsl(210 80% 40%); }
.caja { border: 2px solid currentColor; background: rgb(0 0 0 / 0.1); }`,
      lenguaje: "css"
    },
    {
      titulo: "Alfa frente a opacity",
      texto: "El canal alfa afecta solo al color en el que se usa. `opacity` hace translúcido **todo el elemento**: fondo, texto, bordes y sus hijos.",
      codigo: `.a { background: rgb(0 0 0 / 0.5); }  /* solo el fondo */
.b { opacity: 0.5; }                  /* todo el elemento y sus hijos */`,
      lenguaje: "css",
      ojo: "No puedes \"recuperar\" opacidad en un hijo: el hijo de un elemento con `opacity: .5` nunca será más opaco que su padre."
    },
    {
      titulo: "calc(), min(), max() y clamp()",
      texto: "`calc()` permite operar con valores de distintas unidades. `min()` y `max()` eligen el menor o el mayor; `clamp(min, ideal, max)` mantiene un valor ideal entre un mínimo y un máximo.",
      puntos: [
        "En `calc()`, `+` y `-` **necesitan espacios** alrededor; `*` y `/` no",
        "`width: calc(100% - 40px)`",
        "`font-size: clamp(1rem, 2.5vw, 2rem)`"
      ],
      codigo: `.barra { width: calc(100% - 40px); }
h1 { font-size: clamp(1.5rem, 4vw, 3rem); }`,
      lenguaje: "css",
      ojo: "`calc(100%-40px)` es inválido (faltan espacios) y la declaración se ignora."
    },
    {
      titulo: "Variables CSS y url()",
      texto: "Las propiedades personalizadas (custom properties, variables) se declaran con `--nombre` y se leen con `var(--nombre, respaldo)`. Se heredan, y suelen definirse en `:root`. `url()` referencia un recurso.",
      codigo: `:root { --color-primario: #1d4ed8; }
.btn { background: var(--color-primario, blue); }
.hero { background-image: url("img/fondo.png"); }`,
      lenguaje: "css",
      ojo: "El segundo argumento de `var()` solo se usa si la variable no está definida."
    }
  ],
  chuleta: [
    ["`px`", "Unidad absoluta habitual en pantalla."],
    ["`pt`, `cm`", "Absolutas, casi solo para impresión."],
    ["`em`", "En font-size: relativo al padre; en lo demás: al propio font-size. Se compone."],
    ["`rem`", "Relativo al font-size de `html`."],
    ["`%`", "width: contenedor; padding/margin: ancho del contenedor; font-size: del padre."],
    ["`vw` / `vh`", "1% del ancho / alto del viewport."],
    ["`ch`", "Ancho del carácter \"0\"."],
    ["`line-height: 1.5`", "Recomendado sin unidad."],
    ["`#rrggbb`", "Hexadecimal; `#rgb` abreviado, `#rrggbbaa` con alfa."],
    ["`rgb()` / `hsl()`", "Rojo-verde-azul / tono-saturación-luminosidad."],
    ["`opacity`", "Translucidez de todo el elemento y sus hijos."],
    ["`transparent`", "Color totalmente transparente."],
    ["`currentColor`", "El valor actual de `color`."],
    ["`calc()`", "Cálculo; espacios alrededor de `+` y `-`."],
    ["`clamp(min, ideal, max)`", "Valor ideal limitado entre mínimo y máximo."],
    ["`min()` / `max()`", "El menor / el mayor de los valores."],
    ["`--x` y `var(--x, respaldo)`", "Declarar y usar una variable; se heredan."]
  ],
  ejemplo: {
    consigna: "Cambia `--color-primario` en `:root` y observa cómo se actualizan a la vez el título y el botón. Modifica el `calc()` de la barra.",
    html: `<h1 class="titulo">Título</h1>
<button class="btn">Botón</button>
<div class="barra"></div>`,
    css: `:root {
  --color-primario: #1d4ed8;
}
.titulo { color: var(--color-primario); }
.btn {
  background: var(--color-primario);
  color: white;
  padding: 0.5rem 1rem;
  border: 0;
}
.barra {
  height: 20px;
  background: #fde68a;
  width: calc(100% - 60px);
  margin-top: 10px;
}`
  },
  reto: {
    enunciado: "Define en `:root` las variables `--color-primario` y `--color-fondo` (valores a tu gusto, pero distintos del negro y del transparente). Usa `var()` para dar `color: var(--color-primario)` a `.titulo` y `background-color: var(--color-fondo)` a `.texto`. Además, haz que `.barra` mida el 100% de su contenedor menos 40px usando `calc()`.",
    pista: "Declara las variables dentro de `:root { ... }` y léelas con `var(--nombre)`; en `calc()` deja espacios alrededor de `-`.",
    html: `<h1 class="titulo">Título</h1>
<p class="texto">Un párrafo.</p>
<div class="barra">barra</div>`,
    css: `.barra { background: #fde68a; }
`,
    solucion: {
      html: `<h1 class="titulo">Título</h1>
<p class="texto">Un párrafo.</p>
<div class="barra">barra</div>`,
      css: `:root {
  --color-primario: #1d4ed8;
  --color-fondo: #fef3c7;
}
.titulo { color: var(--color-primario); }
.texto { background-color: var(--color-fondo); }
.barra { background: #fde68a; width: calc(100% - 40px); }`
    },
    validar: function (doc, win) {
      var t = doc.querySelector(".titulo"), p = doc.querySelector(".texto"), b = doc.querySelector(".barra");
      if (!t || !p || !b) return { ok: false, msg: "No encuentro .titulo, .texto o .barra (no cambies el HTML)." };
      var css = "";
      try {
        var estilos = doc.querySelectorAll("style");
        for (var i = 0; i < estilos.length; i++) css += estilos[i].textContent;
      } catch (e) {}
      if (css.indexOf("var(--") === -1) return { ok: false, msg: "Usa variables con `var(--...)`." };
      var raiz = win.getComputedStyle(doc.documentElement);
      if (!raiz.getPropertyValue("--color-primario").trim()) return { ok: false, msg: "Falta definir --color-primario en :root." };
      if (!raiz.getPropertyValue("--color-fondo").trim()) return { ok: false, msg: "Falta definir --color-fondo en :root." };
      var c = win.getComputedStyle(t).color;
      if (c === "rgb(0, 0, 0)" || c === "rgba(0, 0, 0, 0)") return { ok: false, msg: "El color de .titulo aún no viene de --color-primario (o es negro)." };
      var f = win.getComputedStyle(p).backgroundColor;
      if (f === "rgba(0, 0, 0, 0)" || f === "transparent") return { ok: false, msg: "El fondo de .texto aún no viene de --color-fondo." };
      if (css.indexOf("calc(") === -1) return { ok: false, msg: "Usa calc() para el ancho de .barra." };
      var padre = b.parentElement;
      var anchoPadre = padre ? parseFloat(win.getComputedStyle(padre).width) : NaN;
      var anchoBarra = parseFloat(win.getComputedStyle(b).width);
      if (isNaN(anchoPadre) || isNaN(anchoBarra) || Math.abs(anchoBarra - (anchoPadre - 40)) > 1) return { ok: false, msg: "El ancho de .barra debe ser el 100% del contenedor menos 40px (`calc(100% - 40px)`)." };
      return { ok: true, msg: "¡Correcto! Variables y calc() funcionando." };
    }
  },
  preguntas: [
    {
      tipo: "opcion",
      enunciado: "Con `html { font-size: 16px; }`, ¿cuánto mide `font-size: 1.5rem` en cualquier elemento?",
      opciones: ["16px", "1.5px", "24px", "Depende del font-size del padre"],
      correcta: 2,
      explicacion: "`rem` es relativo a la raíz: 1.5 × 16 = 24px, sin importar el padre."
    },
    {
      tipo: "opcion",
      enunciado: "Un padre tiene `font-size: 20px`. ¿Cuánto mide el hijo con `font-size: 1.5em`?",
      opciones: ["30px", "24px", "20px", "1.5px"],
      correcta: 0,
      explicacion: "En `font-size`, `em` es relativo al `font-size` del padre: 1.5 × 20 = 30px."
    },
    {
      tipo: "opcion",
      enunciado: "¿Respecto a qué se calcula `padding: 10%`?",
      opciones: ["Al alto del propio elemento", "Al `font-size` del padre", "Al ancho del propio elemento", "Al ancho del bloque contenedor"],
      correcta: 3,
      explicacion: "El `%` en `padding` y `margin` (también en los lados verticales) toma como referencia el ancho del bloque contenedor."
    },
    {
      tipo: "opcion",
      enunciado: "¿Qué diferencia hay entre `opacity: 0.5` y un fondo `rgb(0 0 0 / 0.5)`?",
      opciones: ["Son equivalentes siempre", "`opacity` afecta a todo el elemento y a sus hijos; el alfa solo al color donde se usa", "El alfa afecta también a los hijos; `opacity` solo al fondo", "`opacity` solo afecta al texto"],
      correcta: 1,
      explicacion: "`opacity` hace translúcido el elemento completo (texto, bordes, hijos). El canal alfa de un color solo afecta a ese color."
    },
    {
      tipo: "opcion",
      enunciado: "¿Por qué es inválido `width: calc(100%-20px);`?",
      opciones: ["`calc()` no admite porcentajes", "Falta la unidad en `100`", "Faltan espacios alrededor del `-`", "No se pueden mezclar `%` y `px`"],
      correcta: 2,
      explicacion: "En `calc()` los operadores `+` y `-` necesitan espacios a ambos lados. Mezclar `%` y `px` sí es posible."
    },
    {
      tipo: "opcion",
      enunciado: "¿Qué hace `font-size: clamp(1rem, 2.5vw, 2rem);`?",
      opciones: ["Fija siempre 1rem", "Fija siempre 2rem", "Fija siempre 2.5vw", "Usa 2.5vw pero nunca menos de 1rem ni más de 2rem"],
      correcta: 3,
      explicacion: "`clamp(mín, ideal, máx)` usa el valor ideal acotado entre el mínimo y el máximo."
    },
    {
      tipo: "opcion",
      enunciado: "En `color: var(--acento, red);`, ¿qué es `red`?",
      opciones: ["El valor de respaldo si `--acento` no está definida", "Una segunda variable", "El valor que se aplica siempre", "Una unidad"],
      correcta: 0,
      explicacion: "El segundo argumento de `var()` es el valor de respaldo (fallback) que se usa solo si la variable no existe."
    },
    {
      tipo: "opcion",
      enunciado: "¿Qué valor de `line-height` suele recomendarse?",
      opciones: ["`24px`", "`1.5` (sin unidad)", "`150%`", "`1.5em`"],
      correcta: 1,
      explicacion: "Sin unidad se multiplica por el `font-size` de cada elemento al heredarse; con `%`, `em` o `px` se hereda ya calculado y puede dar resultados inesperados en los hijos."
    },
    {
      tipo: "completar",
      enunciado: "Escribe la unidad relativa al `font-size` del elemento raíz `html`.",
      respuestas: ["rem"],
      explicacion: "`rem` (root em) toma como referencia el `font-size` de `html`."
    },
    {
      tipo: "completar",
      enunciado: "Escribe la palabra clave de color que toma el valor actual de la propiedad `color` del elemento.",
      respuestas: ["currentColor", "currentcolor"],
      explicacion: "`currentColor` permite que, por ejemplo, un borde use el mismo color que el texto."
    }
  ]
});
