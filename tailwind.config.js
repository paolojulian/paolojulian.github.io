const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

module.exports = {
  purge: [
    './dist/bundle.js',
    './dist/index.html',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      beige: '#808080',
      black: '#000000',
      blue: colors.blue,
      gray: colors.warmGray,
      green: colors.green,
      indigo: colors.indigo,
      midnightBlue: {
        700: '#0F2027',
        600: '#203a43',
        300: '#2C5364'
      },
      pink: colors.pink,
      red: '#eb5757',
      teal: colors.teal,
      transparent: 'transparent',
      violet: colors.violet,
      white: '#ffffff',
      yellow: colors.yellow,
    },
    fontFamily: {
      body: ['Nunito']
    },
    extend: {
      backgroundImage: theme => ({
        'background-pc': "url('/images/background-pc.jpg')",
      })
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function({ addVariant }) {
      addVariant('important', ({ container }) => {
        container.walkRules(rule => {
          rule.selector = `.\\!${rule.selector.slice(1)}`
          rule.walkDecls(decl => {
            decl.important = true
          })
        })
      })
    })
  ],
}