/** @type {import("eslint").Linter.Config} */
module.exports = {
 plugins: ["@typescript-eslint", "jsx-a11y", "import", "react", "react-hooks"],
 extends: ["plugin:astro/recommended", "plugin:@typescript-eslint/recommended"],
 parser: "@typescript-eslint/parser",
 parserOptions: {
  tsconfigRootDir: __dirname,
  sourceType: "module",
  ecmaVersion: "latest",
 },
 overrides: [
  {
   files: ["*.astro"],
   parser: "astro-eslint-parser",
   parserOptions: {
    parser: "@typescript-eslint/parser",
    extraFileExtensions: [".astro"],
    ecmaVersion: "latest",
   },
   rules: {
    "@typescript-eslint/no-explicit-any": "error",
    "no-console": "warn",
   },
  },
  {
   files: ["*.tsx"],
   parserOptions: {
    parser: "@typescript-eslint/parser",
   },
   rules: {
    "no-unused-vars": "error",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-var-keyword": "error",
    "no-console": "warn",
   },
  },
 ],
};
