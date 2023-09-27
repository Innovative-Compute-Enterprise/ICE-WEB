<template>
    <section class="hero-section">
      <HeroBackground />
      <HeroText />
    </section>
  </template>
  
  <script setup>
  import HeroBackground from './HeroBackground.vue';
  import HeroText from './HeroText.vue';
  
  </script>
  
  <style scoped>
  .hero-section {
    position: relative;
    width: 100%;
    height: 100vh;
  }
  </style>
  