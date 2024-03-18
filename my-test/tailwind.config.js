/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily : {
        'Poppins': ['Poppins']
      },
      colors: {
        'primary-bg': '#062D24',
        'primary-cl': '#052D23',
        'secondary-cl': '#052E24C2',
      }
    },
  },
  plugins: [require("daisyui")],
}

