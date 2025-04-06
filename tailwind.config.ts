import type { Config } from "tailwindcss";

const { nextui } = require("@nextui-org/react");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-text-color": "black",
        "light-sub-text-color": "#4b4b4b",
        "light-content-text-color": "#303030",
        "dark-text-color": "white",
        "dark-sub-text-color": "#c5c5c5",
        "dark-content-text-color": "#d6d6d6",
      },
      fontFamily: {
        roboto: ["var(--font-roboto)"],
        pmarker: ["var(--font-permanent-marker)"],
      },
    },
    screens: {
      mobile: "640px",
      tablet: "920px",
      desktop: "1200px",
    },
  },
  variants: {
    extend: {
      display: ["group-hover"],
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        dark: {
          colors: {
            primary: {
              DEFAULT: "#BEF264",
              foreground: "#000000",
            },
            focus: "#BEF264",
          },
        },
      },
    }),
  ],
};
export default config;
