/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2D96BC',
        primaryDark: '#2585a6',
      },
      boxShadow: {
        custom: "0px 8px 24px 0px #959DA51A",
      },
      fontFamily: {
        exo: ['"Exo 2"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
