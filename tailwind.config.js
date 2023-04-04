/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        creams: "#ffedbb",
      },
    },
  },
  plugins: [
    //require('tailwind-scrollbar-hide')
    require("hide-tailwind-scrollbar"),
  ],
};
