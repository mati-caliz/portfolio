import type { Project } from "../projectTypes";

export const conseguilo: Project = {
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
  stack: ["Next.js", "React", "TypeScript", "PostgreSQL", "Drizzle ORM", "Vercel AI SDK", "Tailwind CSS"],
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
  links: [{ label: "Visit Conseguilo", href: "https://conseguilo.com.ar" }],
  previewUrl: "https://conseguilo.com.ar",
  featured: true,
  category: "venture",
  color: "#14b8a6",
};
