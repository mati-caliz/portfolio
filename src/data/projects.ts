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
    hidePreview: true,
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
    links: [
      { label: "Visit Finlatam", href: "https://finlatamio.com" },
    ],
    featured: false,
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
    links: [
      { label: "Visit Gastronova", href: "https://gastronova.com.ar" },
    ],
    previewUrl: "https://gastronova.com.ar/producto",
    featured: true,
    category: "venture",
    color: "#f59e0b",
  },
  {
    slug: "prop-metrics",
    title: "PropMetrics",
    tagline: "Real estate intelligence platform for the Argentine market",
    tagline_es: "Plataforma de inteligencia inmobiliaria para el mercado argentino",
    description:
      "A real estate data platform that automates property data collection from major Argentine portals (ZonaProp, Argenprop) and provides market analysis tools. Features advanced search, price history tracking, market statistics, and a buy vs. rent ROI calculator — built to bring data-driven decision making to Argentina's real estate market.",
    description_es:
      "Una plataforma de datos inmobiliarios que automatiza la recolección de datos de los principales portales argentinos (ZonaProp, Argenprop) y provee herramientas de análisis de mercado. Incluye búsqueda avanzada, seguimiento de historial de precios, estadísticas de mercado y calculadora de ROI compra vs. alquiler — construida para llevar decisiones basadas en datos al mercado inmobiliario argentino.",
    role: "Creator & Developer",
    role_es: "Creador y Desarrollador",
    year: "2025",
    status: "completed",
    statusLabel: "Completed",
    statusLabel_es: "Completado",
    stack: ["Java", "Spring Boot", "PostgreSQL", "Redis", "Selenium"],
    highlights: [
      "Automated scraping with anti-bot evasion strategies",
      "Price history tracking with change detection",
      "Market stats: averages, medians, price/m² ranges",
      "Buy vs. Rent ROI calculator with financial analysis",
    ],
    highlights_es: [
      "Scraping automatizado con estrategias anti-bot",
      "Seguimiento de historial de precios con detección de cambios",
      "Estadísticas de mercado: promedios, medianas, rangos de precio/m²",
      "Calculadora ROI compra vs. alquiler con análisis financiero",
    ],
    challenge:
      "Argentina's real estate market lacks transparent, centralized data. Property listings are scattered across multiple portals with no easy way to track price changes, compare neighborhoods, or analyze market trends over time.",
    challenge_es:
      "El mercado inmobiliario argentino carece de datos transparentes y centralizados. Los listados de propiedades están dispersos en múltiples portales sin una forma fácil de rastrear cambios de precios, comparar barrios o analizar tendencias del mercado en el tiempo.",
    approach:
      "Built a Spring Boot backend with Jsoup and Selenium for scraping, PostgreSQL for persistence, and Redis for caching. Implemented anti-bot measures like User-Agent rotation, random delays, and headless browser strategies. The API exposes advanced search, statistics, and financial analysis endpoints.",
    approach_es:
      "Construí un backend con Spring Boot usando Jsoup y Selenium para scraping, PostgreSQL para persistencia y Redis para caching. Implementé medidas anti-bot como rotación de User-Agent, delays aleatorios y estrategias de navegador headless. La API expone endpoints de búsqueda avanzada, estadísticas y análisis financiero.",
    outcome:
      "Backend API fully functional with data from two major portals covering Buenos Aires. Roadmap includes ML-powered valuations, heatmaps, and a React/Next.js frontend.",
    outcome_es:
      "API backend totalmente funcional con datos de dos portales principales cubriendo Buenos Aires. El roadmap incluye valuaciones con ML, mapas de calor y un frontend en React/Next.js.",
    links: [],
    featured: false,
    category: "venture",
    color: "#6366f1",
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
    featured: true,
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
