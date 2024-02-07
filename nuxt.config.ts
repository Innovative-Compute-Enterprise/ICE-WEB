export default defineNuxtConfig({
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
  experimental: {
    componentIslands: true,
  },

  build: {
    analyze: false,
  },

  plugins: [  
    '~/plugins/global-state.js',
    
  ],
  
  modules: ['@nuxtjs/i18n', '@nuxtjs/robots'],

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

  devtools: {
    timeline: {
      enabled: true,
    },
  },
})