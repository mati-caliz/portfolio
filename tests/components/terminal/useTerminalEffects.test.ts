import { act, fireEvent, renderHook } from "@testing-library/preact";
import { useState } from "preact/hooks";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { SNAKE_BOARD_LINE_COUNT } from "../../../src/components/terminal/snake";
import { KONAMI_SEQUENCE } from "../../../src/components/terminal/terminalContent";
import type { TerminalLine } from "../../../src/components/terminal/terminalLines";
import {
  useKonamiCode,
  useMatrixRain,
  useSnakeGame,
  type TerminalMode,
} from "../../../src/components/terminal/useTerminalEffects";

const SNAKE_TICK_MS = 200;
const MATRIX_FRAME_MS = 80;
const MATRIX_TOTAL_MS = 5000;
const TICKS_TO_REACH_ANY_WALL = 25;

function useTerminalOutput(): {
  lines: TerminalLine[];
  mode: TerminalMode;
  setLines: (update: (previous: TerminalLine[]) => TerminalLine[]) => void;
  setMode: (mode: TerminalMode) => void;
} {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [mode, setMode] = useState<TerminalMode>("normal");
  return { lines, mode, setLines, setMode };
}

function contents(lines: TerminalLine[]): string[] {
  return lines.map((line) => line.content);
}

beforeEach(() => {
  vi.useFakeTimers();
});

describe("useKonamiCode", () => {
  function renderKonami(): { current: TerminalLine[] } {
    const { result } = renderHook(() => {
      const output = useTerminalOutput();
      useKonamiCode(output.setLines);
      return output.lines;
    });
    return result;
  }

  function pressKeys(keys: string[]): void {
    for (const key of keys) {
      fireEvent.keyDown(window, { key });
    }
  }

  it("celebrates the full sequence", () => {
    const result = renderKonami();
    pressKeys(KONAMI_SEQUENCE);
    expect(contents(result.current)).toContain("  ★ ★ ★  KONAMI CODE ACTIVATED  ★ ★ ★");
  });

  it("starts over after a wrong key", () => {
    const result = renderKonami();
    pressKeys([...KONAMI_SEQUENCE.slice(0, 4), "x", ...KONAMI_SEQUENCE.slice(4)]);
    expect(result.current).toEqual([]);
  });

  it("can be triggered again after a success", () => {
    const result = renderKonami();
    pressKeys([...KONAMI_SEQUENCE, ...KONAMI_SEQUENCE]);
    const activations = contents(result.current).filter((line) => line.includes("KONAMI"));
    expect(activations).toHaveLength(2);
  });
});

describe("useMatrixRain", () => {
  function renderMatrix(): { current: ReturnType<typeof useTerminalOutput> & { start: () => void } } {
    const { result } = renderHook(() => {
      const output = useTerminalOutput();
      const start = useMatrixRain(output.setLines, output.setMode);
      return { ...output, start };
    });
    return result;
  }

  it("rains lines while active and goes back to normal after the duration", async () => {
    const result = renderMatrix();
    await act(() => {
      result.current.start();
    });
    expect(result.current.mode).toBe("matrix");
    expect(contents(result.current.lines)).toContain("  ▶ ENTERING THE MATRIX...");

    await act(() => {
      vi.advanceTimersByTime(MATRIX_FRAME_MS * 3);
    });
    const linesWhileRaining = result.current.lines.length;
    expect(linesWhileRaining).toBe(6);

    await act(() => {
      vi.advanceTimersByTime(MATRIX_TOTAL_MS);
    });
    expect(result.current.mode).toBe("normal");
    expect(contents(result.current.lines)).toContain(
      "  You take the red pill... you wake up in your portfolio.",
    );

    const linesAfterRain = result.current.lines.length;
    await act(() => {
      vi.advanceTimersByTime(MATRIX_FRAME_MS * 3);
    });
    expect(result.current.lines).toHaveLength(linesAfterRain);
  });
});

describe("useSnakeGame", () => {
  function renderSnake(): {
    result: { current: ReturnType<typeof useTerminalOutput> & ReturnType<typeof useSnakeGame> };
    unmount: () => void;
  } {
    return renderHook(() => {
      const output = useTerminalOutput();
      const game = useSnakeGame(output.setLines, output.setMode);
      return { ...output, ...game };
    });
  }

  it("draws the board on start and redraws it in place on every tick", async () => {
    const { result } = renderSnake();
    await act(() => {
      result.current.start();
    });
    expect(result.current.mode).toBe("snake");
    const linesAfterStart = result.current.lines.length;
    expect(linesAfterStart).toBe(3 + SNAKE_BOARD_LINE_COUNT);

    await act(() => {
      vi.advanceTimersByTime(SNAKE_TICK_MS);
    });
    expect(result.current.lines).toHaveLength(linesAfterStart);
  });

  it("reports the score when the player quits", async () => {
    const { result } = renderSnake();
    await act(() => {
      result.current.start();
    });
    await act(() => {
      result.current.quit();
    });
    expect(result.current.mode).toBe("normal");
    expect(contents(result.current.lines)).toContain("  Quit. Final score: 0");
  });

  it("ends the game when the snake crashes", async () => {
    const { result } = renderSnake();
    await act(() => {
      result.current.start();
      result.current.steer("ArrowUp");
    });
    await act(() => {
      vi.advanceTimersByTime(SNAKE_TICK_MS * TICKS_TO_REACH_ANY_WALL);
    });
    expect(result.current.mode).toBe("normal");
    const gameOver = result.current.lines.find((line) => line.content.startsWith("  Game Over!"));
    expect(gameOver?.type).toBe("error");
    expect(contents(result.current.lines)).toContain('  Type "snake" to play again.');
  });

  it("stops ticking when unmounted mid game", async () => {
    const { result, unmount } = renderSnake();
    await act(() => {
      result.current.start();
    });
    unmount();
    expect(vi.getTimerCount()).toBe(0);
  });
});
