/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      recipes: ["Recipes", "sweet-sans"],
      marcher: ["Marcher", "sweet-sans"],
      sweet: ["Sweet", "sweet-sans"],
      american: ["American", "sweet-sans"],
    },
    extend: {
    },
  },
  plugins: [],
}

