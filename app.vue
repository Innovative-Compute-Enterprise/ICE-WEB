<!-- app.vue -->
<template>
  <NuxtLayout :class="{ 'dark': darkMode }">
      <NuxtPage />
  </NuxtLayout>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const darkMode = ref(false);

function toggleDarkMode() {
  darkMode.value = !darkMode.value;
}
</script>

<style>
:root {
  background: #FAFAFA; 
}

.dark {
  background: #09090B; 
}

body {
  overflow-x: hidden;
}

/* Page transition styles */
.page-enter-active, .page-leave-active {
  transition: all 0.3s;
}
.page-enter-from, .page-leave-to {
  opacity: 0;
  z-index: 999;
  filter: blur(1rem);
}
</style>
