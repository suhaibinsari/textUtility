/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
      Permanent: ['Permanent Marker', 'cursive'],
      Leckerli: ['Leckerli One', 'cursive']
    },

  },
  plugins: [],
}