import { describe, expect, it, vi } from "vitest";
import {
  MATRIX_DURATION_MS,
  MATRIX_INTERVAL_MS,
  randomMatrixLine,
} from "../../../src/components/terminal/matrixRain";
import { COMMANDS, NAVIGATION, cowsay } from "../../../src/components/terminal/terminalContent";
import { asAscii, asOutput, lineClass } from "../../../src/components/terminal/terminalLines";

describe("cowsay", () => {
  it("frames the message with a border as wide as the text", () => {
    const [, top, message, bottom] = cowsay("hola");
    expect(top).toBe(" ┌──────┐");
    expect(message).toBe(" │ hola │");
    expect(bottom).toBe(" └──────┘");
  });

  it("says moo when there is nothing to say", () => {
    expect(cowsay("")).toContain(" │ moo │");
  });
});

describe("terminal content", () => {
  it("lists in help every command it offers", () => {
    const helpText = (COMMANDS.get("help")?.() ?? []).join("\n");
    for (const command of COMMANDS.keys()) {
      expect(helpText).toContain(`  ${command}`);
    }
  });

  it("gives every command some output", () => {
    for (const handler of COMMANDS.values()) {
      expect(handler().length).toBeGreaterThan(0);
    }
  });

  it("navigates only to site paths", () => {
    for (const path of NAVIGATION.values()) {
      expect(path.startsWith("/")).toBe(true);
    }
  });
});

describe("terminal lines", () => {
  it("wraps plain texts as typed lines", () => {
    expect(asOutput(["a", "b"])).toEqual([
      { type: "output", content: "a" },
      { type: "output", content: "b" },
    ]);
    expect(asAscii(["x"])).toEqual([{ type: "ascii", content: "x" }]);
  });

  it("styles each line type differently", () => {
    const classes = new Set(
      (["input", "output", "error", "ascii"] as const).map((lineType) => lineClass(lineType)),
    );
    expect(classes.size).toBe(4);
    expect(lineClass("error")).toBe("text-red-400");
  });
});

describe("randomMatrixLine", () => {
  it("builds a fixed-width line", () => {
    expect(Array.from(randomMatrixLine())).toHaveLength(44);
  });

  it("leaves blanks when the draw goes over the density", () => {
    vi.spyOn(crypto, "getRandomValues").mockImplementation((array) => {
      if (array instanceof Uint32Array) {
        array.set([2 ** 32 - 1]);
      }
      return array;
    });
    expect(randomMatrixLine().trim()).toBe("");
  });

  it("runs for longer than a single frame", () => {
    expect(MATRIX_DURATION_MS).toBeGreaterThan(MATRIX_INTERVAL_MS);
  });
});
