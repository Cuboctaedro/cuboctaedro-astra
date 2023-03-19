const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    'src/**/*.astro'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Source Sans 3"', ...fontFamily.sans],
        serif: ['"Source Serif 4"', ...fontFamily.serif],
      },
      spacing: {
        'container-1': '20rem', // 320px
        'container-2': '40rem', // 640 px
        'container-3': '60rem', // 960 px
        'container-4': '80rem', // 1280 px
        'container-5': '100rem', // 1600 px
        'column-1': '18rem', // 288px
        'column-2': '38rem', // 608 px
        'column-3': '58rem', // 928 px
        'column-4': '78rem', // 1248 px
        'column-5': '98rem', // 1568 px
      }
    },
  },
  plugins: [],
}
