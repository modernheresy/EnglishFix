/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./reviews/**/*.html"],
  theme: {
    extend: {
      colors: {
        'paper': '#F9F7F2',
        'ink': '#2C3E50',
        'terracotta': '#C05D0D',
      },
      fontFamily: {
        serif: ['Merriweather', 'serif'],
        sans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}