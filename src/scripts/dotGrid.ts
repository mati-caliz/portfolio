const DOT_SPACING = 32;
const DOT_RADIUS = 1;
const INFLUENCE_RADIUS = 120;
const RADIUS_GROWTH = 2.5;
const BASE_ALPHA = 0.15;
const ALPHA_GROWTH = 0.6;
const INFLUENCE_THRESHOLD = 0.05;
const IDLE_ALPHA = 0.3;
const FULL_CIRCLE = Math.PI * 2;
const OFFSCREEN_POINTER = -1000;

interface Point {
  left: number;
  top: number;
}

interface DotPalette {
  accent: string;
  border: string;
}

export type DotGridCanvas = Pick<HTMLCanvasElement, "width" | "height" | "getBoundingClientRect">;

export type DotGridContext = Pick<
  CanvasRenderingContext2D,
  "scale" | "clearRect" | "beginPath" | "arc" | "fill" | "fillStyle" | "globalAlpha"
>;

function readColor(propertyName: string): string {
  return getComputedStyle(document.documentElement).getPropertyValue(propertyName).trim();
}

function withAlpha(color: string, alpha: number): string {
  return color.replace(")", `, ${alpha})`).replace("rgb", "rgba");
}

function devicePixelRatio(): number {
  return window.devicePixelRatio > 0 ? window.devicePixelRatio : 1;
}

class DotGridRenderer {
  private readonly pointer: Point = { left: OFFSCREEN_POINTER, top: OFFSCREEN_POINTER };

  constructor(
    private readonly canvas: DotGridCanvas,
    private readonly context: DotGridContext,
  ) {}

  resize(): void {
    const ratio = devicePixelRatio();
    const bounds = this.canvas.getBoundingClientRect();
    this.canvas.width = bounds.width * ratio;
    this.canvas.height = bounds.height * ratio;
    this.context.scale(ratio, ratio);
  }

  trackPointer(clientX: number, clientY: number): void {
    const bounds = this.canvas.getBoundingClientRect();
    this.pointer.left = clientX - bounds.left;
    this.pointer.top = clientY - bounds.top;
  }

  resetPointer(): void {
    this.pointer.left = OFFSCREEN_POINTER;
    this.pointer.top = OFFSCREEN_POINTER;
  }

  draw(): void {
    const bounds = this.canvas.getBoundingClientRect();
    this.context.clearRect(0, 0, bounds.width, bounds.height);
    const palette = { accent: readColor("--color-accent"), border: readColor("--color-border") };
    for (let left = DOT_SPACING; left < bounds.width; left += DOT_SPACING) {
      for (let top = DOT_SPACING; top < bounds.height; top += DOT_SPACING) {
        this.drawDot({ left, top }, palette);
      }
    }
  }

  private drawDot(dot: Point, palette: DotPalette): void {
    const horizontalDistance = this.pointer.left - dot.left;
    const verticalDistance = this.pointer.top - dot.top;
    const distance = Math.sqrt(horizontalDistance * horizontalDistance + verticalDistance * verticalDistance);
    const influence = Math.max(0, 1 - distance / INFLUENCE_RADIUS);
    const radius = DOT_RADIUS + influence * RADIUS_GROWTH;
    const alpha = BASE_ALPHA + influence * ALPHA_GROWTH;
    const isInfluenced = influence > INFLUENCE_THRESHOLD;

    this.context.beginPath();
    this.context.arc(dot.left, dot.top, radius, 0, FULL_CIRCLE);
    this.context.fillStyle = isInfluenced
      ? withAlpha(palette.accent, alpha)
      : withAlpha(palette.border, IDLE_ALPHA);

    const appliedFill = this.context.fillStyle;
    if (!(typeof appliedFill === "string" && appliedFill.includes("rgba"))) {
      this.context.globalAlpha = alpha;
      this.context.fillStyle = isInfluenced ? palette.accent : palette.border;
    }

    this.context.fill();
    this.context.globalAlpha = 1;
  }
}

export function startDotGrid(canvas: HTMLCanvasElement, hero: HTMLElement | null): void {
  const context = canvas.getContext("2d");
  if (context !== null) {
    animateDotGrid(canvas, context, hero);
  }
}

export function animateDotGrid(
  canvas: DotGridCanvas,
  context: DotGridContext,
  hero: HTMLElement | null,
): void {
  const renderer = new DotGridRenderer(canvas, context);
  let animationId = 0;

  function animate(): void {
    renderer.draw();
    animationId = requestAnimationFrame(animate);
  }

  renderer.resize();
  animate();

  hero?.addEventListener("mousemove", (event) => {
    renderer.trackPointer(event.clientX, event.clientY);
  });

  hero?.addEventListener("mouseleave", () => {
    renderer.resetPointer();
  });

  window.addEventListener(
    "resize",
    () => {
      renderer.resize();
    },
    { passive: true },
  );

  document.addEventListener("astro:before-swap", () => {
    cancelAnimationFrame(animationId);
  });
}
