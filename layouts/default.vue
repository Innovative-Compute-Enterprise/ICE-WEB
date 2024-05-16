<!-- layouts/default.vue -->
<template>
  <div class="min-h-screen flex flex-col">
      <Header />
      <div class="flex-grow">
        <NuxtPage />
        <LoadingScreen />
      </div>
      <Footer />
    </div>
</template>

<script setup>
import Header from '@/components/Header/Header.vue';
import Footer from '@/components/FooterSection/Footer.vue';
import LoadingScreen from '@/components/LoadingScreen.vue';
</script>

<style scoped>
/* Ensure the body takes up at least the height of the viewport */
body {
  margin: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Additional styles if needed */
</style>
