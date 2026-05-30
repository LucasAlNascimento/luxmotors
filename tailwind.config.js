import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
				sans: ["DM Sans", ...defaultTheme.fontFamily.sans],
				display: ["Cormorant Garamond", ...defaultTheme.fontFamily.serif],
      },
      screens: {
        "2xl": "1536px",
        "3xl": "1660px",
        "4xl": "2560px",
      },
    },
  },
  plugins: [],
};
