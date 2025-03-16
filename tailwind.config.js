/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'valorant-red': '#FF4655',
        'valorant-black': '#111111',
        'valorant-grey': '#1F2326',
        'valorant-light': '#ECE8E1'
      },
      fontFamily: {
        'tungsten': ['Tungsten', 'sans-serif'],
      },
    },
  },
  plugins: [],
};