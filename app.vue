<script setup lang="ts">;
console.log('Be the Change.');
import Header from '~/components/Header/Header.vue';
import Footer from '~/components/FooterSection/Footer.vue';
import CookieBanner from '~/components/CookieBanner.vue';
</script>

<template>
<Header />
  <NuxtPage />
<Footer id="footer" />
<CookieBanner />
</template>

<style scoped>
 
</style>
