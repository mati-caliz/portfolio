import { describe, expect, it, vi } from "vitest";
import { readDocumentLang } from "../../src/lib/documentLang";
import { navigateTo } from "../../src/lib/navigation";
import { randomFraction, randomInteger } from "../../src/lib/random";
import { hasText } from "../../src/lib/text";

describe("hasText", () => {
  it("rejects null, undefined and the empty string", () => {
    expect(hasText(null)).toBe(false);
    expect(hasText(undefined)).toBe(false);
    expect(hasText("")).toBe(false);
  });

  it("accepts any non-empty string, even whitespace", () => {
    expect(hasText("hola")).toBe(true);
    expect(hasText(" ")).toBe(true);
  });
});

describe("readDocumentLang", () => {
  it("defaults to english when the document has no language", () => {
    expect(readDocumentLang()).toBe("en");
  });

  it("returns the language declared on the root element", () => {
    document.documentElement.setAttribute("data-lang", "es");
    expect(readDocumentLang()).toBe("es");
  });

  it("falls back to english when the declared language is empty", () => {
    document.documentElement.setAttribute("data-lang", "");
    expect(readDocumentLang()).toBe("en");
  });
});

describe("random helpers", () => {
  it("maps the random 32-bit value to a fraction in [0, 1)", () => {
    vi.spyOn(crypto, "getRandomValues").mockImplementation((array) => {
      if (array instanceof Uint32Array) {
        array.set([2 ** 31]);
      }
      return array;
    });
    expect(randomFraction()).toBe(0.5);
    expect(randomInteger(10)).toBe(5);
  });

  it("always stays inside the requested range", () => {
    for (let i = 0; i < 50; i++) {
      const value = randomInteger(3);
      expect(value).toBeGreaterThanOrEqual(0);
      expect(value).toBeLessThan(3);
    }
  });
});

describe("navigateTo", () => {
  it("moves the browser to the given location", () => {
    navigateTo("#proyectos");
    expect(window.location.hash).toBe("#proyectos");
  });
});
