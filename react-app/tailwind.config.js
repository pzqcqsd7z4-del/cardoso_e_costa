/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* preto quente — secções escuras */
        ink: {
          50:  '#F4F2ED',
          100: '#E7E2D6',
          200: '#CFC6B2',
          300: '#B0A489',
          400: '#8D8267',
          700: '#332E26',
          800: '#221F1A',
          900: '#16140F',
        },
        /* terracota — acento principal */
        terracotta: {
          50:  '#FBF3EE',
          100: '#F3E1D3',
          200: '#E6C4A7',
          300: '#D59F72',
          400: '#C17D4C',
          500: '#A85D34',
          600: '#8C4A29',
          700: '#6E3A21',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans:  ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
