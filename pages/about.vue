<template>
  <div class="scroll-smooth">
  <div class="hero bg-gradient-to-r from-red-700 to-red-500 flex items-center justify-center h-[28.5rem] md:h-[38.5rem]">
      <li class="list-none">
            <h1 class="hero-title max-w-screen-2xl text-center text-[#FAFAFA] text-[72px] leading-[72px] font-[700] mx-auto my-auto">{{$t('aboutPage.title')}}</h1>
      </li>

  </div>
  <div class="my-8">
  <ContextSection />
  </div>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';

const ContextSection = defineAsyncComponent(() => import('@/components/About/ContextSection.vue'));
useSeoMeta({
  title: 'About Us',
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
      sizes: '64x64',
      rel: 'icon',
      type: 'image/x-icon',
      href: '/faviconred.png'
    }
  ]
});
</script>

<style scoped>
body {
  overflow-x: hidden;
}
.hero {
  text-align: center;
}

.hero-title {
  font-family: "Mona Sans";
  font-stretch: 100%;
}
  
</style>
