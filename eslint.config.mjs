import { defineConfig } from "eslint/config";
import astro from "eslint-plugin-astro";
import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";
import { standardConfig } from "./eslint.standard.mjs";

export default defineConfig([
  ...standardConfig({
    tsconfigRootDir: import.meta.dirname,
    frameworks: [reactHooks.configs.flat.recommended],
    untypedFiles: ["**/*.astro", "**/*.astro/*.ts"],
    trailingConfigs: [...astro.configs.recommended],
  }),
  {
    files: ["astro.config.mjs"],
    languageOptions: { globals: globals.node },
  },
]);
