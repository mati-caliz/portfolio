import type { Project } from "../projectTypes";

export const labrecha: Project = {
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
  links: [{ label: "Visit La Brecha", href: "https://labrecha.matiascaliz.com.ar" }],
  previewUrl: "https://labrecha.matiascaliz.com.ar",
  featured: true,
  category: "venture",
  color: "#10b981",
};
