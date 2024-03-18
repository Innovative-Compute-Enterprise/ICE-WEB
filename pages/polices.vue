<template>
  <div class="scroll-smooth">
    <div class="dark:bg-[#09090B] bg-[#FAFAFA]">
      <!-- Hero Section -->
      <div class="hero bg-gradient-to-r from-orange-700 to-orange-600 flex items-center justify-center h-[28.5rem] md:h-[38.5rem]">
        <li class="list-none">
              <h1 class="hero-title max-w-screen-2xl text-center text-[#FAFAFA] text-[72px] leading-[72px] font-[700] mx-auto my-auto">{{$t('policies.title')}}</h1>
        </li>
      </div>
  
      <!-- Policies Container -->
      <div class="policies-container max-w-screen-md text-[#09090B] dark:text-[#FAFAFA] text-left pt-12 px-12">
        <!-- Privacy Policy Section -->
        <section class="my-[48px]">
          <h2>{{$t('policies.privacyPolicy')}}</h2>
          <p>{{$t('policies.privacyPolicyDesc')}}</p>
        </section>
    
        <!-- Cookie Policy Section -->
        <section class="my-[48px]">
          <h2>{{$t('policies.cookiePolicy')}}</h2>
          <p>{{$t('policies.cookiePolicyDesc')}}</p>
        </section>
  
        <!-- Copyright Notice Section -->
        <section class="my-[48px]">
          <h2>{{$t('policies.copyrightNotice')}}</h2>
          <p>{{$t('policies.copyrightNoticeDesc')}}</p>
        </section>
  
        <!-- Terms of Service Section -->
        <section class="pb-20 my-[48px]" >
          <h2>{{$t('policies.termsOfService')}}</h2>
          <p>{{$t('policies.termsOfServiceDesc')}}</p>
        </section>
      </div>
    </div>
  </div>
</template>


  <script setup lang="ts">

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
    font-family: "Mona Sans";
    font-stretch: 100%;
  }
  
  .policies-container {
    margin: auto;
  }
  
  .policies-container h2 {
    font-size: 40px;
    font-weight: 700;
  }
  .policies-container p {
    font-size: 18px; /* Clear section headings */
    font-family: "Open Sans", sans-serif;
    font-weight: 500;
  }

  
  /* Add more styling as needed */
  </style>
  