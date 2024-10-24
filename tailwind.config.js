/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['card.html', 'newCard.html'],
  theme: {
    extend: {
      screens: {
        'xs': '576px',
      }
    },
  },
  plugins: [],
}

