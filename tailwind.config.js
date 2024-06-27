/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-red" : "#DC4A2D",
        "logo-bg" : "#E7E7E7",
        "nav-text-color" : "#B0B0B0",
        "title-text-color" : "#888888"
      },
    },
  },
  plugins: [],
}