import type { Project } from "../projectTypes";

export const atlas: Project = {
  slug: "atlas",
  title: "Atlas",
  tagline: "Engineering topics explained with scenes you can move, not diagrams you look at",
  tagline_es: "Temas de ingeniería explicados con escenas que se mueven, no con diagramas que se miran",
  description:
    "A study site built around one idea: the asset is the interactive scene, not the text. Every post ends in something the reader manipulates — a grid deformed by a matrix, a state machine fed by hand, a diff with the bug inside, a decision with consequences — and that same source file is also the script for the video and the cuts for the shorts. Behind it there is a curriculum of 1598 topics, from first-year university subjects to a senior career path, which doubles as the public roadmap: a topic with a post is linked, one without it shows what is coming.",
  description_es:
    "Un sitio de estudio construido sobre una idea: el activo es la escena interactiva, no el texto. Cada post termina en algo que el lector manipula — una grilla deformada por una matriz, un autómata al que se le escriben cadenas, un diff con el bug adentro, una decisión con consecuencias — y ese mismo archivo es también el guion del video y los cortes de los shorts. Detrás hay un plan de 1598 temas, del ciclo básico de ingeniería a una ruta profesional hasta Tech Lead, que funciona además como hoja de ruta pública: el tema con post escrito se linkea y el que no, se muestra apagado.",
  role: "Founder & Developer",
  role_es: "Fundador y Desarrollador",
  year: "2026 — Present",
  status: "production",
  statusLabel: "Live in production",
  statusLabel_es: "En producción",
  stack: ["Astro", "TypeScript", "Fastify", "PostgreSQL", "MDX", "KaTeX", "Umami", "Docker"],
  highlights: [
    "305 posts, every one of them closing on a block the reader operates — no post is only text",
    "A scene engine with no site code in it: canvas for anything continuous, DOM for anything discrete and readable by a screen reader",
    "Algorithms emit a trace of states and the view only draws it, so what the post teaches is covered by tests",
    "Exercise library with progressive hints, spaced repetition and exam mode, on local progress and without accounts",
    "One source, four outputs: the same MDX is the post, the script, the shorts cuts and the thumbnail frame",
  ],
  highlights_es: [
    "305 posts, y todos cierran en un bloque que el lector opera: ninguno es sólo texto",
    "Un motor de escenas sin nada del sitio adentro: canvas para lo continuo y DOM para lo discreto, que además lo lee un lector de pantalla",
    "El algoritmo emite una traza de estados y la vista sólo la dibuja, así que lo que el post enseña está cubierto por tests",
    "Biblioteca de ejercicios con pistas progresivas, repaso espaciado y modo examen, sobre progreso local y sin cuentas",
    "Una fuente, cuatro salidas: el mismo MDX es el post, el guion, los cortes de shorts y el frame de la miniatura",
  ],
  challenge:
    "Most technical explanations online are text with a picture on top: you read them, you nod, and a week later nothing is left. What actually teaches is manipulating the mechanism — moving the matrix and watching the area change sign — and that is expensive to build, so almost nobody does it. The other half of the problem is sustaining it: a site with hundreds of posts written by one person drifts in quality unless the standard is enforced by something that is not memory.",
  challenge_es:
    "Casi toda la explicación técnica que hay dando vueltas es texto con una imagen arriba: se lee, se asiente, y a la semana no queda nada. Lo que enseña de verdad es manipular el mecanismo — mover la matriz y ver el área cambiar de signo — y eso es caro de construir, así que casi nadie lo hace. La otra mitad del problema es sostenerlo: un sitio de cientos de posts escrito por una sola persona se afloja en calidad salvo que el estándar lo revise algo que no sea la memoria.",
  approach:
    "The engine came first and knows nothing about the site: scenes are registered by id and loaded on demand, so a post only downloads what it embeds. Anything discrete — arrays, stacks, state machines, code stepping — is DOM and SVG, which stays sharp at any zoom and can be read out loud; anything continuous is canvas. Underneath both, a single model: the algorithm emits a trace of states and the view draws it, which is what makes the teaching testable. The quality standard is a gate: types, linters with no suppressions allowed, tests over the trace of every scene, and content checks that walk all 305 posts on every change.",
  approach_es:
    "El motor se construyó primero y no sabe nada del sitio: las escenas se registran por id y se cargan cuando hacen falta, así un post sólo descarga lo que embebe. Todo lo discreto — arreglos, pilas, autómatas, código paso a paso — es DOM y SVG, que se ve nítido a cualquier zoom y lo puede leer un lector de pantalla; todo lo continuo es canvas. Abajo de los dos, un solo modelo: el algoritmo emite una traza de estados y la vista la dibuja, y eso es lo que vuelve testeable lo que se enseña. El estándar de calidad es un gate: tipos, linters sin supresiones permitidas, tests sobre la traza de cada escena y chequeos de contenido que recorren los 305 posts en cada cambio.",
  outcome:
    "The site runs in production on my own VPS with its API, its mailer, PostgreSQL and self-hosted analytics, and it holds a full backoffice: curriculum, posts, exercises, students, classes and the audiovisual production board. The private tutoring it supports is the part that pays for the rest.",
  outcome_es:
    "El sitio corre en producción en mi propio VPS con su API, su mailer, PostgreSQL y analítica autoalojada, y sostiene un backoffice completo: currículo, posts, ejercicios, alumnos, clases y el tablero de producción audiovisual. Las clases particulares que apoya son la parte que paga todo lo demás.",
  links: [
    { label: "Visit Atlas", href: "https://atlas.matiascaliz.com.ar" },
    { label: "Subjects", href: "https://atlas.matiascaliz.com.ar/materias" },
    { label: "Classes", href: "https://atlas.matiascaliz.com.ar/clases" },
  ],
  previewUrl: "https://atlas.matiascaliz.com.ar",
  featured: false,
  category: "venture",
  color: "#a8492a",
};
