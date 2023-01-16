/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'primary': '#0FBA81',
        'secondary': '#4F46E5',
        'tertiary': '#0EA5E9',
        'success': '#84cc16',
        'warning': '#EAB308',
        'error': '#D41976',
        'surface': '#495a8f',
      },
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    heights: {
      'button-height': '2rem',
    },
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.btn': {
          backgroundColor: theme('colors.primary'),
        }
      })
    })
  ],
  modules: {
    backgroundColors: ['bg-blue-500'],
    backgroundSize: [],
    backgroundPosition: [],
    backgroundRepeat: [],
    applyComplexClasses: ['responsive','apply'],
  },
}
