<template>
    <div class="bg-[#dfdfdf]  order-1 px-8 py-16 md:px-28 md:py-28 flex flex-col justify-between items-start">
      <h1 class="text-[#646464] mb-20 md:mb-0">{{ $t('blueSection.title') }}</h1>
      <p class="text-[#646464]">{{ $t('blueSection.description') }}</p>
    </div>
  </template>
  
  <script setup>
  
 import { useI18n } from 'vue-i18n'


  const { t } = useI18n();

  </script>

  <style scoped>
   h1{
    font-family: 'Georgia', sans-serif;
    font-weight: 300;
    line-height: 90%; 
    font-size: 3rem;
    letter-spacing: 0.188;
   }
   p{
    font-family: 'Helvetica Neue Medium', sans-serif;
    font-size: 1.125rem;
    font-weight: 300;
    line-height: 1.438rem;
   }
   
  </style>
  