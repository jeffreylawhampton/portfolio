/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-yellow": "#e79f0d",
      },
      fontFamily: {
        sans: [
          "europa",
          "Avenir Next Condensed",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        regular: [
          "europa",
          "Avenir Next",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
