import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-primary": "var(--brand-primary)",
        "brand-primary-light": "var(--brand-primary-light)",
        "brand-primary-dark": "var(--brand-primary-dark)",
        "brand-secondary": "var(--brand-secondary)",
        "brand-accent": "var(--brand-accent)",
        "brand-dark": "var(--brand-dark)",
      },
    },
  },
  plugins: [],
} satisfies Config;
