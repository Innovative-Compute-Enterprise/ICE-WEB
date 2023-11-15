<template>
  <div>
  <section>
    <HeroSection id="home"/>
    <KeySection />
    <BookDemoSection  />
    <PreFooter id="faq" />
  </section>
  </div>
</template>

<script setup>
import HeroSection from '@/components/HeroSection/HeroSection.vue';
import KeySection from '@/components/KeySection/KeySection.vue';
import BookDemoSection from '@/components/KeySection/BookDemoSection.vue'; 
import PreFooter from '@/components/FooterSection/PreFooter.vue';
</script>

<style scoped>
body {
  overflow-x: hidden;
  background-color: #000000;
  }
</style>
