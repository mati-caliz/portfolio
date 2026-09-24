import type { Project } from "../projectTypes";

export const bender: Project = {
  slug: "bender",
  title: "Bender",
  tagline: "One Chrome extension replacing ModHeader, Cookie-Editor, Tampermonkey and an Allow-CORS toggle",
  tagline_es:
    "Una extensión de Chrome que reemplaza a ModHeader, Cookie-Editor, Tampermonkey y el switch de Allow-CORS",
  description:
    "A Manifest V3 extension for everyday web development: request and response header profiles, traffic rules that block, redirect or mock a URL, a CORS switch that reflects the real origin, User-Agent presets with client hints, full cookie and storage management with JWT decoding and named snapshots, per-site user scripts, a live traffic log, and a set of design tools drawn on top of the page.",
  description_es:
    "Una extensión Manifest V3 para el día a día del desarrollo web: perfiles de headers de request y response, reglas de tráfico que bloquean, redirigen o mockean una URL, un switch de CORS que refleja el origen real, presets de User-Agent con client hints, ABM completo de cookies y storage con decodificador de JWT y snapshots con nombre, scripts propios por sitio, un log de tráfico en vivo y herramientas de diseño dibujadas sobre la página.",
  role: "Creator",
  role_es: "Creador",
  year: "2026",
  status: "completed",
  statusLabel: "Chrome extension",
  statusLabel_es: "Extensión de Chrome",
  stack: ["TypeScript", "Preact", "Chrome MV3", "declarativeNetRequest", "Vite"],
  highlights: [
    "Cookie snapshots per domain: jump between logged-in users in one click",
    "Mock any response — status, headers, body, delay — or turn a real one into a mock from the traffic log",
    "The traffic log shows the headers that actually went out and which Bender rule touched each request",
    "Same app in the popup, the side panel and a full tab; only the width changes",
  ],
  highlights_es: [
    "Snapshots de cookies por dominio: saltar entre usuarios logueados de un click",
    "Mockear cualquier response — status, headers, body, delay — o convertir uno real en mock desde el log de tráfico",
    "El log de tráfico muestra los headers que salieron de verdad y qué regla de Bender tocó cada request",
    "La misma app en el popup, el panel lateral y una pestaña completa; sólo cambia el ancho",
  ],
  challenge:
    "The tools a web developer needs every day come from four different extensions that do not know about each other. When a request goes out wrong, none of them can tell you which one rewrote it.",
  challenge_es:
    "Las herramientas que un desarrollador web necesita todos los días vienen de cuatro extensiones distintas que no se conocen entre sí. Cuando una request sale mal, ninguna te puede decir cuál de ellas la reescribió.",
  approach:
    'Everything compiles down to a single batch of declarativeNetRequest session rules: the engine takes the whole state and returns the complete rule list, the service worker swaps the old set for the new one. Session rules rather than dynamic ones, because they are the only kind that accept a tabIds condition — which is what makes "this tab only" scoping possible. Explicit priorities decide who wins when two rules touch the same header.',
  approach_es:
    "Todo se compila a una sola tanda de reglas de sesión de declarativeNetRequest: el motor toma el estado completo y devuelve la lista entera, y el service worker cambia el set viejo por el nuevo. Reglas de sesión y no dinámicas, porque son las únicas que aceptan la condición tabIds — que es lo que hace posible el alcance «sólo esta pestaña». Las prioridades explícitas definen quién gana cuando dos reglas tocan el mismo header.",
  outcome:
    "A daily driver that replaced four extensions in my own workflow, with its privacy policy published and the store listing prepared.",
  outcome_es:
    "Una herramienta de uso diario que reemplazó cuatro extensiones en mi propio workflow, con su política de privacidad publicada y el listado de la store preparado.",
  links: [{ label: "Privacy policy", href: "https://matiascaliz.com.ar/bender/privacidad" }],
  hidePreview: true,
  featured: false,
  category: "open-source",
  color: "#f97316",
};
