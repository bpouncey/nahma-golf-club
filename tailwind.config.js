/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: '#1C3A2A',
        sand: '#D9C99E',
        cream: '#F5F0E8',
        charcoal: '#2B2B2B',
        'forest-light': '#2a5040',
        'forest-dark': '#122518',
        'sand-light': '#EAD9B0',
        'sand-dark': '#BCA878',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Source Sans 3"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
