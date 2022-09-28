const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    screens: {
      'mobile': {'max': '640px'},
      'desktop': {'min': '640px'}
    },
    extend: {},
    colors: {
      'primary': '#353353',
      'primaryl1': '#585680',
      'tprimary': '#f8f9fa',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      blue: colors.blue,
    },
  },
  plugins: [],
}
