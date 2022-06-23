const colors = require("tailwindcss/colors")

module.exports = {
  content: [],
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    fontFamily: {
      body: ["Nunito"],
      porto: ["Porto"],
      portica: ["Portica"],
    },
    extend: {
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
      animation: {
        wavy: "wavy 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
