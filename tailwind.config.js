const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)", ...fontFamily.sans],
      },
      colors: {
        primary: "#73AFAF",
        secondary: "#252525",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [require('prettier-plugin-tailwindcss'),require("tailwindcss-animate")],
};
