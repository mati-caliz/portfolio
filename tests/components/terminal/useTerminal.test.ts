import { act, renderHook } from "@testing-library/preact";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { useTerminal, type TerminalState } from "../../../src/components/terminal/useTerminal";
import { navigateTo } from "../../../src/lib/navigation";

vi.mock("../../../src/lib/navigation", () => ({ navigateTo: vi.fn() }));

const NAVIGATION_DELAY_MS = 500;
const MATRIX_TOTAL_MS = 5000;

function keyEvent(key: string, options: KeyboardEventInit = {}): KeyboardEvent {
  return new KeyboardEvent("keydown", { key, cancelable: true, ...options });
}

function renderTerminal(): { current: TerminalState } {
  return renderHook(() => useTerminal()).result;
}

async function press(terminal: { current: TerminalState }, event: KeyboardEvent): Promise<KeyboardEvent> {
  await act(() => {
    terminal.current.handleKeyDown(event);
  });
  return event;
}

async function run(terminal: { current: TerminalState }, command: string): Promise<void> {
  await act(() => {
    terminal.current.setInput(command);
  });
  await press(terminal, keyEvent("Enter"));
}

function contents(terminal: { current: TerminalState }): string[] {
  return terminal.current.lines.map((line) => line.content);
}

beforeEach(() => {
  vi.useFakeTimers();
});

describe("useTerminal", () => {
  it("greets with the logo and the welcome message", () => {
    const terminal = renderTerminal();
    expect(terminal.current.lines[0]?.type).toBe("ascii");
    expect(contents(terminal)).toContain('Welcome. Type "help" to see available commands.');
    expect(terminal.current.mode).toBe("normal");
  });

  it("echoes the normalized command, prints its output and clears the input", async () => {
    const terminal = renderTerminal();
    await run(terminal, "  HELP ");
    expect(contents(terminal)).toContain("~ help");
    expect(contents(terminal)).toContain("Available commands:");
    expect(terminal.current.input).toBe("");
  });

  it("ignores an empty command", async () => {
    const terminal = renderTerminal();
    const before = terminal.current.lines;
    await run(terminal, "   ");
    expect(terminal.current.lines).toBe(before);
  });

  it("clears the screen with the clear command and with ctrl+L", async () => {
    const terminal = renderTerminal();
    await run(terminal, "clear");
    expect(terminal.current.lines).toEqual([]);

    await run(terminal, "about");
    const event = await press(terminal, keyEvent("l", { ctrlKey: true }));
    expect(event.defaultPrevented).toBe(true);
    expect(terminal.current.lines).toEqual([]);
  });

  it("announces navigation and leaves after a short delay", async () => {
    const terminal = renderTerminal();
    await run(terminal, "open about");
    expect(contents(terminal)).toContain("Navigating to /about...");
    expect(navigateTo).not.toHaveBeenCalled();
    await act(() => {
      vi.advanceTimersByTime(NAVIGATION_DELAY_MS);
    });
    expect(navigateTo).toHaveBeenCalledWith("/about");
  });

  it("browses previous commands with the arrow keys", async () => {
    const terminal = renderTerminal();
    await run(terminal, "help");
    await run(terminal, "about");

    const upEvent = await press(terminal, keyEvent("ArrowUp"));
    expect(upEvent.defaultPrevented).toBe(true);
    expect(terminal.current.input).toBe("about");
    await press(terminal, keyEvent("ArrowUp"));
    expect(terminal.current.input).toBe("help");
    await press(terminal, keyEvent("ArrowDown"));
    expect(terminal.current.input).toBe("about");
    await press(terminal, keyEvent("ArrowDown"));
    expect(terminal.current.input).toBe("");
    await press(terminal, keyEvent("ArrowDown"));
    expect(terminal.current.input).toBe("");
  });

  it("lets other keys through untouched", async () => {
    const terminal = renderTerminal();
    const event = await press(terminal, keyEvent("a"));
    expect(event.defaultPrevented).toBe(false);
  });

  it("blocks typing while the matrix rains", async () => {
    const terminal = renderTerminal();
    await run(terminal, "matrix");
    expect(terminal.current.mode).toBe("matrix");
    expect((await press(terminal, keyEvent("a"))).defaultPrevented).toBe(true);
    await act(() => {
      vi.advanceTimersByTime(MATRIX_TOTAL_MS);
    });
    expect(terminal.current.mode).toBe("normal");
  });

  it("routes keys to the snake game and quits with Q", async () => {
    const terminal = renderTerminal();
    await run(terminal, "snake");
    expect(terminal.current.mode).toBe("snake");
    expect((await press(terminal, keyEvent("w"))).defaultPrevented).toBe(true);
    await press(terminal, keyEvent("Q"));
    expect(terminal.current.mode).toBe("normal");
    expect(contents(terminal)).toContain("  Quit. Final score: 0");
  });

  it("also quits the snake game with a lowercase q", async () => {
    const terminal = renderTerminal();
    await run(terminal, "snake");
    await press(terminal, keyEvent("q"));
    expect(terminal.current.mode).toBe("normal");
  });
});
