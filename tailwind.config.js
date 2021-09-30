module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      blue: {
        light: '#47ABEE',
        DEFAULT: '#008BEA',
        dark: '#235475',
      },
      white: {
        DEFAULT: '#ffffff'
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}