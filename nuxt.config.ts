export default defineNuxtConfig({
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    },
  },

  build: {
    analyze: true,
  },

  plugins: [  
    '~/plugins/global-state.js',
    
  ],

  modules: ['@nuxtjs/i18n', '@nuxtjs/robots', "@nuxt/image"],

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