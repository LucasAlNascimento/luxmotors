/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'fabrikatMedium': ['Fabrikat Medium'],
        'fabrikatBold': ['Fabrikat Bold']
      },
      screens: {
        '2xl': '1536px',
        '3xl': '1660px',
        '4xl': '2560px'
      }
    },
  },
  plugins: [],
}

