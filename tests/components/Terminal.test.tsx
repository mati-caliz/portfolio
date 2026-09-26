import { fireEvent, render, screen } from "@testing-library/preact";
import { beforeEach, describe, expect, it, vi } from "vitest";
import Terminal from "../../src/components/Terminal";

function terminalInput(): HTMLInputElement {
  return screen.getByLabelText<HTMLInputElement>("Terminal input");
}

function runCommand(command: string): void {
  fireEvent.input(terminalInput(), { target: { value: command } });
  fireEvent.keyDown(terminalInput(), { key: "Enter" });
}

beforeEach(() => {
  vi.useFakeTimers();
});

describe("Terminal", () => {
  it("shows the welcome message and a prompt", () => {
    render(<Terminal />);
    expect(screen.getByText('Welcome. Type "help" to see available commands.')).toBeTruthy();
    expect(terminalInput().value).toBe("");
  });

  it("prints the output of a typed command", () => {
    render(<Terminal />);
    runCommand("whoami");
    expect(screen.getByText("~ whoami")).toBeTruthy();
    expect(screen.getByText("You are a curious visitor with good taste")).toBeTruthy();
  });

  it("styles errors apart from regular output", () => {
    render(<Terminal />);
    runCommand("ls");
    const error = screen.getByText('command not found: ls. Type "help" for available commands.');
    expect(error.className).toContain("text-red-400");
  });

  it("focuses the prompt when the window is clicked", () => {
    const { container } = render(<Terminal />);
    const frame = container.firstElementChild;
    if (frame !== null) {
      fireEvent.click(frame);
    }
    expect(document.activeElement).toBe(terminalInput());
  });

  it("swaps the prompt for the game hint while playing snake", () => {
    render(<Terminal />);
    runCommand("snake");
    const hint = screen.getByText("Playing Snake...");
    expect(screen.queryByLabelText("Terminal input")).toBeNull();
    expect(document.activeElement).toBe(hint);

    fireEvent.keyDown(hint, { key: "q" });
    expect(screen.queryByText("Playing Snake...")).toBeNull();
    expect(terminalInput()).toBeTruthy();
  });

  it("shows the decoding message while the matrix rains", () => {
    render(<Terminal />);
    runCommand("matrix");
    expect(screen.getByText("Decoding the Matrix...")).toBeTruthy();
    expect(screen.queryByLabelText("Terminal input")).toBeNull();
  });
});
