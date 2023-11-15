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
    [
      '@nuxtjs/i18n',
      
      { 
        fallbackLocale: 'en',
        defaultLocale: 'en',
        detectBrowserLanguage: {
          useCookie: true,
          cookieKey: 'i18n_redirected',
        },
      strategy: 'prefix_and_default',
      langDir: 'locales/',
      locales: [
        
        {
          code: 'en',
          iso: 'en-US',
          file: 'en-US.json'
        },
        {
          code: 'pt',
          iso: 'pt-BR',
          file: 'pt-BR.json'
        }
      ],
        },
    ]
  ],
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
