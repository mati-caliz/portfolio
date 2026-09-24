import { useCallback, useEffect, useRef } from "preact/hooks";
import { randomMatrixLine, MATRIX_DURATION_MS, MATRIX_INTERVAL_MS } from "./matrixRain";
import {
  SNAKE_BOARD_LINE_COUNT,
  SNAKE_INTERVAL_MS,
  createSnakeState,
  renderSnakeBoard,
  steerSnake,
  tickSnake,
  type SnakeState,
} from "./snake";
import { KONAMI_ASCII_LINES, KONAMI_OUTPUT_LINES, KONAMI_SEQUENCE } from "./terminalContent";
import { asAscii, asOutput, type TerminalLine } from "./terminalLines";

type IntervalHandle = ReturnType<typeof setInterval>;
type AppendLines = (update: (previous: TerminalLine[]) => TerminalLine[]) => void;
export type TerminalMode = "normal" | "matrix" | "snake";
type SetMode = (mode: TerminalMode) => void;

function stopInterval(handle: IntervalHandle | null): null {
  if (handle !== null) {
    clearInterval(handle);
  }
  return null;
}

export function useKonamiCode(setLines: AppendLines): void {
  useEffect(() => {
    let konamiIndex = 0;
    function onKeyDown(event: KeyboardEvent): void {
      if (event.key !== KONAMI_SEQUENCE[konamiIndex]) {
        konamiIndex = 0;
        return;
      }
      konamiIndex++;
      if (konamiIndex === KONAMI_SEQUENCE.length) {
        konamiIndex = 0;
        setLines((previous) => [
          ...previous,
          ...asAscii(KONAMI_ASCII_LINES),
          ...asOutput(KONAMI_OUTPUT_LINES),
        ]);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [setLines]);
}

export interface SnakeGame {
  start: () => void;
  quit: () => void;
  steer: (key: string) => void;
}

export function useSnakeGame(setLines: AppendLines, setMode: SetMode): SnakeGame {
  const snakeStateRef = useRef<SnakeState>(createSnakeState());
  const intervalRef = useRef<IntervalHandle | null>(null);

  useEffect(
    () => () => {
      intervalRef.current = stopInterval(intervalRef.current);
    },
    [],
  );

  const stop = useCallback(() => {
    intervalRef.current = stopInterval(intervalRef.current);
    setMode("normal");
  }, [setMode]);

  const tick = useCallback(() => {
    snakeStateRef.current = tickSnake(snakeStateRef.current);
    const state = snakeStateRef.current;
    if (state.gameOver) {
      stop();
      setLines((previous) => [
        ...previous,
        { type: "error", content: `  Game Over! Final score: ${state.score}` },
        ...asOutput(['  Type "snake" to play again.', ""]),
      ]);
      return;
    }
    setLines((previous) => [
      ...previous.slice(0, previous.length - SNAKE_BOARD_LINE_COUNT),
      ...asAscii(renderSnakeBoard(state)),
    ]);
  }, [setLines, stop]);

  const start = useCallback(() => {
    const state = createSnakeState();
    snakeStateRef.current = state;
    setMode("snake");
    setLines((previous) => [
      ...previous,
      ...asAscii(["", "  🐍 SNAKE GAME — WASD/Arrows to move, Q to quit", ""]),
      ...asAscii(renderSnakeBoard(state)),
    ]);
    intervalRef.current = setInterval(tick, SNAKE_INTERVAL_MS);
  }, [setLines, setMode, tick]);

  const quit = useCallback(() => {
    const { score } = snakeStateRef.current;
    stop();
    setLines((previous) => [...previous, ...asOutput([`  Quit. Final score: ${score}`, ""])]);
  }, [setLines, stop]);

  const steer = useCallback((key: string) => {
    snakeStateRef.current = steerSnake(snakeStateRef.current, key);
  }, []);

  return { start, quit, steer };
}

export function useMatrixRain(setLines: AppendLines, setMode: SetMode): () => void {
  const intervalRef = useRef<IntervalHandle | null>(null);

  useEffect(
    () => () => {
      intervalRef.current = stopInterval(intervalRef.current);
    },
    [],
  );

  return useCallback(() => {
    setMode("matrix");
    setLines((previous) => [...previous, ...asAscii(["", "  ▶ ENTERING THE MATRIX...", ""])]);

    intervalRef.current = setInterval(() => {
      setLines((previous) => [...previous, { type: "ascii", content: randomMatrixLine() }]);
    }, MATRIX_INTERVAL_MS);

    setTimeout(() => {
      intervalRef.current = stopInterval(intervalRef.current);
      setMode("normal");
      setLines((previous) => [
        ...previous,
        ...asOutput(["", "  You take the red pill... you wake up in your portfolio.", ""]),
      ]);
    }, MATRIX_DURATION_MS);
  }, [setLines, setMode]);
}
