<template>
  <div class="scroll-smooth">
    <div class="dark:bg-[#09090B] bg-[#FAFAFA]">
      <!-- Hero Section -->
      <div class="hero bg-gradient-to-r from-orange-700 to-orange-600 flex items-center justify-center h-[28.5rem] md:h-[38.5rem]">
        <li class="list-none">
              <h1 class="hero-title leading-tight  max-w-screen-2xl tracking-wide text-center text-[#FAFAFA] text-5xl md:text-6xl lg:text-7xl font-bold mx-auto my-auto">{{$t('policies.title')}}</h1>
        </li>
      </div>
  
      <!-- Policies Container -->
      <div class="policies-container max-w-screen-md text-[#09090B] dark:text-[#FAFAFA] text-left space-y-16 pt-12 px-12">
        <!-- Privacy Policy Section -->
          <pre>{{ data }}</pre>

        <section>
          <h2>{{$t('policies.privacyPolicy')}}</h2>
          <p>{{$t('policies.privacyPolicyDesc')}}</p>
        </section>
    
        <!-- Cookie Policy Section -->
        <section>
          <h2>{{$t('policies.cookiePolicy')}}</h2>
          <p>{{$t('policies.cookiePolicyDesc')}}</p>
        </section>
  
        <!-- Copyright Notice Section -->
        <section >
          <h2>{{$t('policies.copyrightNotice')}}</h2>
          <p>{{$t('policies.copyrightNoticeDesc')}}</p>
        </section>
  
        <!-- Terms of Service Section -->
        <section class="pb-20">
          <h2>{{$t('policies.termsOfService')}}</h2>
          <p>{{$t('policies.termsOfServiceDesc')}}</p>
        </section>
      </div>
    </div>
  </div>
</template>


  <script setup lang="ts">
  const { data } = await useFetch('/api/hello');

  useSeoMeta({
  title: 'Polices',
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
      hid: 'icon',
      rel: 'icon',
      type: 'image/png',
      href: '/faviconorange.png'
    }
  ]
});
  </script>
  
  <style scoped>

  body {
  background-color: #000000;
  }
  .hero {
    background-color: #fe5420; /* Light grey background for contrast */
    text-align: center;
  }
  
  .hero-title {
    color: #ffffff; /* Dark text for readability */
    font-family: "Source Code Pro", monospace;

  }
  
  .policies-container {
    margin: auto;
    line-height: 1.6;
  }
  
  .policies-container h2 {
    margin-top: 3rem;
    font-size: 1.8rem; /* Clear section headings */
    font-weight: 600;
  }
  .policies-container p {
    font-size: 0.8rem; /* Clear section headings */
    font-weight: 600;
  }

  
  /* Add more styling as needed */
  </style>
  