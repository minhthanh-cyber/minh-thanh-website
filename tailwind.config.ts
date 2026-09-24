import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        shine: {
          "0%": { left: "-100%" },
          "100%": { left: "125%" },
        },
      },
      animation: {
        shine: "shine 0.75s ease-in-out",
      },
    },
  },
  plugins: [],
};

export default config;