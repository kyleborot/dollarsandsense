/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'blue-900': '#081E3F',
        'blue-700': '#334155',
      },
    },
  },
  plugins: [],
}

