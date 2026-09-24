export interface TerminalLine {
  type: "input" | "output" | "error" | "ascii";
  content: string;
}

export function asOutput(texts: string[]): TerminalLine[] {
  return texts.map((content) => ({ type: "output", content }));
}

export function asAscii(texts: string[]): TerminalLine[] {
  return texts.map((content) => ({ type: "ascii", content }));
}

const LINE_CLASSES: Record<TerminalLine["type"], string> = {
  input: "text-[var(--color-accent)]",
  error: "text-red-400",
  ascii: "text-[var(--color-accent)] opacity-70",
  output: "text-[var(--color-text-secondary)]",
};

export function lineClass(type: TerminalLine["type"]): string {
  return LINE_CLASSES[type];
}
