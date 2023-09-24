export default defineNuxtConfig({
  plugins: [
    '~/plugins/global-state.js'
  ],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})