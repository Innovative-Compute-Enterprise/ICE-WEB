<template>
  <section>
    <HeroSection />
    <ContextSection />
    <KeySection />
    <BookDemoSection />
    <PreFooter />
  </section>
</template>

<script setup>
import HeroSection from '~/components/HeroSection/HeroSection.vue';
import ContextSection from '~/components/BodyTextSection/ContextSection.vue';
import KeySection from '~/components/KeySection/KeySection.vue';
import BookDemoSection from '~/components/KeySection/BookDemoSection.vue'; 
import PreFooter from '~/components/FooterSection/PreFooter.vue';
</script>

<style scoped>
body {
  overflow-x: hidden;
  background-color: #FEFEFE;
}
</style>
