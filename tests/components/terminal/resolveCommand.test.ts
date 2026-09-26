import { describe, expect, it } from "vitest";
import { resolveCommand, type CommandOutcome } from "../../../src/components/terminal/resolveCommand";
import { COMMANDS, EASTER_EGGS } from "../../../src/components/terminal/terminalContent";
import type { TerminalLine } from "../../../src/components/terminal/terminalLines";

function printedLines(outcome: CommandOutcome): TerminalLine[] {
  if (outcome.kind !== "print") {
    throw new Error(`se esperaba una salida impresa y llegó ${outcome.kind}`);
  }
  return outcome.lines;
}

describe("resolveCommand", () => {
  it("clears the terminal", () => {
    expect(resolveCommand("clear", "clear")).toEqual({ kind: "clear" });
  });

  it("navigates to the site sections", () => {
    expect(resolveCommand("open projects", "open projects")).toEqual({ kind: "navigate", path: "/projects" });
    expect(resolveCommand("open home", "open home")).toEqual({ kind: "navigate", path: "/" });
  });

  it("starts the matrix rain and the snake game", () => {
    expect(resolveCommand("matrix", "matrix")).toEqual({ kind: "matrix" });
    expect(resolveCommand("snake", "snake")).toEqual({ kind: "snake" });
  });

  it("prints a regular command as output followed by a blank line", () => {
    const lines = printedLines(resolveCommand("help", "help"));
    const expectedTexts = COMMANDS.get("help")?.() ?? [];
    expect(lines).toHaveLength(expectedTexts.length + 1);
    expect(lines[0]).toEqual({ type: "output", content: "Available commands:" });
    expect(lines.at(-1)).toEqual({ type: "output", content: "" });
  });

  it("prints easter eggs", () => {
    const lines = printedLines(resolveCommand("sudo hire me", "sudo hire me"));
    expect(lines).toHaveLength((EASTER_EGGS.get("sudo hire me")?.() ?? []).length + 1);
    expect(lines.some((line) => line.content.includes("ACCESS GRANTED"))).toBe(true);
  });

  it("answers every hidden command with some text", () => {
    for (const command of EASTER_EGGS.keys()) {
      const lines = printedLines(resolveCommand(command, command));
      expect(lines.some((line) => line.content.trim() !== "")).toBe(true);
    }
  });

  it("draws cowsay with the original casing of the message", () => {
    const lines = printedLines(resolveCommand("cowsay hola mundo", "  cowsay Hola Mundo  "));
    expect(lines.every((line) => line.type === "ascii" || line.content === "")).toBe(true);
    expect(lines.some((line) => line.content === " │ Hola Mundo │")).toBe(true);
  });

  it("reports unknown commands as an error", () => {
    const lines = printedLines(resolveCommand("ls", "ls"));
    expect(lines[0]).toEqual({
      type: "error",
      content: 'command not found: ls. Type "help" for available commands.',
    });
  });
});
