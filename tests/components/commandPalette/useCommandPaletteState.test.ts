import { act, fireEvent, renderHook } from "@testing-library/preact";
import { beforeEach, describe, expect, it, vi } from "vitest";
import {
  useCommandPaletteState,
  type CommandPaletteState,
} from "../../../src/components/commandPalette/useCommandPaletteState";
import { commandItems, type CommandItem } from "../../../src/data/commandPaletteItems";
import { navigateTo } from "../../../src/lib/navigation";

vi.mock("../../../src/lib/navigation", () => ({ navigateTo: vi.fn() }));

interface PaletteResult {
  current: CommandPaletteState;
}

function renderPalette(): PaletteResult {
  return renderHook(() => useCommandPaletteState()).result;
}

function pressShortcut(options: KeyboardEventInit = { ctrlKey: true }): void {
  fireEvent.keyDown(window, { key: "k", ...options });
}

async function press(palette: PaletteResult, key: string): Promise<KeyboardEvent> {
  const event = new KeyboardEvent("keydown", { key, cancelable: true });
  await act(() => {
    palette.current.handleKeyDown(event);
  });
  return event;
}

async function typeQuery(palette: PaletteResult, query: string): Promise<void> {
  await act(() => {
    palette.current.setQuery(query);
  });
}

function findItem(id: string): CommandItem {
  const item = commandItems.find((candidate) => candidate.id === id);
  if (item === undefined) {
    throw new Error(`no existe el comando ${id}`);
  }
  return item;
}

beforeEach(() => {
  vi.useFakeTimers();
});

describe("useCommandPaletteState", () => {
  it("opens and closes with ctrl+K or cmd+K", () => {
    const palette = renderPalette();
    expect(palette.current.isOpen).toBe(false);
    pressShortcut();
    expect(palette.current.isOpen).toBe(true);
    pressShortcut({ metaKey: true });
    expect(palette.current.isOpen).toBe(false);
  });

  it("ignores K without a modifier", () => {
    const palette = renderPalette();
    pressShortcut({});
    expect(palette.current.isOpen).toBe(false);
  });

  it("starts with every command grouped and a fresh query each time it opens", async () => {
    const palette = renderPalette();
    pressShortcut();
    await typeQuery(palette, "atlas");
    pressShortcut();
    pressShortcut();
    expect(palette.current.query).toBe("");
    expect(palette.current.resultCount).toBe(commandItems.length);
    expect(palette.current.groups.map((group) => group.category)).toEqual(["page", "action", "project"]);
  });

  it("follows the document language", async () => {
    document.documentElement.setAttribute("data-lang", "es");
    const palette = renderPalette();
    expect(palette.current.lang).toBe("es");
    document.documentElement.setAttribute("data-lang", "en");
    await act(() => {
      window.dispatchEvent(new Event("langchange"));
    });
    expect(palette.current.lang).toBe("en");
  });

  it("filters the results as the query changes and resets the selection", async () => {
    const palette = renderPalette();
    pressShortcut();
    await press(palette, "ArrowDown");
    expect(palette.current.selectedIndex).toBe(1);
    await typeQuery(palette, "experience");
    expect(palette.current.selectedIndex).toBe(0);
    expect(palette.current.groups[0]?.items[0]?.id).toBe("page-experience");
  });

  it("moves the selection with the arrows, wrapping at both ends", async () => {
    const palette = renderPalette();
    pressShortcut();
    const upEvent = await press(palette, "ArrowUp");
    expect(upEvent.defaultPrevented).toBe(true);
    expect(palette.current.selectedIndex).toBe(commandItems.length - 1);
    await press(palette, "ArrowDown");
    expect(palette.current.selectedIndex).toBe(0);
  });

  it("closes with Escape and with close()", async () => {
    const palette = renderPalette();
    pressShortcut();
    await press(palette, "Escape");
    expect(palette.current.isOpen).toBe(false);
    pressShortcut();
    await act(() => {
      palette.current.close();
    });
    expect(palette.current.isOpen).toBe(false);
  });

  it("navigates to the selected page with Enter", async () => {
    const palette = renderPalette();
    pressShortcut();
    await typeQuery(palette, "projects");
    const event = await press(palette, "Enter");
    expect(event.defaultPrevented).toBe(true);
    expect(navigateTo).toHaveBeenCalledWith("/projects");
    expect(palette.current.isOpen).toBe(false);
    expect(palette.current.query).toBe("");
  });

  it("does nothing on Enter when there are no results", async () => {
    const palette = renderPalette();
    pressShortcut();
    await typeQuery(palette, "zzzz");
    const event = await press(palette, "Enter");
    expect(event.defaultPrevented).toBe(false);
    expect(palette.current.isOpen).toBe(true);
    expect(navigateTo).not.toHaveBeenCalled();
  });

  it("runs actions by clicking their toggle button", async () => {
    const themeButton = document.createElement("button");
    themeButton.id = "theme-toggle";
    const onThemeClick = vi.fn();
    themeButton.addEventListener("click", onThemeClick);
    document.body.append(themeButton);

    const palette = renderPalette();
    await act(() => {
      palette.current.executeItem(findItem("action-theme"));
    });
    expect(onThemeClick).toHaveBeenCalledOnce();
    expect(navigateTo).not.toHaveBeenCalled();
  });

  it("ignores actions without a toggle button on the page", async () => {
    const palette = renderPalette();
    await act(() => {
      palette.current.executeItem(findItem("action-lang"));
      palette.current.executeItem({
        id: "unknown",
        label: "?",
        label_es: "?",
        category: "action",
        action: "nope",
      });
      palette.current.executeItem({ id: "empty", label: "?", label_es: "?", category: "action" });
    });
    expect(navigateTo).not.toHaveBeenCalled();
  });
});
