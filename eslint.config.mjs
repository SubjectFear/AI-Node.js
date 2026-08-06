import { FlatCompat } from "@eslint/eslintrc";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const compat = new FlatCompat({ baseDirectory: __dirname });

const config = [
  {
    ignores: ["node_modules/**", ".next/**", "out/**", "dist/**"],
  },
  ...compat.config({
    extends: ["next/core-web-vitals"],
  }),
];

export default config;
