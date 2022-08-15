const colors = require("tailwindcss/colors")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      body: ["sans-serif"],
      porto: ["Porto"],
      portica: ["Portica"],
    },
    extend: {
      animation: {
        wavy: "wavy 2s ease-in-out infinite",
      },
      boxShadow: {
        neuroDark: "20px 20px 60px #1a2332, -20px -20px 60px #232f44;",
        glowOrange: "0 0 10px " + colors.orange[400],
        glowSky: "0 0 10px " + colors.cyan[500],
        glowWhite: "0 0 8px " + colors.white,
        orangeButton: "20px 20px 60px #d57c33, -20px -20px 60px #ffa845;",
      },
      colors: {
        black: "#181a24",
      },
      keyframes: {
        wavy: {
          "0%": { transform: "translateY(0px)" },
          "10%": { transform: "translateY(-20px)" },
          "20%,100%": { transform: "translateY(0px)" },
        },
      },
    },
  },
  plugins: [],
}
