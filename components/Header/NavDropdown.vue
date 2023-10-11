<template>
  <div class="relative">
    <!-- Button styling based on isMobile -->
    <button @click="toggleDropdown" class="bg-black text-white leading-6 px-5 py-1 rounded-sm text-[17px] xl:text-[20px]" aria-haspopup="true" :aria-expanded="isDropdownOpen.toString()">
      ABOUT US
      <svg v-if="!isDropdownOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 inline-block pb-1" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"></path>
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 inline-block pb-1" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </button>
    
    <!-- Dropdown styling based on isMobile -->
    <div v-if="isDropdownOpen" class="absolute mt-2 rounded-md shadow-md bg-white p-4 text-[17px]" :class="isMobile ? 'bottom-full mb-2 left-0 w-[290px] text-[14px]' : 'left-0 md:w-[250px] lg:w-[255px] xl:w-[278px]'">
      <p class="font-georgia">Continuum Glow stands for continuous technological innovation that brings a glow to your operations and business decisions</p>
      <div class="flex space-x-2 py-2">
        <!-- Adicione seus ícones de redes sociais aqui -->
      </div>
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
