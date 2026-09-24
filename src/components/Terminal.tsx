import type { JSX } from "preact";
import { lineClass } from "./terminal/terminalLines";
import { useTerminal } from "./terminal/useTerminal";

const NON_BREAKING_SPACE = " ";

export default function Terminal(): JSX.Element {
  const { lines, input, mode, inputRef, containerRef, setInput, handleKeyDown } = useTerminal();

  return (
    <div
      class="border border-[var(--color-border)] rounded-xl overflow-hidden bg-[var(--color-bg-secondary)] hover:border-[var(--color-border-hover)] transition-colors duration-300"
      onClick={() => inputRef.current?.focus()}
    >
      <div class="flex items-center gap-2 px-4 py-3 border-b border-[var(--color-border)] bg-[var(--color-bg)]">
        <div class="flex items-center gap-1.5">
          <div class="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div class="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div class="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <span class="text-xs font-mono text-[var(--color-text-tertiary)] ml-2">matias@portfolio ~ %</span>
      </div>

      <div
        ref={containerRef}
        class="p-4 h-80 overflow-y-auto font-mono text-sm leading-relaxed"
        style="scrollbar-width: thin;"
      >
        {lines.map((line, i) => (
          <div key={i} class={`whitespace-pre-wrap ${lineClass(line.type)}`}>
            {line.content === "" ? NON_BREAKING_SPACE : line.content}
          </div>
        ))}

        {mode === "normal" && (
          <div class="flex items-center gap-2">
            <span class="text-[var(--color-accent)] shrink-0">~</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onInput={(event) => {
                setInput(event.currentTarget.value);
              }}
              onKeyDown={handleKeyDown}
              class="flex-1 bg-transparent outline-none text-[var(--color-text)] caret-[var(--color-accent)] font-mono text-sm"
              autoComplete="off"
              spellcheck={false}
              aria-label="Terminal input"
            />
          </div>
        )}
        {mode === "snake" && (
          <div
            class="text-xs text-[var(--color-text-tertiary)] mt-2"
            tabIndex={0}
            onKeyDown={handleKeyDown}
            ref={(element) => element?.focus()}
          >
            Playing Snake...
          </div>
        )}
        {mode === "matrix" && (
          <div class="text-xs text-[var(--color-text-tertiary)] mt-2">Decoding the Matrix...</div>
        )}
      </div>
    </div>
  );
}
