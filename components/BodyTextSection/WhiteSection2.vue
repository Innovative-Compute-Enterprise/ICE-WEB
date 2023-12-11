<template>
    <div class="order-4 md:order-3 px-8 py-16 md:px-28 md:py-28 bg-white flex flex-col justify-between items-start">
      <h1 class="text-[#646464] my-6">{{ $t('whiteSection2.title') }}</h1>
      <p class="text-[#646464]"></p>
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
    letter-spacing: 0.125rem;
   }
   
  </style>