const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx}'],
  theme: {
    extend: {},
    colors: {
      'primary': '#353353',
      'primaryl1': '#585680',
      'tprimary': '#f8f9fa',
      'alternative': '#A03E99',

      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      blue: colors.blue,
      purple: colors.purple,
      violet: colors.violet,
      red: colors.red,
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
