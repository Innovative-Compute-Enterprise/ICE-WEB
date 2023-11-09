<template>
    <div class="bg-[#646464]  order-1 px-12 py-16 md:px-24 md:py-24 flex flex-col justify-between items-start">
      <h1 class="text-white mb-20 md:mb-0">{{ $t('blueSection.title') }}</h1>
      <p class="text-white">{{ $t('blueSection.description') }}</p>
    </div>
  </template>
  
  <script setup>
  
 import { useI18n } from 'vue-i18n'


  const { t } = useI18n()
  </script>
  <style scoped>
   h1{
    font-family: 'Georgia', sans-serif;
    font-weight: 300;
    line-height: 90%; 
    font-size: 48px;
    letter-spacing: 2.0px;
   }
   p{
    font-family: 'Helvetica Neue Medium', sans-serif;
    font-size: 18px;
    font-weight: 300;
    line-height: 23.17px;
   }
   
  </style>
  