import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          DEFAULT: "#49B9D4",
          100: "#dbf1f6",
          200: "#b6e3ee",
          300: "#92d5e5",
          400: "#6dc7dd",
          500: "#49b9d4",
          600: "#3a94aa",
          700: "#2c6f7f",
          800: "#1d4a55",
          900: "#0f252a",
        },
        secondary: {
          DEFAULT: "#9EE493",
          100: "#ecfae9",
          200: "#d8f4d4",
          300: "#c5efbe",
          400: "#b1e9a9",
          500: "#9ee493",
          600: "#7eb676",
          700: "#5f8958",
          800: "#3f5b3b",
          900: "#202e1d",
        },
      },
    },
  },
  plugins: [],
};
export default config;
