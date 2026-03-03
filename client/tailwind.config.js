/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Oxanium', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        label: ['Roboto Slab', 'serif'],
      },
    },
  },
  plugins: [
    function({ addComponents }) {
      addComponents({
        '.btn': {
          '@apply px-4 py-2 rounded text-sm transition-colors' : '',
        },
        '.btn-primary': {
          '@apply bg-gray-50 hover:bg-blue-200 text-blue-700 hover:text-orange-800 font-label' : '',
        },
      })
    },
  ],
}
