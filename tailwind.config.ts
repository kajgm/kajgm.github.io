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
        "light-text-color": "black",
        "light-sub-text-color": "#14304f",
        "light-content-text-color": "#303030",
        "dark-text-color": "white",
        "dark-sub-text-color": "#cfc3dd",
        "dark-content-text-color": "#d6d6d6",
      },
      fontFamily: {
        roboto: ["var(--font-roboto)"],
        pmarker: ["var(--font-permanent-marker)"],
      },
    },
    screens: {
      mobile: "640px",
      tablet: "883px",
      desktop: "1200px",
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
  darkMode: "class",
};
export default config;
