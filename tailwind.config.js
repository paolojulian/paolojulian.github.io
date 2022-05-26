const colors = require("tailwindcss/colors")

module.exports = {
  content: [],
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    fontFamily: {
      body: ["Nunito"],
    },
    extend: {
      colors: {
        black: '#080707',
      },
      keyframes: {
        'wavy': {
          '0%': { transform: 'translateY(0px)' },
          '10%': { transform: 'translateY(-20px)' },
          '20%,100%': { transform: 'translateY(0px)' },
        },
      },
      animation: {
        'wavy': 'wavy 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
