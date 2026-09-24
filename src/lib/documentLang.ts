import { hasText } from "./text";

const DEFAULT_LANG = "en";

export function readDocumentLang(): string {
  const lang = document.documentElement.getAttribute("data-lang");
  return hasText(lang) ? lang : DEFAULT_LANG;
}
