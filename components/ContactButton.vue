
<template>
  <button :class="isMobile ? mobileButtonClass : desktopButtonClass">
    TALK
  </button>
</template>

<script setup>
import { useGlobalState } from '~/composables/useGlobalState';

// Use the global state to get the isMobile flag
const { isMobile } = useGlobalState();

// Define button classes based on device type
const desktopButtonClass = 'bg-blue-500 hover:bg-white hover:text-black text-white py-[9px] px-6 rounded-md text-[17px] xl:text-[20px]';
const mobileButtonClass = 'bg-blue-500 hover:bg-white hover:text-black text-white py-[9px] px-6 rounded-md text-[17px]';

</script>

<style scoped>
/* Custom styling if needed */
</style>
