import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import tseslint from "typescript-eslint";
import prettier from "eslint-plugin-prettier";

export default [
  // JavaScriptの推奨設定
  js.configs.recommended,
  // TypeScriptの推奨設定
  ...tseslint.configs.recommended,
  {
    files: ["**/*.{js,jsx,ts,tsx}"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
      },
      globals: globals.browser,
    },
    plugins: {
      react,
      prettier,
    },
    rules: {
      // React関連
      "react/react-in-jsx-scope": "off", // Next.jsでは不要
      // Prettierと連携
      "prettier/prettier": "error",
      // 例: コードスタイルルール
      semi: ["error", "always"],
      quotes: ["error", "single"],
    },
  },
];