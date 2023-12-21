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
      }
    },
  },
  plugins: [],
}

