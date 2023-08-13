/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#030303',
        secondary: '#FBFF22',
        danger: '#C96464',
        light: '#F3F1E5',
        gray: '#9A9A9A'
      }
    },
  },
  plugins: [
    require("tw-elements/dist/plugin.cjs")
  ],
}

