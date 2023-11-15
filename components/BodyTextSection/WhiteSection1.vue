<template>
    <div class="order-2 px-8 py-16 md:px-28 md:py-28 bg-white flex flex-col justify-between items-start">
      <h1 class="text-[#646464] mb-16 md:mb-0">{{ $t('whiteSection1.title') }}</h1>
      <p class="text-[#646464]">{{ $t('whiteSection1.description') }}</p>
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