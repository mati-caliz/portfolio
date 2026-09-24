const UINT32_RANGE = 2 ** 32;

export function randomFraction(): number {
  const [randomValue = 0] = crypto.getRandomValues(new Uint32Array(1));
  return randomValue / UINT32_RANGE;
}

export function randomInteger(exclusiveMaximum: number): number {
  return Math.floor(randomFraction() * exclusiveMaximum);
}
