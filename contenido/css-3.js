window.CURSO = window.CURSO || { modulos: [] };

/* ============================== CSS GRID ============================== */
window.CURSO.modulos.push({
  id: "css-grid",
  orden: 19,
  area: "CSS",
  nivel: "Avanzado",
  titulo: "CSS Grid",
  resumen: "Maqueta en dos dimensiones (filas y columnas a la vez) con una cuadrícula definida en el contenedor.",
  mdn: "https://developer.mozilla.org/es/docs/Web/CSS/CSS_grid_layout",
  conceptos: [
    {
      titulo: "Modelo bidimensional y display: grid",
      texto: "CSS Grid (rejilla o cuadrícula) es un sistema de maquetación bidimensional: controla **filas y columnas a la vez**. Se activa con `display: grid` en el contenedor (grid container); sus hijos directos se convierten en ítems de la cuadrícula (grid items).",
      puntos: [
        "Solo los hijos directos son ítems; los nietos no.",
        "Líneas (grid lines): numeradas desde 1; las pistas (tracks) son las filas o columnas entre dos líneas.",
        "Celda (cell): cruce de una fila y una columna; área (area): conjunto rectangular de celdas.",
        "`display: inline-grid` crea un contenedor grid en línea."
      ],
      codigo: `.contenedor {
  display: grid;
}`,
      lenguaje: "css",
      ojo: "Solo con `display: grid` no ves columnas: sin `grid-template-columns` los ítems se apilan en una sola columna."
    },
    {
      titulo: "Definir pistas: grid-template-columns, fr, repeat() y minmax()",
      texto: "`grid-template-columns` y `grid-template-rows` definen el tamaño de las columnas y filas. La unidad `fr` es una **fracción del espacio libre** del contenedor; `repeat()` evita repetir valores y `minmax(min, max)` fija un rango de tamaño.",
      puntos: [
        "`1fr 2fr`: la segunda columna recibe el doble de espacio libre que la primera.",
        "`repeat(3, 1fr)` equivale a `1fr 1fr 1fr`.",
        "`minmax(100px, 1fr)`: nunca menos de 100px, y como máximo una fracción.",
        "Se pueden mezclar unidades: `200px 1fr 10%`."
      ],
      codigo: `.rejilla {
  display: grid;
  grid-template-columns: 200px 1fr 2fr;
  grid-template-rows: repeat(2, minmax(80px, auto));
}`,
      lenguaje: "css",
      ojo: "`fr` reparte el espacio que queda tras restar los tamaños fijos y los huecos (gap), no el espacio total."
    },
    {
      titulo: "Rejilla responsive: auto-fill y auto-fit",
      texto: "Con `repeat(auto-fill, ...)` o `repeat(auto-fit, ...)` el navegador crea **tantas columnas como quepan**. Combinado con `minmax()` da una rejilla adaptable **sin media queries**.",
      puntos: [
        "`auto-fill`: crea las columnas que caben, aunque queden vacías (conserva el hueco).",
        "`auto-fit`: igual, pero **colapsa las pistas vacías** y los ítems se estiran para ocupar el espacio.",
        "Receta típica: `repeat(auto-fit, minmax(200px, 1fr))`."
      ],
      codigo: `.rejilla {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}`,
      lenguaje: "css",
      ojo: "La diferencia entre `auto-fill` y `auto-fit` solo se nota cuando hay menos ítems que columnas posibles."
    },
    {
      titulo: "Espacios (gap) y cuadrícula implícita",
      texto: "`gap` separa las pistas (atajo de `row-gap` y `column-gap`) sin añadir margen en los extremos. La **cuadrícula explícita** es la que defines con `grid-template-*`; si hay más ítems de los que caben, se crean filas o columnas **implícitas**.",
      puntos: [
        "`gap: 10px 20px` = `row-gap: 10px` y `column-gap: 20px`; con un valor se aplica a ambos.",
        "`grid-auto-rows` / `grid-auto-columns`: tamaño de las pistas implícitas.",
        "`grid-auto-flow`: dirección de colocación automática; por defecto `row`; `column` o `dense` para rellenar huecos."
      ],
      codigo: `.rejilla {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px 20px;
  grid-auto-rows: 100px;
}`,
      lenguaje: "css",
      ojo: "Las filas implícitas se dimensionan con `grid-auto-rows` (por defecto `auto`), no con `grid-template-rows`."
    },
    {
      titulo: "Colocar ítems por líneas: grid-column y grid-row",
      texto: "Un ítem se coloca indicando entre qué líneas empieza y acaba con `grid-column` y `grid-row` (formato `inicio / fin`). Con `span n` ocupa n pistas desde su posición.",
      puntos: [
        "`grid-column: 1 / 3` ocupa de la línea 1 a la 3 (2 columnas).",
        "`grid-column: span 2` ocupa 2 columnas desde donde le toque.",
        "Las líneas negativas cuentan desde el final de la cuadrícula explícita: `1 / -1` ocupa **todo el ancho**.",
        "`grid-row` funciona igual con las filas."
      ],
      codigo: `.cabecera { grid-column: 1 / -1; }
.destacado { grid-column: span 2; grid-row: 2 / 4; }`,
      lenguaje: "css",
      ojo: "Se numeran **líneas**, no columnas: `1 / 3` abarca 2 columnas. `-1` es la última línea de la cuadrícula explícita."
    },
    {
      titulo: "Áreas con nombre: grid-template-areas y grid-area",
      texto: "`grid-template-areas` dibuja la maqueta con texto: cada fila va entre comillas y cada palabra es el nombre de un área. Luego cada ítem se asigna con `grid-area: nombre`.",
      puntos: [
        "Cada fila entre comillas, con las celdas separadas por espacios.",
        "`.` (punto) marca una celda vacía.",
        "Repetir un nombre en celdas contiguas hace que el área ocupe varias celdas.",
        "Las áreas deben ser **rectangulares** (sin formas en L ni huecos)."
      ],
      codigo: `.pagina {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-areas:
    "cabecera cabecera"
    "lateral  contenido"
    "pie      pie";
}
.cabecera { grid-area: cabecera; }`,
      lenguaje: "css",
      ojo: "Todas las filas deben tener el mismo número de celdas y las áreas con nombre repetido deben formar un rectángulo; si no, la declaración es inválida."
    },
    {
      titulo: "Alineación en Grid",
      texto: "Se puede alinear el contenido dentro de cada celda: `justify-*` actúa en el eje horizontal (en línea) y `align-*` en el vertical (de bloque). Con `-items` se aplica a todos los ítems desde el contenedor; con `-self` a un ítem concreto.",
      puntos: [
        "`justify-items` / `align-items`: alinean todos los ítems en su celda (por defecto `stretch`).",
        "`justify-self` / `align-self`: lo mismo, pero para un solo ítem.",
        "`place-items: <align> <justify>`: atajo; con un valor se aplica a ambos.",
        "Valores comunes: `start`, `end`, `center`, `stretch`."
      ],
      codigo: `.rejilla {
  display: grid;
  place-items: center;
}
.especial { justify-self: end; }`,
      lenguaje: "css",
      ojo: "En `place-items` el **primer** valor es `align-items` (vertical) y el segundo `justify-items` (horizontal)."
    },
    {
      titulo: "Grid frente a Flexbox",
      texto: "Flexbox es **unidimensional** (una fila o una columna a la vez) y parte del contenido; Grid es **bidimensional** y parte del diseño. No compiten: se combinan.",
      puntos: [
        "Flexbox: barras de navegación, alinear elementos en una línea, repartir espacio según el contenido (contenido primero).",
        "Grid: maquetar la página o componentes con filas y columnas alineadas (diseño primero).",
        "Es habitual usar Grid para la estructura general y Flexbox dentro de cada componente."
      ],
      ojo: "Pregunta clásica: 1D (flex) frente a 2D (grid). Que Grid pueda hacerlo todo no significa que sea siempre la mejor herramienta."
    }
  ],
  chuleta: [
    ["display: grid", "Convierte el elemento en contenedor de cuadrícula."],
    ["grid-template-columns", "Define el número y tamaño de las columnas."],
    ["grid-template-rows", "Define el número y tamaño de las filas."],
    ["fr", "Fracción del espacio libre del contenedor."],
    ["repeat(3, 1fr)", "Repite un patrón de pistas; equivale a 1fr 1fr 1fr."],
    ["minmax(200px, 1fr)", "Tamaño de pista entre un mínimo y un máximo."],
    ["auto-fill / auto-fit", "Crea tantas columnas como quepan; auto-fit colapsa las vacías."],
    ["gap / row-gap / column-gap", "Espacio entre filas y columnas."],
    ["grid-auto-rows", "Tamaño de las filas implícitas."],
    ["grid-auto-flow", "Dirección de colocación automática (row, column, dense)."],
    ["grid-column: 1 / 3", "Ítem entre las líneas 1 y 3 (ocupa 2 columnas)."],
    ["grid-column: 1 / -1", "Ocupa todas las columnas de la cuadrícula explícita."],
    ["span 2", "Ocupar 2 pistas desde la posición actual."],
    ["grid-template-areas", "Define la maqueta con nombres de área, una fila por cadena."],
    ["grid-area", "Asigna el ítem a un área con nombre."],
    ["place-items", "Atajo de align-items y justify-items."]
  ],
  ejemplo: {
    consigna: "Cambia el número de columnas en `repeat()` y prueba `auto-fit` con `minmax(120px, 1fr)`. Observa cómo la tarjeta destacada se extiende con `grid-column`.",
    html: `<div class="rejilla">
  <div class="caja destacada">1 (span 2)</div>
  <div class="caja">2</div>
  <div class="caja">3</div>
  <div class="caja">4</div>
  <div class="caja">5</div>
</div>`,
    css: `.rejilla {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  grid-auto-rows: 60px;
}
.caja {
  background: #bfdbfe;
  border: 2px solid #2563eb;
  display: grid;
  place-items: center;
}
.destacada {
  grid-column: span 2;
  background: #fde68a;
}`
  },
  reto: {
    enunciado: "Maqueta la página con `grid-template-areas`: una cabecera arriba a todo el ancho, en medio la barra lateral (izquierda) y el contenido (derecha), y el pie abajo. Usa `display: grid` en `.pagina` y asigna cada área con `grid-area`.",
    pista: "Define dos columnas (por ejemplo `150px 1fr`) y tres filas de texto en `grid-template-areas`; repite el nombre de cabecera y pie en las dos columnas.",
    html: `<div class="pagina">
  <header class="cabecera">Cabecera</header>
  <aside class="lateral">Lateral</aside>
  <main class="contenido">Contenido</main>
  <footer class="pie">Pie</footer>
</div>`,
    css: `.pagina {
  gap: 8px;
}
.pagina > * {
  padding: 12px;
  border: 2px solid #1e3a8a;
}
.cabecera { background: #bfdbfe; }
.lateral { background: #fde68a; }
.contenido { background: #bbf7d0; min-height: 80px; }
.pie { background: #fecaca; }`,
    solucion: {
      html: `<div class="pagina">
  <header class="cabecera">Cabecera</header>
  <aside class="lateral">Lateral</aside>
  <main class="contenido">Contenido</main>
  <footer class="pie">Pie</footer>
</div>`,
      css: `.pagina {
  display: grid;
  grid-template-columns: 150px 1fr;
  grid-template-areas:
    "cabecera cabecera"
    "lateral contenido"
    "pie pie";
  gap: 8px;
}
.pagina > * {
  padding: 12px;
  border: 2px solid #1e3a8a;
}
.cabecera { grid-area: cabecera; background: #bfdbfe; }
.lateral { grid-area: lateral; background: #fde68a; }
.contenido { grid-area: contenido; background: #bbf7d0; min-height: 80px; }
.pie { grid-area: pie; background: #fecaca; }`
    },
    validar: function (doc, win) {
      try {
        var p = doc.querySelector(".pagina");
        var c = doc.querySelector(".cabecera");
        var l = doc.querySelector(".lateral");
        var m = doc.querySelector(".contenido");
        var f = doc.querySelector(".pie");
        if (!p || !c || !l || !m || !f) return { ok: false, msg: "Faltan elementos (.pagina, .cabecera, .lateral, .contenido, .pie). No cambies las clases." };
        if (win.getComputedStyle(p).display.indexOf("grid") === -1) return { ok: false, msg: "`.pagina` aún no es un contenedor grid (usa `display: grid`)." };
        var rp = p.getBoundingClientRect();
        var rc = c.getBoundingClientRect();
        var rl = l.getBoundingClientRect();
        var rm = m.getBoundingClientRect();
        var rf = f.getBoundingClientRect();
        if (rc.width < rp.width * 0.95) return { ok: false, msg: "La cabecera debe ocupar todo el ancho de la página." };
        if (rc.bottom > rl.top + 1 || rc.bottom > rm.top + 1) return { ok: false, msg: "La cabecera debe quedar arriba, por encima del lateral y del contenido." };
        if (rl.right > rm.left + 1) return { ok: false, msg: "El lateral debe quedar a la izquierda del contenido, no encima." };
        if (Math.abs(rl.top - rm.top) > 2) return { ok: false, msg: "Lateral y contenido deben empezar a la misma altura (misma fila)." };
        if (rf.top < rl.bottom - 1 || rf.top < rm.bottom - 1) return { ok: false, msg: "El pie debe quedar debajo del lateral y del contenido." };
        if (rf.width < rp.width * 0.95) return { ok: false, msg: "El pie debe ocupar todo el ancho de la página." };
        return { ok: true, msg: "¡Correcto! Cabecera arriba, lateral y contenido en medio, y pie abajo con Grid." };
      } catch (e) {
        return { ok: false, msg: "No se pudo comprobar el resultado: revisa el CSS." };
      }
    }
  },
  preguntas: [
    {
      tipo: "opcion",
      enunciado: "¿Qué efecto tiene `grid-template-columns: 1fr 2fr;`?",
      opciones: [
        "Crea dos columnas de 1px y 2px.",
        "Crea dos columnas del mismo ancho.",
        "Crea dos columnas; la segunda recibe el doble de espacio libre que la primera.",
        "Crea una columna de 3 fracciones."
      ],
      correcta: 2,
      explicacion: "`fr` es una fracción del espacio libre: el espacio se divide en 3 partes, 1 para la primera columna y 2 para la segunda. No son píxeles ni crea una sola columna."
    },
    {
      tipo: "opcion",
      enunciado: "Un ítem de una cuadrícula explícita de 4 columnas debe ocupar todo el ancho. ¿Qué declaración sirve?",
      opciones: [
        "`grid-column: 1 / -1;`",
        "`grid-column: 1 / 4;`",
        "`grid-column: 0 / 4;`",
        "`grid-row: 1 / -1;`"
      ],
      correcta: 0,
      explicacion: "`-1` es la última línea de la cuadrícula explícita, así que `1 / -1` abarca todas las columnas. `1 / 4` solo cubre 3 columnas (hay 5 líneas), `0` no es una línea válida y `grid-row` actúa sobre filas."
    },
    {
      tipo: "opcion",
      enunciado: "¿Cuál es la diferencia entre `auto-fill` y `auto-fit` en `repeat()`?",
      opciones: [
        "`auto-fill` solo funciona con `px` y `auto-fit` solo con `fr`.",
        "`auto-fit` crea más columnas que `auto-fill`.",
        "No hay diferencia; son sinónimos.",
        "`auto-fit` colapsa las pistas vacías y estira los ítems; `auto-fill` conserva las pistas vacías."
      ],
      correcta: 3,
      explicacion: "Ambos crean tantas columnas como quepan. Con pocos ítems, `auto-fill` deja columnas vacías ocupando espacio y `auto-fit` las colapsa para que los ítems se estiren."
    },
    {
      tipo: "opcion",
      enunciado: "¿Qué pasa con esta definición?",
      codigo: `.pagina {
  display: grid;
  grid-template-areas:
    "a a"
    "b a";
}`,
      lenguaje: "css",
      opciones: [
        "Es válida: el área `a` tiene forma de L.",
        "No es válida: las áreas con nombre deben ser rectangulares.",
        "Es válida, pero `b` se ignora.",
        "No es válida porque falta el punto `.`."
      ],
      correcta: 1,
      explicacion: "El área `a` ocuparía tres celdas en forma de L. Las áreas deben ser rectangulares; si no, la declaración se descarta. El punto `.` solo se usa para celdas vacías y no es obligatorio."
    },
    {
      tipo: "opcion",
      enunciado: "¿Qué propiedad alinea horizontalmente todos los ítems dentro de sus celdas?",
      opciones: [
        "`align-items`",
        "`justify-items`",
        "`align-content`",
        "`grid-auto-flow`"
      ],
      correcta: 1,
      explicacion: "`justify-items` alinea en el eje en línea (horizontal); `align-items` lo hace en el eje de bloque (vertical). `align-content` reparte las pistas dentro del contenedor y `grid-auto-flow` controla la colocación automática."
    },
    {
      tipo: "opcion",
      enunciado: "Necesitas una barra de navegación con enlaces en una sola fila, repartiendo el espacio según su contenido. ¿Qué es lo más adecuado?",
      opciones: [
        "Grid, porque Flexbox está obsoleto.",
        "Tablas HTML.",
        "Flexbox, porque es un problema unidimensional que parte del contenido.",
        "Floats con `clear`."
      ],
      correcta: 2,
      explicacion: "Flexbox es ideal para una dimensión (fila o columna) y partir del contenido. Grid es 2D y no sustituye a Flexbox: se combinan. Tablas y floats no son para maquetar."
    },
    {
      tipo: "opcion",
      enunciado: "Una cuadrícula define 2 filas con `grid-template-rows`, pero hay 6 ítems en 2 columnas. ¿Cómo se dimensionan las filas extra?",
      opciones: [
        "Con `grid-auto-rows` (filas implícitas).",
        "Con `grid-template-rows`.",
        "No se crean; los ítems sobrantes se ocultan.",
        "Con `row-gap`."
      ],
      correcta: 0,
      explicacion: "Los ítems que no caben en la cuadrícula explícita generan filas implícitas, cuyo tamaño controla `grid-auto-rows` (por defecto `auto`). `row-gap` solo es el espacio entre filas."
    },
    {
      tipo: "opcion",
      enunciado: "¿Qué hace `place-items: center end;`?",
      opciones: [
        "`justify-items: center` y `align-items: end`.",
        "`justify-items: end` y `align-items: end`.",
        "`justify-self: center` solo en el primer ítem.",
        "`align-items: center` y `justify-items: end`."
      ],
      correcta: 3,
      explicacion: "El primer valor de `place-items` es `align-items` (vertical) y el segundo `justify-items` (horizontal). Por tanto: centrado vertical y alineado al final en horizontal."
    },
    {
      tipo: "completar",
      enunciado: "Escribe la propiedad abreviada que fija el espacio entre filas y columnas de una cuadrícula.",
      respuestas: ["gap", "grid-gap"],
      explicacion: "`gap` es el atajo de `row-gap` y `column-gap`. `grid-gap` es el nombre antiguo, aún aceptado como alias."
    },
    {
      tipo: "completar",
      enunciado: "Escribe la declaración que convierte un elemento en contenedor de cuadrícula.",
      respuestas: ["display: grid", "display:grid"],
      explicacion: "`display: grid` crea un contenedor grid de bloque; sus hijos directos pasan a ser ítems."
    }
  ]
});

/* ============================ DISEÑO RESPONSIVE ============================ */
window.CURSO.modulos.push({
  id: "css-responsive",
  orden: 20,
  area: "CSS",
  nivel: "Avanzado",
  titulo: "Diseño responsive",
  resumen: "Haz que una misma página se vea y funcione bien en cualquier tamaño de pantalla.",
  mdn: "https://developer.mozilla.org/es/docs/Web/CSS/CSS_media_queries/Using_media_queries",
  conceptos: [
    {
      titulo: "Qué es el diseño responsive",
      texto: "El diseño web adaptable (responsive web design) hace que una página se adapte al tamaño y tipo de pantalla. El término lo popularizó **Ethan Marcotte** en 2010, combinando rejillas fluidas, imágenes flexibles y media queries.",
      puntos: [
        "Antes: diseño fijo (anchos en px) o líquido (anchos en porcentajes) y versiones separadas para móvil.",
        "Hoy: una sola página que se adapta con CSS.",
        "Ingredientes: rejillas flexibles, imágenes fluidas y media queries."
      ],
      ojo: "Responsive no significa 'versión móvil aparte': es el mismo HTML con CSS que se adapta."
    },
    {
      titulo: "La etiqueta meta viewport",
      texto: "Para que el diseño responsive funcione en móviles hay que incluir en el `<head>` la etiqueta viewport. Sin ella, los móviles renderizan la página en un ancho virtual grande (en torno a 980px) y la reducen, así que las media queries no se activan como esperas.",
      codigo: `<meta name="viewport" content="width=device-width, initial-scale=1">`,
      lenguaje: "html",
      puntos: [
        "`width=device-width`: el ancho del viewport es el ancho real del dispositivo.",
        "`initial-scale=1`: sin zoom inicial."
      ],
      ojo: "Sin `<meta name=\"viewport\">` el móvil muestra la página como escritorio en miniatura y el CSS responsive parece no funcionar."
    },
    {
      titulo: "Media queries: sintaxis y tipos de medio",
      texto: "Una media query aplica reglas CSS solo si se cumple una condición. Se escribe con `@media`, un tipo de medio opcional y condiciones entre paréntesis.",
      codigo: `@media screen and (min-width: 600px) {
  .tarjetas {
    grid-template-columns: repeat(2, 1fr);
  }
}`,
      lenguaje: "css",
      puntos: [
        "Tipos de medio: `all` (por defecto), `screen` (pantallas) y `print` (impresión).",
        "Si omites el tipo, se asume `all`.",
        "Dentro van reglas CSS normales que se aplican solo si la condición se cumple."
      ],
      ojo: "Las condiciones van entre paréntesis y la palabra `and` las une al tipo: `screen and (min-width: 600px)`."
    },
    {
      titulo: "Características, operadores y sintaxis de rango",
      texto: "Las características (media features) consultan el entorno: tamaño, orientación, preferencias del usuario o capacidades del dispositivo. Se combinan con operadores lógicos.",
      puntos: [
        "Características: `width`, `min-width`, `max-width`, `orientation` (portrait/landscape), `prefers-color-scheme` (light/dark), `prefers-reduced-motion`, `hover`.",
        "`and`: se deben cumplir todas; la **coma** equivale a **o**; `not` niega la consulta.",
        "Sintaxis de rango moderna: `(width >= 600px)` equivale a `(min-width: 600px)`; también `(400px <= width <= 800px)`."
      ],
      codigo: `@media (min-width: 600px) and (orientation: landscape) { }
@media (max-width: 400px), print { }
@media (width >= 600px) { }
@media (prefers-color-scheme: dark) { }`,
      lenguaje: "css",
      ojo: "La coma es un OR: `(max-width: 400px), print` se cumple si es pantalla estrecha **o** impresión."
    },
    {
      titulo: "Mobile first, desktop first y puntos de ruptura",
      texto: "En **mobile first** escribes primero los estilos base para móvil y amplías con `min-width` para pantallas mayores. En **desktop first** partes del escritorio y reduces con `max-width`. Mobile first suele ser más simple y ligero.",
      puntos: [
        "Mobile first: base sin media query + `@media (min-width: ...)`.",
        "Desktop first: base de escritorio + `@media (max-width: ...)`.",
        "Los puntos de ruptura (breakpoints) se eligen **según el contenido** (donde el diseño se rompe), no según modelos de dispositivos concretos."
      ],
      codigo: `.menu { display: block; }          /* móvil */
@media (min-width: 700px) {
  .menu { display: flex; }         /* pantallas mayores */
}`,
      lenguaje: "css",
      ojo: "No mezcles enfoques: si usas mobile first, tus consultas son `min-width`; con `max-width` tendrías desktop first."
    },
    {
      titulo: "Imágenes fluidas",
      texto: "Para que una imagen nunca desborde su contenedor se limita su ancho y se mantiene la proporción con la altura automática.",
      codigo: `img {
  max-width: 100%;
  height: auto;
}`,
      lenguaje: "css",
      puntos: [
        "`max-width: 100%`: la imagen se encoge si el contenedor es menor, pero no se agranda más de su tamaño natural.",
        "`height: auto`: conserva la proporción."
      ],
      ojo: "Con `width: 100%` la imagen sí se estira por encima de su tamaño natural; `max-width: 100%` solo la reduce."
    },
    {
      titulo: "Tipografía fluida: clamp() y vw",
      texto: "La unidad `vw` es el 1 % del ancho del viewport. `clamp(mínimo, preferido, máximo)` limita un valor entre dos extremos, ideal para tamaños de letra fluidos.",
      codigo: `h1 {
  font-size: clamp(1.5rem, 4vw, 3rem);
}`,
      lenguaje: "css",
      puntos: [
        "El valor nunca baja del mínimo ni sube del máximo.",
        "Con `4vw + 1rem` se mezcla viewport con `rem` para respetar la preferencia del usuario."
      ],
      ojo: "No uses solo `vw` para el texto: no responde al zoom del navegador y perjudica la accesibilidad. Combínalo con `rem` o `clamp()`."
    },
    {
      titulo: "Adaptarse sin media queries y container queries",
      texto: "Muchos diseños se adaptan solos: `flex-wrap: wrap` con `flex: 1 1 200px`, o Grid con `repeat(auto-fit, minmax(200px, 1fr))`. Además, las **container queries** reaccionan al tamaño del **contenedor** del componente y no al de la ventana.",
      codigo: `.tarjetas { container-type: inline-size; }

@container (min-width: 400px) {
  .tarjeta { display: flex; }
}`,
      lenguaje: "css",
      puntos: [
        "`container-type` declara el elemento como contenedor consultable.",
        "`@container` aplica reglas según el tamaño de ese contenedor.",
        "Son una incorporación reciente; las media queries siguen siendo la base."
      ],
      ojo: "Media query = tamaño del viewport; container query = tamaño del contenedor. No son lo mismo."
    }
  ],
  chuleta: [
    ["responsive design", "Diseño que se adapta a cualquier tamaño de pantalla (Ethan Marcotte, 2010)."],
    ["meta viewport", "width=device-width, initial-scale=1: ancho real del dispositivo en móviles."],
    ["@media", "Aplica reglas solo si se cumple una condición."],
    ["all / screen / print", "Tipos de medio: todos, pantallas, impresión."],
    ["min-width / max-width", "Se cumple si el ancho es mayor o igual / menor o igual que el valor."],
    ["(width >= 600px)", "Sintaxis de rango; equivale a min-width: 600px."],
    ["and / coma / not", "Y lógico / O lógico / negación."],
    ["orientation", "portrait (vertical) o landscape (horizontal)."],
    ["prefers-color-scheme", "Preferencia del usuario: light o dark."],
    ["prefers-reduced-motion", "El usuario pide menos animaciones (reduce)."],
    ["mobile first", "Base para móvil y ampliar con min-width."],
    ["desktop first", "Base para escritorio y reducir con max-width."],
    ["breakpoint", "Punto de ruptura: ancho donde cambia el diseño; según el contenido."],
    ["max-width: 100%; height: auto", "Imagen fluida que no desborda y mantiene proporción."],
    ["clamp(min, ideal, max)", "Valor fluido acotado entre un mínimo y un máximo."],
    ["@container", "Reglas según el tamaño del contenedor (requiere container-type)."]
  ],
  ejemplo: {
    consigna: "Cambia el ancho mínimo de la media query (por ejemplo a 300px) y observa cuándo pasan las tarjetas de una a varias columnas. Prueba también a ampliar o reducir el panel.",
    html: `<div class="tarjetas">
  <div class="tarjeta">1</div>
  <div class="tarjeta">2</div>
  <div class="tarjeta">3</div>
  <div class="tarjeta">4</div>
</div>`,
    css: `.tarjetas {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}
.tarjeta {
  background: #bfdbfe;
  border: 2px solid #2563eb;
  padding: 16px;
  text-align: center;
}
@media (min-width: 500px) {
  .tarjetas {
    grid-template-columns: repeat(2, 1fr);
  }
}`
  },
  reto: {
    enunciado: "Aplica mobile first: las tarjetas deben ir en **una sola columna** por defecto (sin media query) y pasar a varias columnas con una media query `min-width` que cambie `grid-template-columns`.",
    pista: "Pon `grid-template-columns: 1fr` en `.tarjetas` fuera de cualquier media query y, dentro de `@media (min-width: ...)`, usa `repeat(...)`.",
    html: `<div class="tarjetas">
  <div class="tarjeta">1</div>
  <div class="tarjeta">2</div>
  <div class="tarjeta">3</div>
  <div class="tarjeta">4</div>
</div>`,
    css: `.tarjetas {
  display: grid;
  gap: 10px;
}
.tarjeta {
  background: #bbf7d0;
  border: 2px solid #15803d;
  padding: 16px;
  text-align: center;
}`,
    solucion: {
      html: `<div class="tarjetas">
  <div class="tarjeta">1</div>
  <div class="tarjeta">2</div>
  <div class="tarjeta">3</div>
  <div class="tarjeta">4</div>
</div>`,
      css: `.tarjetas {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
}
.tarjeta {
  background: #bbf7d0;
  border: 2px solid #15803d;
  padding: 16px;
  text-align: center;
}
@media (min-width: 500px) {
  .tarjetas {
    grid-template-columns: repeat(3, 1fr);
  }
}`
    },
    validar: function (doc, win) {
      try {
        var cont = doc.querySelector(".tarjetas");
        if (!cont || doc.querySelectorAll(".tarjeta").length < 2) return { ok: false, msg: "No encuentro `.tarjetas` con varias `.tarjeta` (no cambies las clases)." };
        var base = true;
        var media = false;
        var sheets = doc.styleSheets;
        for (var i = 0; i < sheets.length; i++) {
          var reglas;
          try { reglas = sheets[i].cssRules; } catch (e) { continue; }
          if (!reglas) continue;
          for (var j = 0; j < reglas.length; j++) {
            var r = reglas[j];
            if (r.media) {
              var mt = r.media.mediaText || "";
              if (/min-width/i.test(mt) || />=/.test(mt)) {
                for (var k = 0; k < r.cssRules.length; k++) {
                  var rr = r.cssRules[k];
                  if (!rr.style) continue;
                  if (rr.style.getPropertyValue("grid-template-columns") || rr.style.getPropertyValue("flex-direction") || rr.style.getPropertyValue("flex-wrap")) media = true;
                }
              }
            } else if (r.selectorText && r.style) {
              if (/tarjetas/.test(r.selectorText)) {
                var gtc = r.style.getPropertyValue("grid-template-columns");
                if (gtc) {
                  var sin = gtc.replace(/\([^)]*\)/g, "x").replace(/^\s+|\s+$/g, "");
                  if (sin.split(/\s+/).length > 1) base = false;
                  if (/repeat\(\s*(auto|[2-9])/i.test(gtc)) base = false;
                }
                if (/wrap/i.test(r.style.getPropertyValue("flex-wrap"))) base = false;
              }
            }
          }
        }
        if (!media) return { ok: false, msg: "Falta una media query con `min-width` que cambie `grid-template-columns` (o flex-direction / flex-wrap)." };
        if (!base) return { ok: false, msg: "El estilo base (fuera de la media query) debe ser de una sola columna: mobile first." };
        return { ok: true, msg: "¡Correcto! Una columna base y más columnas a partir de un ancho mínimo (mobile first)." };
      } catch (e) {
        return { ok: false, msg: "No se pudo comprobar el resultado: revisa el CSS." };
      }
    }
  },
  preguntas: [
    {
      tipo: "opcion",
      enunciado: "¿Para qué sirve `<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">`?",
      opciones: [
        "Para que el móvil use el ancho real del dispositivo en lugar de un ancho virtual grande.",
        "Para bloquear el zoom del usuario.",
        "Para activar el modo oscuro.",
        "Para cargar una hoja de estilos distinta en móviles."
      ],
      correcta: 0,
      explicacion: "Sin esta etiqueta los móviles simulan un viewport ancho (~980px) y reducen la página, por lo que el diseño responsive no funciona. No bloquea el zoom ni cambia hojas de estilo."
    },
    {
      tipo: "opcion",
      enunciado: "En un enfoque mobile first, ¿qué característica de media query se usa para ampliar el diseño en pantallas mayores?",
      opciones: [
        "`max-width`",
        "`min-width`",
        "`orientation`",
        "`print`"
      ],
      correcta: 1,
      explicacion: "Mobile first parte de estilos base para móvil y añade `@media (min-width: ...)` para pantallas más anchas. `max-width` es el enfoque desktop first."
    },
    {
      tipo: "opcion",
      enunciado: "¿Qué consigue esta regla?",
      codigo: `img {
  max-width: 100%;
  height: auto;
}`,
      lenguaje: "css",
      opciones: [
        "Estira siempre la imagen al 100 % del ancho de la pantalla.",
        "Oculta la imagen en móviles.",
        "Mantiene la imagen dentro de su contenedor sin deformarla.",
        "Fija la altura de la imagen en `auto` y su ancho en 100px."
      ],
      correcta: 2,
      explicacion: "`max-width: 100%` impide que desborde su contenedor y `height: auto` conserva la proporción. No la agranda más allá de su tamaño natural."
    },
    {
      tipo: "opcion",
      enunciado: "¿Qué significa `font-size: clamp(1rem, 4vw, 2rem);`?",
      opciones: [
        "Siempre 4vw, ignorando los demás valores.",
        "Un tamaño que crece con el viewport pero nunca baja de 1rem ni supera 2rem.",
        "Un tamaño fijo entre 1rem y 2rem elegido al azar.",
        "Tamaño mínimo 4vw y máximo 2rem."
      ],
      correcta: 1,
      explicacion: "`clamp(mínimo, preferido, máximo)` usa el valor preferido (4vw) pero lo limita entre el mínimo (1rem) y el máximo (2rem)."
    },
    {
      tipo: "opcion",
      enunciado: "¿Cómo conviene elegir los puntos de ruptura (breakpoints)?",
      opciones: [
        "Según el modelo de móvil más vendido.",
        "Siempre en 320, 768 y 1024px.",
        "Según el navegador del usuario.",
        "Según el contenido: donde el diseño empieza a verse mal."
      ],
      correcta: 3,
      explicacion: "Los dispositivos cambian constantemente; los breakpoints deben responder a cuándo se rompe el contenido, no a pantallas concretas."
    },
    {
      tipo: "opcion",
      enunciado: "¿Qué equivale a `@media (min-width: 600px)` con la sintaxis de rango moderna?",
      opciones: [
        "`@media (width <= 600px)`",
        "`@media (width < 600px)`",
        "`@media (width >= 600px)`",
        "`@media (width = 600px)`"
      ],
      correcta: 2,
      explicacion: "`min-width: 600px` significa ancho mayor o igual que 600px, es decir `width >= 600px`. Las demás son menor/igual, menor estricto o igualdad exacta."
    },
    {
      tipo: "opcion",
      enunciado: "¿Cuándo se aplica `@media (max-width: 400px), print { ... }`?",
      opciones: [
        "Solo si el ancho es menor de 400px y además se imprime.",
        "Si el ancho es de 400px o menos, o si se imprime.",
        "Nunca; la coma no es válida.",
        "Solo al imprimir."
      ],
      correcta: 1,
      explicacion: "La coma actúa como un OR entre consultas. Para exigir ambas condiciones se usaría `and`."
    },
    {
      tipo: "opcion",
      enunciado: "¿Qué propiedad convierte a un elemento en contenedor consultable para usar `@container`?",
      opciones: [
        "`container-type`",
        "`display: container`",
        "`media-type`",
        "`@viewport`"
      ],
      correcta: 0,
      explicacion: "`container-type` (p. ej. `inline-size`) declara el contenedor; después `@container` aplica reglas según su tamaño, no el de la ventana."
    },
    {
      tipo: "completar",
      enunciado: "Escribe la característica de media query que se usa en mobile first para ir ampliando el diseño según el ancho (solo el nombre).",
      respuestas: ["min-width", "(min-width)"],
      explicacion: "Mobile first usa `min-width`: los estilos base sirven al móvil y las media queries añaden mejoras a partir de cierto ancho."
    },
    {
      tipo: "completar",
      enunciado: "Escribe la característica de media query que detecta si el usuario prefiere tema claro u oscuro.",
      respuestas: ["prefers-color-scheme", "(prefers-color-scheme)"],
      explicacion: "`prefers-color-scheme` toma los valores `light` o `dark` según la preferencia del sistema."
    }
  ]
});

/* ================= TRANSICIONES, TRANSFORMACIONES Y ANIMACIONES ================= */
window.CURSO.modulos.push({
  id: "css-efectos",
  orden: 21,
  area: "CSS",
  nivel: "Avanzado",
  titulo: "Transiciones, transformaciones y animaciones",
  resumen: "Mueve, gira y anima elementos con CSS: transform, transition y @keyframes.",
  mdn: "https://developer.mozilla.org/es/docs/Web/CSS/CSS_transitions/Using_CSS_transitions",
  conceptos: [
    {
      titulo: "transform: mover, girar, escalar e inclinar",
      texto: "`transform` modifica visualmente un elemento sin cambiar su sitio en el flujo del documento: el resto de elementos no se reordenan.",
      puntos: [
        "`translate(x, y)` / `translateX()` / `translateY()`: desplaza.",
        "`rotate(45deg)`: gira.",
        "`scale(1.2)`: cambia el tamaño.",
        "`skew(10deg)`: inclina.",
        "Se pueden encadenar varias funciones separadas por espacios."
      ],
      codigo: `.caja {
  transform: translateY(-4px) rotate(5deg) scale(1.1);
}`,
      lenguaje: "css",
      ojo: "`transform` no afecta al flujo: el elemento ocupa su hueco original aunque se vea desplazado."
    },
    {
      titulo: "transform-origin",
      texto: "`transform-origin` define el punto de anclaje de la transformación: el centro (`center`, valor por defecto), una esquina o coordenadas.",
      codigo: `.caja {
  transform-origin: top left;
  transform: rotate(20deg);
}`,
      lenguaje: "css",
      ojo: "Una rotación gira alrededor del origen: con `top left` pivota desde la esquina y no desde el centro."
    },
    {
      titulo: "transition: cambios suaves entre estados",
      texto: "Una transición (transition) anima el paso de un valor a otro de una propiedad CSS cuando cambia el estado del elemento (por ejemplo `:hover`).",
      puntos: [
        "Parámetros: propiedad, duración, función de tiempo (`ease`, `linear`, `ease-in-out`, `cubic-bezier()`) y retardo.",
        "Atajo: `transition: propiedad duración función retardo`.",
        "Se declara en el **estado base**, para que actúe tanto al entrar como al salir."
      ],
      codigo: `.boton {
  background: #2563eb;
  transition: background-color 0.3s ease-in-out 0s;
}
.boton:hover {
  background: #1e3a8a;
}`,
      lenguaje: "css",
      ojo: "Si la transición solo está en `:hover`, al entrar anima pero al salir el cambio es brusco. Y el primer tiempo es la duración; el segundo, el retardo."
    },
    {
      titulo: "Qué animar y rendimiento",
      texto: "Solo se pueden animar propiedades con valores intermedios calculables (colores, longitudes, `opacity`, `transform`...). Para mejor rendimiento conviene animar `transform` y `opacity`, que el navegador puede procesar sin recalcular el diseño.",
      puntos: [
        "No animables: `display`, o saltos entre `auto` y un número en muchas propiedades.",
        "`opacity` va de 0 (transparente) a 1 (opaco).",
        "`filter` (por ejemplo `blur(2px)`, `grayscale(1)`) también se puede animar, pero es más costoso."
      ],
      ojo: "Animar `width`, `height`, `top` o `left` fuerza recalcular el diseño y es menos fluido que `transform`."
    },
    {
      titulo: "@keyframes y animation",
      texto: "Las animaciones (animations) definen una secuencia de pasos con `@keyframes` (con `from`/`to` o porcentajes) y se aplican con `animation`.",
      puntos: [
        "`animation-name`, `animation-duration`, `animation-timing-function`, `animation-delay`.",
        "`animation-iteration-count`: nº de repeticiones o `infinite`.",
        "`animation-direction: alternate`: va y vuelve.",
        "`animation-fill-mode: forwards`: se queda en el estado final."
      ],
      codigo: `@keyframes latido {
  from { transform: scale(1); }
  50%  { transform: scale(1.2); }
  to   { transform: scale(1); }
}
.corazon {
  animation: latido 1s ease-in-out infinite alternate;
}`,
      lenguaje: "css",
      ojo: "Sin `animation-fill-mode: forwards` el elemento vuelve a su estilo original al terminar."
    },
    {
      titulo: "Transición frente a animación",
      texto: "La transición **reacciona a un cambio de estado** (hover, clase) y va de un valor inicial a uno final. La animación puede **arrancar sola**, tener varios pasos intermedios y repetirse.",
      puntos: [
        "Transición: necesita un disparador; solo dos estados (origen y destino).",
        "Animación: no necesita disparador; múltiples pasos y repeticiones."
      ],
      ojo: "Si algo debe moverse sin interacción o repetirse en bucle, es una animación (`@keyframes`), no una transición."
    },
    {
      titulo: "Accesibilidad: prefers-reduced-motion",
      texto: "Algunas personas se marean o se distraen con el movimiento. La media query `prefers-reduced-motion: reduce` detecta que el usuario pidió reducir animaciones y permite desactivarlas o suavizarlas.",
      codigo: `@media (prefers-reduced-motion: reduce) {
  * {
    animation: none;
    transition: none;
  }
}`,
      lenguaje: "css",
      ojo: "Respetar esta preferencia es una buena práctica de accesibilidad: no dependas del movimiento para comunicar información."
    }
  ],
  chuleta: [
    ["transform", "Aplica transformaciones visuales sin alterar el flujo."],
    ["translate()", "Desplaza el elemento (X, Y)."],
    ["rotate()", "Gira el elemento (en deg)."],
    ["scale()", "Escala el tamaño (1 = original)."],
    ["skew()", "Inclina el elemento."],
    ["transform-origin", "Punto de anclaje de la transformación (centro por defecto)."],
    ["transition", "Animación suave entre dos estados: propiedad, duración, función, retardo."],
    ["ease / linear / ease-in-out", "Funciones de tiempo de una transición o animación."],
    ["cubic-bezier()", "Función de tiempo personalizada."],
    ["@keyframes", "Define los pasos de una animación (from/to o porcentajes)."],
    ["animation", "Aplica una animación definida con @keyframes."],
    ["iteration-count: infinite", "La animación se repite sin fin."],
    ["direction: alternate", "La animación va y vuelve."],
    ["fill-mode: forwards", "Mantiene el estado final al terminar."],
    ["opacity", "Transparencia de 0 a 1."],
    ["prefers-reduced-motion", "Preferencia del usuario por menos movimiento."]
  ],
  ejemplo: {
    consigna: "Pasa el ratón sobre la caja y cambia la duración de la transición o el valor del `translateY`. Observa cómo la animación continua usa `@keyframes`.",
    html: `<div class="caja">Pasa el ratón</div>
<div class="latido">Latido</div>`,
    css: `.caja {
  width: 140px;
  padding: 16px;
  margin: 10px;
  background: #bfdbfe;
  border: 2px solid #2563eb;
  transition: transform 0.3s ease, background-color 0.3s ease;
}
.caja:hover {
  transform: translateY(-8px) rotate(3deg);
  background: #fde68a;
}
@keyframes latido {
  from { transform: scale(1); }
  to   { transform: scale(1.2); }
}
.latido {
  width: 80px;
  margin: 20px;
  padding: 10px;
  background: #fecaca;
  text-align: center;
  animation: latido 0.8s ease-in-out infinite alternate;
}`
  },
  reto: {
    enunciado: "Haz que el botón `.boton` suba un poco con `transform: translateY(...)` y cambie de color al pasar el ratón, con una transición suave definida en su estado base.",
    pista: "La `transition` (con una duración mayor que 0s) va en `.boton`; en `.boton:hover` pon `transform` y un nuevo color.",
    html: `<button class="boton">Pasa el ratón</button>`,
    css: `.boton {
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  background: #2563eb;
  color: white;
  font-size: 16px;
  cursor: pointer;
}`,
    solucion: {
      html: `<button class="boton">Pasa el ratón</button>`,
      css: `.boton {
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  background: #2563eb;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: transform 0.3s ease, background-color 0.3s ease;
}
.boton:hover {
  transform: translateY(-4px);
  background: #1e3a8a;
}`
    },
    validar: function (doc, win) {
      try {
        var b = doc.querySelector(".boton");
        if (!b) return { ok: false, msg: "No encuentro `.boton` (no cambies la clase)." };
        var dur = win.getComputedStyle(b).transitionDuration || "0s";
        var partes = dur.split(",");
        var hay = false;
        for (var i = 0; i < partes.length; i++) {
          if (parseFloat(partes[i]) > 0) hay = true;
        }
        if (!hay) return { ok: false, msg: "Falta una `transition` con duración mayor que 0s en el estado base de `.boton`." };
        var tiene = false;
        var sheets = doc.styleSheets;
        for (var j = 0; j < sheets.length; j++) {
          var reglas;
          try { reglas = sheets[j].cssRules; } catch (e) { continue; }
          if (!reglas) continue;
          for (var k = 0; k < reglas.length; k++) {
            var r = reglas[k];
            if (r.selectorText && r.selectorText.indexOf(":hover") !== -1 && r.style && r.style.getPropertyValue("transform")) tiene = true;
          }
        }
        if (!tiene) return { ok: false, msg: "Falta una regla `:hover` que defina `transform` (por ejemplo `translateY(-4px)`)." };
        return { ok: true, msg: "¡Correcto! Transición en el estado base y `transform` en `:hover`." };
      } catch (e) {
        return { ok: false, msg: "No se pudo comprobar el resultado: revisa el CSS." };
      }
    }
  },
  preguntas: [
    {
      tipo: "opcion",
      enunciado: "¿Qué ocurre con el espacio que ocupa un elemento al aplicarle `transform: translateX(100px)`?",
      opciones: [
        "Los demás elementos se desplazan 100px.",
        "El elemento deja de ocupar espacio.",
        "El elemento sigue ocupando su hueco original en el flujo.",
        "El elemento sale del flujo como si fuera `position: absolute`."
      ],
      correcta: 2,
      explicacion: "`transform` es solo visual: no altera el flujo ni la posición de los demás elementos."
    },
    {
      tipo: "opcion",
      enunciado: "¿Dónde conviene declarar la propiedad `transition`?",
      opciones: [
        "Solo en `:hover`.",
        "En el estado base, para que actúe también al volver.",
        "Dentro de `@keyframes`.",
        "En el `<head>` con una etiqueta meta."
      ],
      correcta: 1,
      explicacion: "Si va solo en `:hover`, la transición se aplica al entrar pero no al salir. Declararla en el estado base cubre ambos sentidos."
    },
    {
      tipo: "opcion",
      enunciado: "¿Qué propiedades es mejor animar por rendimiento?",
      opciones: [
        "`width` y `height`",
        "`top` y `left`",
        "`margin` y `padding`",
        "`transform` y `opacity`"
      ],
      correcta: 3,
      explicacion: "`transform` y `opacity` se pueden animar sin recalcular el diseño de la página, por lo que son más fluidas. Las demás provocan recálculo de layout."
    },
    {
      tipo: "opcion",
      enunciado: "¿Qué significa el `1s` del final en `transition: opacity 0.3s ease 1s;`?",
      opciones: [
        "La duración de la transición.",
        "El retardo (delay) antes de empezar.",
        "El número de repeticiones.",
        "El tiempo máximo permitido."
      ],
      correcta: 1,
      explicacion: "El primer tiempo es la duración (0.3s) y el segundo es el retardo (1s)."
    },
    {
      tipo: "opcion",
      enunciado: "¿Cuál es la principal diferencia entre una transición y una animación?",
      opciones: [
        "La transición reacciona a un cambio de estado; la animación puede arrancar sola y repetirse.",
        "La transición solo funciona con colores.",
        "La animación necesita siempre `:hover`.",
        "No hay diferencia: son sinónimos."
      ],
      correcta: 0,
      explicacion: "La transición necesita un cambio de estado y va de un valor a otro. La animación (`@keyframes` + `animation`) puede iniciarse sola, tener varios pasos y repetirse."
    },
    {
      tipo: "opcion",
      enunciado: "¿Cómo se hace que una animación se repita sin fin y vaya y vuelva?",
      codigo: `.caja {
  animation: mover 2s ???;
}`,
      lenguaje: "css",
      opciones: [
        "`forwards both`",
        "`once reverse`",
        "`infinite alternate`",
        "`loop back`"
      ],
      correcta: 2,
      explicacion: "`infinite` es el valor de `animation-iteration-count` para repetir sin fin y `alternate` de `animation-direction` para ir y volver. Las otras opciones no son valores válidos de esa combinación."
    },
    {
      tipo: "opcion",
      enunciado: "¿Para qué sirve `@media (prefers-reduced-motion: reduce)`?",
      opciones: [
        "Para reducir el tamaño de las imágenes.",
        "Para aplicar estilos solo en pantallas pequeñas.",
        "Para activar el modo oscuro.",
        "Para desactivar o suavizar animaciones cuando el usuario lo prefiere."
      ],
      correcta: 3,
      explicacion: "Detecta que el usuario pidió menos movimiento en su sistema; es una buena práctica de accesibilidad desactivar o reducir animaciones ahí."
    },
    {
      tipo: "opcion",
      enunciado: "¿Qué hace `transform-origin: top left;` combinado con `rotate(30deg)`?",
      opciones: [
        "Gira el elemento sobre su esquina superior izquierda.",
        "Gira el elemento sobre su centro.",
        "Desplaza el elemento a la esquina superior izquierda.",
        "No tiene efecto."
      ],
      correcta: 0,
      explicacion: "`transform-origin` fija el punto de anclaje; por defecto es el centro. Con `top left` el giro pivota desde la esquina superior izquierda."
    },
    {
      tipo: "completar",
      enunciado: "Escribe la propiedad que cambia el punto de anclaje de una transformación.",
      respuestas: ["transform-origin"],
      explicacion: "`transform-origin` define el punto fijo alrededor del cual se aplican rotaciones y escalados (por defecto `center`)."
    },
    {
      tipo: "completar",
      enunciado: "Escribe el valor de `animation-fill-mode` que mantiene el estado final de la animación al terminar.",
      respuestas: ["forwards", "animation-fill-mode: forwards"],
      explicacion: "Con `forwards` el elemento conserva los estilos del último fotograma; sin él vuelve a su estilo original."
    }
  ]
});
