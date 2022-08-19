/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["'Nunito Sans', sans-serif"]
      },
      colors: {
        accent: "#E3E1DC"
      },
      backgroundImage: {
        'hero-sm': "url('../public/image/hero-sm.png')",
        'hero-md': "url('../public/image/hero-md.png')",
        'hero-lg': "url('../public/image/hero-lg.png')",
      },
      spacing: {
        '68': '17rem',
        '94': '23rem'
      }
    },
  },
  plugins: [],
}
