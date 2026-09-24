import type { Project } from "../projectTypes";

export const propMetrics: Project = {
  slug: "prop-metrics",
  title: "PropMetrics",
  tagline: "Real estate intelligence for the Argentine market",
  tagline_es: "Inteligencia inmobiliaria para el mercado argentino",
  description:
    "A real estate data platform that scrapes the 48 neighbourhoods of Buenos Aires every night and turns the listings into decisions: price per m² by neighbourhood, yield and payback, an algorithmic appraiser with a confidence interval, an opportunity detector, short-term vs. traditional rent, flipping margins, and prices deflated by UVA, CER or ICL to see what actually moved. It ships its own dependency-free dashboard and answers the same questions over WhatsApp through Respondi.",
  description_es:
    "Una plataforma de datos inmobiliarios que scrapea los 48 barrios de CABA cada noche y convierte los avisos en decisiones: precio por m² por barrio, yield y PER, un tasador algorítmico con intervalo de confianza, un detector de oportunidades, temporario vs. alquiler tradicional, margen de flipping y precios deflactados por UVA, CER o ICL para ver qué se movió de verdad. Trae su propio tablero sin dependencias y contesta lo mismo por WhatsApp a través de Respondi.",
  role: "Creator & Developer",
  role_es: "Creador y Desarrollador",
  year: "2026",
  status: "production",
  statusLabel: "Live",
  statusLabel_es: "En vivo",
  stack: ["Python", "FastAPI", "PostgreSQL", "Redis", "scikit-learn", "Playwright", "arq", "Docker"],
  highlights: [
    "Algorithmic appraiser: three quantile gradient-boosting models (p10/p50/p90) over log price, tuned for interval coverage rather than median error",
    "Opportunity detector that compares each listing against its own cohort using MAD, not the neighbourhood average",
    "Prices deflated by UVA, CER or ICL from the central bank, so a nominal rise and a real one stop looking the same",
    "Zero-dependency dashboard: hand-drawn SVG map, no tiles, no CDNs, no build step",
    "13 tools exposed to a WhatsApp agent, served from a catalogue the assistant reads on its own",
  ],
  highlights_es: [
    "Tasador algorítmico: tres modelos de gradient boosting por cuantiles (p10/p50/p90) sobre el log del precio, ajustados por cobertura del intervalo antes que por error mediano",
    "Detector de oportunidades que compara cada aviso contra su propio grupo usando MAD, no el promedio del barrio",
    "Precios deflactados por UVA, CER o ICL desde el BCRA, para que una suba nominal y una real dejen de parecer lo mismo",
    "Tablero sin dependencias: mapa en SVG dibujado a mano, sin tiles, sin CDNs, sin build",
    "13 herramientas expuestas a un agente de WhatsApp, servidas como catálogo que el asistente lee solo",
  ],
  challenge:
    "Argentina's real estate market has no transparent data: listings are scattered across portals, prices are asked prices, and inflation makes any historical series unreadable. On top of that, the portals actively block datacenter traffic — the first scraper worked locally and returned nothing at all from the server.",
  challenge_es:
    "El mercado inmobiliario argentino no tiene datos transparentes: los avisos están dispersos entre portales, los precios son de oferta y la inflación vuelve ilegible cualquier serie histórica. Encima, los portales bloquean activamente el tráfico de datacenter — el primer scraper andaba local y desde el servidor no traía un solo dato.",
  approach:
    "Rewrote the Spring Boot backend as an async FastAPI service with Alembic migrations and an arq worker for the nightly jobs. The blocking turned out to be measurable rather than absolute: one portal only filters IPv4, another rate-limits after six requests, so the scraper paces itself, backs off, and cools a portal down instead of giving up on the whole run. Every metric ships its sample size and returns null when the data is not there yet — that is what let the analytics land before the historical series existed.",
  approach_es:
    "Reescribí el backend de Spring Boot como un servicio FastAPI async con migraciones Alembic y un worker arq para los jobs nocturnos. El bloqueo resultó medible y no absoluto: un portal filtra sólo IPv4 y otro corta por rate a partir del sexto pedido, así que el scraper se marca el ritmo, hace backoff y enfría el portal en vez de abandonar la corrida entera. Cada métrica viaja con su tamaño de muestra y devuelve null cuando todavía no hay datos — eso es lo que permitió tener el análisis andando antes que la serie histórica.",
  outcome:
    "Live on its own domain with the nightly pipeline running: 48 neighbourhoods, cross-portal deduplication, geocoding, appraisal models retrained daily, and a market digest that arrives on WhatsApp every morning. The appraiser sits at 21.5% median error on sale and 16.9% on rent, with its p10–p90 interval covering 81.5% of held-out listings.",
  outcome_es:
    "En vivo con dominio propio y el pipeline nocturno corriendo: 48 barrios, deduplicación entre portales, geocoding, modelos de tasación reentrenados a diario y un resumen de mercado que llega por WhatsApp cada mañana. El tasador está en 21,5% de error mediano en venta y 16,9% en alquiler, con el intervalo p10–p90 cubriendo el 81,5% de los avisos de holdout.",
  links: [{ label: "Visit PropMetrics", href: "https://propmetrics.matiascaliz.com.ar" }],
  previewUrl: "https://propmetrics.matiascaliz.com.ar",
  featured: true,
  category: "venture",
  color: "#6366f1",
};
