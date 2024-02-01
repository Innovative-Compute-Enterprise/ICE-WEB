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
import { ref, onMounted } from 'vue';
import Loading from '@/components/Loading.vue';
import Header from '@/components/Header/Header.vue';
import Footer from '@/components/FooterSection/Footer.vue';
import CookieBanner from '@/components/CookieBanner.vue';

const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 1500); // Corrected comment to reflect the 1.5 seconds delay
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
