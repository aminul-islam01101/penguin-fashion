/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  content: ["./public/**/*.html"],
  theme: {
    container: { 
      center: true,
      
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      
      },



      
    },
  },
  plugins: [],
}