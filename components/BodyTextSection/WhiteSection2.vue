<template>
    <div class="order-4 md:order-3 px-12 py-16 md:px-24 md:py-24 bg-[#dd1919] md:bg-white flex flex-col justify-between items-start">
      <h1 class="md:text-[#646464] text-white my-6">{{ $t('whiteSection2.title') }}</h1>
      <p class="text-[#646464]"></p>
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
  </style>