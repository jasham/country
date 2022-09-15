/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  darkMode: ["class"],
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      nunito: ["Nunito Sans", " sans-serif"],
    },
    extend: {
      boxShadow: {
        light: "0 0px 3px 1px hsl(0, 0%, 90%)",
        light_hover: "0 3px 5px 1px hsl(0, 0%, 80%)",
        dark: "0 0px 5px 1px hsl(209, 23%, 20%)",
        dark_hover: "0 0px 10px 3px hsl(209, 23%, 20%)",
      },
      keyframes: {
        slowOpen: {
          "0%": { height: "0px" },
          "25%": { height: "40px" },
          "50%": { height: "80px" },
          "75%": { height: "120px" },
          "100%": { height: "160px" },
        },
      },
      animation: {
        slowOpen: "slowOpen .1s linear",
      },
    },
    colors: {
      ...defaultTheme.colors,
      darkBlueDMElem: "hsl(209, 23%, 22%)",
      veryDarkBlueDMBg: "hsl(207, 26%, 17%)",
      veryDarkBluLMText: "hsl(200, 15%, 8%)",
      darkGrayLMInput: "hsl(0, 0%, 52%)",
      veryLightGrayLMB: "hsl(0, 0%, 98%)",
      whiteDMLMElem: "hsl(0, 0%, 100%)",
      transparent: "rgba(0,0,0,0)",
    },
  },
  plugins: [],
};
