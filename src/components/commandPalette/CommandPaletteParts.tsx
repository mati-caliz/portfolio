import type { JSX, RefObject } from "preact";
import type { CommandItem } from "../../data/commandPaletteItems";
import { hasText } from "../../lib/text";
import { CommandIcon } from "./CommandIcon";
import { CATEGORY_LABELS, commandLabel, isSpanish, type CommandGroup } from "./commandSearch";

const DEFAULT_ICON = "code";

export function SearchIcon(): JSX.Element {
  return (
    <svg
      class="w-5 h-5 text-[var(--color-text-tertiary)] shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
      />
    </svg>
  );
}

interface SearchInputProps {
  inputRef: RefObject<HTMLInputElement>;
  query: string;
  lang: string;
  onQueryChange: (query: string) => void;
  onKeyDown: (event: KeyboardEvent) => void;
}

export function SearchInput({
  inputRef,
  query,
  lang,
  onQueryChange,
  onKeyDown,
}: Readonly<SearchInputProps>): JSX.Element {
  return (
    <input
      ref={inputRef}
      type="text"
      value={query}
      onInput={(event) => {
        onQueryChange(event.currentTarget.value);
      }}
      onKeyDown={onKeyDown}
      placeholder={
        isSpanish(lang) ? "Buscar paginas, proyectos, acciones..." : "Search pages, projects, actions..."
      }
      class="flex-1 bg-transparent outline-none text-[var(--color-text)] placeholder:text-[var(--color-text-tertiary)] text-sm"
      autoComplete="off"
      spellcheck={false}
    />
  );
}

interface CommandOptionProps {
  item: CommandItem;
  index: number;
  isSelected: boolean;
  lang: string;
  onExecute: (item: CommandItem) => void;
  onHover: (index: number) => void;
}

function optionClass(isSelected: boolean): string {
  const stateClass = isSelected
    ? "bg-[var(--color-accent)]/10 text-[var(--color-accent)]"
    : "text-[var(--color-text-secondary)] hover:bg-[var(--color-bg)]/50";
  return `w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-left transition-colors duration-100 ${stateClass}`;
}

function CommandOption({
  item,
  index,
  isSelected,
  lang,
  onExecute,
  onHover,
}: Readonly<CommandOptionProps>): JSX.Element {
  return (
    <button
      data-selected={isSelected}
      class={optionClass(isSelected)}
      onClick={() => {
        onExecute(item);
      }}
      onMouseEnter={() => {
        onHover(index);
      }}
    >
      <CommandIcon name={hasText(item.icon) ? item.icon : DEFAULT_ICON} />
      <span class="flex-1 truncate">{commandLabel(item, lang)}</span>
      {item.category === "project" && (
        <span class="text-[10px] font-mono text-[var(--color-text-tertiary)]">
          {isSpanish(lang) ? "proyecto" : "project"}
        </span>
      )}
      {isSelected && (
        <kbd class="hidden sm:inline-flex text-[10px] font-mono text-[var(--color-text-tertiary)]">Enter</kbd>
      )}
    </button>
  );
}

interface CommandResultsProps {
  groups: CommandGroup[];
  selectedIndex: number;
  lang: string;
  onExecute: (item: CommandItem) => void;
  onHover: (index: number) => void;
}

export function CommandResults({
  groups,
  selectedIndex,
  lang,
  onExecute,
  onHover,
}: Readonly<CommandResultsProps>): JSX.Element {
  if (groups.length === 0) {
    return (
      <div class="px-3 py-8 text-center text-sm text-[var(--color-text-tertiary)]">
        {isSpanish(lang) ? "Sin resultados" : "No results found"}
      </div>
    );
  }
  const labelKey = isSpanish(lang) ? "es" : "en";
  return (
    <>
      {groups.map((group) => (
        <div key={group.category}>
          <div class="px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest text-[var(--color-text-tertiary)]">
            {CATEGORY_LABELS[group.category][labelKey]}
          </div>
          {group.items.map((item, position) => {
            const index = group.firstIndex + position;
            return (
              <CommandOption
                key={item.id}
                item={item}
                index={index}
                isSelected={index === selectedIndex}
                lang={lang}
                onExecute={onExecute}
                onHover={onHover}
              />
            );
          })}
        </div>
      ))}
    </>
  );
}

export function CommandFooter({
  lang,
  resultCount,
}: Readonly<{ lang: string; resultCount: number }>): JSX.Element {
  const spanish = isSpanish(lang);
  return (
    <div class="flex items-center justify-between px-4 py-2 border-t border-[var(--color-border)] text-[10px] font-mono text-[var(--color-text-tertiary)]">
      <div class="flex items-center gap-3">
        <span class="flex items-center gap-1">
          <kbd class="px-1 py-0.5 border border-[var(--color-border)] rounded">↑</kbd>
          <kbd class="px-1 py-0.5 border border-[var(--color-border)] rounded">↓</kbd>
          {spanish ? "navegar" : "navigate"}
        </span>
        <span class="flex items-center gap-1">
          <kbd class="px-1 py-0.5 border border-[var(--color-border)] rounded">↵</kbd>
          {spanish ? "seleccionar" : "select"}
        </span>
      </div>
      <span>
        {resultCount} {spanish ? "resultados" : "results"}
      </span>
    </div>
  );
}
