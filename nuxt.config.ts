export default defineNuxtConfig({
  modules: ['@nuxtjs/i18n','@nuxtjs/robots','@pinia/nuxt'],
  ssr: true,
  i18n: {
    langDir: 'locales', 
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    locales: [
      {
        code: 'en',
        file: 'en-US.json',
      },
      {
        code: 'pt',
        file: 'pt-BR.json',
      },
    ],
    
  },

  plugins: [
    '~/plugins/global-state.js', // Your existing plugins
  ],
  

  css: [
    '~/assets/css/main.css',
    'tailwindcss/tailwind.css'
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'robots', content: 'noindex, noarchive, nofollow' },
      ],
    },
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    },
  
  },

  build: {
    analyze: false,
  },

  devtools: {
    timeline: {
      enabled: true,
    },
  },
})