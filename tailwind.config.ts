import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        text: "var(--text)",
        accent: "var(--accent)",
        secondary: "var(--secondary)",
        primary: "var(--primary)",
      },
      backgroundImage: {
        "green-gradient": "linear-gradient(to top right, #1C5E22, #4CAE4F)",
      },
    },
  },
  plugins: [],
};
export default config;
