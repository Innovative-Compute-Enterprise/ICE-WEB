export default defineNuxtConfig({
  app: {
    head: {
      titleTemplate:'Continuum Glow',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name : 'description', content: 'Nuxt TypeScript' },
      ]
    }
  },
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