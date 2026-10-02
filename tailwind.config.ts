import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          50: "#eefbff",
          100: "#d9f5ff",
          200: "#bff0ff",
          300: "#7ae3ff",
          400: "#3ac8ff",
          500: "#08adf5",
          600: "#0287c7",
          700: "#076aa0",
          800: "#0d5a83",
          900: "#124d70",
        },
      },
      boxShadow: {
        neon: "0 0 0 1px rgba(113, 234, 255, 0.4), 0 0 20px rgba(58, 200, 255, 0.25)",
      },
      backgroundImage: {
        grid: "radial-gradient(circle at center, rgba(122,227,255,0.1) 0, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
