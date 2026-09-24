import { randomInteger } from "../../lib/random";

export type Position = [column: number, row: number];
type SnakeBody = [Position, ...Position[]];

export interface SnakeState {
  snake: SnakeBody;
  food: Position;
  direction: Position;
  score: number;
  gameOver: boolean;
}

export const SNAKE_INTERVAL_MS = 200;
const SNAKE_WIDTH = 20;
const SNAKE_HEIGHT = 10;
const BOARD_FRAME_LINES = 3;
export const SNAKE_BOARD_LINE_COUNT = SNAKE_HEIGHT + BOARD_FRAME_LINES;

const INITIAL_SNAKE: SnakeBody = [
  [10, 5],
  [9, 5],
  [8, 5],
];
const INITIAL_DIRECTION: Position = [1, 0];

const UP: Position = [0, -1];
const DOWN: Position = [0, 1];
const LEFT: Position = [-1, 0];
const RIGHT: Position = [1, 0];

const DIRECTIONS_BY_KEY = new Map<string, Position>([
  ["ArrowUp", UP],
  ["w", UP],
  ["W", UP],
  ["ArrowDown", DOWN],
  ["s", DOWN],
  ["S", DOWN],
  ["ArrowLeft", LEFT],
  ["a", LEFT],
  ["A", LEFT],
  ["ArrowRight", RIGHT],
  ["d", RIGHT],
  ["D", RIGHT],
]);

const HEAD_CELL = "██";
const BODY_CELL = "▓▓";
const FOOD_CELL = "◆◆";
const EMPTY_CELL = "  ";

function samePosition(first: Position, second: Position): boolean {
  return first[0] === second[0] && first[1] === second[1];
}

function occupies(snake: Position[], position: Position): boolean {
  return snake.some((segment) => samePosition(segment, position));
}

function spawnFood(snake: Position[]): Position {
  let position: Position;
  do {
    position = [randomInteger(SNAKE_WIDTH), randomInteger(SNAKE_HEIGHT)];
  } while (occupies(snake, position));
  return position;
}

function isOutsideBoard([column, row]: Position): boolean {
  return column < 0 || column >= SNAKE_WIDTH || row < 0 || row >= SNAKE_HEIGHT;
}

export function createSnakeState(): SnakeState {
  const snake: SnakeBody = [...INITIAL_SNAKE];
  return {
    snake,
    food: spawnFood(snake),
    direction: INITIAL_DIRECTION,
    score: 0,
    gameOver: false,
  };
}

export function tickSnake(state: SnakeState): SnakeState {
  if (state.gameOver) {
    return state;
  }
  const [head] = state.snake;
  const nextHead: Position = [head[0] + state.direction[0], head[1] + state.direction[1]];

  if (isOutsideBoard(nextHead) || occupies(state.snake, nextHead)) {
    return { ...state, gameOver: true };
  }

  const nextSnake: SnakeBody = [nextHead, ...state.snake];
  if (samePosition(nextHead, state.food)) {
    return { ...state, snake: nextSnake, food: spawnFood(nextSnake), score: state.score + 1 };
  }
  nextSnake.pop();
  return { ...state, snake: nextSnake };
}

export function steerSnake(state: SnakeState, key: string): SnakeState {
  const nextDirection = DIRECTIONS_BY_KEY.get(key);
  if (nextDirection === undefined) {
    return state;
  }
  const [currentColumn, currentRow] = state.direction;
  const reversesDirection = nextDirection[0] === -currentColumn && nextDirection[1] === -currentRow;
  return reversesDirection ? state : { ...state, direction: nextDirection };
}

function cellAt(state: SnakeState, position: Position): string {
  if (samePosition(state.snake[0], position)) {
    return HEAD_CELL;
  }
  if (occupies(state.snake, position)) {
    return BODY_CELL;
  }
  return samePosition(state.food, position) ? FOOD_CELL : EMPTY_CELL;
}

export function renderSnakeBoard(state: SnakeState): string[] {
  const horizontalEdge = "──".repeat(SNAKE_WIDTH);
  const lines = [`┌${horizontalEdge}┐`];
  for (let row = 0; row < SNAKE_HEIGHT; row++) {
    let rowText = "│";
    for (let column = 0; column < SNAKE_WIDTH; column++) {
      rowText += cellAt(state, [column, row]);
    }
    lines.push(`${rowText}│`);
  }
  lines.push(`└${horizontalEdge}┘`);
  lines.push(`  Score: ${state.score}  |  WASD/Arrows to move  |  Q to quit`);
  return lines;
}
