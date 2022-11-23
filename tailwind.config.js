/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      backgroundImage : {
        bgGlobe : 'url(/src/globebg.png)'
      },
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
      fontSize : {
        bigFont : '5.5rem'
      },
      margin : {
        mt1 : '10rem',
        mt2 : '14rem',
        mt3 : '20rem'
      },
      width : {
        100 : '100rem'
      },
      height : {
        'h1' : '64vh',
        'h2' : '80vh',
        'h3' : '30rem',
        'h4' : '60rem',
        'h5' : '64rem'
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