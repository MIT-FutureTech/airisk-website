/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [],
  theme: {
    extend: {
      fontFamily:{
        'sans': ['"Roboto Condensed"', ...defaultTheme.fontFamily.sans],
      }
    }
  },
  plugins: [],
}

