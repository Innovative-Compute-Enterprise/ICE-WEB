<!-- app.vue -->
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

/* Page transition styles */
.page-enter-active, .page-leave-active {
  transition: all 0.3s;
}
.page-enter-from, .page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

</style>
