import type { JSX } from "preact";
import { CommandFooter, CommandResults, SearchIcon, SearchInput } from "./commandPalette/CommandPaletteParts";
import { useCommandPaletteState } from "./commandPalette/useCommandPaletteState";

export default function CommandPalette(): JSX.Element | null {
  const {
    isOpen,
    query,
    lang,
    selectedIndex,
    groups,
    resultCount,
    inputRef,
    listRef,
    close,
    setQuery,
    setSelectedIndex,
    executeItem,
    handleKeyDown,
  } = useCommandPaletteState();

  if (!isOpen) {
    return null;
  }

  return (
    <div
      class="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh]"
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          close();
        }
      }}
    >
      <div class="absolute inset-0 bg-[var(--color-bg)]/60 backdrop-blur-sm" />

      <div
        class="relative w-full max-w-lg mx-4 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded-xl shadow-2xl overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-label="Command palette"
      >
        <div class="flex items-center gap-3 px-4 py-3 border-b border-[var(--color-border)]">
          <SearchIcon />
          <SearchInput
            inputRef={inputRef}
            query={query}
            lang={lang}
            onQueryChange={setQuery}
            onKeyDown={handleKeyDown}
          />
          <kbd class="hidden sm:inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono text-[var(--color-text-tertiary)] border border-[var(--color-border)] rounded">
            ESC
          </kbd>
        </div>

        <div ref={listRef} class="max-h-72 overflow-y-auto p-2" style="scrollbar-width: thin;">
          <CommandResults
            groups={groups}
            selectedIndex={selectedIndex}
            lang={lang}
            onExecute={executeItem}
            onHover={setSelectedIndex}
          />
        </div>

        <CommandFooter lang={lang} resultCount={resultCount} />
      </div>
    </div>
  );
}
