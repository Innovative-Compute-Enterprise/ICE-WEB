<template>
  <NuxtLayout>
      <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
console.log('Be the Change.');
</script>

<style>
body {
  overflow-x: hidden;
  background-color: #000000;
  }
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
