/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#050508',
        surface: '#0f0f1a',
        primary: '#6c63ff',
        secondary: '#22d3a5',
        accent: '#f472b6'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Syne', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
