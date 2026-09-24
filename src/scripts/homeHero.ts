import { startDotGrid } from "./dotGrid";
import { startRoleTyping } from "./roleTyping";

const ORB_CENTER_OFFSET = 0.5;
const ORB_PARALLAX_RANGE_PX = 50;

function orbOffset(pointerPosition: number, viewportSize: number): number {
  return (pointerPosition / viewportSize - ORB_CENTER_OFFSET) * ORB_PARALLAX_RANGE_PX;
}

function startOrbParallax(orb: HTMLElement): void {
  document.addEventListener("mousemove", (event) => {
    const horizontalOffset = orbOffset(event.clientX, window.innerWidth);
    const verticalOffset = orbOffset(event.clientY, window.innerHeight);
    orb.style.setProperty(
      "transform",
      `translate(calc(-50% + ${horizontalOffset}px), calc(-50% + ${verticalOffset}px))`,
    );
  });
}

startRoleTyping();

const canvas = document.getElementById("hero-canvas");
if (canvas instanceof HTMLCanvasElement) {
  startDotGrid(canvas, document.getElementById("hero"));
}

const orb = document.getElementById("hero-orb");
if (orb !== null) {
  startOrbParallax(orb);
}
