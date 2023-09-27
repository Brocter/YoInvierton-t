/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['Barlow', 'sans-serif'],
      },
      colors: {
        primaryBlue: "#4886F8",
        black : "#000",
        primaryLightBlue: "#925FF0",
        grey : "#646464",
        primaryWhite: "#FFFFFF",
        complementaryGreen: "#7BE879",
        complementaryRed: "#E3FEE3",
        complementaryLightRed : "#FFCDD1"
      },
    },
  },
  plugins: [],
}

