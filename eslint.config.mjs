import pkg from "eslint"; // ESLint를 default import 방식으로 가져옴
const { defineConfig } = pkg; // 구조 분해를 통해 defineConfig 가져오기

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
