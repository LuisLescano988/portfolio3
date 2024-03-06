/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      // sans: ["Inter", "system-ui", "Avenir", "Helvetica", "Arial", "sans-serif"],
      recipes: ["Recipes", "sweet-sans"],
      marcher: ["Marcher", "sweet-sans"]
    },
    extend: {},
  },
  plugins: [],
}

