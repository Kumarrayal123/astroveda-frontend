/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'astro-pink': '#FF7BB5',
        'astro-orange': '#FFB86B',
        'astro-yellow': '#FFE07A',
        'astro-maroon': '#4A0404',
        'astro-gold': '#D4AF37',
        'primary-text': '#1F1F1F',
        'secondary-text': '#444444',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
