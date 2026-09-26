import { describe, expect, it } from "vitest";
import { ANALYTICS_PATH } from "../../src/data/analytics";
import { commandItems } from "../../src/data/commandPaletteItems";
import { experiences } from "../../src/data/experience";
import {
  PROJECT_CATEGORY_LABELS,
  PROJECT_CATEGORY_LABELS_ES,
  PROJECT_STATUS_COLORS,
} from "../../src/data/projectLabels";
import { getFeaturedProjects, getProjectBySlug, projects } from "../../src/data/projects";

describe("projects", () => {
  it("uses a unique slug per project", () => {
    const slugs = projects.map((project) => project.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("ships every project with its spanish copy and a label for its status and category", () => {
    for (const project of projects) {
      expect(project.tagline_es).not.toBe("");
      expect(project.description_es).not.toBe("");
      expect(project.highlights_es).toHaveLength(project.highlights.length);
      expect(PROJECT_STATUS_COLORS[project.status]).toBeDefined();
      expect(PROJECT_CATEGORY_LABELS[project.category]).toBeDefined();
      expect(PROJECT_CATEGORY_LABELS_ES[project.category]).toBeDefined();
    }
  });

  it("returns only featured projects, keeping their order", () => {
    const featured = getFeaturedProjects();
    expect(featured.length).toBeGreaterThan(0);
    expect(featured.every((project) => project.featured)).toBe(true);
    expect(featured).toEqual(projects.filter((project) => project.featured));
  });

  it("finds a project by slug and returns undefined for an unknown one", () => {
    const [firstProject] = projects;
    expect(firstProject).toBeDefined();
    if (firstProject !== undefined) {
      expect(getProjectBySlug(firstProject.slug)).toBe(firstProject);
    }
    expect(getProjectBySlug("no-existe")).toBeUndefined();
  });
});

describe("commandItems", () => {
  it("adds one palette entry per project pointing to its page", () => {
    const projectItems = commandItems.filter((item) => item.category === "project");
    expect(projectItems.map((item) => item.href)).toEqual(
      projects.map((project) => `/projects/${project.slug}`),
    );
  });

  it("builds project keywords from the first five technologies plus the category", () => {
    const [firstProject] = projects;
    const item = commandItems.find((candidate) => candidate.id === `project-${firstProject?.slug ?? ""}`);
    expect(item?.keywords).toEqual([
      ...(firstProject?.stack.slice(0, 5).map((tech) => tech.toLowerCase()) ?? []),
      firstProject?.category,
    ]);
  });

  it("uses unique ids", () => {
    const ids = commandItems.map((item) => item.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});

describe("static data", () => {
  it("exposes the analytics path and the experience timeline", () => {
    expect(ANALYTICS_PATH.startsWith("/")).toBe(true);
    expect(experiences.length).toBeGreaterThan(0);
  });
});
