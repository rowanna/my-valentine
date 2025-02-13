import { defineConfig } from "eslint";

export default defineConfig({
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  rules: {
    "no-eval": "error",
    "no-new-func": "error",
  },
});
