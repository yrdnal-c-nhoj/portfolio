/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Font Families
      fontFamily: {
        sans: ['Verdana', 'sans-serif'],
        heading: ['Inter Tight', 'sans-serif'],
      },
      
      // Color Palette
      colors: {
        heading: '#CDD6E2',  // Navy blue for headings
        body: '#EEE6E6',    // Dark gray for body text
      },
      
      // Custom box shadows
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.pagetop': {
          color: '#ECF9F1',
          fontFamily: 'Fraunces, serif',
        },
        '.project-title': {
          fontFamily: 'Fraunces, serif',     fontWeight: '500',
          fontSize: '1.25rem',
          color: '#E8ECF3',
        },
        '.project-description': {
          fontFamily: 'Source Serif 4, serif',
          fontSize: '0.875rem',
          color: '#F1E7E7',
        },
          '.miscandlinks': {
          fontFamily: 'Source Serif 4, serif',
          fontSize: '0.875rem',
          color: '#EAE1E1',
        },
      })
    },
  ],
}
