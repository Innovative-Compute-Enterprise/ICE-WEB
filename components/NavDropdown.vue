<template>
  <div class="relative">
    <!-- Button styling based on isMobile -->
    <button @click="toggleDropdown" :class="isMobile ? mobileButtonClass : desktopButtonClass">
      ABOUT US
      <svg v-if="!isDropdownOpen"
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 inline-block pb-1">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5" />
      </svg>

 
      <svg v-else xmlns="http://www.w3.org/2000/svg" 
      fill="none" viewBox="0 0 24 24" stroke-width="1.5" 
      stroke="currentColor" class="w-8 h-8 inline-block pb-1">
       <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
    
    <!-- Dropdown styling based on isMobile -->
    <div v-if="isDropdownOpen" :class="isMobile ? mobileDropdownClass : desktopDropdownClass">
      <p class="p-2">Continuum Glow stands for continuous technological innovation that brings a glow to your operations and business decisions</p>
      <div class="flex space-x-2 py-2">
    <a href="#" class="text-blue-600">
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50">
    <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
</svg>
    </a>
    <a href="#" class="text-blue-400">
      <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 50 50">
<path d="M 5.9199219 6 L 20.582031 27.375 L 6.2304688 44 L 9.4101562 44 L 21.986328 29.421875 L 31.986328 44 L 44 44 L 28.681641 21.669922 L 42.199219 6 L 39.029297 6 L 27.275391 19.617188 L 17.933594 6 L 5.9199219 6 z M 9.7167969 8 L 16.880859 8 L 40.203125 42 L 33.039062 42 L 9.7167969 8 z"></path>
</svg>
    </a>
    <a href="#" class="text-gray-500">
      <i></i>
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
const desktopButtonClass = 'bg-black text-white leading-8 px-5 py-2 rounded-sm text-[17px] xl:text-[20px]';
const mobileButtonClass = 'bg-black text-white leading-8 px-5 py-2 rounded-sm text-[17px] xl:text-[20px] ';

const desktopDropdownClass = 'absolute left-0 mt-2 md:w-[250px] lg:w-[255px] xl:w-[278px] rounded-md shadow-md bg-white p-4 text-[17px]';
const mobileDropdownClass = 'absolute bottom-full mb-2 left-0 w-[290px] rounded-md shadow-md bg-white p-2 text-[14px]';

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};
</script>

<style scoped>
p{
font-family: Georgia, 'Times New Roman', Times, serif;

}
</style>
