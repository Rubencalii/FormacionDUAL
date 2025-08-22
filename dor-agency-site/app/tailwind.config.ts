import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0B0B0C",
        text: "#FFFFFF",
        muted: "#B3B6BD",
        border: "#1A1B1E",
        accent: "#C9A227",
      },
      fontFamily: {
        serif: ["'Playfair Display'", "Marcellus", "serif"],
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,.25)",
      },
      borderRadius: {
        xl2: "1rem"
      },
      maxWidth: {
        container: "1160px"
      }
    },
  },
  plugins: [],
};
export default config;
