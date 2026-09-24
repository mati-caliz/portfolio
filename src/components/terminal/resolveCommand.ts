import { COMMANDS, EASTER_EGGS, NAVIGATION, cowsay } from "./terminalContent";
import { asAscii, asOutput, type TerminalLine } from "./terminalLines";

const COWSAY_COMMAND = "cowsay";
const COWSAY_ARGUMENT_OFFSET = COWSAY_COMMAND.length + 1;

export type CommandOutcome =
  | { kind: "clear" }
  | { kind: "navigate"; path: string }
  | { kind: "matrix" }
  | { kind: "snake" }
  | { kind: "print"; lines: TerminalLine[] };

const BLANK_LINE: TerminalLine = { type: "output", content: "" };

function printLines(lines: TerminalLine[]): CommandOutcome {
  return { kind: "print", lines: [...lines, BLANK_LINE] };
}

function resolvePrintedCommand(command: string, rawInput: string): CommandOutcome {
  if (command.startsWith(COWSAY_COMMAND)) {
    return printLines(asAscii(cowsay(rawInput.trim().slice(COWSAY_ARGUMENT_OFFSET).trim())));
  }
  const easterEgg = EASTER_EGGS.get(command);
  if (easterEgg !== undefined) {
    return printLines(asOutput(easterEgg()));
  }
  const handler = COMMANDS.get(command);
  if (handler !== undefined) {
    return printLines(asOutput(handler()));
  }
  return printLines([
    { type: "error", content: `command not found: ${command}. Type "help" for available commands.` },
  ]);
}

export function resolveCommand(command: string, rawInput: string): CommandOutcome {
  if (command === "clear") {
    return { kind: "clear" };
  }
  const path = NAVIGATION.get(command);
  if (path !== undefined) {
    return { kind: "navigate", path };
  }
  if (command === "matrix") {
    return { kind: "matrix" };
  }
  if (command === "snake") {
    return { kind: "snake" };
  }
  return resolvePrintedCommand(command, rawInput);
}
