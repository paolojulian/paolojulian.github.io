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
        neuroPink: `${colors.slate[900]} 6px 6px 11px, ${colors.slate[600]} -4px -4px 9px`,
        glowOrange: "0 0 11px " + colors.orange[400],
        glowPink: "0 0 11px " + colors.rose[400],
        glowDanger: "0 0 11px " + colors.rose[600],
        glowSky: "0 0 11px " + colors.cyan[500],
        glowWhite: "0 0 8px " + colors.white,
        orangeButton: "20px 20px 60px #d57c33, -20px -20px 60px #ffa845;",
      },
      colors: {
        black: "#181a24",
      },
      dropShadow: {
        glowWhite: "0 0 2px rgba(255,255,255,0.7)",
        glowBlack: "0 0 5px rgba(0,0,0,0.45)",
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
