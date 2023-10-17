<template>
  <div class="relative">
    <!-- Button styling based on isMobile -->
    <button @click="toggleDropdown" class="bg-black text-white leading-6 px-3 py-1 rounded-sm text-[17px] xl:text-[20px]" aria-haspopup="true" :aria-expanded="isDropdownOpen.toString()">
      <svg v-if="!isDropdownOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 inline-block" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"></path>
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 inline-block" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </button>
    
   
    <div v-if="isDropdownOpen" class="absolute mt-1 shadow-lg rounded-md bg-black p-4 text-[17px] text-white transition-transform transform scale-95" :class="isMobile ? 'bottom-full mb-1 right-[-10px] w-[150px] text-[14px]' : 'right-[-10px] md:w-[165px] xl:w-[173px]'">      
  <!-- Menu list --> 
  <ul class="p-2 space-y-4 justify-center text-center">
    <li>
      <a href="#" class="block py-2 px-3 rounded-md hover:bg-gray-700 active:bg-gray-600 transition-colors">
        Home
      </a>
    </li>
    <li>
      <a href="#" class="block py-2 px-3 rounded-md hover:bg-gray-700 active:bg-gray-600 transition-colors">
        FAQ
      </a>
    </li>
    <li>
      <a href="#" class="block py-2 px-3 rounded-md hover:bg-gray-700 active:bg-gray-600 transition-colors">
        About
      </a>
    </li>
    <li>
      <a href="#" class="block py-2 px-3 rounded-md hover:bg-gray-700 active:bg-gray-600 transition-colors">
        Survey
      </a>
    </li>
  </ul>
</div>

    </div>
</template>


<script setup>
import { ref } from 'vue';
import { useGlobalState } from '~/composables/useGlobalState';

const isDropdownOpen = ref(false);
const { isMobile } = useGlobalState();

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};
</script>

<style scoped>
.font-georgia {
  font-family: Georgia, 'Times New Roman', Times, serif;
}
</style>

