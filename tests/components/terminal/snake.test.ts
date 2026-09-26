import { describe, expect, it } from "vitest";
import {
  SNAKE_BOARD_LINE_COUNT,
  createSnakeState,
  renderSnakeBoard,
  steerSnake,
  tickSnake,
  type SnakeState,
} from "../../../src/components/terminal/snake";

function stateWith(overrides: Partial<SnakeState>): SnakeState {
  return {
    snake: [
      [10, 5],
      [9, 5],
      [8, 5],
    ],
    food: [0, 0],
    direction: [1, 0],
    score: 0,
    gameOver: false,
    ...overrides,
  };
}

describe("createSnakeState", () => {
  it("starts moving right with no score and food off the snake", () => {
    const state = createSnakeState();
    expect(state.direction).toEqual([1, 0]);
    expect(state.score).toBe(0);
    expect(state.gameOver).toBe(false);
    expect(state.snake).toHaveLength(3);
    expect(state.snake).not.toContainEqual(state.food);
  });
});

describe("tickSnake", () => {
  it("moves the head one cell and drops the tail", () => {
    const next = tickSnake(stateWith({}));
    expect(next.snake).toEqual([
      [11, 5],
      [10, 5],
      [9, 5],
    ]);
    expect(next.score).toBe(0);
  });

  it("grows, scores and respawns the food when eating", () => {
    const next = tickSnake(stateWith({ food: [11, 5] }));
    expect(next.snake).toHaveLength(4);
    expect(next.score).toBe(1);
    expect(next.snake).not.toContainEqual(next.food);
  });

  it("ends the game when hitting a wall", () => {
    const next = tickSnake(stateWith({ snake: [[19, 5]] }));
    expect(next.gameOver).toBe(true);
  });

  it("ends the game when biting itself", () => {
    const next = tickSnake(
      stateWith({
        snake: [
          [5, 5],
          [5, 6],
          [6, 6],
          [6, 5],
        ],
        direction: [1, 0],
      }),
    );
    expect(next.gameOver).toBe(true);
  });

  it("leaves a finished game untouched", () => {
    const finished = stateWith({ gameOver: true });
    expect(tickSnake(finished)).toBe(finished);
  });
});

describe("steerSnake", () => {
  it("turns with arrows and WASD in both cases", () => {
    const state = stateWith({});
    expect(steerSnake(state, "ArrowUp").direction).toEqual([0, -1]);
    expect(steerSnake(state, "s").direction).toEqual([0, 1]);
    expect(steerSnake(state, "D").direction).toEqual([1, 0]);
  });

  it("ignores a turn that would reverse the snake onto itself", () => {
    const state = stateWith({});
    expect(steerSnake(state, "ArrowLeft")).toBe(state);
    expect(steerSnake(state, "a")).toBe(state);
  });

  it("ignores keys that are not directions", () => {
    const state = stateWith({});
    expect(steerSnake(state, "x")).toBe(state);
  });
});

describe("renderSnakeBoard", () => {
  it("draws the frame, the snake, the food and the score", () => {
    const lines = renderSnakeBoard(stateWith({ food: [0, 0], score: 7 }));
    expect(lines).toHaveLength(SNAKE_BOARD_LINE_COUNT);
    expect(lines[0]?.startsWith("┌")).toBe(true);
    expect(lines[1]?.startsWith("│◆◆")).toBe(true);
    const snakeRow = lines[6] ?? "";
    expect(snakeRow.indexOf("██")).toBeGreaterThan(snakeRow.indexOf("▓▓"));
    expect(lines.at(-1)).toContain("Score: 7");
  });
});
