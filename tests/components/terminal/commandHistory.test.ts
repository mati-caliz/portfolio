import { describe, expect, it } from "vitest";
import {
  NO_HISTORY_SELECTION,
  nextHistoryStep,
  previousHistoryStep,
} from "../../../src/components/terminal/commandHistory";

const HISTORY = ["help", "about", "skills"];

describe("previousHistoryStep", () => {
  it("returns null when there is no history", () => {
    expect(previousHistoryStep([], NO_HISTORY_SELECTION)).toBeNull();
  });

  it("starts from the most recent command when nothing is selected", () => {
    expect(previousHistoryStep(HISTORY, NO_HISTORY_SELECTION)).toEqual({ index: 2, input: "skills" });
  });

  it("walks backwards and stops at the oldest command", () => {
    expect(previousHistoryStep(HISTORY, 2)).toEqual({ index: 1, input: "about" });
    expect(previousHistoryStep(HISTORY, 0)).toEqual({ index: 0, input: "help" });
  });
});

describe("nextHistoryStep", () => {
  it("does nothing when no command is selected", () => {
    expect(nextHistoryStep(HISTORY, NO_HISTORY_SELECTION)).toBeNull();
  });

  it("walks forward through the history", () => {
    expect(nextHistoryStep(HISTORY, 0)).toEqual({ index: 1, input: "about" });
  });

  it("clears the selection and the input after the newest command", () => {
    expect(nextHistoryStep(HISTORY, 2)).toEqual({ index: NO_HISTORY_SELECTION, input: "" });
  });
});
