export default defineNuxtConfig({
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
      lazy: true,
      strategy: 'prefix_except_default',
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
