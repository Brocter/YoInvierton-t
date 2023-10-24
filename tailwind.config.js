/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
      },
      colors: {
        primaryBlue: "#4886F8",
        black: "#000",
        primaryLightBlue: "#D3E1FF",
        grey: "#646464",
        primaryWhite: "#FFFFFF",
        complementaryGreen: "#7BE879",
        complementaryRed: "#E3FEE3",
        complementaryLightRed: "#FFCDD1",
      },
      animation: {
        'slide-in': 'slideIn 0.6s ease-in-out', // Define the "slide-in" animation
        'slide-out': 'slideOut 0.6s ease-in-out', // Define the "slide-out" animation
      },
      keyframes: {
        slideIn: {
          '0%': {
            transform: 'translateX(100%)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
        slideOut: {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(100%)',
          },
        },
      },
    },
  },
  plugins: [],
};
