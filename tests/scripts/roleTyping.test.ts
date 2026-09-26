import { beforeEach, describe, expect, it, vi } from "vitest";
import { startRoleTyping } from "../../src/scripts/roleTyping";

const INITIAL_DELAY_MS = 800;
const KEYSTROKE_WITHOUT_JITTER_MS = 60;
const PAUSE_BEFORE_DELETING_MS = 2000;
const DELETING_DELAY_MS = 30;
const PAUSE_BEFORE_NEXT_ROLE_MS = 400;
const FIRST_ROLE_EN = "Full Stack Engineer.";
const SECOND_ROLE_EN = "Product Builder.";
const FIRST_ROLE_ES = "Ingeniero Full Stack.";

function mountRoleElement(): HTMLElement {
  const element = document.createElement("span");
  element.id = "role-text";
  document.body.append(element);
  return element;
}

function finishTyping(role: string): void {
  vi.advanceTimersByTime((role.length - 1) * KEYSTROKE_WITHOUT_JITTER_MS);
}

beforeEach(() => {
  vi.useFakeTimers();
  vi.spyOn(crypto, "getRandomValues").mockImplementation((array) => array);
});

describe("startRoleTyping", () => {
  it("does nothing when the hero has no role element", () => {
    startRoleTyping();
    expect(vi.getTimerCount()).toBe(0);
  });

  it("types the first role after the initial delay", () => {
    const element = mountRoleElement();
    startRoleTyping();
    expect(element.textContent).toBe("");
    vi.advanceTimersByTime(INITIAL_DELAY_MS);
    expect(element.textContent).toBe("F");
    finishTyping(FIRST_ROLE_EN);
    expect(element.textContent).toBe(FIRST_ROLE_EN);
  });

  it("deletes the role after a pause and moves on to the next one", () => {
    const element = mountRoleElement();
    startRoleTyping();
    vi.advanceTimersByTime(INITIAL_DELAY_MS);
    finishTyping(FIRST_ROLE_EN);
    vi.advanceTimersByTime(PAUSE_BEFORE_DELETING_MS);
    expect(element.textContent).toBe(FIRST_ROLE_EN.slice(0, -1));
    vi.advanceTimersByTime((FIRST_ROLE_EN.length - 1) * DELETING_DELAY_MS);
    expect(element.textContent).toBe("");
    vi.advanceTimersByTime(PAUSE_BEFORE_NEXT_ROLE_MS);
    expect(element.textContent).toBe("P");
    finishTyping(SECOND_ROLE_EN);
    expect(element.textContent).toBe(SECOND_ROLE_EN);
  });

  it("restarts in the new language when the page language changes", () => {
    const element = mountRoleElement();
    startRoleTyping();
    vi.advanceTimersByTime(INITIAL_DELAY_MS);
    finishTyping(FIRST_ROLE_EN);

    document.documentElement.setAttribute("data-lang", "es");
    window.dispatchEvent(new Event("langchange"));
    expect(element.textContent).toBe("I");
    finishTyping(FIRST_ROLE_ES);
    expect(element.textContent).toBe(FIRST_ROLE_ES);
    vi.advanceTimersByTime(PAUSE_BEFORE_DELETING_MS - 1);
    expect(element.textContent).toBe(FIRST_ROLE_ES);
  });

  it("restarts cleanly even before anything was typed", () => {
    const element = mountRoleElement();
    startRoleTyping();
    window.dispatchEvent(new Event("langchange"));
    expect(element.textContent).toBe("F");
  });
});
