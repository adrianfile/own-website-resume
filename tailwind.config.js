module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'zilla':'Zilla Slab Highlight',
      },
      margin: {
        '160': '40rem'
      },
      padding: {
        '160': '40rem'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
