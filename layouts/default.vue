<!-- layouts/default.vue -->
<template>
  <div class="min-h-screen flex flex-col">
      <Header />
      <div class="flex-grow">
        <NuxtPage />
        <LoadingScreen />
      </div>
      <Footer />
      <CookieBanner />
    </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';


// Asynchronous components
const Header = defineAsyncComponent(() => import('@/components/Header/Header.vue'));
const Footer = defineAsyncComponent(() => import('@/components/FooterSection/Footer.vue'));
const CookieBanner = defineAsyncComponent(() => import('@/components/CookieBanner.vue'));
const LoadingScreen = defineAsyncComponent(() => import('@/components/LoadingScreen'));

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
