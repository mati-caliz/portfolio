import type { Project } from "../projectTypes";

export const despegarSearch: Project = {
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
  links: [{ label: "Visit Despegar", href: "https://www.despegar.com" }],
  hidePreview: true,
  featured: true,
  category: "work",
  color: "#2563eb",
};
