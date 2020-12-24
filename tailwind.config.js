const colors = require('tailwindcss/colors')
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        primary: 'Poppins, sans-serif',
        sans: 'Roboto, sans-serif'
      },
      colors: {
        lightBlue: colors.lightBlue,
        cyan: '#2dfbff'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
