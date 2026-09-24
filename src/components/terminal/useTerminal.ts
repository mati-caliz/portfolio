import { useEffect, useRef, useState } from "preact/hooks";
import type { RefObject } from "preact";
import { hasText } from "../../lib/text";
import {
  NO_HISTORY_SELECTION,
  nextHistoryStep,
  previousHistoryStep,
  type HistoryStep,
} from "./commandHistory";
import { resolveCommand } from "./resolveCommand";
import { ASCII_ART, WELCOME_MESSAGE } from "./terminalContent";
import type { TerminalLine } from "./terminalLines";
import { useKonamiCode, useMatrixRain, useSnakeGame, type TerminalMode } from "./useTerminalEffects";

const NAVIGATION_DELAY_MS = 500;

const INITIAL_LINES: TerminalLine[] = [
  { type: "ascii", content: ASCII_ART },
  { type: "output", content: "" },
  { type: "output", content: WELCOME_MESSAGE },
  { type: "output", content: "" },
];

export interface TerminalState {
  lines: TerminalLine[];
  input: string;
  mode: TerminalMode;
  inputRef: RefObject<HTMLInputElement>;
  containerRef: RefObject<HTMLDivElement>;
  setInput: (input: string) => void;
  handleKeyDown: (event: KeyboardEvent) => void;
}

function isQuitKey(key: string): boolean {
  return key === "q" || key === "Q";
}

export function useTerminal(): TerminalState {
  const [lines, setLines] = useState<TerminalLine[]>(INITIAL_LINES);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(NO_HISTORY_SELECTION);
  const [mode, setMode] = useState<TerminalMode>("normal");
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const snakeGame = useSnakeGame(setLines, setMode);
  const startMatrix = useMatrixRain(setLines, setMode);
  useKonamiCode(setLines);

  useEffect(() => {
    containerRef.current?.scrollTo(0, containerRef.current.scrollHeight);
  }, [lines]);

  function finishCommand(command: string): void {
    setInput("");
    setHistory((previous) => [...previous, command]);
    setHistoryIndex(NO_HISTORY_SELECTION);
  }

  function handleCommand(rawInput: string): void {
    const command = rawInput.trim().toLowerCase();
    if (!hasText(command)) {
      return;
    }
    const linesWithInput: TerminalLine[] = [...lines, { type: "input", content: `~ ${command}` }];
    const outcome = resolveCommand(command, rawInput);

    switch (outcome.kind) {
      case "clear":
        setLines([]);
        break;
      case "navigate":
        setLines([...linesWithInput, { type: "output", content: `Navigating to ${outcome.path}...` }]);
        setTimeout(() => (window.location.href = outcome.path), NAVIGATION_DELAY_MS);
        return;
      case "matrix":
        setLines(linesWithInput);
        break;
      case "snake":
        setLines(linesWithInput);
        break;
      case "print":
        setLines([...linesWithInput, ...outcome.lines]);
        break;
    }
    finishCommand(command);
    if (outcome.kind === "matrix") {
      startMatrix();
    } else if (outcome.kind === "snake") {
      snakeGame.start();
    }
  }

  function applyHistoryStep(step: HistoryStep | null): void {
    if (step !== null) {
      setHistoryIndex(step.index);
      setInput(step.input);
    }
  }

  function handleSnakeKey(event: KeyboardEvent): void {
    event.preventDefault();
    if (isQuitKey(event.key)) {
      snakeGame.quit();
    } else {
      snakeGame.steer(event.key);
    }
  }

  function handleNormalKey(event: KeyboardEvent): void {
    if (event.key === "Enter") {
      handleCommand(input);
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      applyHistoryStep(previousHistoryStep(history, historyIndex));
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      applyHistoryStep(nextHistoryStep(history, historyIndex));
    } else if (event.key === "l" && event.ctrlKey) {
      event.preventDefault();
      setLines([]);
    }
  }

  function handleKeyDown(event: KeyboardEvent): void {
    if (mode === "snake") {
      handleSnakeKey(event);
    } else if (mode === "matrix") {
      event.preventDefault();
    } else {
      handleNormalKey(event);
    }
  }

  return { lines, input, mode, inputRef, containerRef, setInput, handleKeyDown };
}
