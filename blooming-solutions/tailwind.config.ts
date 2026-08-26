import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FBF7F4",
        ink: "#241016",
        burgundy: {
          DEFAULT: "#5A0F1A",
          light: "#7A2233",
        },
        deep: "#2A0A10",
        rose: "#B8798A",
        blush: "#F2D7DB",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      keyframes: {
        unfurl: {
          "0%": { strokeDashoffset: "480", opacity: "0" },
          "10%": { opacity: "1" },
          "100%": { strokeDashoffset: "0", opacity: "1" },
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        unfurl: "unfurl 1.8s cubic-bezier(0.22, 1, 0.36, 1) forwards",
        rise: "rise 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
