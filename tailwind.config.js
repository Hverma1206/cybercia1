/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'cyber-dark': '#0f172a', // Slate-900 equivalent
        'cyber-blue': '#3b82f6', // Blue-500
        'cyber-accent': '#1e3a8a', // Blue-800 for background elements
        'cyber-green': '#10b981', // Emerald-500 for success/practical
        'cyber-red': '#ef4444', // Red-500 for the new tool
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    }
  },
  plugins: [],
}