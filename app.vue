<script setup lang="ts">;
console.log('Be the Change.');

useHead({
  title: 'Continuum Glow',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    // ... outras metatags que você possa ter
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
  ]
})
</script>

<template>
<Header />
  <NuxtPage />
</template>

<style scoped>

</style>
