<template>
  <div class="relative">
    <!-- Button styling based on isMobile -->
    <button @click="toggleDropdown" :class="isMobile ? mobileButtonClass : desktopButtonClass">
      ABOUT US 
      <svg
        v-if="!isDropdownOpen"
        class="w-8 h-8 inline-block"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M19 9l-7 7-7-7"></path>
      </svg>
      <svg
        v-else
        class="w-8 h-8 inline-block"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 15l7-7 7 7"></path>
      </svg>
    </button>
    
    <!-- Dropdown styling based on isMobile -->
    <div v-if="isDropdownOpen" :class="isMobile ? mobileDropdownClass : desktopDropdownClass">
      ContinuumGlow stands for continuous technological innovation that brings a glow to your operations and business decisions
      <div class="flex space-x-2">
    <a href="#" class="text-blue-600">
      <i class="text-xl">??</i>
    </a>
    <a href="#" class="text-blue-400">
      <i class="text-xl">twitter</i>
    </a>
    <a href="#" class="text-gray-500">
      <i class="text-xl">github</i>
    </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useGlobalState } from '~/composables/useGlobalState';

const isDropdownOpen = ref(false);
const { isMobile } = useGlobalState();

// Define classes based on device type
const desktopButtonClass = 'bg-black text-white py-2 px-2 rounded text-xl';
const mobileButtonClass = 'bg-black text-white py-1 px-1 rounded text-sm';

const desktopDropdownClass = 'absolute left-0 mt-2 w-80 rounded-md shadow-lg bg-white p-4';
const mobileDropdownClass = 'absolute left-0 mt-2 w-60 rounded-sm shadow-lg bg-white p-2';

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};
</script>

<style scoped>
/* Custom styling if needed */
</style>
