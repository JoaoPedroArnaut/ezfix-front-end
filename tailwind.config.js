module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
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
        DEFAULT: '#CCCCCC',
        light: '#F1F6F9',
        dark: '#7C7878'
      },
      amarelo:{
        DEFAULT: '#ffd700'
      },
      green:{
        DEFAULT: '#14CA3C'
      },
      red: '#C62424'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}