<template>
<div class="bg-[#646464] order-3 md:order-4 px-8 py-16 md:px-16 md:py-28 flex flex-col justify-between items-start">
  <!-- Top Section -->
            <div class="flex-grow flex flex-col justify-center items-start pb-2 mt-6">
              <div class="bg-glass rounded-tl-[2.75rem] rounded-tr-[1.375rem] shadow-sm p-4">
                <h3 class="text-black p-4">{{ $t('stoneSection.topTitle') }}</h3>
                <p class="text-black p-4">{{ $t('stoneSection.topDescription') }}</p>
                <div class="flex items-center p-4">
                  
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-9 h-9 cursor-pointer hover:text-blue-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                
                </div>
              </div>
            </div>
            
            <!-- Bottom Section -->
            <div class="flex-grow flex flex-col justify-center items-start mb-6 ">
              <div class="bg-glass rounded-br-[1.375rem] shadow-sm p-4">
                <h3 class="text-black p-4">{{ $t('stoneSection.bottomTitle') }}</h3>
                <p class="text-black p-4">{{ $t('stoneSection.bottomDescription') }}</p>
                <div class="flex items-center p-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-9 h-9 cursor-pointer hover:text-blue-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </div>
              </div>
            </div>
            </div>         
</template>

<script setup>
import { useI18n } from 'vue-i18n'


const { t } = useI18n();
</script>

<style scoped>
  p{
    font-family: 'Helvetica Neue Medium', sans-serif;
    font-size: 1.250rem;
    font-weight: 300;
    line-height: 1.438rem;
   }
   h3{
    font-family: 'Georgia', sans-serif;
    font-size: 2.125rem;
    font-weight: 500;
    line-height: 2.125rem;
   }
   .bg-glass{
    background: rgba(255, 255, 255, 0.418);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.10);
    backdrop-filter: blur( 18.5px );
    -webkit-backdrop-filter: blur( 18.5px );
   }
  
</style>