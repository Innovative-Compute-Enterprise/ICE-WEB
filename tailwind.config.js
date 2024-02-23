/** @type {import('tailwindcss').Config} **/
module.exports = {
  darkMode: 'class',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'card-brain': "url('/images/test.jpg')", // Ensure this path is correct
      },
      // Other theme extensions here
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
