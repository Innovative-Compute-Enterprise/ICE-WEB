<!-- layouts/default.vue -->
<template>
  <div v-if="isLoading">
    <Loading />
  </div>
  <Header v-else />
  <NuxtPage />
  <Footer id="footer" />
  <CookieBanner />
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Loading from '~/components/Loading.vue'; // Make sure the path is correct
import Header from '~/components/Header/Header.vue';
import Footer from '~/components/FooterSection/Footer.vue';
import CookieBanner from '~/components/CookieBanner.vue';

const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 1500); // Remove the loading overlay after 3 seconds
});
</script>

<style scoped>
/* Add any additional styles needed for your default layout */
</style>
