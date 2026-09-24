import { randomFraction, randomInteger } from "../../lib/random";

const MATRIX_CHARS =
  "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF";
const MATRIX_WIDTH = 44;
const MATRIX_CHARACTER_DENSITY = 0.7;

export const MATRIX_DURATION_MS = 5000;
export const MATRIX_INTERVAL_MS = 80;

function randomMatrixCharacter(): string {
  return randomFraction() < MATRIX_CHARACTER_DENSITY
    ? MATRIX_CHARS.charAt(randomInteger(MATRIX_CHARS.length))
    : " ";
}

export function randomMatrixLine(): string {
  let line = "";
  for (let i = 0; i < MATRIX_WIDTH; i++) {
    line += randomMatrixCharacter();
  }
  return line;
}
