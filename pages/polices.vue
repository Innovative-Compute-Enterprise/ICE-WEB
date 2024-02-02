<template>
  <div>
    <div class="bg-white">
      <!-- Hero Section -->
      <div class="hero flex items-center justify-center h-[28.5rem] md:h-[38.5rem]">
        <li class="list-none">
              <h1 class="hero-title leading-tight  max-w-screen-2xl tracking-wide text-center text-[#FAFAFA] text-6xl md:text-7xl lg:text-8xl font-bold mx-auto my-auto">{{$t('policies.title')}}</h1>
        </li>
      </div>
  
      <!-- Policies Container -->
      <div class="policies-container">
        <!-- Privacy Policy Section -->
        <section id="privacy-policy">
          <h2>{{$t('policies.privacyPolicy')}}</h2>
          <p>{{$t('policies.privacyPolicyDesc')}}</p>
        </section>
    
        <!-- Cookie Policy Section -->
        <section id="cookie-policy">
          <h2>{{$t('policies.cookiePolicy')}}</h2>
          <p>{{$t('policies.cookiePolicyDesc')}}</p>
        </section>
  
        <!-- Copyright Notice Section -->
        <section id="copyright-notice">
          <h2>{{$t('policies.copyrightNotice')}}</h2>
          <p>{{$t('policies.copyrightNoticeDesc')}}</p>
        </section>
  
        <!-- Terms of Service Section -->
        <section id="terms-services" class="mb-12">
          <h2>{{$t('policies.termsOfService')}}</h2>
          <p>{{$t('policies.termsOfServiceDesc')}}</p>
        </section>
      </div>
    </div>
  </div>
</template>

  
  <script setup>
  useSeoMeta({
  title: '[title]',
  description: '[description]',
  ogTitle: '[og:title]',
  ogDescription: '[og:description]',
  ogImage: '[og:image]',
  ogUrl: '[og:url]',
  twitterTitle: '[twitter:title]',
  twitterDescription: '[twitter:description]',
  twitterImage: '[twitter:image]',
  twitterCard: 'summary'
})

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png'
    }
  ]
});
  </script>
  
  <style scoped>

  body {
  overflow-x: hidden;
  background-color: #000000;
  }
  .hero {
    background-color: #fe5420; /* Light grey background for contrast */
    text-align: center;
  }
  
  .hero-title {
    color: #ffffff; /* Dark text for readability */
  }
  
  .policies-container {
    max-width: 53.125rem;
    margin: auto;
    padding: 2rem;
    line-height: 1.6;

  }
  
  .policies-container h2 {

    margin-top: 3rem;
    font-size: 2.375rem; /* Clear section headings */
    font-weight: 600;
  }
    p{
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;


    }
  
  /* Add more styling as needed */
  </style>
  