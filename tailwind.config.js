/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        'sandy-gold': '#F9D795',
        'dark-gray': '#4B4B4B'
      },
      margin:{
        '40%': '30%'
      },
      width:{
        'width':"550px"
      }
    },
  },
  plugins: [],
}

