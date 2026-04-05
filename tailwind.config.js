/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./reviews/**/*.html"],
  theme: {
    extend: {
      colors: {
        'paper': '#F9F7F2',
        'ink': '#2C3E50',
        'terracotta': '#B85400',
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