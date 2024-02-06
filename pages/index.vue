<template>
  <div>
    <section class="bg-[#FAFAFA] dark:bg-[#09090B]">
      <HeroSection />  
      <CardSection />
      <KeySection />
      <BookDemoSection />
      <OurProcess />
    </section>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';

const CardSection = defineAsyncComponent(() => import('@/components/HeroSection/CardSection.vue'));
const HeroSection = defineAsyncComponent(() => import('@/components/HeroSection/HeroSection.vue'));
const KeySection = defineAsyncComponent(() => import('@/components/HeroSection/KeySection.vue'));
const BookDemoSection = defineAsyncComponent(() => import('@/components/HeroSection/BookDemoSection.vue')); 
const OurProcess = defineAsyncComponent(() => import('@/components/HeroSection/OurProcess.vue'));

useSeoMeta({
  title: 'Home',
  description: '[description]',
  ogTitle: '[og:title]',
  ogDescription: '[og:description]',
  ogImage: '[og:image]',
  ogUrl: '[og:url]',
  twitterTitle: 'Continuum Glow - Home',
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
      href: '/faviconblack.png'
    }
  ]
});
</script>

<style scoped>
/* Adjust the z-index for subsequent sections if necessary */
</style>
