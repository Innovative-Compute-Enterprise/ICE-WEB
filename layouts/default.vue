<!-- layouts/default.vue -->
<template>
  <div class="min-h-screen flex flex-col">
    <!-- Display loading component only when isLoading is true -->
    <Loading v-if="isLoading" />
    <!-- Render the page content when not loading -->
    <div v-else class="flex flex-col h-full">
      <Header />
      <!-- Ensure NuxtPage is wrapped in a div for proper rendering -->
      <div class="flex-grow">
        <NuxtPage />
      </div>
      <Footer />
      <CookieBanner />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, defineAsyncComponent } from 'vue';

// Asynchronous components
const Header = defineAsyncComponent(() => import('@/components/Header/Header.vue'));
const Footer = defineAsyncComponent(() => import('@/components/FooterSection/Footer.vue'));
const CookieBanner = defineAsyncComponent(() => import('@/components/CookieBanner.vue'));
const Loading = defineAsyncComponent(() => import('@/components/Loading.vue'));

const isLoading = ref(true);

onMounted(async () => {
  // Your data fetching or component loading logic
  isLoading.value = false;
});
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
