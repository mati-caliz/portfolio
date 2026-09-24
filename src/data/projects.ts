import { despegarSearch } from "./projectEntries/despegarSearch";
import { despegarShifu } from "./projectEntries/despegarShifu";
import { atlas } from "./projectEntries/atlas";
import { labrecha } from "./projectEntries/labrecha";
import { conseguilo } from "./projectEntries/conseguilo";
import { respondi } from "./projectEntries/respondi";
import { propMetrics } from "./projectEntries/propMetrics";
import { gastronova } from "./projectEntries/gastronova";
import { soma } from "./projectEntries/soma";
import { chirola } from "./projectEntries/chirola";
import { tarjetazo } from "./projectEntries/tarjetazo";
import { ccitaliana } from "./projectEntries/ccitaliana";
import { dynamicSystems } from "./projectEntries/dynamicSystems";
import { bender } from "./projectEntries/bender";
import type { Project } from "./projectTypes";

export type { Project } from "./projectTypes";

export const projects: Project[] = [
  despegarSearch,
  despegarShifu,
  atlas,
  labrecha,
  conseguilo,
  respondi,
  propMetrics,
  gastronova,
  soma,
  chirola,
  tarjetazo,
  ccitaliana,
  dynamicSystems,
  bender,
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
