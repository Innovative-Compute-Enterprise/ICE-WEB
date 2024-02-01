<template>
  <div>
    <section class="bg-[#FAFAFA] dark:bg-[#09090B]">
      <HeroSection id="home"/>  
      <CardSection />
      <KeySection />
      <BookDemoSection />
      <OurProcess id="faq" />
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
/* Adjust the z-index for subsequent sections if necessary */
</style>
