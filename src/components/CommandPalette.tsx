import { useState, useEffect, useRef, useMemo, useCallback } from "preact/hooks";
import { commandItems, type CommandItem } from "../data/commandPaletteItems";

// ── Icons (inline SVG paths to avoid deps) ──

const ICONS: Record<string, string> = {
  home: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1",
  folder: "M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z",
  briefcase: "M20 7H4a1 1 0 00-1 1v10a1 1 0 001 1h16a1 1 0 001-1V8a1 1 0 00-1-1zM16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2",
  user: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
  sun: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
  globe: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9",
  code: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
};

function Icon({ name }: { name: string }) {
  const d = ICONS[name] || ICONS.code;
  return (
    <svg class="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" d={d} />
    </svg>
  );
}

// ── Fuzzy search ──

function scoreMatch(query: string, item: CommandItem, lang: string): number {
  if (!query) return 1;
  const q = query.toLowerCase();
  const label = (lang === "es" ? item.label_es : item.label).toLowerCase();
  const keywords = (item.keywords || []).join(" ").toLowerCase();
  const searchable = `${label} ${keywords}`;

  // Exact prefix match on label = highest score
  if (label.startsWith(q)) return 100;
  // Label contains query
  if (label.includes(q)) return 80;
  // Keywords contain query
  if (keywords.includes(q)) return 60;
  // All query words found somewhere
  const words = q.split(/\s+/);
  if (words.every((w) => searchable.includes(w))) return 40;

  return 0;
}

// ── Category labels ──

const CATEGORY_LABELS: Record<string, { en: string; es: string }> = {
  page: { en: "Pages", es: "Paginas" },
  action: { en: "Actions", es: "Acciones" },
  project: { en: "Projects", es: "Proyectos" },
};

// ── Component ──

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lang, setLang] = useState("en");
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Sync language
  useEffect(() => {
    const updateLang = () => {
      setLang(document.documentElement.getAttribute("data-lang") || "en");
    };
    updateLang();
    window.addEventListener("langchange", updateLang);
    return () => window.removeEventListener("langchange", updateLang);
  }, []);

  // Keyboard shortcut to open/close
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen((prev) => {
          if (!prev) {
            setQuery("");
            setSelectedIndex(0);
          }
          return !prev;
        });
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Focus input when opening
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 10);
    }
  }, [isOpen]);

  // Filter and score items
  const filteredItems = useMemo(() => {
    return commandItems
      .map((item) => ({ item, score: scoreMatch(query, item, lang) }))
      .filter(({ score }) => score > 0)
      .sort((a, b) => b.score - a.score)
      .map(({ item }) => item);
  }, [query, lang]);

  // Group by category
  const grouped = useMemo(() => {
    const groups: { category: string; items: CommandItem[] }[] = [];
    const categoryOrder = ["page", "action", "project"];
    for (const cat of categoryOrder) {
      const items = filteredItems.filter((i) => i.category === cat);
      if (items.length > 0) groups.push({ category: cat, items });
    }
    return groups;
  }, [filteredItems]);

  // Flat list for keyboard navigation
  const flatItems = useMemo(() => grouped.flatMap((g) => g.items), [grouped]);

  // Reset selection when query changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  const executeItem = useCallback(
    (item: CommandItem) => {
      setIsOpen(false);
      setQuery("");

      if (item.href) {
        window.location.href = item.href;
      } else if (item.action === "toggle-theme") {
        const btn = document.getElementById("theme-toggle");
        btn?.click();
      } else if (item.action === "toggle-lang") {
        const btn = document.getElementById("lang-toggle");
        btn?.click();
      }
    },
    []
  );

  function handleKeyDown(e: KeyboardEvent) {
    if (e.key === "Escape") {
      setIsOpen(false);
      return;
    }

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((i) => (i + 1) % Math.max(flatItems.length, 1));
      return;
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((i) => (i - 1 + flatItems.length) % Math.max(flatItems.length, 1));
      return;
    }

    if (e.key === "Enter" && flatItems[selectedIndex]) {
      e.preventDefault();
      executeItem(flatItems[selectedIndex]);
    }
  }

  // Scroll selected item into view
  useEffect(() => {
    if (!listRef.current) return;
    const selected = listRef.current.querySelector("[data-selected='true']");
    selected?.scrollIntoView({ block: "nearest" });
  }, [selectedIndex]);

  if (!isOpen) return null;

  let itemCounter = 0;

  return (
    <div
      class="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh]"
      onClick={(e) => {
        if (e.target === e.currentTarget) setIsOpen(false);
      }}
    >
      {/* Backdrop */}
      <div class="absolute inset-0 bg-[var(--color-bg)]/60 backdrop-blur-sm" />

      {/* Modal */}
      <div
        class="relative w-full max-w-lg mx-4 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-xl shadow-2xl overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
      >
        {/* Search input */}
        <div class="flex items-center gap-3 px-4 py-3 border-b border-[var(--color-border)]">
          <svg class="w-5 h-5 text-[var(--color-text-tertiary)] shrink-0" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onInput={(e) => setQuery((e.target as HTMLInputElement).value)}
            onKeyDown={handleKeyDown}
            placeholder={lang === "es" ? "Buscar paginas, proyectos, acciones..." : "Search pages, projects, actions..."}
            class="flex-1 bg-transparent outline-none text-[var(--color-text)] placeholder:text-[var(--color-text-tertiary)] text-sm"
            autoComplete="off"
            spellCheck={false}
          />
          <kbd class="hidden sm:inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono text-[var(--color-text-tertiary)] border border-[var(--color-border)] rounded">
            ESC
          </kbd>
        </div>

        {/* Results */}
        <div ref={listRef} class="max-h-72 overflow-y-auto p-2" style="scrollbar-width: thin;">
          {flatItems.length === 0 ? (
            <div class="px-3 py-8 text-center text-sm text-[var(--color-text-tertiary)]">
              {lang === "es" ? "Sin resultados" : "No results found"}
            </div>
          ) : (
            grouped.map((group) => (
              <div key={group.category}>
                <div class="px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest text-[var(--color-text-tertiary)]">
                  {CATEGORY_LABELS[group.category]?.[lang === "es" ? "es" : "en"] || group.category}
                </div>
                {group.items.map((item) => {
                  const index = itemCounter++;
                  const isSelected = index === selectedIndex;
                  return (
                    <button
                      key={item.id}
                      data-selected={isSelected}
                      class={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-left transition-colors duration-100 ${
                        isSelected
                          ? "bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
                          : "text-[var(--color-text-secondary)] hover:bg-[var(--color-bg)]/50"
                      }`}
                      onClick={() => executeItem(item)}
                      onMouseEnter={() => setSelectedIndex(index)}
                    >
                      <Icon name={item.icon || "code"} />
                      <span class="flex-1 truncate">
                        {lang === "es" ? item.label_es : item.label}
                      </span>
                      {item.category === "project" && (
                        <span class="text-[10px] font-mono text-[var(--color-text-tertiary)]">
                          {lang === "es" ? "proyecto" : "project"}
                        </span>
                      )}
                      {isSelected && (
                        <kbd class="hidden sm:inline-flex text-[10px] font-mono text-[var(--color-text-tertiary)]">
                          Enter
                        </kbd>
                      )}
                    </button>
                  );
                })}
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div class="flex items-center justify-between px-4 py-2 border-t border-[var(--color-border)] text-[10px] font-mono text-[var(--color-text-tertiary)]">
          <div class="flex items-center gap-3">
            <span class="flex items-center gap-1">
              <kbd class="px-1 py-0.5 border border-[var(--color-border)] rounded">↑</kbd>
              <kbd class="px-1 py-0.5 border border-[var(--color-border)] rounded">↓</kbd>
              {lang === "es" ? "navegar" : "navigate"}
            </span>
            <span class="flex items-center gap-1">
              <kbd class="px-1 py-0.5 border border-[var(--color-border)] rounded">↵</kbd>
              {lang === "es" ? "seleccionar" : "select"}
            </span>
          </div>
          <span>{flatItems.length} {lang === "es" ? "resultados" : "results"}</span>
        </div>
      </div>
    </div>
  );
}
