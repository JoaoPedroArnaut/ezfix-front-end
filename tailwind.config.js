module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    maxHeight: {
      'screen/2':'150vh'
     },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1440px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      spacing: {
        '96': '400px',
        '15':'17%',
        '45': '48%',
      },
      backgroundImage: {
        'banner': "url('/broken-screen-smartphone-6137698_1920 (2) 1.png')",
      }
    },
    colors: {
      blue: {
        light: '#C2E1F6',
        DEFAULT: '#008BEA',
        dark: '#15374E',
      },
      white: {
        DEFAULT: '#ffffff'
      },
      black: {
        DEFAULT: '#000000'
      },
      gray:{
        DEFAULT: '#CCCCCC'
      },
      amarelo:{
        DEFAULT: '#ffd700'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}