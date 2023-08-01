/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'Dark-cyan': 'hsl(185, 75%, 39%)',
        'Very-dark-desaturated-blue':' hsl(229, 23%, 23%)',
        'Dark-grayish-blue': 'hsl(227, 10%, 46%)',
        'Dark-gray': 'hsl(0, 0%, 59%)'
      },
    },
  },
  plugins: [],
}

