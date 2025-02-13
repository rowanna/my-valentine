import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  {
    parser: "@babel/eslint-parser", // Babel parser 사용 (혹은 필요한 파서로 변경)

    parserOptions: {
      ecmaVersion: 2020, // 최신 JavaScript 문법 사용
      sourceType: "module", // ES 모듈로 설정
    },
    rules: {
      "no-eval": "error", // 동적 코드 평가 금지
      "no-new-func": "error", // new Function 사용 금지
    },
  },
];

export default eslintConfig;
