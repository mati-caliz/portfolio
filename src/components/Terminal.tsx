import { useState, useRef, useEffect, useCallback } from "preact/hooks";

interface Line {
  type: "input" | "output" | "error" | "ascii";
  content: string;
}

type TerminalMode = "normal" | "matrix" | "snake";

const ASCII_ART = `  __  __  ____
 |  \\/  |/ ___|
 | |\\/| | |
 | |  | | |___
 |_|  |_|\\____|`;

// ── Standard commands ──

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
    "▸ Despegar Header/Footer  [production]",
    "  Centralized header & footer service (SHiFu)",
    "",
    "▸ Finlatam                [production]",
    "  Financial data dashboard for LATAM markets",
    "",
    "▸ Gastronova              [production]",
    "  SaaS platform for restaurant management",
    "",
    "▸ PropMetrics             [completed]",
    "  Real estate intelligence for Argentina",
    "",
    "▸ CCI Argentina           [production]",
    "  Italian Chamber of Commerce website",
    "",
    "▸ Dynamic Systems         [completed]",
    "  Modeling & simulation toolkit in Python",
    "",
    "▸ DevTools Extension      [completed]",
    "  Chrome extension for localStorage/cookies",
    "",
    '  → Type "open projects" to see full details',
  ],
  contact: () => [
    "── Get in touch ──────────────────────",
    "",
    "  Email     matiascaliz@hotmail.com",
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

// ── Easter egg commands ──

const EASTER_EGGS: Record<string, () => string[]> = {
  "sudo hire me": () => [
    "",
    "  ╔══════════════════════════════════════╗",
    "  ║   🔓 ACCESS GRANTED                  ║",
    "  ║                                      ║",
    "  ║   Excellent decision.                ║",
    "  ║   You clearly have great taste.      ║",
    "  ║                                      ║",
    "  ║   → matiascaliz@hotmail.com          ║",
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
  "rm -rf /": () => [
    "",
    "  Nice try. 😏",
    "  This portfolio is protected by an IT Auditor.",
    "",
  ],
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
};

function cowsay(text: string): string[] {
  const msg = text || "moo";
  const border = "─".repeat(msg.length + 2);
  return [
    "",
    ` ┌${border}┐`,
    ` │ ${msg} │`,
    ` └${border}┘`,
    "        \\   ^__^",
    "         \\  (oo)\\_______",
    "            (__)\\       )\\/\\",
    "                ||----w |",
    "                ||     ||",
    "",
  ];
}

// ── Matrix rain helpers ──

const MATRIX_CHARS = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF";
const MATRIX_WIDTH = 44;
const MATRIX_DURATION = 5000;
const MATRIX_INTERVAL = 80;

function randomMatrixLine(): string {
  let line = "";
  for (let i = 0; i < MATRIX_WIDTH; i++) {
    line += Math.random() < 0.7
      ? MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)]
      : " ";
  }
  return line;
}

// ── Snake game helpers ──

const SNAKE_WIDTH = 20;
const SNAKE_HEIGHT = 10;
const SNAKE_INTERVAL = 200;

interface SnakeState {
  snake: Array<[number, number]>;
  food: [number, number];
  dir: [number, number];
  score: number;
  gameOver: boolean;
}

function initSnake(): SnakeState {
  const snake: Array<[number, number]> = [[10, 5], [9, 5], [8, 5]];
  return {
    snake,
    food: spawnFood(snake),
    dir: [1, 0],
    score: 0,
    gameOver: false,
  };
}

function spawnFood(snake: Array<[number, number]>): [number, number] {
  let pos: [number, number];
  do {
    pos = [
      Math.floor(Math.random() * SNAKE_WIDTH),
      Math.floor(Math.random() * SNAKE_HEIGHT),
    ];
  } while (snake.some(([x, y]) => x === pos[0] && y === pos[1]));
  return pos;
}

function tickSnake(state: SnakeState): SnakeState {
  if (state.gameOver) return state;

  const [dx, dy] = state.dir;
  const [hx, hy] = state.snake[0];
  const nx = hx + dx;
  const ny = hy + dy;

  // Wall collision
  if (nx < 0 || nx >= SNAKE_WIDTH || ny < 0 || ny >= SNAKE_HEIGHT) {
    return { ...state, gameOver: true };
  }

  // Self collision
  if (state.snake.some(([x, y]) => x === nx && y === ny)) {
    return { ...state, gameOver: true };
  }

  const newSnake: Array<[number, number]> = [[nx, ny], ...state.snake];
  let newFood = state.food;
  let newScore = state.score;

  if (nx === state.food[0] && ny === state.food[1]) {
    newScore++;
    newFood = spawnFood(newSnake);
  } else {
    newSnake.pop();
  }

  return { ...state, snake: newSnake, food: newFood, score: newScore };
}

function renderSnakeBoard(state: SnakeState): string[] {
  const lines: string[] = [];
  const top = "┌" + "──".repeat(SNAKE_WIDTH) + "┐";
  const bottom = "└" + "──".repeat(SNAKE_WIDTH) + "┘";

  lines.push(top);
  for (let y = 0; y < SNAKE_HEIGHT; y++) {
    let row = "│";
    for (let x = 0; x < SNAKE_WIDTH; x++) {
      const isHead = state.snake[0][0] === x && state.snake[0][1] === y;
      const isBody = !isHead && state.snake.some(([sx, sy]) => sx === x && sy === y);
      const isFood = state.food[0] === x && state.food[1] === y;
      if (isHead) row += "██";
      else if (isBody) row += "▓▓";
      else if (isFood) row += "◆◆";
      else row += "  ";
    }
    row += "│";
    lines.push(row);
  }
  lines.push(bottom);
  lines.push(`  Score: ${state.score}  |  WASD/Arrows to move  |  Q to quit`);
  return lines;
}

// ── Navigation ──

const NAVIGATION: Record<string, string> = {
  "open projects": "/projects",
  "open about": "/about",
  "open experience": "/experience",
  "open home": "/",
};

// ── Konami code sequence ──

const KONAMI_SEQUENCE = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "b", "a",
];

// ── Terminal Component ──

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
  const [mode, setMode] = useState<TerminalMode>("normal");
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const snakeStateRef = useRef<SnakeState>(initSnake());
  const snakeIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const matrixIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    containerRef.current?.scrollTo(0, containerRef.current.scrollHeight);
  }, [lines]);

  // Konami code listener
  useEffect(() => {
    let konamiIndex = 0;
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === KONAMI_SEQUENCE[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === KONAMI_SEQUENCE.length) {
          konamiIndex = 0;
          setLines((prev) => [
            ...prev,
            { type: "ascii", content: "" },
            { type: "ascii", content: "  ★ ★ ★  KONAMI CODE ACTIVATED  ★ ★ ★" },
            { type: "ascii", content: "" },
            { type: "output", content: "  +30 lives granted. You are now invincible." },
            { type: "output", content: "  (Not really, but you get bonus respect points.)" },
            { type: "output", content: "" },
            { type: "output", content: "  🎮 You found an easter egg! There are more..." },
            { type: "output", content: "" },
          ]);
        }
      } else {
        konamiIndex = 0;
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Snake game cleanup
  useEffect(() => {
    return () => {
      if (snakeIntervalRef.current) clearInterval(snakeIntervalRef.current);
      if (matrixIntervalRef.current) clearInterval(matrixIntervalRef.current);
    };
  }, []);

  const stopSnake = useCallback(() => {
    if (snakeIntervalRef.current) {
      clearInterval(snakeIntervalRef.current);
      snakeIntervalRef.current = null;
    }
    setMode("normal");
  }, []);

  const startSnake = useCallback(() => {
    const state = initSnake();
    snakeStateRef.current = state;
    setMode("snake");

    setLines((prev) => [
      ...prev,
      { type: "ascii", content: "" },
      { type: "ascii", content: "  🐍 SNAKE GAME — WASD/Arrows to move, Q to quit" },
      { type: "ascii", content: "" },
      ...renderSnakeBoard(state).map((l) => ({ type: "ascii" as const, content: l })),
    ]);

    snakeIntervalRef.current = setInterval(() => {
      snakeStateRef.current = tickSnake(snakeStateRef.current);
      const s = snakeStateRef.current;

      if (s.gameOver) {
        stopSnake();
        setLines((prev) => [
          ...prev,
          { type: "error", content: `  Game Over! Final score: ${s.score}` },
          { type: "output", content: '  Type "snake" to play again.' },
          { type: "output", content: "" },
        ]);
        return;
      }

      setLines((prev) => {
        // Replace the last board render
        const boardSize = SNAKE_HEIGHT + 3; // top + rows + bottom + score line
        const newLines = prev.slice(0, prev.length - boardSize);
        return [
          ...newLines,
          ...renderSnakeBoard(s).map((l) => ({ type: "ascii" as const, content: l })),
        ];
      });
    }, SNAKE_INTERVAL);
  }, [stopSnake]);

  const startMatrix = useCallback(() => {
    setMode("matrix");
    setLines((prev) => [
      ...prev,
      { type: "ascii", content: "" },
      { type: "ascii", content: "  ▶ ENTERING THE MATRIX..." },
      { type: "ascii", content: "" },
    ]);

    matrixIntervalRef.current = setInterval(() => {
      setLines((prev) => [
        ...prev,
        { type: "ascii", content: randomMatrixLine() },
      ]);
    }, MATRIX_INTERVAL);

    setTimeout(() => {
      if (matrixIntervalRef.current) {
        clearInterval(matrixIntervalRef.current);
        matrixIntervalRef.current = null;
      }
      setMode("normal");
      setLines((prev) => [
        ...prev,
        { type: "output", content: "" },
        { type: "output", content: "  You take the red pill... you wake up in your portfolio." },
        { type: "output", content: "" },
      ]);
    }, MATRIX_DURATION);
  }, []);

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

    // Easter egg: matrix
    if (cmd === "matrix") {
      setLines(newLines);
      setInput("");
      setHistory((h) => [...h, cmd]);
      setHistoryIndex(-1);
      startMatrix();
      return;
    }

    // Easter egg: snake
    if (cmd === "snake") {
      setLines(newLines);
      setInput("");
      setHistory((h) => [...h, cmd]);
      setHistoryIndex(-1);
      startSnake();
      return;
    }

    // Easter egg: cowsay
    if (cmd.startsWith("cowsay")) {
      const text = raw.trim().slice(7).trim();
      cowsay(text).forEach((line) => newLines.push({ type: "ascii", content: line }));
      newLines.push({ type: "output", content: "" });
      setLines(newLines);
      setInput("");
      setHistory((h) => [...h, cmd]);
      setHistoryIndex(-1);
      return;
    }

    // Easter eggs (simple text)
    const easterEgg = EASTER_EGGS[cmd];
    if (easterEgg) {
      easterEgg().forEach((line) => newLines.push({ type: "output", content: line }));
      newLines.push({ type: "output", content: "" });
      setLines(newLines);
      setInput("");
      setHistory((h) => [...h, cmd]);
      setHistoryIndex(-1);
      return;
    }

    // Standard commands
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
    // Snake mode controls
    if (mode === "snake") {
      e.preventDefault();
      const s = snakeStateRef.current;
      if (e.key === "q" || e.key === "Q") {
        stopSnake();
        setLines((prev) => [
          ...prev,
          { type: "output", content: `  Quit. Final score: ${s.score}` },
          { type: "output", content: "" },
        ]);
        return;
      }
      const dirMap: Record<string, [number, number]> = {
        ArrowUp: [0, -1], w: [0, -1], W: [0, -1],
        ArrowDown: [0, 1], s: [0, 1], S: [0, 1],
        ArrowLeft: [-1, 0], a: [-1, 0], A: [-1, 0],
        ArrowRight: [1, 0], d: [1, 0], D: [1, 0],
      };
      const newDir = dirMap[e.key];
      if (newDir) {
        // Prevent reversing direction
        const [cx, cy] = s.dir;
        if (newDir[0] !== -cx || newDir[1] !== -cy) {
          snakeStateRef.current = { ...s, dir: newDir };
        }
      }
      return;
    }

    // Matrix mode — block input
    if (mode === "matrix") {
      e.preventDefault();
      return;
    }

    // Normal mode
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

        {/* Input line — hidden during snake/matrix */}
        {mode === "normal" && (
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
        )}
        {mode === "snake" && (
          <div
            class="text-xs text-[var(--color-text-tertiary)] mt-2"
            tabIndex={0}
            onKeyDown={handleKeyDown}
            ref={(el) => el?.focus()}
          >
            Playing Snake...
          </div>
        )}
        {mode === "matrix" && (
          <div class="text-xs text-[var(--color-text-tertiary)] mt-2">
            Decoding the Matrix...
          </div>
        )}
      </div>
    </div>
  );
}
