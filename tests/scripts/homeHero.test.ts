import { beforeEach, describe, expect, it, vi } from "vitest";

vi.mock("../../src/scripts/dotGrid", () => ({ startDotGrid: vi.fn() }));
vi.mock("../../src/scripts/roleTyping", () => ({ startRoleTyping: vi.fn() }));

const VIEWPORT_WIDTH = 1000;
const VIEWPORT_HEIGHT = 800;

function mount(tag: string, id: string): HTMLElement {
  const element = document.createElement(tag);
  element.id = id;
  document.body.append(element);
  return element;
}

interface HeroStarters {
  startDotGrid: (canvas: HTMLCanvasElement, hero: HTMLElement | null) => void;
  startRoleTyping: () => void;
}

async function loadHomeHero(): Promise<HeroStarters> {
  vi.resetModules();
  await import("../../src/scripts/homeHero");
  const { startDotGrid } = await import("../../src/scripts/dotGrid");
  const { startRoleTyping } = await import("../../src/scripts/roleTyping");
  return { startDotGrid, startRoleTyping };
}

beforeEach(() => {
  vi.stubGlobal("innerWidth", VIEWPORT_WIDTH);
  vi.stubGlobal("innerHeight", VIEWPORT_HEIGHT);
});

describe("homeHero", () => {
  it("starts the role typing and the dot grid on the hero canvas", async () => {
    const hero = mount("section", "hero");
    const canvas = mount("canvas", "hero-canvas");
    const { startDotGrid, startRoleTyping } = await loadHomeHero();
    expect(startRoleTyping).toHaveBeenCalledOnce();
    expect(startDotGrid).toHaveBeenCalledWith(canvas, hero);
  });

  it("skips the dot grid when the hero canvas is not a canvas element", async () => {
    mount("div", "hero-canvas");
    const { startDotGrid } = await loadHomeHero();
    expect(startDotGrid).not.toHaveBeenCalled();
  });

  it("moves the orb against the pointer, centered on the viewport", async () => {
    const orb = mount("div", "hero-orb");
    await loadHomeHero();
    document.dispatchEvent(new MouseEvent("mousemove", { clientX: VIEWPORT_WIDTH, clientY: 0 }));
    expect(orb.style.getPropertyValue("transform")).toBe("translate(calc(-50% + 25px), calc(-50% + -25px))");
  });
});
