/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "hsl(0, 0%, 100%)",
        "dark-gray": "hsl(0, 0%, 52%)",
        "light-gray": "hsl(0, 0%, 98%)",
        "dark-blue": {
          DEFAULT: "hsl(209, 23%, 22%)",
          dark: "hsl(207, 26%, 17%)",
          light: "hsl(200, 15%, 8%)",
        },
      },
    },
  },
  plugins: [],
};
