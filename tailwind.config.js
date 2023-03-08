/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
    "!./node_modules",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'city-bg': "url('https://www.theminimalists.com/wp-content/uploads/2019/08/luca-bravo-9l_326FISzk-unsplash-2.jpg')",
      }
    },
  },
  plugins: [],
}
