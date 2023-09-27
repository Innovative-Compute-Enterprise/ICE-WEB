<template>
  <section>
    <HeroSection />
    <ContextSection />
    <KeySection />
    <BookDemoSection />
  </section>
</template>

<script setup>
import HeroSection from '~/components/HeroSection.vue';
import ContextSection from '~/components/ContextSection.vue';
import KeySection from '~/components/KeySection.vue';
import BookDemoSection from '~/components/BookDemoSection.vue'; 
</script>

<style scoped>
body {
  overflow-x: hidden;
  background-color: #FEFEFE;
}
</style>
