const colors = require('tailwindcss/colors');

const CUSTOM_COLORS = {
  carnation: {
    50: '#fef3f2',
    100: '#ffe4e1',
    200: '#ffcdc8',
    300: '#ffaaa2',
    400: '#fd786c',
    500: '#f65d4f',
    600: '#e32f1f',
    700: '#bf2416',
    800: '#9e2116',
    900: '#832219',
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.tsx', './src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        bg: '#101331',
        primary: colors.cyan,
        gray: colors.neutral,
        'accent-1': '#FAFAFA',
        'accent-2': '#EAEAEA',
        'accent-7': '#333',
        lofi: {
          yellow: '#FCE096',
        },
        success: '#0070f3',
      },
      backgroundImage: {
        'pink-linear':
          'linear-gradient(292.71deg, #FB7185 0%, #FDA4AF 231.55%);',
      },
      spacing: {
        28: '7rem',
      },
      letterSpacing: {
        tighter: '-.04em',
      },
      lineHeight: {
        tight: 1.2,
      },
      fontSize: {
        '5xl': '2.5rem',
        '6xl': '2.75rem',
        '7xl': '4.5rem',
        '8xl': '6.25rem',
      },
      boxShadow: {
        sm: '0 5px 10px rgba(0, 0, 0, 0.12)',
        md: '0 8px 30px rgba(0, 0, 0, 0.12)',
        glowPrimary: '0px 4px 35px 14px rgba(207, 151, 171, 0.25)',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
};
