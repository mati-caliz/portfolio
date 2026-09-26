import { act, fireEvent, render, screen } from "@testing-library/preact";
import { beforeEach, describe, expect, it, vi } from "vitest";
import CommandPalette from "../../src/components/CommandPalette";
import { CommandIcon } from "../../src/components/commandPalette/CommandIcon";
import { commandItems } from "../../src/data/commandPaletteItems";
import { navigateTo } from "../../src/lib/navigation";

vi.mock("../../src/lib/navigation", () => ({ navigateTo: vi.fn() }));

const FOCUS_DELAY_MS = 10;

function openPalette(): void {
  fireEvent.keyDown(window, { key: "k", ctrlKey: true });
}

function searchInput(): HTMLInputElement {
  const input = screen.getByRole("dialog").querySelector("input");
  if (input === null) {
    throw new Error("la paleta no tiene campo de búsqueda");
  }
  return input;
}

function optionButton(label: string): HTMLElement {
  const button = screen.getByText(label).closest("button");
  if (button === null) {
    throw new Error(`no hay opción para ${label}`);
  }
  return button;
}

beforeEach(() => {
  vi.useFakeTimers();
});

describe("CommandPalette", () => {
  it("renders nothing until opened", () => {
    const { container } = render(<CommandPalette />);
    expect(container.innerHTML).toBe("");
  });

  it("opens focused on the search box listing every command", async () => {
    render(<CommandPalette />);
    openPalette();
    await act(() => {
      vi.advanceTimersByTime(FOCUS_DELAY_MS);
    });
    expect(document.activeElement).toBe(searchInput());
    expect(searchInput().placeholder).toBe("Search pages, projects, actions...");
    expect(screen.getByText("Pages")).toBeTruthy();
    expect(screen.getByText(`${commandItems.length} results`)).toBeTruthy();
  });

  it("marks the first result as selected and follows the mouse", () => {
    render(<CommandPalette />);
    openPalette();
    expect(optionButton("Home").dataset["selected"]).toBe("true");
    expect(screen.getAllByText("Enter")).toHaveLength(1);

    fireEvent.mouseEnter(optionButton("About"));
    expect(optionButton("About").dataset["selected"]).toBe("true");
    expect(optionButton("Home").dataset["selected"]).toBe("false");
  });

  it("filters while typing and shows the empty state", () => {
    render(<CommandPalette />);
    openPalette();
    fireEvent.input(searchInput(), { target: { value: "atlas" } });
    expect(screen.getByText("Projects")).toBeTruthy();
    expect(screen.getAllByText("project").length).toBeGreaterThan(0);

    fireEvent.input(searchInput(), { target: { value: "zzzz" } });
    expect(screen.getByText("No results found")).toBeTruthy();
    expect(screen.getByText("0 results")).toBeTruthy();
  });

  it("speaks spanish when the page does", () => {
    document.documentElement.setAttribute("data-lang", "es");
    render(<CommandPalette />);
    openPalette();
    expect(searchInput().placeholder).toBe("Buscar paginas, proyectos, acciones...");
    expect(screen.getByText("Paginas")).toBeTruthy();
    expect(screen.getByText("Inicio")).toBeTruthy();
    expect(screen.getByText("navegar")).toBeTruthy();
    expect(screen.getByText("seleccionar")).toBeTruthy();
    expect(screen.getAllByText("proyecto").length).toBeGreaterThan(0);

    fireEvent.input(searchInput(), { target: { value: "zzzz" } });
    expect(screen.getByText("Sin resultados")).toBeTruthy();
    expect(screen.getByText("0 resultados")).toBeTruthy();
  });

  it("navigates when a result is clicked or chosen with the keyboard", () => {
    render(<CommandPalette />);
    openPalette();
    fireEvent.click(optionButton("Experience"));
    expect(navigateTo).toHaveBeenCalledWith("/experience");
    expect(screen.queryByRole("dialog")).toBeNull();

    openPalette();
    fireEvent.keyDown(searchInput(), { key: "ArrowDown" });
    fireEvent.keyDown(searchInput(), { key: "Enter" });
    expect(navigateTo).toHaveBeenLastCalledWith("/projects");
  });

  it("closes when clicking the backdrop but not inside the dialog", () => {
    const { container } = render(<CommandPalette />);
    openPalette();
    fireEvent.click(screen.getByRole("dialog"));
    expect(screen.queryByRole("dialog")).not.toBeNull();

    const overlay = container.firstElementChild;
    if (overlay !== null) {
      fireEvent.click(overlay);
    }
    expect(screen.queryByRole("dialog")).toBeNull();
  });
});

describe("CommandIcon", () => {
  function iconPath(name: string): string | null {
    const { container } = render(<CommandIcon name={name} />);
    return container.querySelector("path")?.getAttribute("d") ?? null;
  }

  it("falls back to the code icon for unknown names", () => {
    expect(iconPath("desconocido")).toBe(iconPath("code"));
    expect(iconPath("home")).not.toBe(iconPath("code"));
  });
});
