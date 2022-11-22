/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['"Poppins"', ...defaultTheme.fontFamily.sans],
      },
    },
    colors: {
      transparent: "transparent",
      white: colors.white,
      black: colors.black,
      blue: colors.blue,
      gray: colors.gray,
      orange: colors.orange,
      slate: colors.slate,
      ogb: {
        100: "#5e8a75",
        200: "#2b475c",
        300: "#E30600",
        400: "#E3C384",
      },
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [],
};
