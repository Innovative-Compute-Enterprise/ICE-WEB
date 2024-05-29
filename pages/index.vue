<template>
  <div>
    <section class="bg-[#FAFAFA] dark:bg-[#09090B] scroll-smooth">
      <HeroSection />  
      <KeyList />
      <CardSection /> 
      <OurProcess />
      <ModelBrands />     
    </section>
  </div>
</template>

<script setup>
import HeroSection from '@/components/HeroSection/HeroSection.vue';
import KeyList from '@/components/HeroSection/KeyList.vue';
import ModelBrands from '@/components/HeroSection/ModelBrands.vue';
import CardSection from '@/components/HeroSection/CardSection.vue';
import OurProcess from '@/components/HeroSection/OurProcess.vue';

useSeoMeta({
  title: 'Home',
  description: '[description]',
  ogTitle: '[og:title]',
  ogDescription: '[og:description]',
  ogImage: '[og:image]',
  ogUrl: '[og:url]',
  twitterTitle: 'ICE - Home',
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
      sizes: '64x64',
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
