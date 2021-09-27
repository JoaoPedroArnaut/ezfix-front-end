module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      indigo: {
        light: '#b3bcf5',
        DEFAULT: '#5c6ac4',
        dark: '#202e78',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}