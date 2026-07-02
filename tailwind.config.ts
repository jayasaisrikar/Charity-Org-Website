import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        plum: {
          DEFAULT: "#6E1246",
          deep: "#4A0B2E",
          dark: "#2E0A1E",
        },
        magenta: "#C21E7A",
        pink: "#E84A8A",
        orange: {
          DEFAULT: "#F5A623",
          warm: "#F7941D",
        },
        cream: "#F7F1EA",
        ink: "#241019",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient":
          "linear-gradient(120deg, #6E1246 0%, #C21E7A 45%, #F5A623 100%)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
