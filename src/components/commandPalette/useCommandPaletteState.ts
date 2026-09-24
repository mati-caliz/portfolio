import { useCallback, useEffect, useMemo, useRef, useState } from "preact/hooks";
import type { RefObject } from "preact";
import { commandItems, type CommandItem } from "../../data/commandPaletteItems";
import { readDocumentLang } from "../../lib/documentLang";
import { hasText } from "../../lib/text";
import { filterCommandItems, groupByCategory, wrapIndex, type CommandGroup } from "./commandSearch";

const FOCUS_DELAY_MS = 10;

const TOGGLE_BUTTON_IDS: Record<string, string> = {
  "toggle-theme": "theme-toggle",
  "toggle-lang": "lang-toggle",
};

export interface CommandPaletteState {
  isOpen: boolean;
  query: string;
  lang: string;
  selectedIndex: number;
  groups: CommandGroup[];
  resultCount: number;
  inputRef: RefObject<HTMLInputElement>;
  listRef: RefObject<HTMLDivElement>;
  close: () => void;
  setQuery: (query: string) => void;
  setSelectedIndex: (index: number) => void;
  executeItem: (item: CommandItem) => void;
  handleKeyDown: (event: KeyboardEvent) => void;
}

function useDocumentLang(): string {
  const [lang, setLang] = useState("en");
  useEffect(() => {
    const updateLang = (): void => {
      setLang(readDocumentLang());
    };
    updateLang();
    window.addEventListener("langchange", updateLang);
    return () => {
      window.removeEventListener("langchange", updateLang);
    };
  }, []);
  return lang;
}

function useToggleShortcut(onToggle: () => void): void {
  useEffect(() => {
    function onKeyDown(event: KeyboardEvent): void {
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        onToggle();
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onToggle]);
}

function runCommand(item: CommandItem): void {
  if (hasText(item.href)) {
    window.location.href = item.href;
    return;
  }
  const buttonId = hasText(item.action) ? TOGGLE_BUTTON_IDS[item.action] : undefined;
  if (buttonId !== undefined) {
    document.getElementById(buttonId)?.click();
  }
}

export function useCommandPaletteState(): CommandPaletteState {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const lang = useDocumentLang();
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const toggle = useCallback(() => {
    setIsOpen((wasOpen) => {
      if (!wasOpen) {
        setQuery("");
        setSelectedIndex(0);
      }
      return !wasOpen;
    });
  }, []);
  useToggleShortcut(toggle);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), FOCUS_DELAY_MS);
    }
  }, [isOpen]);

  const groups = useMemo(() => groupByCategory(filterCommandItems(commandItems, query, lang)), [query, lang]);
  const flatItems = useMemo(() => groups.flatMap((group) => group.items), [groups]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  useEffect(() => {
    listRef.current?.querySelector("[data-selected='true']")?.scrollIntoView({ block: "nearest" });
  }, [selectedIndex]);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const executeItem = useCallback((item: CommandItem) => {
    setIsOpen(false);
    setQuery("");
    runCommand(item);
  }, []);

  function handleKeyDown(event: KeyboardEvent): void {
    const selectedItem = flatItems[selectedIndex];
    if (event.key === "Escape") {
      setIsOpen(false);
    } else if (event.key === "ArrowDown") {
      event.preventDefault();
      setSelectedIndex((index) => wrapIndex(index + 1, flatItems.length));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setSelectedIndex((index) => wrapIndex(index - 1, flatItems.length));
    } else if (event.key === "Enter" && selectedItem !== undefined) {
      event.preventDefault();
      executeItem(selectedItem);
    }
  }

  return {
    isOpen,
    query,
    lang,
    selectedIndex,
    groups,
    resultCount: flatItems.length,
    inputRef,
    listRef,
    close,
    setQuery,
    setSelectedIndex,
    executeItem,
    handleKeyDown,
  };
}
