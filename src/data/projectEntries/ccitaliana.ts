import type { Project } from "../projectTypes";

export const ccitaliana: Project = {
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
  links: [{ label: "Visit CCI Argentina", href: "https://cciargentina.org.ar/" }],
  featured: false,
  category: "work",
  color: "#059669",
};
