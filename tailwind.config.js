/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: '#1A1A1A',
            h4: {
              marginTop: '1.5em',
              color: '#1A1A1A',
            },
            a: {
              color: '#A32035',
              '&:hover': {
                color: '#A32035AA',
              },
            },
          },
        },
      },

      fontFamily:{
        'sans': ['"Roboto Condensed"', ...defaultTheme.fontFamily.sans],
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),

  ],
}

