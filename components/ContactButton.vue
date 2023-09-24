
<template>
  <button :class="isMobile ? mobileButtonClass : desktopButtonClass">
    TALK TO US
  </button>
</template>

<script setup>
import { useGlobalState } from '~/composables/useGlobalState';

// Use the global state to get the isMobile flag
const { isMobile } = useGlobalState();

// Define button classes based on device type
const desktopButtonClass = 'bg-blue-500 hover:bg-white hover:text-black text-white py-2 px-3 rounded text-xl';
const mobileButtonClass = 'bg-blue-500 hover:bg-white hover:text-black text-white py-1 px-1 rounded text-sm';

</script>

<style scoped>
/* Custom styling if needed */
</style>
