import type { CommandItem } from "../../data/commandPaletteItems";
import { hasText } from "../../lib/text";

type CommandCategory = CommandItem["category"];

export interface CommandGroup {
  category: CommandCategory;
  items: CommandItem[];
  firstIndex: number;
}

const EMPTY_QUERY_SCORE = 1;
const LABEL_PREFIX_SCORE = 100;
const LABEL_MATCH_SCORE = 80;
const KEYWORD_MATCH_SCORE = 60;
const ALL_WORDS_MATCH_SCORE = 40;
const NO_MATCH_SCORE = 0;

const CATEGORY_ORDER: CommandCategory[] = ["page", "action", "project"];

export const CATEGORY_LABELS: Record<CommandCategory, { en: string; es: string }> = {
  page: { en: "Pages", es: "Paginas" },
  action: { en: "Actions", es: "Acciones" },
  project: { en: "Projects", es: "Proyectos" },
};

export function isSpanish(lang: string): boolean {
  return lang === "es";
}

export function commandLabel(item: CommandItem, lang: string): string {
  return isSpanish(lang) ? item.label_es : item.label;
}

function scoreMatch(query: string, item: CommandItem, lang: string): number {
  if (!hasText(query)) {
    return EMPTY_QUERY_SCORE;
  }
  const normalizedQuery = query.toLowerCase();
  const label = commandLabel(item, lang).toLowerCase();
  const keywords = (item.keywords ?? []).join(" ").toLowerCase();
  const searchable = `${label} ${keywords}`;

  if (label.startsWith(normalizedQuery)) {
    return LABEL_PREFIX_SCORE;
  }
  if (label.includes(normalizedQuery)) {
    return LABEL_MATCH_SCORE;
  }
  if (keywords.includes(normalizedQuery)) {
    return KEYWORD_MATCH_SCORE;
  }
  const words = normalizedQuery.split(/\s+/);
  if (words.every((word) => searchable.includes(word))) {
    return ALL_WORDS_MATCH_SCORE;
  }
  return NO_MATCH_SCORE;
}

export function filterCommandItems(items: CommandItem[], query: string, lang: string): CommandItem[] {
  return items
    .map((item) => ({ item, score: scoreMatch(query, item, lang) }))
    .filter(({ score }) => score > NO_MATCH_SCORE)
    .sort((first, second) => second.score - first.score)
    .map(({ item }) => item);
}

export function groupByCategory(items: CommandItem[]): CommandGroup[] {
  const groups: CommandGroup[] = [];
  let firstIndex = 0;
  for (const category of CATEGORY_ORDER) {
    const categoryItems = items.filter((item) => item.category === category);
    if (categoryItems.length > 0) {
      groups.push({ category, items: categoryItems, firstIndex });
      firstIndex += categoryItems.length;
    }
  }
  return groups;
}

export function wrapIndex(index: number, length: number): number {
  const safeLength = Math.max(length, 1);
  return (index + safeLength) % safeLength;
}
