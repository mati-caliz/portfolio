export interface Project {
  slug: string;
  title: string;
  tagline: string;
  tagline_es: string;
  description: string;
  description_es: string;
  role: string;
  role_es: string;
  year: string;
  status: "production" | "in-progress" | "completed";
  statusLabel: string;
  statusLabel_es: string;
  stack: string[];
  highlights: string[];
  highlights_es: string[];
  challenge: string;
  challenge_es: string;
  approach: string;
  approach_es: string;
  outcome: string;
  outcome_es: string;
  links: { label: string; href: string }[];
  previewUrl?: string;
  hidePreview?: boolean;
  featured: boolean;
  category: "work" | "venture" | "open-source";
  color: string;
}
