export default defineNuxtConfig({
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in'
    },
  },
  plugins: [  
    '~/plugins/global-state.js',
    
  ],
  modules: [
      '@nuxtjs/i18n',
  ],
  i18n: {
    lazy:true,
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
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
