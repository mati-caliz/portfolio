import { describe, expect, it } from "vitest";
import {
  commandLabel,
  filterCommandItems,
  groupByCategory,
  isSpanish,
  wrapIndex,
} from "../../../src/components/commandPalette/commandSearch";
import type { CommandItem } from "../../../src/data/commandPaletteItems";

const HOME: CommandItem = {
  id: "page-home",
  label: "Home",
  label_es: "Inicio",
  category: "page",
  keywords: ["main"],
};
const THEME: CommandItem = {
  id: "action-theme",
  label: "Toggle theme",
  label_es: "Cambiar tema",
  category: "action",
  keywords: ["dark mode"],
};
const PROJECT: CommandItem = { id: "project-atlas", label: "Atlas", label_es: "Atlas", category: "project" };
const HOMEBREW: CommandItem = {
  id: "project-homebrew",
  label: "My Homebrew",
  label_es: "Mi Homebrew",
  category: "project",
};

const ITEMS = [PROJECT, THEME, HOMEBREW, HOME];

describe("language helpers", () => {
  it("detects spanish and picks the matching label", () => {
    expect(isSpanish("es")).toBe(true);
    expect(isSpanish("en")).toBe(false);
    expect(commandLabel(HOME, "es")).toBe("Inicio");
    expect(commandLabel(HOME, "en")).toBe("Home");
  });
});

describe("filterCommandItems", () => {
  it("keeps every item in its original order for an empty query", () => {
    expect(filterCommandItems(ITEMS, "", "en")).toEqual(ITEMS);
  });

  it("ranks a label prefix above a match inside the label", () => {
    expect(filterCommandItems(ITEMS, "HOM", "en")).toEqual([HOME, HOMEBREW]);
  });

  it("matches keywords when the label does not", () => {
    expect(filterCommandItems(ITEMS, "main", "en")).toEqual([HOME]);
  });

  it("matches when every word appears somewhere in label or keywords", () => {
    expect(filterCommandItems(ITEMS, "toggle mode", "en")).toEqual([THEME]);
  });

  it("searches the spanish labels when the page is in spanish", () => {
    expect(filterCommandItems(ITEMS, "inicio", "es")).toEqual([HOME]);
    expect(filterCommandItems(ITEMS, "inicio", "en")).toEqual([]);
  });

  it("drops items that do not match", () => {
    expect(filterCommandItems(ITEMS, "zzz", "en")).toEqual([]);
  });
});

describe("groupByCategory", () => {
  it("groups pages, then actions, then projects, with running indexes", () => {
    expect(groupByCategory(ITEMS)).toEqual([
      { category: "page", items: [HOME], firstIndex: 0 },
      { category: "action", items: [THEME], firstIndex: 1 },
      { category: "project", items: [PROJECT, HOMEBREW], firstIndex: 2 },
    ]);
  });

  it("omits empty categories", () => {
    expect(groupByCategory([PROJECT])).toEqual([{ category: "project", items: [PROJECT], firstIndex: 0 }]);
    expect(groupByCategory([])).toEqual([]);
  });
});

describe("wrapIndex", () => {
  it("wraps around both ends of the list", () => {
    expect(wrapIndex(3, 3)).toBe(0);
    expect(wrapIndex(-1, 3)).toBe(2);
    expect(wrapIndex(1, 3)).toBe(1);
  });

  it("stays at zero for an empty list", () => {
    expect(wrapIndex(1, 0)).toBe(0);
    expect(wrapIndex(-1, 0)).toBe(0);
  });
});
