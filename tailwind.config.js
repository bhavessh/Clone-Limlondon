/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-main': '#1c1c1c',
        'red': '#ff3131',
        'black-main-2': '#151515',
        'brand-color': '#af9fff',
        'white-main': 'white',
        'text': '#797573',
        'form-underline': '#dad8d5',
        'grey': '#7b7b7b',
        'floral-white': '#f4f3ec',
        'border-faq': '#dad8d5',
        'card-step-border-course': '#7b7b7b',
        'dylan-card': 'whitesmoke',
        'popup-includes-text': '#675671',
        'popup-close-btn': '#f3f3f3',
        'book-couse-label-dot': '#d9d9d9',
      },
      screens: {
        'max-1920': { 'max': '1920px' },
        'max-1440': { 'max': '1440px' },
        'max-991': { 'max': '991px' },
        'max-767': { 'max': '767px' },
        'max-479': { 'max': '479px' },
      },
      fontFamily: {
        darker: ['"Darker Grotesque"', 'sans-serif'], 
        dm: ['"DM Sans"', 'sans-serif'], 

      },

    }
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const newUtilities = {
        '.px-global': {
          'padding-left': '2.5rem',
          'padding-right': '2.5rem',
        },
        [`@media (max-width: ${theme('screens.max-767.max')})`]: {
          '.px-global': {
            'padding-left': '1.25rem',
            'padding-right': '1.25rem',
          },
        },
      }
      addUtilities(newUtilities)
    },
  ],
}
