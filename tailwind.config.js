/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html, js}", "./pages/*.{html, js}"],
  theme: {
    extend: {
      colors: {
        "red-moment": "#FF0000",
        "white-moment": "#FFFFFF",
        "yellow-moment": "#FFFF00"
      },
      keyframes: {
        loadBar : {
          '0%' : { width: '0%' },
          '15%': { width: '15%' },
          '24%': { width: '24%' },
          '53%': { width: '53%' },
          '82%': { width: '82%' },
          '100%': { width: '100%' },
        },
        fadeOut : {
          '0%' : { opacity: '1' },
          '67%' : { opacity: '1' },
          '100%' : { opacity: '0' },
        },
        fadeIn : {
          '0%' : { opacity: '0' },
          '75%' : { opacity: '0' },
          '100%' : { opacity: '1' },
        },
        pulsate : {
          '0%' : { transform: 'scale(1) rotate(-20deg)' },
          '50%' : { transform: 'scale(1.1) rotate(-20deg)' },
          '100%' : { transform: 'scale(1) rotate(-20deg)' }
        },
      }
    },
  },
  plugins: [],
}

