<template>
  <div>
    <Header />
    <NuxtLoadingIndicator/>
    <Nuxt />
  </div>  
</template>

<script setup>
import Header from '~/components/Header.vue';
import NuxtLoadingIndicator from '~/components/NuxtLoadingIndicator.vue';
</script>

<style scoped>
body {
  overflow-x: hidden;
  background-color: #FEFEFE;
}
</style>
