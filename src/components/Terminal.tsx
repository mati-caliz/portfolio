import { useState, useRef, useEffect } from "preact/hooks";

interface Line {
  type: "input" | "output" | "error" | "ascii";
  content: string;
}

const ASCII_ART = `  __  __  ____
 |  \\/  |/ ___|
 | |\\/| | |
 | |  | | |___
 |_|  |_|\\____|`;

const COMMANDS: Record<string, () => string[]> = {
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
    "and side ventures in fintech and gastro SaaS.",
    "Security background shapes how I think about code.",
  ],
  skills: () => [
    "── Frontend ──────────────────────────",
    "  React · Angular · TypeScript · Preact",
    "  Tailwind CSS · HTML/CSS · Vite",
    "",
    "── Backend ───────────────────────────",
    "  Java · Spring · Node.js · Python",
    "  SQL · MongoDB · REST APIs",
    "",
    "── Tools & Infra ─────────────────────",
    "  Docker · Git · Linux · Cypress",
    "  Jest · JUnit · Scrapy · TensorFlow",
  ],
  experience: () => [
    "▸ Despegar — Full Stack Developer    2024–present",
    "  Search box, header & footer for LATAM's",
    "  largest travel platform. Millions of DAU.",
    "",
    "▸ EY — IT Auditor                    2023–2024",
    "  Cybersecurity audits, risk assessment,",
    "  compliance for enterprise clients.",
  ],
  projects: () => [
    "▸ Despegar Search Box     [production]",
    "  Search UI for millions of travelers",
    "",
    "▸ Finlatam                [in-progress]",
    "  Financial data dashboard for LATAM markets",
    "",
    "▸ Gastronova              [in-progress]",
    "  SaaS platform for restaurant management",
    "",
    "▸ jeff-core               [published]",
    "  Lightweight Preact component library",
    "",
    "▸ DevTools Extension      [completed]",
    "  Chrome extension for localStorage/cookies",
    "",
    '  → Type "open projects" to see full details',
  ],
  contact: () => [
    "── Get in touch ──────────────────────",
    "",
    "  Email     matias.caliz@gmail.com",
    "  GitHub    github.com/mati-caliz",
    "  LinkedIn  linkedin.com/in/matiascaliz",
    "",
    "  Open to interesting opportunities.",
  ],
  education: () => [
    "▸ UADE — Ingeniero en Informatica    2020–2024",
    "  Software architecture, algorithms, databases,",
    "  networking, systems design.",
    "",
    "▸ Cambridge B2 First (FCE)            2023",
    "  Targeting Cambridge Advanced in 2026.",
  ],
  interests: () => [
    "  Fintech & financial markets",
    "  Cybersecurity & system design",
    "  Biohacking & longevity",
    "  Real estate investing",
    "  Geopolitics",
    "  Entrepreneurship",
  ],
};

const NAVIGATION: Record<string, string> = {
  "open projects": "/projects",
  "open about": "/about",
  "open experience": "/experience",
  "open home": "/",
};

export default function Terminal() {
  const [lines, setLines] = useState<Line[]>([
    { type: "ascii", content: ASCII_ART },
    { type: "output", content: "" },
    { type: "output", content: 'Welcome. Type "help" to see available commands.' },
    { type: "output", content: "" },
  ]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    containerRef.current?.scrollTo(0, containerRef.current.scrollHeight);
  }, [lines]);

  function handleCommand(raw: string) {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    const newLines: Line[] = [
      ...lines,
      { type: "input", content: `~ ${cmd}` },
    ];

    if (cmd === "clear") {
      setLines([]);
      setInput("");
      setHistory((h) => [...h, cmd]);
      setHistoryIndex(-1);
      return;
    }

    if (NAVIGATION[cmd]) {
      newLines.push({ type: "output", content: `Navigating to ${NAVIGATION[cmd]}...` });
      setLines(newLines);
      setTimeout(() => (window.location.href = NAVIGATION[cmd]), 500);
      return;
    }

    const handler = COMMANDS[cmd];
    if (handler) {
      handler().forEach((line) => newLines.push({ type: "output", content: line }));
      newLines.push({ type: "output", content: "" });
    } else {
      newLines.push({
        type: "error",
        content: `command not found: ${cmd}. Type "help" for available commands.`,
      });
      newLines.push({ type: "output", content: "" });
    }

    setLines(newLines);
    setInput("");
    setHistory((h) => [...h, cmd]);
    setHistoryIndex(-1);
  }

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === "Enter") {
      handleCommand(input);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length === 0) return;
      const newIndex = historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(newIndex);
      setInput(history[newIndex]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === -1) return;
      const newIndex = historyIndex + 1;
      if (newIndex >= history.length) {
        setHistoryIndex(-1);
        setInput("");
      } else {
        setHistoryIndex(newIndex);
        setInput(history[newIndex]);
      }
    } else if (e.key === "l" && e.ctrlKey) {
      e.preventDefault();
      setLines([]);
    }
  }

  function getLineClass(type: Line["type"]) {
    switch (type) {
      case "input":
        return "text-[var(--color-accent)]";
      case "error":
        return "text-red-400";
      case "ascii":
        return "text-[var(--color-accent)] opacity-70";
      default:
        return "text-[var(--color-text-secondary)]";
    }
  }

  return (
    <div
      class="border border-[var(--color-border)] rounded-xl overflow-hidden bg-[var(--color-bg-secondary)] hover:border-[var(--color-border-hover)] transition-colors duration-300"
      onClick={() => inputRef.current?.focus()}
    >
      {/* Title bar */}
      <div class="flex items-center gap-2 px-4 py-3 border-b border-[var(--color-border)] bg-[var(--color-bg)]">
        <div class="flex items-center gap-1.5">
          <div class="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div class="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div class="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <span class="text-xs font-mono text-[var(--color-text-tertiary)] ml-2">
          matias@portfolio ~ %
        </span>
      </div>

      {/* Terminal body */}
      <div
        ref={containerRef}
        class="p-4 h-80 overflow-y-auto font-mono text-sm leading-relaxed"
        style="scrollbar-width: thin;"
      >
        {lines.map((line, i) => (
          <div key={i} class={`whitespace-pre-wrap ${getLineClass(line.type)}`}>
            {line.content || "\u00A0"}
          </div>
        ))}

        {/* Input line */}
        <div class="flex items-center gap-2">
          <span class="text-[var(--color-accent)] shrink-0">~</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onInput={(e) => setInput((e.target as HTMLInputElement).value)}
            onKeyDown={handleKeyDown}
            class="flex-1 bg-transparent outline-none text-[var(--color-text)] caret-[var(--color-accent)] font-mono text-sm"
            autoComplete="off"
            spellCheck={false}
            aria-label="Terminal input"
          />
        </div>
      </div>
    </div>
  );
}
