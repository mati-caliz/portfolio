import type { Project } from "../projectTypes";

export const despegarShifu: Project = {
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
  links: [{ label: "Visit Despegar", href: "https://www.despegar.com" }],
  hidePreview: true,
  featured: false,
  category: "work",
  color: "#0ea5e9",
};
