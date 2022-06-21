/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  content: [],
  theme: {
    extend: {},
    colors: {
      'yellow': '#f7c76b',
      'primary': '#34353a',
      'secondary': '#31333b',
      'grey': '#3d3e42',
      'white': '#fffff'
    }
  },
  plugins: [],
}
