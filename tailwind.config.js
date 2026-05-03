/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./reviews/**/*.html"],
  theme: {
    extend: {
      colors: {
        'paper': '#F9F7F2',
        'ink': '#2C3E50',
        'terracotta': '#B85400',
        'highlighter': '#FFF2C',
      },
      fontFamily: {
        serif: ['Merriweather', 'serif'],
        sans: ['Open Sans', 'sans-serif'],
      },
      borderRadius: {
        'x1-plus': '24px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
