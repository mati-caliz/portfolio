export const NO_HISTORY_SELECTION = -1;

export interface HistoryStep {
  index: number;
  input: string;
}

export function previousHistoryStep(history: string[], currentIndex: number): HistoryStep | null {
  if (history.length === 0) {
    return null;
  }
  const index = currentIndex === NO_HISTORY_SELECTION ? history.length - 1 : Math.max(0, currentIndex - 1);
  return { index, input: history[index] ?? "" };
}

export function nextHistoryStep(history: string[], currentIndex: number): HistoryStep | null {
  if (currentIndex === NO_HISTORY_SELECTION) {
    return null;
  }
  const index = currentIndex + 1;
  if (index >= history.length) {
    return { index: NO_HISTORY_SELECTION, input: "" };
  }
  return { index, input: history[index] ?? "" };
}
