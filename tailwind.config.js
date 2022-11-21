/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      width : {
        'body' : '1280px'
      },
      fontFamily : {
        'noto' : ['Noto Sans', 'sans-serif']
      },
      animation: {
        'gradient-hero' : 'gradient-hero 15s ease infinite'
      },
      fontSize : {
        'h1' : '3.3rem'
      },
      keyframes: {
        'gradient-hero' : {
          '0%, 100%' : {
            'background-size': '200% 100%',
            'background-position' : 'left center'
          },
          '50%' : {
            'background-size': '200% 200%',
            'background-position' : 'right center'
          },
        }
      },
      colors : {
        'paleBlue' : '#0fc4f2',
        'darkBlue' : '#0a2540'
      },
      gridTemplateColumns : {
        'gallery' : '1fr 2fr 16rem'
      },
      gridTemplateRows : {
        'gall' : '7rem 10rem 8rem 3fr'
      }
    },
  },
  plugins: [],
}