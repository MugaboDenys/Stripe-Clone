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
      keyframes: {
        'gradient-hero' : {
          '0%, 100%' : {
            'background-size': '400% 400%',
            'background-position' : 'right center'
          },
          '100%, 20%' : {
            'background-size': '400% 400%',
            'background-position' : 'left center'
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