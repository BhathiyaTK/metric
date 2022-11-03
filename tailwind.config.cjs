/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primaryBlue: "#43bae9",
        primaryGreen: "#bbd92a",
        dimWhite: "rgba(255, 255, 255, 0.7)",
        dimDark: "rgba(0, 0, 0, 0.7)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        "4xl": "40px",
        "5xl": "60px",
        "6xl": "80px",
        "7xl": "100px",
      },
      lineHeight: {
        "leading-1": "0.25rem",
        "leading-2": "0.5rem"
      }
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
