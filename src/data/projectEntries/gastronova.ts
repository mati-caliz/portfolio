import type { Project } from "../projectTypes";

export const gastronova: Project = {
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
  links: [{ label: "Visit Gastronova", href: "https://gastronova.com.ar" }],
  previewUrl: "https://gastronova.com.ar",
  featured: true,
  category: "venture",
  color: "#f59e0b",
};
