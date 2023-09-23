
<template>
  <div class="relative">
    <button @click="toggleDropdown" :class="buttonClass">
      ABOUT US 
      <!-- SVGs here -->
      <svg
        v-if="!isDropdownOpen"
        class="w-8 h-10 inline-block"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M19 9l-7 7-7-7"></path>
      </svg>
      <svg
        v-else
        class="w-8 h-10 inline-block"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M5 15l7-7 7 7"></path>
      </svg>
    
    </button>
    <div v-if="isDropdownOpen" :class="dropdownClass">
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
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isDropdownOpen = ref(false);
const buttonClass = ref('bg-black text-white py-2 px-3 rounded text-2xl');
const dropdownClass = ref('absolute left-0 mt-2 w-80 rounded-md shadow-lg bg-white p-4');

const updateWindowSize = () => {
  if (window.innerWidth <= 768) {
    buttonClass.value = 'bg-black text-white py-1 px-2 rounded text-lg';
    dropdownClass.value = 'absolute left-0 mt-2 w-64 rounded-md shadow-lg bg-white p-2';
  } else {
    buttonClass.value = 'bg-black text-white py-2 px-3 rounded text-2xl';
    dropdownClass.value = 'absolute left-0 mt-2 w-80 rounded-md shadow-lg bg-white p-4';
  }
};

onMounted(() => {
  window.addEventListener('resize', updateWindowSize);
  updateWindowSize();
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', updateWindowSize);
});

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};
</script>

<style scoped>
/* Custom styling if needed */
</style>
