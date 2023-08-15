/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    container: {
      center: true,
      padding: "12px",
    },
    extend: {
      colors: {
        primary: "#030303",
        secondary: "#FBFF22",
        "secondary-dark": "#9C9E18",
        danger: "#C96464",
        light: "#F3F1E5",
        gray: "#9A9A9A",
      },
      fontFamily: {
        sans: ["'Noto Sans TC'", "sans-serif"],
        serif: ["'Noto Serif TC'", "serif"],
        Yese: ["'Yeseva One'", "cursive"],
      },
      maxWidth: {
        "screen-sm": "540px",
        "screen-md": "720px",
        "screen-lg": "960px",
        "screen-xl": "1140px",
        "screen-2xl": "1320px",
      },
      fontSize: {
        base: ["16px", "1.5"],
        "5xl": ["48px", "60px"],
        8: ["32px", "1.5"],
        16: ["64px", "74px"],
      },
      spacing: {
        15: "60px",
      },
    },
  },
  plugins: [
    require("tw-elements/dist/plugin.cjs"),
    require("@tailwindcss/forms"),
  ],
};
