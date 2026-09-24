import type { Project } from "../projectTypes";

export const respondi: Project = {
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
  stack: [
    "TypeScript",
    "Fastify",
    "Next.js",
    "PostgreSQL",
    "pgvector",
    "Drizzle ORM",
    "BullMQ",
    "Redis",
    "Docker",
  ],
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
  links: [{ label: "Visit Respondi", href: "https://respondi.matiascaliz.com.ar" }],
  previewUrl: "https://respondi.matiascaliz.com.ar",
  featured: true,
  category: "venture",
  color: "#7c3aed",
};
