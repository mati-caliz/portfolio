import { hasText } from "../../lib/text";

export const ASCII_ART = `  __  __  ____
 |  \\/  |/ ___|
 | |\\/| | |
 | |  | | |___
 |_|  |_|\\____|`;

export const WELCOME_MESSAGE = 'Welcome. Type "help" to see available commands.';

const DEFAULT_COWSAY_MESSAGE = "moo";
const COWSAY_PADDING = 2;

export const COMMANDS = new Map<string, () => string[]>(
  Object.entries({
    help: () => [
      "Available commands:",
      "",
      "  about       Who I am",
      "  skills      My tech stack",
      "  experience  Career timeline",
      "  projects    What I'm building",
      "  contact     How to reach me",
      "  education   Where I studied",
      "  interests   What I care about",
      "  clear       Clear terminal",
      "  help        Show this message",
    ],
    about: () => [
      "Matias Caliz (Tute) — 24, Buenos Aires",
      "",
      "Full Stack Engineer @ Despegar",
      "Ex IT Auditor @ EY (Ernst & Young)",
      "Ing. en Informatica — UADE",
      "",
      "I build production software used by millions,",
      "and ship my own products: fintech data, gastro",
      "SaaS, AI agents and computer vision.",
      "Security background shapes how I think about code.",
    ],
    skills: () => [
      "── Frontend ──────────────────────────",
      "  React · Next.js · Angular · Preact",
      "  TypeScript · Tailwind CSS · Astro",
      "",
      "── Backend ───────────────────────────",
      "  Java · Spring · Node.js · Fastify",
      "  Python · FastAPI · REST APIs",
      "",
      "── Data ──────────────────────────────",
      "  PostgreSQL · MongoDB · Redis",
      "  Drizzle · Alembic · pgvector",
      "",
      "── Tools & Infra ─────────────────────",
      "  Docker · Nginx · Linux · Git",
      "  GitHub Actions · Cypress · JUnit",
    ],
    experience: () => [
      "▸ Despegar — Full Stack Developer SSR",
      "  Aug 2023–present · 3 yrs",
      "  Search box, header & footer for LATAM's",
      "  largest travel platform. Millions of DAU.",
      "",
      "▸ EY — IT Auditor & Cybersecurity Analyst",
      "  Jun 2020–Jun 2022 · 2 yrs 1 mo",
      "  Cybersecurity audits, risk assessment,",
      "  compliance for enterprise clients.",
    ],
    projects: () => [
      "▸ Despegar Search Box     [production]",
      "  Search UI for millions of travelers",
      "",
      "▸ Despegar Header/Footer  [production]",
      "  Centralized header & footer service (SHiFu)",
      "",
      "▸ La Brecha               [production]",
      "  Public observatory of Argentine indicators",
      "",
      "▸ Conseguilo              [production]",
      "  Job-hunting SaaS: ATS CVs, tracker, AI match",
      "",
      "▸ Respondi                [beta]",
      "  AI agents on WhatsApp & Telegram",
      "",
      "▸ Gastronova              [production]",
      "  SaaS platform for restaurant management",
      "",
      "▸ Soma Intelligence       [pre-mvp]",
      "  Computer vision metrics from IP cameras",
      "",
      "▸ Tarjetazo               [running]",
      "  Bot that parses my card statement to Telegram",
      "",
      "▸ CCI Argentina           [production]",
      "  Italian Chamber of Commerce website",
      "",
      "▸ PropMetrics             [production]",
      "  Real estate intelligence for Argentina",
      "",
      "▸ Chirola                 [production]",
      "  Electronic invoicing against ARCA, as an API",
      "",
      "▸ Bender                  [chrome]",
      "  Headers, cookies, mocks & CORS in one extension",
      "",
      "▸ Dynamic Systems         [completed]",
      "  Modeling & simulation toolkit in Python",
      "",
      '  → Type "open projects" to see full details',
    ],
    contact: () => [
      "── Get in touch ──────────────────────",
      "",
      "  GitHub    @mati-caliz",
      "  GitHub    github.com/mati-caliz",
      "  LinkedIn  www.linkedin.com/in/matias-caliz/",
      "",
      "  Open to interesting opportunities.",
    ],
    education: () => [
      "▸ UADE — Ingeniero en Informatica    2020–2024",
      "  Software architecture, algorithms, databases,",
      "  networking, systems design.",
      "",
      "▸ English C1",
      "  Cambridge Assessment English.",
    ],
    interests: () => [
      "  Fintech & financial markets",
      "  Cybersecurity & system design",
      "  Biohacking & longevity",
      "  Real estate investing",
      "  Geopolitics",
      "  Entrepreneurship",
    ],
  }),
);

export const EASTER_EGGS = new Map<string, () => string[]>(
  Object.entries({
    "sudo hire me": () => [
      "",
      "  ╔══════════════════════════════════════╗",
      "  ║   🔓 ACCESS GRANTED                  ║",
      "  ║                                      ║",
      "  ║   Excellent decision.                ║",
      "  ║   You clearly have great taste.      ║",
      "  ║                                      ║",
      "  ║   → github.com/mati-caliz            ║",
      "  ║   → linkedin.com/in/matias-caliz     ║",
      "  ║                                      ║",
      "  ║   Let's build something together.    ║",
      "  ╚══════════════════════════════════════╝",
      "",
    ],
    whoami: () => [
      "",
      "  You are a curious visitor with good taste",
      "  in portfolios. You found the secret commands.",
      "",
      "  Keep exploring — there are more hidden things.",
      "",
    ],
    "rm -rf /": () => ["", "  Nice try. 😏", "  This portfolio is protected by an IT Auditor.", ""],
    exit: () => [
      "",
      "  There is no escape. You're stuck here now.",
      "  (Just kidding — but why would you leave?)",
      "",
    ],
    "apt update": () => [
      "",
      "  E: Unable to acquire the dpkg lock.",
      "  E: Anyway this isn't a real Linux terminal.",
      "  E: But nice instinct, fellow penguin.",
      "",
    ],
    neofetch: () => [
      "",
      "       ████████          matias@portfolio",
      "     ██        ██        ─────────────────",
      "    █  ▄▄▄▄▄▄▄▄  █       OS: Astro 6.1.5",
      "    █  ████████  █       Shell: Terminal.tsx",
      "    █  ▀▀▀▀▀▀▀▀  █       Theme: Dark/Light",
      "     ██        ██        WM: Preact Islands",
      "       ████████          Uptime: since 2024",
      "",
    ],
  }),
);

export const NAVIGATION = new Map<string, string>([
  ["open projects", "/projects"],
  ["open about", "/about"],
  ["open experience", "/experience"],
  ["open home", "/"],
]);

export const KONAMI_SEQUENCE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export const KONAMI_ASCII_LINES = ["", "  ★ ★ ★  KONAMI CODE ACTIVATED  ★ ★ ★", ""];

export const KONAMI_OUTPUT_LINES = [
  "  +30 lives granted. You are now invincible.",
  "  (Not really, but you get bonus respect points.)",
  "",
  "  🎮 You found an easter egg! There are more...",
  "",
];

export function cowsay(text: string): string[] {
  const message = hasText(text) ? text : DEFAULT_COWSAY_MESSAGE;
  const border = "─".repeat(message.length + COWSAY_PADDING);
  return [
    "",
    ` ┌${border}┐`,
    ` │ ${message} │`,
    ` └${border}┘`,
    "        \\   ^__^",
    "         \\  (oo)\\_______",
    "            (__)\\       )\\/\\",
    "                ||----w |",
    "                ||     ||",
    "",
  ];
}
