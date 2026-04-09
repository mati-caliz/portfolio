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
      "I own the search box, header, and footer components that serve as the primary entry point for millions of travelers across Latin America. These components handle complex multi-product search flows (flights, hotels, packages, cars) with autocomplete, date selection, and passenger configuration — all optimized for performance and accessibility.",
    description_es:
      "Soy responsable del buscador, header y footer que sirven como punto de entrada principal para millones de viajeros en Latinoamérica. Estos componentes manejan flujos de búsqueda multi-producto (vuelos, hoteles, paquetes, autos) con autocompletado, selección de fechas y configuración de pasajeros — todo optimizado para performance y accesibilidad.",
    role: "Full Stack Developer",
    role_es: "Desarrollador Full Stack",
    year: "2024 — Present",
    status: "production",
    statusLabel: "Live in production",
    statusLabel_es: "En producción",
    stack: ["React", "Angular", "Java", "Spring", "TypeScript", "Cypress"],
    highlights: [
      "Millions of daily active users across LATAM",
      "Multi-product search: flights, hotels, packages, cars",
      "Performance-critical — every ms impacts conversion",
      "A/B tested with real traffic at massive scale",
    ],
    highlights_es: [
      "Millones de usuarios activos diarios en LATAM",
      "Búsqueda multi-producto: vuelos, hoteles, paquetes, autos",
      "Crítico en performance — cada ms impacta la conversión",
      "A/B testing con tráfico real a escala masiva",
    ],
    challenge:
      "The search box is the single most important UI component at Despegar. It needs to handle multiple product verticals, complex date logic, passenger/room configurations, and autocomplete with geo-search — all while loading fast on slow connections across Latin America.",
    challenge_es:
      "El buscador es el componente de UI más importante de Despegar. Necesita manejar múltiples verticales de producto, lógica compleja de fechas, configuración de pasajeros/habitaciones y autocompletado con geo-búsqueda — todo cargando rápido en conexiones lentas en Latinoamérica.",
    approach:
      "I work across the full stack: React and Angular on the frontend with Java/Spring microservices on the backend. Every change is A/B tested with real traffic before rolling out. I focus on bundle size optimization, lazy loading, and progressive enhancement to ensure the component performs well even on 3G networks.",
    approach_es:
      "Trabajo en todo el stack: React y Angular en el frontend con microservicios Java/Spring en el backend. Cada cambio se testea con A/B testing con tráfico real antes del rollout. Me enfoco en optimización de bundle size, lazy loading y progressive enhancement para que el componente funcione bien incluso en redes 3G.",
    outcome:
      "The components I maintain are used by millions of people daily to plan and book their trips. Performance improvements I've shipped have directly impacted conversion rates and user engagement metrics.",
    outcome_es:
      "Los componentes que mantengo son usados por millones de personas diariamente para planificar y reservar sus viajes. Las mejoras de performance que implementé impactaron directamente en las tasas de conversión y métricas de engagement.",
    links: [
      { label: "Visit Despegar", href: "https://www.despegar.com" },
    ],
    featured: true,
    category: "work",
    color: "#2563eb",
  },
  {
    slug: "finlatam",
    title: "Finlatam",
    tagline: "Financial data dashboard for the Latin American market",
    tagline_es: "Dashboard de datos financieros para el mercado latinoamericano",
    description:
      "A comprehensive fintech dashboard that aggregates and visualizes financial data from Latin American markets. Built to provide real-time insights on market trends, asset performance, and economic indicators — designed for investors and analysts who need a LATAM-focused financial intelligence tool.",
    description_es:
      "Un dashboard fintech completo que agrega y visualiza datos financieros de mercados latinoamericanos. Construido para proveer insights en tiempo real sobre tendencias de mercado, rendimiento de activos e indicadores económicos — diseñado para inversores y analistas que necesitan una herramienta de inteligencia financiera enfocada en LATAM.",
    role: "Founder & Developer",
    role_es: "Fundador y Desarrollador",
    year: "2025",
    status: "completed",
    statusLabel: "Shipped",
    statusLabel_es: "Lanzado",
    stack: ["React", "TypeScript", "Python", "TensorFlow", "SQL", "Node.js"],
    highlights: [
      "Real-time market data aggregation and visualization",
      "ML-powered trend analysis with TensorFlow",
      "Custom charting engine for financial time series",
      "Built from scratch — architecture, design, and implementation",
    ],
    highlights_es: [
      "Agregación y visualización de datos de mercado en tiempo real",
      "Análisis de tendencias con ML usando TensorFlow",
      "Motor de gráficos custom para series temporales financieras",
      "Construido desde cero — arquitectura, diseño e implementación",
    ],
    challenge:
      "Latin American financial markets are fragmented across different exchanges, currencies, and regulatory environments. There was no unified platform that provided clean, actionable data with a modern UX for LATAM-focused investors.",
    challenge_es:
      "Los mercados financieros latinoamericanos están fragmentados entre diferentes bolsas, monedas y entornos regulatorios. No existía una plataforma unificada que proveyera datos limpios y accionables con una UX moderna para inversores enfocados en LATAM.",
    approach:
      "I designed a data pipeline using Python and Scrapy to aggregate financial data from multiple sources. The frontend is a React dashboard with custom D3-based visualizations. I integrated TensorFlow models for trend prediction and anomaly detection.",
    approach_es:
      "Diseñé un pipeline de datos usando Python y Scrapy para agregar datos financieros de múltiples fuentes. El frontend es un dashboard en React con visualizaciones custom basadas en D3. Integré modelos de TensorFlow para predicción de tendencias y detección de anomalías.",
    outcome:
      "Shipped MVP aggregating data from multiple LATAM markets with interactive charts, analytics, and ML-powered trend insights.",
    outcome_es:
      "MVP lanzado con agregación de datos de múltiples mercados LATAM, gráficos interactivos, analytics e insights de tendencias con ML.",
    links: [],
    featured: true,
    category: "venture",
    color: "#10b981",
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
    links: [],
    featured: true,
    category: "venture",
    color: "#f59e0b",
  },
  {
    slug: "jeff-core",
    title: "jeff-core",
    tagline: "Lightweight component library built with Preact",
    tagline_es: "Librería de componentes liviana construida con Preact",
    description:
      "An internal component library built with Preact and TypeScript, designed for high performance and minimal bundle size. Published on GitHub and used across multiple internal projects. Follows a design system with consistent tokens, accessibility patterns, and comprehensive test coverage.",
    description_es:
      "Una librería de componentes interna construida con Preact y TypeScript, diseñada para alto rendimiento y bundle size mínimo. Publicada en GitHub y usada en múltiples proyectos internos. Sigue un design system con tokens consistentes, patrones de accesibilidad y cobertura de tests completa.",
    role: "Creator & Maintainer",
    role_es: "Creador y Mantenedor",
    year: "2024",
    status: "completed",
    statusLabel: "Published on GitHub",
    statusLabel_es: "Publicado en GitHub",
    stack: ["Preact", "TypeScript", "Jest", "Tailwind CSS", "Vite"],
    highlights: [
      "Tiny bundle — Preact for minimal overhead",
      "Full TypeScript support with exported types",
      "Jest test coverage for all components",
      "Design tokens and consistent API surface",
    ],
    highlights_es: [
      "Bundle mínimo — Preact para overhead mínimo",
      "Soporte completo de TypeScript con tipos exportados",
      "Cobertura de tests con Jest para todos los componentes",
      "Design tokens y API surface consistente",
    ],
    challenge:
      "Needed a set of reusable UI components that were lightweight enough for performance-critical apps, while maintaining consistency and developer experience across projects.",
    challenge_es:
      "Necesitaba un set de componentes UI reutilizables lo suficientemente livianos para apps críticas en performance, manteniendo consistencia y developer experience entre proyectos.",
    approach:
      "Chose Preact over React for its 3KB footprint. Each component is individually tree-shakeable, fully typed, and tested. The library uses Tailwind-compatible design tokens so it integrates with any Tailwind-based project seamlessly.",
    approach_es:
      "Elegí Preact sobre React por su footprint de 3KB. Cada componente es tree-shakeable individualmente, totalmente tipado y testeado. La librería usa design tokens compatibles con Tailwind para integrarse con cualquier proyecto Tailwind sin problemas.",
    outcome:
      "Adopted across multiple internal projects. The library reduced UI development time and enforced visual consistency across applications.",
    outcome_es:
      "Adoptada en múltiples proyectos internos. La librería redujo el tiempo de desarrollo de UI y reforzó la consistencia visual entre aplicaciones.",
    links: [
      { label: "GitHub", href: "https://github.com/mati-caliz" },
    ],
    featured: false,
    category: "open-source",
    color: "#8b5cf6",
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
