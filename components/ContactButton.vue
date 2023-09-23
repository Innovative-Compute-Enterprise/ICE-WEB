<template>
  <button :class="buttonClass">
    TALK TO US
  </button>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const buttonClass = ref('bg-blue-500 hover:bg-white hover:text-black text-white py-2 px-3 rounded text-2xl');

const updateWindowSize = () => {
  if (window.innerWidth <= 768) {
    buttonClass.value = 'bg-blue-500 hover:bg-white hover:text-black text-white py-1 px-2 rounded text-lg';
  } else {
    buttonClass.value = 'bg-blue-500 hover:bg-white hover:text-black text-white py-2 px-3 rounded text-2xl';
  }
};

onMounted(() => {
  window.addEventListener('resize', updateWindowSize);
  updateWindowSize();
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateWindowSize);
});
</script>

<style scoped>
/* Custom styling if needed */
</style>
