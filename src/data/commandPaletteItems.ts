import { projects } from "./projects";

const PROJECT_KEYWORD_STACK_SIZE = 5;

export interface CommandItem {
  id: string;
  label: string;
  label_es: string;
  category: "page" | "project" | "action";
  href?: string;
  action?: string;
  keywords?: string[];
  icon?: string;
}

export const commandItems: CommandItem[] = [
  // Pages
  {
    id: "page-home",
    label: "Home",
    label_es: "Inicio",
    category: "page",
    href: "/",
    keywords: ["inicio", "main", "index"],
    icon: "home",
  },
  {
    id: "page-projects",
    label: "Projects",
    label_es: "Proyectos",
    category: "page",
    href: "/projects",
    keywords: ["proyectos", "work", "portfolio"],
    icon: "folder",
  },
  {
    id: "page-experience",
    label: "Experience",
    label_es: "Experiencia",
    category: "page",
    href: "/experience",
    keywords: ["experiencia", "career", "trabajo", "timeline"],
    icon: "briefcase",
  },
  {
    id: "page-about",
    label: "About",
    label_es: "Sobre mi",
    category: "page",
    href: "/about",
    keywords: ["sobre", "who", "info"],
    icon: "user",
  },

  // Actions
  {
    id: "action-theme",
    label: "Toggle theme",
    label_es: "Cambiar tema",
    category: "action",
    action: "toggle-theme",
    keywords: ["dark", "light", "modo", "oscuro", "claro"],
    icon: "sun",
  },
  {
    id: "action-lang",
    label: "Toggle language",
    label_es: "Cambiar idioma",
    category: "action",
    action: "toggle-lang",
    keywords: ["english", "spanish", "espanol", "idioma", "en", "es"],
    icon: "globe",
  },

  // Projects (generated from data)
  ...projects.map((project) => ({
    id: `project-${project.slug}`,
    label: project.title,
    label_es: project.title,
    category: "project" as const,
    href: `/projects/${project.slug}`,
    keywords: [
      ...project.stack.slice(0, PROJECT_KEYWORD_STACK_SIZE).map((tech) => tech.toLowerCase()),
      project.category,
    ],
    icon: "code",
  })),
];
