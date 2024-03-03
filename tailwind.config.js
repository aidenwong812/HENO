/* eslint-disable global-require */
/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./shared/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      darkgray: '#5b5959',
      gray: '#8c8c8c',
      gray_1: '#d2d2d2',
      red: '#c52b2b',
      yellow: "#FFEE02",
      black: '#000000',
      white: "#ffffff"
    },
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        dresden: ["DresdenElektronik", "sans-serif"],
        sans: ["DresdenElektronik", ...defaultTheme.fontFamily.sans],
      },
      screens: {
        ios: "320px",
        samsungS8: "360px",
        xs: "390px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1150px",
        "2xl": "1315px",
        "3xl": "1920px",
      },
    },
  },
  variants: {
    extend: {
      display: ["dark"],
    },
  },
  darkMode: ["class"],
  plugins: [
    require("@tailwindcss/forms"),
    require("tailwind-scrollbar")({ nocompatible: true }),
    // ...
  ],
}
