/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FFE2E2',
        secondary: '#FF597B',
        card: '#EEEEEE',
      },
    },
    fontFamily: {
      hand: ['Cedarville Cursive'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
