export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  role: string;
  year: string;
  status: "production" | "in-progress" | "completed";
  statusLabel: string;
  stack: string[];
  highlights: string[];
  challenge: string;
  approach: string;
  outcome: string;
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
    description:
      "I own the search box, header, and footer components that serve as the primary entry point for millions of travelers across Latin America. These components handle complex multi-product search flows (flights, hotels, packages, cars) with autocomplete, date selection, and passenger configuration — all optimized for performance and accessibility.",
    role: "Full Stack Developer",
    year: "2024 — Present",
    status: "production",
    statusLabel: "Live in production",
    stack: ["React", "Angular", "Java", "Spring", "TypeScript", "Cypress"],
    highlights: [
      "Millions of daily active users across LATAM",
      "Multi-product search: flights, hotels, packages, cars",
      "Performance-critical — every ms impacts conversion",
      "A/B tested with real traffic at massive scale",
    ],
    challenge:
      "The search box is the single most important UI component at Despegar. It needs to handle multiple product verticals, complex date logic, passenger/room configurations, and autocomplete with geo-search — all while loading fast on slow connections across Latin America.",
    approach:
      "I work across the full stack: React and Angular on the frontend with Java/Spring microservices on the backend. Every change is A/B tested with real traffic before rolling out. I focus on bundle size optimization, lazy loading, and progressive enhancement to ensure the component performs well even on 3G networks.",
    outcome:
      "The components I maintain are used by millions of people daily to plan and book their trips. Performance improvements I've shipped have directly impacted conversion rates and user engagement metrics.",
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
    description:
      "A comprehensive fintech dashboard that aggregates and visualizes financial data from Latin American markets. Built to provide real-time insights on market trends, asset performance, and economic indicators — designed for investors and analysts who need a LATAM-focused financial intelligence tool.",
    role: "Founder & Developer",
    year: "2025 — Present",
    status: "in-progress",
    statusLabel: "In active development",
    stack: ["React", "TypeScript", "Python", "TensorFlow", "SQL", "Node.js"],
    highlights: [
      "Real-time market data aggregation and visualization",
      "ML-powered trend analysis with TensorFlow",
      "Custom charting engine for financial time series",
      "Built from scratch — architecture, design, and implementation",
    ],
    challenge:
      "Latin American financial markets are fragmented across different exchanges, currencies, and regulatory environments. There was no unified platform that provided clean, actionable data with a modern UX for LATAM-focused investors.",
    approach:
      "I designed a data pipeline using Python and Scrapy to aggregate financial data from multiple sources. The frontend is a React dashboard with custom D3-based visualizations. I'm integrating TensorFlow models for trend prediction and anomaly detection.",
    outcome:
      "Currently in active development. The MVP aggregates data from multiple LATAM markets and provides interactive charts and analytics. Working toward a public beta launch.",
    links: [],
    featured: true,
    category: "venture",
    color: "#10b981",
  },
  {
    slug: "gastronova",
    title: "Gastronova",
    tagline: "SaaS platform for the restaurant industry",
    description:
      "A complete SaaS solution for restaurant management — covering everything from table reservations and order management to inventory tracking and analytics. Think Fudo or Maxirest, but built with a modern stack and focused on the small-to-medium restaurant segment in Argentina.",
    role: "Founder & Developer",
    year: "2025 — Present",
    status: "in-progress",
    statusLabel: "In development",
    stack: ["React", "Node.js", "TypeScript", "MongoDB", "Docker"],
    highlights: [
      "End-to-end restaurant management system",
      "Real-time order tracking and table management",
      "Inventory system with low-stock alerts",
      "Revenue analytics and reporting dashboard",
    ],
    challenge:
      "Most restaurant management software in Argentina is either outdated, overpriced, or designed for enterprise chains. Small and medium restaurants need an affordable, modern, easy-to-use tool that covers the full operation cycle.",
    approach:
      "Building a modular SaaS where restaurants can start with basic features (orders, tables) and add modules as they grow (inventory, analytics, reservations). The architecture is microservices-based with Docker, designed to scale from a single restaurant to a chain.",
    outcome:
      "Architecture designed, core modules in development. Conducting user research with restaurant owners in Buenos Aires to validate features and pricing model.",
    links: [],
    featured: true,
    category: "venture",
    color: "#f59e0b",
  },
  {
    slug: "jeff-core",
    title: "jeff-core",
    tagline: "Lightweight component library built with Preact",
    description:
      "An internal component library built with Preact and TypeScript, designed for high performance and minimal bundle size. Published on GitHub and used across multiple internal projects. Follows a design system with consistent tokens, accessibility patterns, and comprehensive test coverage.",
    role: "Creator & Maintainer",
    year: "2024",
    status: "completed",
    statusLabel: "Published on GitHub",
    stack: ["Preact", "TypeScript", "Jest", "Tailwind CSS", "Vite"],
    highlights: [
      "Tiny bundle — Preact for minimal overhead",
      "Full TypeScript support with exported types",
      "Jest test coverage for all components",
      "Design tokens and consistent API surface",
    ],
    challenge:
      "Needed a set of reusable UI components that were lightweight enough for performance-critical apps, while maintaining consistency and developer experience across projects.",
    approach:
      "Chose Preact over React for its 3KB footprint. Each component is individually tree-shakeable, fully typed, and tested. The library uses Tailwind-compatible design tokens so it integrates with any Tailwind-based project seamlessly.",
    outcome:
      "Adopted across multiple internal projects. The library reduced UI development time and enforced visual consistency across applications.",
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
    description:
      "A Chrome extension built with Preact and Tailwind CSS that provides a clean interface for inspecting, editing, and managing localStorage and cookies. Born from a personal pain point — the built-in Chrome DevTools for storage are functional but clunky for daily use.",
    role: "Creator",
    year: "2024",
    status: "completed",
    statusLabel: "Available on Chrome",
    stack: ["Preact", "Tailwind CSS", "Chrome APIs", "TypeScript"],
    highlights: [
      "Clean UI for storage inspection and editing",
      "Bulk operations on localStorage and cookies",
      "Search and filter across all stored data",
      "Built to solve a real daily workflow friction",
    ],
    challenge:
      "As a developer working with multiple environments and auth flows, I was constantly digging through Chrome DevTools to inspect and modify localStorage and cookies. The native interface is powerful but not optimized for rapid daily use.",
    approach:
      "Built a minimal Preact extension with Tailwind for styling. Focused on keyboard shortcuts, search, and bulk operations — the features I needed most. Used Chrome's extension APIs for storage access with proper permission scoping.",
    outcome:
      "Became a daily-use tool in my workflow. Saves significant time when debugging auth flows, testing different user states, and managing development environment data.",
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
