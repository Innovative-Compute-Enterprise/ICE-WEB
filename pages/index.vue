<template>
  <section>
    <HeroSection />
    <ContextSection />
  </section>
</template>

<script setup>
import HeroSection from '~/components/HeroSection.vue';
import ContextSection from '~/components/ContextSection.vue';
// Any homepage logic can go here
</script>

<style scoped>
body {
  overflow-x: hidden;
  background-color: #FEFEFE;
}
</style>
