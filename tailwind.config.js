/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary" : "#0A192F",
        "secondary" : "#0F97316",
        "tertiary" : "#54D6BB",
      }
    },
  },
  plugins: [],
}