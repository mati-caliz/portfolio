export interface Project {
  slug: string;
  title: string;
  tagline: string;
  tagline_es: string;
  description: string;
  description_es: string;
  role: string;
  role_es: string;
  year: string;
  status: "production" | "in-progress" | "completed";
  statusLabel: string;
  statusLabel_es: string;
  stack: string[];
  highlights: string[];
  highlights_es: string[];
  challenge: string;
  challenge_es: string;
  approach: string;
  approach_es: string;
  outcome: string;
  outcome_es: string;
  links: { label: string; href: string }[];
  previewUrl?: string;
  hidePreview?: boolean;
  featured: boolean;
  category: "work" | "venture" | "open-source";
  color: string;
}

export const projects: Project[] = [
  {
    slug: "despegar-search",
    title: "Despegar Search Box",
    tagline: "The search experience for Latin America's largest travel company",
    tagline_es: "La experiencia de búsqueda de la empresa de viajes más grande de Latinoamérica",
    description:
      "A micro-frontend service built with Preact and Node.js/Express that delivers the primary search entry point across all Despegar properties and white-label partners. Handles multi-product search flows — flights, hotels, packages, transfers, activities — with geo-autocomplete, date logic, and passenger configuration. Deployed on Kubernetes and served as dynamic bundles to dozens of domains across Latin America.",
    description_es:
      "Un servicio micro-frontend construido con Preact y Node.js/Express que entrega el punto de entrada de búsqueda principal en todas las propiedades de Despegar y partners white-label. Maneja flujos de búsqueda multi-producto — vuelos, hoteles, paquetes, transfers, actividades — con geo-autocompletado, lógica de fechas y configuración de pasajeros. Deployado en Kubernetes y servido como bundles dinámicos a decenas de dominios en Latinoamérica.",
    role: "Full Stack Developer",
    role_es: "Desarrollador Full Stack",
    year: "2024 — Present",
    status: "production",
    statusLabel: "Live in production",
    statusLabel_es: "En producción",
    stack: ["Preact", "TypeScript", "Node.js", "Express", "Webpack", "Cypress", "Kubernetes"],
    highlights: [
      "Micro-frontend architecture serving dozens of LATAM domains",
      "A/B testing infrastructure for every feature before rollout",
      "Shipped Sofia: WhatsApp AI integration for conversational search",
      "ML-powered destination recommendations via Euler + Freya services",
    ],
    highlights_es: [
      "Arquitectura micro-frontend sirviendo decenas de dominios en LATAM",
      "Infraestructura de A/B testing para cada feature antes del rollout",
      "Implementé Sofia: integración con WhatsApp AI para búsqueda conversacional",
      "Recomendaciones de destinos con ML via servicios Euler + Freya",
    ],
    challenge:
      "The search box is the single most critical UI at Despegar — it's the conversion funnel entry point for millions of users across different products, locales, and white-label partners. Every change must be A/B tested with real traffic, and any regression is immediately felt in conversion metrics.",
    challenge_es:
      "El buscador es la UI más crítica de Despegar — es el punto de entrada del funnel de conversión para millones de usuarios en diferentes productos, locales y partners white-label. Cada cambio debe testearse con A/B testing con tráfico real, y cualquier regresión se siente inmediatamente en las métricas de conversión.",
    approach:
      "Every feature ships behind an A/B test parsed from query params. I contributed across the full breadth of the service: the Sofia WhatsApp AI integration (login-aware, modal flow, feature-flagged rollout), ML-powered recommendations in autocomplete, hotels tab for white-label partners, accommodation region support, transfers autocomplete fixes, Cypress E2E test coverage, and Hotjar analytics instrumentation.",
    approach_es:
      "Cada feature se lanza detrás de un A/B test parseado desde query params. Contribuí en toda la amplitud del servicio: la integración Sofia con WhatsApp AI (aware de login, flujo modal, rollout con feature flags), recomendaciones con ML en el autocompletado, tab de hoteles para partners white-label, soporte de regiones de alojamiento, fixes de autocompletado para transfers, cobertura de tests E2E con Cypress, e instrumentación de analytics con Hotjar.",
    outcome:
      "Features shipped are live for millions of daily users across LATAM. The Sofia integration opened a new conversational search channel via WhatsApp. Recommendation improvements increased destination discovery engagement.",
    outcome_es:
      "Los features implementados están en producción para millones de usuarios diarios en LATAM. La integración Sofia abrió un nuevo canal de búsqueda conversacional via WhatsApp. Las mejoras de recomendaciones incrementaron el engagement en descubrimiento de destinos.",
    links: [
      { label: "Visit Despegar", href: "https://www.despegar.com" },
    ],
    hidePreview: true,
    featured: true,
    category: "work",
    color: "#2563eb",
  },
  {
    slug: "despegar-shifu",
    title: "Despegar Header & Footer",
    tagline: "The centralized header/footer service powering all Despegar properties",
    tagline_es: "El servicio centralizado de header y footer que potencia todas las propiedades de Despegar",
    description:
      "SHiFu (Service Header & Footer) is the Java microservice that renders and serves the header and footer for every Despegar property across Latin America. It supports multi-locale (AR, CO, US, BR and more), multi-device (desktop/mobile/tablet), and multi-flow rendering — with lazy-loaded modules for cart, incentives, loyalty, and notifications. I contributed features across the full service: from YAML flow configuration to Stencil.js web components and backend Java logic.",
    description_es:
      "SHiFu (Service Header & Footer) es el microservicio Java que renderiza y sirve el header y footer de todas las propiedades de Despegar en Latinoamérica. Soporta multi-locale (AR, CO, US, BR y más), multi-device (desktop/mobile/tablet) y renderizado multi-flow — con módulos lazy-loaded para carrito, incentivos, loyalty y notificaciones. Contribuí features en todo el servicio: desde configuración YAML de flows hasta web components con Stencil.js y lógica de backend en Java.",
    role: "Full Stack Developer",
    role_es: "Desarrollador Full Stack",
    year: "2024 — Present",
    status: "production",
    statusLabel: "Live in production",
    statusLabel_es: "En producción",
    stack: ["Java", "Spring", "Stencil.js", "Freemarker", "Webpack", "MongoDB"],
    highlights: [
      "Serves header/footer HTML + assets to all Despegar properties",
      "Multi-locale, multi-device, multi-flow rendering engine",
      "Built web-to-app download banner with country/partner targeting",
      "YAML-driven flow config — business teams change behavior without code",
    ],
    highlights_es: [
      "Sirve HTML + assets del header/footer a todas las propiedades de Despegar",
      "Motor de renderizado multi-locale, multi-device y multi-flow",
      "Desarrollé banner de descarga web-to-app con targeting por país y partner",
      "Config de flows en YAML — equipos de negocio cambian comportamiento sin código",
    ],
    challenge:
      "A shared header/footer that serves dozens of products, locales, and white-label partners must be flexible enough to accommodate every configuration while staying fast and consistent. Any regression is immediately visible to millions of users.",
    challenge_es:
      "Un header/footer compartido que sirve a decenas de productos, locales y partners white-label debe ser lo suficientemente flexible para acomodar cada configuración mientras se mantiene rápido y consistente. Cualquier regresión es inmediatamente visible para millones de usuarios.",
    approach:
      "I shipped features across the full stack — configuring flow visibility in YAML, building Stencil.js web components for lazy-loaded modules, and implementing Java/Freemarker logic for backend rendering. Key contributions include the web-to-app download banner (country/partner filtering, Adjust deep links, login-aware display), landing flow integration in the searchbox, and several incentive/promotion modules.",
    approach_es:
      "Implementé features en todo el stack — configurando visibilidad de flows en YAML, construyendo web components con Stencil.js para módulos lazy-loaded, e implementando lógica Java/Freemarker para el renderizado backend. Contribuciones clave: banner de descarga web-to-app (filtrado por país/partner, deep links con Adjust, display según login), integración del flow de landing en el buscador, y varios módulos de incentivos y promociones.",
    outcome:
      "Features shipped are live across all Despegar locales and white-label partners. The web-to-app banner alone reaches millions of mobile users daily and drives app installs across LATAM.",
    outcome_es:
      "Los features implementados están en producción en todos los locales de Despegar y partners white-label. Solo el banner web-to-app llega a millones de usuarios mobile diariamente e impulsa instalaciones de la app en todo LATAM.",
    links: [
      { label: "Visit Despegar", href: "https://www.despegar.com" },
    ],
    hidePreview: true,
    featured: false,
    category: "work",
    color: "#0ea5e9",
  },
  {
    slug: "labrecha",
    title: "La Brecha",
    tagline: "Public observatory of Argentina's political and economic indicators",
    tagline_es: "Observatorio público de indicadores político-económicos de Argentina",
    description:
      "A read-only public observatory that pulls scattered Argentine data — INDEC, BCRA, datos.gob.ar, private consultancies, Congress — into a single source. Two defining features: the gap between measurements of the same indicator across sources, and time series annotated with the political events that moved them. Formerly FinArg; rebuilt from scratch in 2026 after retiring the original Java/Spring stack.",
    description_es:
      "Un observatorio público de solo lectura que reúne datos argentinos dispersos — INDEC, BCRA, datos.gob.ar, consultoras, Congreso — en una sola fuente. Dos features definitorias: la brecha entre mediciones de un mismo indicador según distintas fuentes, y series temporales anotadas con los eventos políticos que las movieron. Antes se llamaba FinArg; reescrito desde cero en 2026 tras retirar el stack original de Java/Spring.",
    role: "Founder & Developer",
    role_es: "Fundador y Desarrollador",
    year: "2025 — Present",
    status: "production",
    statusLabel: "Live in production",
    statusLabel_es: "En producción",
    stack: ["Next.js", "TypeScript", "Python", "FastAPI", "PostgreSQL", "Alembic", "Recharts", "Docker"],
    highlights: [
      "One connector per source: a scraper registry run by cron, from dollar rates every 15 min to daily jobs",
      "Historical series back to 1940 (BCRA reserves) and 2011 (blue dollar), merged with intraday data",
      "AI-generated summaries of Congress votes, produced headlessly by a Claude connector",
      "Postgres as the contract between scraper, FastAPI and the Next.js frontend — plus a public read-only API",
    ],
    highlights_es: [
      "Un conector por fuente: un registry de scrapers corrido por cron, del dólar cada 15 min a jobs diarios",
      "Series históricas desde 1940 (reservas del BCRA) y 2011 (dólar blue), mergeadas con datos intradiarios",
      "Resúmenes IA de las votaciones del Congreso, generados por un conector headless con Claude",
      "Postgres como contrato entre scraper, FastAPI y el frontend Next.js — más una API pública de solo lectura",
    ],
    challenge:
      "Argentine economic data is published by a dozen institutions in incompatible formats, and the same indicator often has several conflicting values depending on who measures it. Reading a number without knowing which source it came from — or what happened politically that week — hides more than it explains.",
    challenge_es:
      "Los datos económicos argentinos los publica una docena de instituciones en formatos incompatibles, y un mismo indicador suele tener varios valores según quién lo mida. Leer un número sin saber de qué fuente viene — ni qué pasó políticamente esa semana — esconde más de lo que explica.",
    approach:
      "Three pieces with PostgreSQL as the contract between them: a Python scraper where each source is a self-contained connector module, a stateless FastAPI read layer with the calculators on top, and a Next.js App Router frontend that consumes it through a same-origin cached proxy. Schema changes go through Alembic migrations; the scraper runs on cron with a per-job CLI.",
    approach_es:
      "Tres piezas con PostgreSQL como contrato entre ellas: un scraper en Python donde cada fuente es un módulo conector autocontenido, una capa de lectura FastAPI sin estado con las calculadoras encima, y un frontend Next.js App Router que la consume por un proxy same-origin cacheado. El esquema evoluciona con migraciones Alembic; el scraper corre por cron con un CLI por job.",
    outcome:
      "Live and ingesting continuously: 77k+ indicator rows across dozens of series, gap views, annotated charts, a Congress section, and a public API — all without login.",
    outcome_es:
      "En producción e ingiriendo de forma continua: 77k+ filas de indicadores en decenas de series, vistas de brechas, gráficos anotados, sección de Congreso y una API pública — todo sin login.",
    links: [
      { label: "Visit La Brecha", href: "https://labrecha.matiascaliz.com.ar" },
    ],
    previewUrl: "https://labrecha.matiascaliz.com.ar",
    featured: true,
    category: "venture",
    color: "#10b981",
  },
  {
    slug: "conseguilo",
    title: "Conseguilo",
    tagline: "SaaS job-hunting platform with ATS-ready CVs, application tracking, and AI matching",
    tagline_es: "Plataforma SaaS para buscar trabajo con CVs ATS, tracking de postulaciones y match IA",
    description:
      "A job-hunting SaaS that helps candidates organize their search end to end: ATS-optimized CV builder, multiple CV versions, PDF/DOCX export, kanban application tracking, reminders, and AI tools for bullet optimization, cover letters, and job description matching.",
    description_es:
      "Un SaaS para búsqueda laboral que ayuda a candidatos a organizar el proceso end to end: constructor de CVs optimizados para ATS, múltiples versiones de CV, export PDF/DOCX, tracking de postulaciones en kanban, recordatorios y herramientas de IA para optimizar bullets, generar cover letters y comparar ofertas contra el perfil.",
    role: "Founder & Developer",
    role_es: "Fundador y Desarrollador",
    year: "2026",
    status: "production",
    statusLabel: "Live in production",
    statusLabel_es: "En producción",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Drizzle ORM",
      "Vercel AI SDK",
      "Tailwind CSS",
    ],
    highlights: [
      "ATS-optimized CV builder with PDF and DOCX export",
      "Kanban tracker for applications with reminders",
      "AI match scoring between job descriptions and CV versions",
      "Multi-provider AI setup with Claude, OpenAI, and Gemini",
    ],
    highlights_es: [
      "Constructor de CVs optimizados para ATS con export PDF y DOCX",
      "Tracker kanban de postulaciones con recordatorios",
      "Match score IA entre descripciones de puesto y versiones de CV",
      "Setup de IA multi-provider con Claude, OpenAI y Gemini",
    ],
    challenge:
      "Job seekers often manage applications across scattered spreadsheets, copied job descriptions, and many slightly different CV files. The hard part is keeping versions organized while adapting each application enough to improve fit without turning the process into manual busywork.",
    challenge_es:
      "Quienes buscan trabajo suelen manejar postulaciones entre planillas, job descriptions copiadas y muchas versiones apenas distintas del CV. El desafío es mantener todo ordenado y adaptar cada postulación lo suficiente para mejorar el fit sin convertir el proceso en trabajo manual repetitivo.",
    approach:
      "Built a Next.js App Router product with authenticated workspaces, Drizzle/Postgres persistence, CV editing and rendering flows, application tracking, and AI features behind cost-aware credits. The app supports provider switching across Claude, OpenAI, and Gemini, plus export flows through react-pdf and docx.",
    approach_es:
      "Construí un producto con Next.js App Router, workspaces autenticados, persistencia con Drizzle/Postgres, edición y renderizado de CVs, tracking de postulaciones y features de IA con créditos conscientes de costo. La app soporta cambio de provider entre Claude, OpenAI y Gemini, además de exports con react-pdf y docx.",
    outcome:
      "Live at its own domain with the full MVP shipped: auth, CV builder, PDF/DOCX exports, kanban tracker, reminders, AI-powered bullet and cover letter generation, match scoring, Mercado Pago billing gates, and legal pages. Deployed on my own box with push-to-deploy from GitHub Actions.",
    outcome_es:
      "En producción con dominio propio y el MVP completo: auth, constructor de CVs, exports PDF/DOCX, tracker kanban, recordatorios, generación IA de bullets y cover letters, match scoring, cobros con Mercado Pago y páginas legales. Deployado en servidor propio con push-to-deploy desde GitHub Actions.",
    links: [
      { label: "Visit Conseguilo", href: "https://conseguilo.com.ar" },
    ],
    previewUrl: "https://conseguilo.com.ar",
    featured: true,
    category: "venture",
    color: "#14b8a6",
  },
  {
    slug: "respondi",
    title: "Respondi",
    tagline: "Platform for AI agents that answer on WhatsApp and Telegram",
    tagline_es: "Plataforma de agentes IA que responden en WhatsApp y Telegram",
    description:
      "A multi-tenant platform for building AI agents connected to real messaging channels: WhatsApp through Meta's official Cloud API, and Telegram. Each agent has its own knowledge base with RAG retrieval, connectors to external tools, and a queue-backed engine that keeps conversations coherent. It generalizes the parts of Gastronova's agents that were worth reusing — Gastronova is its first intended consumer.",
    description_es:
      "Una plataforma multi-tenant para construir agentes IA conectados a canales de mensajería reales: WhatsApp vía la Cloud API oficial de Meta, y Telegram. Cada agente tiene su base de conocimiento con recuperación RAG, conectores a herramientas externas y un motor con colas que mantiene coherentes las conversaciones. Generaliza lo que valía la pena reutilizar de los agentes de Gastronova — que es su primer consumidor previsto.",
    role: "Founder & Developer",
    role_es: "Fundador y Desarrollador",
    year: "2026",
    status: "in-progress",
    statusLabel: "In production, private beta",
    statusLabel_es: "En producción, beta privada",
    stack: ["TypeScript", "Fastify", "Next.js", "PostgreSQL", "pgvector", "Drizzle ORM", "BullMQ", "Redis", "Docker"],
    highlights: [
      "pnpm + Turborepo monorepo: core API with the agent engine, a channel gateway, and the web app",
      "Official WhatsApp Cloud API webhooks with raw-body HMAC signature verification",
      "RAG over pgvector, plus BullMQ workers for everything that must not block a reply",
      "Per-channel credentials and OAuth tokens encrypted at rest, never in environment files",
    ],
    highlights_es: [
      "Monorepo pnpm + Turborepo: core API con el motor de agentes, un gateway de canales y la web",
      "Webhooks de la Cloud API oficial de WhatsApp con verificación HMAC sobre el body crudo",
      "RAG sobre pgvector, más workers BullMQ para todo lo que no puede bloquear una respuesta",
      "Credenciales por canal y tokens OAuth cifrados at-rest, nunca en archivos de entorno",
    ],
    challenge:
      "Most WhatsApp bots are built on unofficial bridges that break without warning and can get the number banned. Doing it properly means the official Cloud API, strict webhook signature validation, and a design where every tenant's channel credentials are isolated and encrypted.",
    challenge_es:
      "La mayoría de los bots de WhatsApp se apoyan en bridges no oficiales que se rompen sin aviso y pueden hacer que baneen el número. Hacerlo bien implica la Cloud API oficial, validación estricta de firmas en los webhooks y un diseño donde las credenciales de canal de cada tenant queden aisladas y cifradas.",
    approach:
      "Split the system into a Fastify core API (agent engine, RAG, background workers), a thin channel gateway that only validates and normalizes provider webhooks, and a Next.js front end — with Zod contracts shared between them. Schema changes go through Drizzle migrations that run before the containers come up; media lives in a private S3-compatible bucket.",
    approach_es:
      "Separé el sistema en una core API con Fastify (motor de agentes, RAG, workers), un gateway de canales delgado que solo valida y normaliza los webhooks de cada proveedor, y un frontend Next.js — con contratos Zod compartidos entre las piezas. El esquema evoluciona con migraciones Drizzle que corren antes de levantar los containers; los archivos van a un bucket privado compatible con S3.",
    outcome:
      "Running behind its own domain with a live WhatsApp Business number, an API-key layer with scopes, and a native connector that lets an agent pull a whole tool catalogue from an external service — PropMetrics answers real estate questions through it, in the same conversation.",
    outcome_es:
      "Corriendo con dominio propio y un número de WhatsApp Business real, una capa de API keys con scopes y un conector nativo que le permite a un agente tomar un catálogo entero de herramientas de un servicio externo — PropMetrics contesta consultas inmobiliarias por ahí, en la misma conversación.",
    links: [
      { label: "Visit Respondi", href: "https://respondi.matiascaliz.com.ar" },
    ],
    previewUrl: "https://respondi.matiascaliz.com.ar",
    featured: true,
    category: "venture",
    color: "#7c3aed",
  },
  {
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
    links: [
      { label: "Visit PropMetrics", href: "https://propmetrics.matiascaliz.com.ar" },
    ],
    previewUrl: "https://propmetrics.matiascaliz.com.ar",
    featured: true,
    category: "venture",
    color: "#6366f1",
  },
  {
    slug: "gastronova",
    title: "Gastronova",
    tagline: "SaaS platform for the restaurant industry",
    tagline_es: "Plataforma SaaS para la industria gastronómica",
    description:
      "A complete SaaS solution for restaurant management — covering everything from table reservations and order management to inventory tracking and analytics. Think Fudo or Maxirest, but built with a modern stack and focused on the small-to-medium restaurant segment in Argentina.",
    description_es:
      "Una solución SaaS completa para gestión de restaurantes — cubriendo desde reservas de mesas y gestión de pedidos hasta seguimiento de inventario y analytics. Similar a Fudo o Maxirest, pero construido con un stack moderno y enfocado en el segmento de restaurantes pequeños y medianos en Argentina.",
    role: "Founder & Developer",
    role_es: "Fundador y Desarrollador",
    year: "2025",
    status: "completed",
    statusLabel: "Shipped",
    statusLabel_es: "Lanzado",
    stack: ["React", "Node.js", "TypeScript", "MongoDB", "Docker"],
    highlights: [
      "End-to-end restaurant management system",
      "Real-time order tracking and table management",
      "Inventory system with low-stock alerts",
      "Revenue analytics and reporting dashboard",
    ],
    highlights_es: [
      "Sistema de gestión de restaurantes end-to-end",
      "Seguimiento de pedidos y gestión de mesas en tiempo real",
      "Sistema de inventario con alertas de stock bajo",
      "Dashboard de analytics de ingresos y reportes",
    ],
    challenge:
      "Most restaurant management software in Argentina is either outdated, overpriced, or designed for enterprise chains. Small and medium restaurants need an affordable, modern, easy-to-use tool that covers the full operation cycle.",
    challenge_es:
      "La mayoría del software de gestión gastronómica en Argentina está desactualizado, es caro o está diseñado para cadenas grandes. Los restaurantes pequeños y medianos necesitan una herramienta accesible, moderna y fácil de usar que cubra todo el ciclo operativo.",
    approach:
      "Built a modular SaaS where restaurants can start with basic features (orders, tables) and add modules as they grow (inventory, analytics, reservations). The architecture is microservices-based with Docker, designed to scale from a single restaurant to a chain.",
    approach_es:
      "Construí un SaaS modular donde los restaurantes pueden empezar con funciones básicas (pedidos, mesas) y agregar módulos a medida que crecen (inventario, analytics, reservas). La arquitectura está basada en microservicios con Docker, diseñada para escalar desde un restaurante a una cadena.",
    outcome:
      "Shipped a full-featured MVP validated with restaurant owners in Buenos Aires. Core modules live: orders, tables, inventory, and analytics.",
    outcome_es:
      "MVP completo lanzado y validado con dueños de restaurantes en Buenos Aires. Módulos core en producción: pedidos, mesas, inventario y analytics.",
    links: [
      { label: "Visit Gastronova", href: "https://gastronova.com.ar" },
    ],
    previewUrl: "https://gastronova.com.ar",
    featured: true,
    category: "venture",
    color: "#f59e0b",
  },
  {
    slug: "soma",
    title: "Soma Intelligence",
    tagline: "Computer vision that turns existing security cameras into operational metrics",
    tagline_es: "Visión por computadora que convierte las cámaras existentes en métricas operativas",
    description:
      "A platform that plugs into a venue's existing IP cameras and turns the video into live occupancy metrics and security alerts. A mini-PC on site runs the vision models and emits only JSON events — the raw video never leaves the venue, and there is no facial recognition, just anonymous silhouettes. Privacy is the feature, not a disclaimer.",
    description_es:
      "Una plataforma que se conecta a las cámaras IP que el local ya tiene y convierte el video en métricas de aforo en vivo y alertas de seguridad. Una mini-PC en el local corre los modelos de visión y emite solo eventos JSON — el video crudo nunca sale del local, y no hay reconocimiento facial, solo siluetas anónimas. La privacidad es la feature, no un descargo.",
    role: "Founder & Developer",
    role_es: "Fundador y Desarrollador",
    year: "2026",
    status: "in-progress",
    statusLabel: "Deployed, pre-MVP",
    statusLabel_es: "Deployado, pre-MVP",
    stack: ["Java", "Spring Boot", "React", "TypeScript", "Python", "YOLO", "MQTT", "TimescaleDB", "MinIO", "Docker"],
    highlights: [
      "Edge/cloud split: YOLO + tracking on site, only JSON events cross the network over MQTT",
      "TimescaleDB for time series: live occupancy, entries per hour, dwell time",
      "Alert rules engine: after-hours intrusion, capacity limits, camera down",
      "No facial recognition by design — anonymous silhouettes only",
    ],
    highlights_es: [
      "Separación edge/nube: YOLO + tracking en el local, solo eventos JSON cruzan la red por MQTT",
      "TimescaleDB para las series temporales: aforo en vivo, entradas por hora, permanencia",
      "Motor de reglas de alerta: intrusión fuera de horario, aforo máximo, cámara caída",
      "Sin reconocimiento facial por diseño — solo siluetas anónimas",
    ],
    challenge:
      "Venues already have cameras, but the footage is only ever watched after something goes wrong. Turning it into live operational data means running vision models cheaply on site, and doing it without shipping customers' raw video to a cloud they don't control.",
    challenge_es:
      "Los locales ya tienen cámaras, pero el video solo se mira después de que algo salió mal. Convertirlo en datos operativos en vivo implica correr modelos de visión de forma barata en el local, y hacerlo sin mandar el video crudo de los clientes a una nube que no controlan.",
    approach:
      "Four components: a Python edge service doing detection and tracking, a Spring Boot backend that aggregates events into metrics and evaluates alert rules, a React dashboard, and an MQTT broker as the edge-to-cloud contract. The whole stack — Timescale, EMQX, MinIO, API and web — runs as containers with a fail-fast production profile.",
    approach_es:
      "Cuatro componentes: un servicio edge en Python que detecta y trackea, un backend Spring Boot que agrega los eventos en métricas y evalúa reglas de alerta, un dashboard React, y un broker MQTT como contrato entre el edge y la nube. Todo el stack — Timescale, EMQX, MinIO, API y web — corre en containers con un perfil productivo fail-fast.",
    outcome:
      "The cloud side is deployed end to end behind its own domain, with signup, venue setup, the event pipeline and the dashboard working. The initial vertical is hospitality; the edge service is the piece still being hardened.",
    outcome_es:
      "El lado nube está deployado end to end con dominio propio: registro, alta de local, pipeline de eventos y dashboard funcionando. La vertical inicial es gastronomía; el servicio edge es la pieza que falta endurecer.",
    links: [
      { label: "Visit Soma", href: "https://aforo.matiascaliz.com.ar" },
    ],
    hidePreview: true,
    featured: false,
    category: "venture",
    color: "#3072d0",
  },
  {
    slug: "chirola",
    title: "Chirola",
    tagline: "Electronic invoicing against Argentina's tax authority, as an API",
    tagline_es: "Facturación electrónica contra ARCA, como API",
    description:
      "A billing backend that talks to ARCA (formerly AFIP) so nobody else has to: A/B/C invoices, credit and debit notes, each one returning its CAE. It is multi-tenant by design — every taxpayer keeps its own CUIT and digital certificate in an encrypted vault, and every API consumer is scoped to the taxpayers it is allowed to invoice for. It is the fiscal backend behind Respondi's billing agent.",
    description_es:
      "Un backend de facturación que habla con ARCA (ex AFIP) para que nadie más tenga que hacerlo: comprobantes A/B/C, notas de crédito y débito, cada uno devolviendo su CAE. Es multi-tenant desde el schema — cada contribuyente guarda su CUIT y su certificado digital en un vault cifrado, y cada consumidor de la API sólo puede facturar por los contribuyentes que tiene habilitados. Es el backend fiscal del agente de facturación de Respondi.",
    role: "Creator & Developer",
    role_es: "Creador y Desarrollador",
    year: "2026",
    status: "production",
    statusLabel: "In production",
    statusLabel_es: "En producción",
    stack: ["NestJS", "TypeScript", "Prisma", "PostgreSQL", "Zod", "SOAP", "Docker"],
    highlights: [
      "SOAP integration with ARCA's WSAA and WSFEv1, including ticket lifecycle and CAE retrieval",
      "Private keys never leave the backend: certificates live encrypted at rest in a dedicated vault",
      "Multi-tenant model where an API consumer is explicitly bound to the taxpayers it may invoice for",
      "Consumed server-to-server by Respondi, so a business can invoice straight from a WhatsApp conversation",
    ],
    highlights_es: [
      "Integración SOAP con WSAA y WSFEv1 de ARCA, incluyendo el ciclo de vida del ticket y la obtención del CAE",
      "Las claves privadas nunca salen del backend: los certificados viven cifrados at-rest en un vault dedicado",
      "Modelo multi-tenant donde cada consumidor de la API queda atado explícitamente a los contribuyentes que puede facturar",
      "Consumido server-to-server por Respondi, así un negocio factura desde una conversación de WhatsApp",
    ],
    challenge:
      "Invoicing in Argentina means SOAP web services, X.509 certificates, short-lived auth tickets, and a validation model that rejects a whole invoice over a rounding difference. Any product that wants to invoice ends up reimplementing all of it — and, worse, handling somebody else's private key.",
    challenge_es:
      "Facturar en Argentina significa servicios SOAP, certificados X.509, tickets de autenticación de vida corta y un modelo de validación que rechaza un comprobante entero por una diferencia de redondeo. Cualquier producto que quiera facturar termina reimplementando todo eso — y, peor, manejando la clave privada de otro.",
    approach:
      "Built it as a NestJS service with Prisma and Postgres, in a pnpm monorepo with Zod contracts shared across packages. The certificate vault is encrypted with a key that lives only in the deployment environment, and the schema models issuers, API consumers, and the grants between them as first-class entities instead of configuration.",
    approach_es:
      "Lo construí como un servicio NestJS con Prisma y Postgres, en un monorepo pnpm con contratos Zod compartidos. El vault de certificados se cifra con una clave que sólo existe en el entorno de deploy, y el schema modela emisores, consumidores de API y los permisos entre ellos como entidades de primera clase en vez de configuración.",
    outcome:
      "Running in production with push-to-deploy and migrations applied on every release, reachable only from inside the private network — its single consumer today is Respondi's billing agent. A mobile app for the taxpayer side is the next step.",
    outcome_es:
      "Corriendo en producción con push-to-deploy y migraciones aplicadas en cada release, alcanzable sólo desde la red privada — hoy su único consumidor es el agente de facturación de Respondi. La app mobile del lado del contribuyente es el próximo paso.",
    links: [],
    featured: false,
    category: "venture",
    color: "#0ea5e9",
  },
  {
    slug: "tarjetazo",
    title: "Tarjetazo",
    tagline: "A bot that reads my credit card statement and sends me the breakdown",
    tagline_es: "Un bot que lee el resumen de mi tarjeta y me manda el desglose",
    description:
      "A small, self-contained automation that watches my inbox for the monthly BNA VISA statement, decrypts the password-protected PDF, extracts and categorizes every transaction, and sends a Telegram summary compared against the previous month. Built because reading a bank PDF every month to find out where the money went is exactly the kind of thing a computer should do.",
    description_es:
      "Una automatización chica y autocontenida que vigila mi casilla esperando el resumen mensual de la VISA del BNA, desencripta el PDF protegido con contraseña, extrae y categoriza cada movimiento, y manda un resumen por Telegram comparado contra el mes anterior. Lo hice porque leer un PDF del banco todos los meses para saber a dónde se fue la plata es exactamente lo que debería hacer una computadora.",
    role: "Creator",
    role_es: "Creador",
    year: "2026",
    status: "production",
    statusLabel: "Running on cron",
    statusLabel_es: "Corriendo por cron",
    stack: ["Python", "IMAP", "pypdf", "Claude API", "Telegram Bot API", "cron"],
    highlights: [
      "Idempotent by design: the email is only marked as read once the whole pipeline succeeds",
      "Keyword rules first, Claude only for merchants the rules don't recognize — and the answer is cached",
      "Validates the computed total against the statement balance and flags any mismatch",
      "Dead man's switch: alerts me if too long goes by without a new statement, in case the bot broke",
    ],
    highlights_es: [
      "Idempotente por diseño: el mail se marca como leído solo cuando todo el pipeline terminó bien",
      "Primero reglas por palabras clave, Claude solo para los comercios que las reglas no reconocen — y la respuesta se cachea",
      "Valida que el total calculado cuadre con el saldo del resumen y avisa si no",
      "Dead man's switch: me avisa si pasa demasiado tiempo sin un resumen nuevo, por si el bot se rompió",
    ],
    challenge:
      "The statement arrives as an encrypted PDF with no consistent structure, merchant names are cryptic strings, and the job runs unattended — so a silent failure means finding out months later that nothing was tracked.",
    challenge_es:
      "El resumen llega como un PDF encriptado sin estructura consistente, los nombres de los comercios son cadenas crípticas, y el job corre desatendido — así que una falla silenciosa significa enterarte meses después de que no se registró nada.",
    approach:
      "One module per step — email, PDF parsing, categorization, formatting, history, delivery — orchestrated by a main script that only commits state when every step passed. Categorization is rules-first with an LLM fallback so the API cost stays near zero, and known merchants persist to a local cache.",
    approach_es:
      "Un módulo por paso — mail, parseo del PDF, categorización, formato, histórico, envío — orquestados por un script principal que solo persiste el estado cuando todos los pasos salieron bien. La categorización es primero por reglas con fallback a LLM para que el costo de API sea casi cero, y los comercios conocidos quedan en un caché local.",
    outcome:
      "Running unattended on a cron every six hours. Every month I get a categorized breakdown with subtotals and a month-over-month comparison, without opening a single PDF.",
    outcome_es:
      "Corriendo desatendido por cron cada seis horas. Todos los meses recibo el desglose categorizado con subtotales y comparación contra el mes anterior, sin abrir un solo PDF.",
    links: [],
    featured: false,
    category: "open-source",
    color: "#e11d48",
  },
  {
    slug: "ccitaliana",
    title: "CCI Argentina",
    tagline: "Website for the Italian Chamber of Commerce in Argentina",
    tagline_es: "Sitio web para la Cámara de Comercio Italiana en Argentina",
    description:
      "The official website for the Italian Chamber of Commerce in Argentina, a non-profit organization promoting business between Italy and Argentina. Built by a team of three, it features a headless CMS for managing events, news, staff, and partner benefits — with content managed by non-technical staff through an admin panel.",
    description_es:
      "El sitio web oficial de la Cámara de Comercio Italiana en Argentina, una organización sin fines de lucro que promueve negocios entre Italia y Argentina. Construido por un equipo de tres personas, incluye un CMS headless para gestionar eventos, noticias, personal y beneficios de socios — con contenido gestionado por personal no técnico a través de un panel de administración.",
    role: "Developer (team of 3)",
    role_es: "Desarrollador (equipo de 3)",
    year: "2025",
    status: "production",
    statusLabel: "Live in production",
    statusLabel_es: "En producción",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Decap CMS"],
    highlights: [
      "Headless CMS with GitHub-based content storage",
      "Events calendar with registration support",
      "Partner benefits showcase and newsletter",
      "Content managed by non-technical staff via admin panel",
    ],
    highlights_es: [
      "CMS headless con almacenamiento de contenido en GitHub",
      "Calendario de eventos con soporte de registro",
      "Showcase de beneficios de socios y newsletter",
      "Contenido gestionado por personal no técnico vía panel admin",
    ],
    challenge:
      "The Chamber needed a modern website that non-technical staff could update independently — managing events, news, board members, and partner benefits without developer intervention.",
    challenge_es:
      "La Cámara necesitaba un sitio web moderno que el personal no técnico pudiera actualizar de forma independiente — gestionando eventos, noticias, miembros del directorio y beneficios de socios sin intervención de desarrolladores.",
    approach:
      "Built with Next.js and Decap CMS (formerly Netlify CMS) using Git-based content storage. The editorial workflow lets staff create and edit content through an admin panel, with changes committed directly to GitHub. Deployed on Netlify with Resend for email functionality.",
    approach_es:
      "Construido con Next.js y Decap CMS (antes Netlify CMS) usando almacenamiento de contenido basado en Git. El flujo editorial permite al personal crear y editar contenido a través de un panel admin, con cambios commiteados directamente a GitHub. Desplegado en Netlify con Resend para funcionalidad de email.",
    outcome:
      "Live website actively used by the Chamber's staff to publish events, news, and manage partner content without any developer involvement.",
    outcome_es:
      "Sitio web en producción usado activamente por el personal de la Cámara para publicar eventos, noticias y gestionar contenido de socios sin intervención de desarrolladores.",
    links: [
      { label: "Visit CCI Argentina", href: "https://cciargentina.org.ar/" },
    ],
    featured: false,
    category: "work",
    color: "#059669",
  },
  {
    slug: "dynamic-systems",
    title: "Dynamic Systems",
    tagline: "Modeling and simulation toolkit for dynamic systems",
    tagline_es: "Toolkit de modelado y simulación para sistemas dinámicos",
    description:
      "An academic project for analyzing and simulating linear and non-linear dynamic systems. Provides tools for equilibrium analysis, phase portraits, bifurcation diagrams, and numerical methods for differential equations — built for the Modeling and Simulation course at UADE.",
    description_es:
      "Un proyecto académico para analizar y simular sistemas dinámicos lineales y no lineales. Provee herramientas para análisis de equilibrio, retratos de fase, diagramas de bifurcación y métodos numéricos para ecuaciones diferenciales — construido para la materia de Modelado y Simulación en UADE.",
    role: "Developer",
    role_es: "Desarrollador",
    year: "2025",
    status: "completed",
    statusLabel: "Completed",
    statusLabel_es: "Completado",
    stack: ["Python", "NumPy", "SciPy", "SymPy", "Matplotlib"],
    highlights: [
      "Equilibrium point identification and classification",
      "Phase portrait and bifurcation diagram visualization",
      "Numerical methods: Euler, Runge-Kutta, root finding",
      "Full stability analysis via Jacobian computation",
    ],
    highlights_es: [
      "Identificación y clasificación de puntos de equilibrio",
      "Visualización de retratos de fase y diagramas de bifurcación",
      "Métodos numéricos: Euler, Runge-Kutta, búsqueda de raíces",
      "Análisis de estabilidad completo vía computación de Jacobianos",
    ],
    challenge:
      "Analyzing dynamic systems requires computing Jacobians, finding equilibria, classifying stability, and visualizing complex behaviors like bifurcations and phase portraits — a process that's tedious to do manually.",
    challenge_es:
      "Analizar sistemas dinámicos requiere computar Jacobianos, encontrar equilibrios, clasificar estabilidad y visualizar comportamientos complejos como bifurcaciones y retratos de fase — un proceso tedioso de hacer manualmente.",
    approach:
      "Built a modular Python toolkit using SymPy for symbolic math, NumPy/SciPy for numerical computation, and Matplotlib for visualization. The core DynamicSystem class provides a run_full_analysis() method that automates the complete workflow.",
    approach_es:
      "Construí un toolkit modular en Python usando SymPy para matemática simbólica, NumPy/SciPy para computación numérica y Matplotlib para visualización. La clase core DynamicSystem provee un método run_full_analysis() que automatiza el flujo completo.",
    outcome:
      "Complete analysis toolkit used for coursework at UADE, automating equilibrium analysis, stability classification, and visualization of dynamic system behaviors.",
    outcome_es:
      "Toolkit de análisis completo usado para trabajos prácticos en UADE, automatizando análisis de equilibrio, clasificación de estabilidad y visualización de comportamientos de sistemas dinámicos.",
    links: [],
    featured: false,
    category: "open-source",
    color: "#8b5cf6",
  },
  {
    slug: "bender",
    title: "Bender",
    tagline: "One Chrome extension replacing ModHeader, Cookie-Editor, Tampermonkey and an Allow-CORS toggle",
    tagline_es: "Una extensión de Chrome que reemplaza a ModHeader, Cookie-Editor, Tampermonkey y el switch de Allow-CORS",
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
      "Everything compiles down to a single batch of declarativeNetRequest session rules: the engine takes the whole state and returns the complete rule list, the service worker swaps the old set for the new one. Session rules rather than dynamic ones, because they are the only kind that accept a tabIds condition — which is what makes \"this tab only\" scoping possible. Explicit priorities decide who wins when two rules touch the same header.",
    approach_es:
      "Todo se compila a una sola tanda de reglas de sesión de declarativeNetRequest: el motor toma el estado completo y devuelve la lista entera, y el service worker cambia el set viejo por el nuevo. Reglas de sesión y no dinámicas, porque son las únicas que aceptan la condición tabIds — que es lo que hace posible el alcance «sólo esta pestaña». Las prioridades explícitas definen quién gana cuando dos reglas tocan el mismo header.",
    outcome:
      "A daily driver that replaced four extensions in my own workflow, with its privacy policy published and the store listing prepared.",
    outcome_es:
      "Una herramienta de uso diario que reemplazó cuatro extensiones en mi propio workflow, con su política de privacidad publicada y el listado de la store preparado.",
    links: [
      { label: "Privacy policy", href: "https://matiascaliz.com.ar/bender/privacidad" },
    ],
    hidePreview: true,
    featured: false,
    category: "open-source",
    color: "#f97316",
  },
  {
    slug: "chrome-extension",
    title: "DevTools Extension",
    tagline: "Browser extension for managing localStorage & cookies",
    tagline_es: "Extensión de navegador para gestionar localStorage y cookies",
    description:
      "A Chrome extension built with Preact and Tailwind CSS that provides a clean interface for inspecting, editing, and managing localStorage and cookies. Born from a personal pain point — the built-in Chrome DevTools for storage are functional but clunky for daily use.",
    description_es:
      "Una extensión de Chrome construida con Preact y Tailwind CSS que provee una interfaz limpia para inspeccionar, editar y gestionar localStorage y cookies. Nació de un pain point personal — las DevTools de Chrome para storage son funcionales pero poco prácticas para uso diario.",
    role: "Creator",
    role_es: "Creador",
    year: "2024",
    status: "completed",
    statusLabel: "Available on Chrome",
    statusLabel_es: "Disponible en Chrome",
    stack: ["Preact", "Tailwind CSS", "Chrome APIs", "TypeScript"],
    highlights: [
      "Clean UI for storage inspection and editing",
      "Bulk operations on localStorage and cookies",
      "Search and filter across all stored data",
      "Built to solve a real daily workflow friction",
    ],
    highlights_es: [
      "UI limpia para inspección y edición de storage",
      "Operaciones masivas en localStorage y cookies",
      "Búsqueda y filtrado en todos los datos almacenados",
      "Construido para resolver una fricción real del día a día",
    ],
    challenge:
      "As a developer working with multiple environments and auth flows, I was constantly digging through Chrome DevTools to inspect and modify localStorage and cookies. The native interface is powerful but not optimized for rapid daily use.",
    challenge_es:
      "Como desarrollador trabajando con múltiples entornos y flujos de auth, constantemente estaba buscando en las DevTools de Chrome para inspeccionar y modificar localStorage y cookies. La interfaz nativa es poderosa pero no está optimizada para uso rápido diario.",
    approach:
      "Built a minimal Preact extension with Tailwind for styling. Focused on keyboard shortcuts, search, and bulk operations — the features I needed most. Used Chrome's extension APIs for storage access with proper permission scoping.",
    approach_es:
      "Construí una extensión mínima con Preact y Tailwind para el styling. Me enfoqué en atajos de teclado, búsqueda y operaciones masivas — las funciones que más necesitaba. Usé las APIs de extensiones de Chrome para acceso a storage con permisos correctamente delimitados.",
    outcome:
      "Became a daily-use tool in my workflow. Saves significant time when debugging auth flows, testing different user states, and managing development environment data.",
    outcome_es:
      "Se convirtió en una herramienta de uso diario en mi workflow. Ahorra tiempo significativo al debuggear flujos de auth, testear diferentes estados de usuario y gestionar datos del entorno de desarrollo.",
    links: [],
    featured: false,
    category: "open-source",
    color: "#ec4899",
  },
];

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}

export function getProjectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
