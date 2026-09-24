import { readDocumentLang } from "../lib/documentLang";
import { randomFraction } from "../lib/random";

const ROLES_EN = [
  "Full Stack Engineer.",
  "Product Builder.",
  "Security-Minded Developer.",
  "Fintech Enthusiast.",
];
const ROLES_ES = [
  "Ingeniero Full Stack.",
  "Constructor de Productos.",
  "Desarrollador Security-First.",
  "Entusiasta Fintech.",
];

const ROLE_ELEMENT_ID = "role-text";
const INITIAL_DELAY_MS = 800;
const TYPING_BASE_DELAY_MS = 60;
const TYPING_JITTER_MS = 40;
const PAUSE_BEFORE_DELETING_MS = 2000;
const DELETING_DELAY_MS = 30;
const PAUSE_BEFORE_NEXT_ROLE_MS = 400;

function currentRoles(): string[] {
  return readDocumentLang() === "es" ? ROLES_ES : ROLES_EN;
}

class RoleTypewriter {
  private roleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;
  private pauseTimer: ReturnType<typeof setTimeout> | null = null;

  constructor(private readonly element: HTMLElement) {}

  restart(): void {
    this.charIndex = 0;
    this.isDeleting = false;
    if (this.pauseTimer !== null) {
      clearTimeout(this.pauseTimer);
    }
    this.element.textContent = "";
    this.typeRole();
  }

  typeRole(): void {
    const roles = currentRoles();
    const role = roles[this.roleIndex] ?? "";
    if (this.isDeleting) {
      this.deleteBackward(roles.length, role);
    } else {
      this.typeForward(role);
    }
  }

  private scheduleNext(delay: number): void {
    setTimeout(() => {
      this.typeRole();
    }, delay);
  }

  private typeForward(role: string): void {
    this.element.textContent = role.slice(0, this.charIndex + 1);
    this.charIndex++;
    if (this.charIndex === role.length) {
      this.pauseTimer = setTimeout(() => {
        this.isDeleting = true;
        this.typeRole();
      }, PAUSE_BEFORE_DELETING_MS);
      return;
    }
    this.scheduleNext(TYPING_BASE_DELAY_MS + randomFraction() * TYPING_JITTER_MS);
  }

  private deleteBackward(roleCount: number, role: string): void {
    this.element.textContent = role.slice(0, this.charIndex - 1);
    this.charIndex--;
    if (this.charIndex === 0) {
      this.isDeleting = false;
      this.roleIndex = (this.roleIndex + 1) % roleCount;
      this.scheduleNext(PAUSE_BEFORE_NEXT_ROLE_MS);
      return;
    }
    this.scheduleNext(DELETING_DELAY_MS);
  }
}

export function startRoleTyping(): void {
  const roleElement = document.getElementById(ROLE_ELEMENT_ID);
  if (roleElement === null) {
    return;
  }
  const typewriter = new RoleTypewriter(roleElement);
  window.addEventListener("langchange", () => {
    typewriter.restart();
  });
  setTimeout(() => {
    typewriter.typeRole();
  }, INITIAL_DELAY_MS);
}
