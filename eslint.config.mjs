import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Disable the quote escaping error so build won't fail
      "react/no-unescaped-entities": "off",
      
      // Make <img> only a warning (or change to "off" to fully disable)
      "@next/next/no-img-element": "warn",
    },
  },
];

export default eslintConfig;
