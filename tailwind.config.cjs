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
      gray: colors.gray,
    },
  },
  plugins: [],
}
