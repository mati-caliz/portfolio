import { defineConfig } from "vitest/config";

const LINE_COVERAGE_PERCENT = 80;
const BRANCH_COVERAGE_PERCENT = 70;

export default defineConfig({
  test: {
    environment: "jsdom",
    include: ["tests/**/*.test.{ts,tsx}"],
    setupFiles: ["tests/setup.ts"],
    coverage: {
      provider: "v8",
      // Los .astro quedan afuera porque v8 no los instrumenta: Astro los compila y renderiza
      // en el build. Se mide todo el TypeScript de src/, datos incluidos.
      include: ["src/**/*.{ts,tsx}"],
      thresholds: { lines: LINE_COVERAGE_PERCENT, branches: BRANCH_COVERAGE_PERCENT },
    },
  },
});
