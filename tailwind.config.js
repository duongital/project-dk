/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#D8A1A1',
        secondary: '#AF3742',
        card: '#D9D9D9',
        success: '#4cb71a',
        warning: '#eb9855',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
