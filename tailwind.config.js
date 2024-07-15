/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'epilogue500': ["EpilogueNormal", "sans-serif"],
        'epilogue700': ["EpilogueBold", "sans-serif"],
      },
      colors: {
        'almost-white': 'hsl(0, 0%, 98%)',
        'medium-gray': 'hsl(0, 0%, 41%)',
        'almost-black': 'hsl(0, 0%, 8%)'
      },
      screens: {
        'lg': '1140px',
      },
    },
  },
  plugins: [],
}

