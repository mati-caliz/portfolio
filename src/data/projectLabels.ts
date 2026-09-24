import type { Project } from "./projectTypes";

export const PROJECT_STATUS_COLORS: Record<Project["status"], string> = {
  production: "bg-emerald-500",
  "in-progress": "bg-amber-500",
  completed: "bg-blue-500",
};

export const PROJECT_CATEGORY_LABELS: Record<Project["category"], string> = {
  work: "Professional",
  venture: "Venture",
  "open-source": "Open Source",
};

export const PROJECT_CATEGORY_LABELS_ES: Record<Project["category"], string> = {
  work: "Profesional",
  venture: "Emprendimiento",
  "open-source": "Open Source",
};
