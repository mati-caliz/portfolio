import { beforeEach, describe, expect, it, vi } from "vitest";
import {
  animateDotGrid,
  startDotGrid,
  type DotGridCanvas,
  type DotGridContext,
} from "../../src/scripts/dotGrid";

const CANVAS_SIZE = 100;
const DOTS_PER_FRAME = 9;
const PIXEL_RATIO = 2;
const ANIMATION_FRAME_ID = 7;

interface RecordingContext extends DotGridContext {
  fills: { style: string; alpha: number }[];
}

function canvasBounds(): DOMRect {
  return {
    x: 0,
    y: 0,
    left: 0,
    top: 0,
    width: CANVAS_SIZE,
    height: CANVAS_SIZE,
    right: CANVAS_SIZE,
    bottom: CANVAS_SIZE,
    toJSON: () => ({}),
  };
}

function fakeCanvas(): DotGridCanvas {
  return { width: 0, height: 0, getBoundingClientRect: canvasBounds };
}

function recordingContext(): RecordingContext {
  const context: RecordingContext = {
    fills: [],
    fillStyle: "",
    globalAlpha: 1,
    scale: vi.fn(),
    clearRect: vi.fn(),
    beginPath: vi.fn(),
    arc: vi.fn(),
    fill: () => {
      const style = typeof context.fillStyle === "string" ? context.fillStyle : "";
      context.fills.push({ style, alpha: context.globalAlpha });
    },
  };
  return context;
}

function setThemeColors(accent: string, border: string): void {
  document.documentElement.style.setProperty("--color-accent", accent);
  document.documentElement.style.setProperty("--color-border", border);
}

let pendingFrame: FrameRequestCallback | null = null;

function renderNextFrame(): void {
  const frame = pendingFrame;
  pendingFrame = null;
  frame?.(0);
}

beforeEach(() => {
  pendingFrame = null;
  vi.stubGlobal("requestAnimationFrame", (callback: FrameRequestCallback) => {
    pendingFrame = callback;
    return ANIMATION_FRAME_ID;
  });
  vi.stubGlobal("cancelAnimationFrame", vi.fn());
  setThemeColors("rgb(1, 2, 3)", "rgb(4, 5, 6)");
});

describe("animateDotGrid", () => {
  it("sizes the canvas for the device pixel ratio", () => {
    vi.stubGlobal("devicePixelRatio", PIXEL_RATIO);
    const canvas = fakeCanvas();
    const context = recordingContext();
    animateDotGrid(canvas, context, null);
    expect(canvas.width).toBe(CANVAS_SIZE * PIXEL_RATIO);
    expect(context.scale).toHaveBeenCalledWith(PIXEL_RATIO, PIXEL_RATIO);

    vi.stubGlobal("devicePixelRatio", 0);
    window.dispatchEvent(new Event("resize"));
    expect(canvas.height).toBe(CANVAS_SIZE);
  });

  it("draws a faint grid of border-colored dots while the pointer is away", () => {
    const context = recordingContext();
    animateDotGrid(fakeCanvas(), context, null);
    expect(context.fills).toHaveLength(DOTS_PER_FRAME);
    expect(context.fills.every((fill) => fill.style === "rgba(4, 5, 6, 0.3)")).toBe(true);
    expect(context.clearRect).toHaveBeenCalledWith(0, 0, CANVAS_SIZE, CANVAS_SIZE);
  });

  it("highlights the dots near the pointer with the accent color", () => {
    const hero = document.createElement("section");
    const context = recordingContext();
    animateDotGrid(fakeCanvas(), context, hero);

    hero.dispatchEvent(new MouseEvent("mousemove", { clientX: 32, clientY: 32 }));
    context.fills = [];
    renderNextFrame();
    expect(context.fills[0]?.style).toBe("rgba(1, 2, 3, 0.75)");
    expect(context.arc).toHaveBeenCalledWith(32, 32, 3.5, 0, Math.PI * 2);

    hero.dispatchEvent(new MouseEvent("mouseleave"));
    context.fills = [];
    renderNextFrame();
    expect(context.fills.every((fill) => fill.style.startsWith("rgba(4, 5, 6"))).toBe(true);
  });

  it("falls back to global alpha when the theme colors are not rgb", () => {
    setThemeColors("", "");
    const context = recordingContext();
    animateDotGrid(fakeCanvas(), context, null);
    expect(context.fills[0]).toEqual({ style: "", alpha: 0.15 });
  });

  it("stops animating when Astro swaps the page", () => {
    animateDotGrid(fakeCanvas(), recordingContext(), null);
    document.dispatchEvent(new Event("astro:before-swap"));
    expect(cancelAnimationFrame).toHaveBeenCalledWith(ANIMATION_FRAME_ID);
  });
});

describe("startDotGrid", () => {
  it("does nothing when the browser cannot give a 2D context", () => {
    const canvas = document.createElement("canvas");
    vi.spyOn(canvas, "getContext").mockReturnValue(null);
    startDotGrid(canvas, null);
    expect(pendingFrame).toBeNull();
  });
});
