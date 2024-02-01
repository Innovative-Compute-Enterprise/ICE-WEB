<template>
  <div class="flex flex-col items-center dark:bg-[#09090B] bg-[#FAFAFA] py-12 md:py-16 mx-4">
    <h1 class="text-4xl md:text-5xl 2xl:text-6xl font-bold mb-6 md:mb-8 leading-tight text-center text-[#09090B] dark:text-[#FAFAFA] ">{{ $t('blueSection.title') }}</h1>
    <p class="text-lg md:text-xl md:py-4 py-5 px-2 md:px-1 text-[#71717A] dark:text-[#A1A1AA] max-w-3xl mx-auto mb-16 md:mb-20 leading-relaxed text-center border border-[#000]/[0.1] dark:border-[#fff]/[0.1] shadow-sm focus-visible:ring-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded-[40px]">{{ $t('blueSection.subtitle') }}</p>
    <div class="flex flex-col md:flex-row justify-center items-start md:space-x-8 max-w-6xl leading-relaxed mx-10">
      <p class="text-md md:text-lg text-[#71717A] dark:text-[#A1A1AA] mb-8 md:mb-0 max-w-xl text-left">{{ $t('blueSection.paragraph1') }}</p>
      <p class="text-md md:text-lg text-[#71717A] dark:text-[#A1A1AA] max-w-xl text-left">{{ $t('blueSection.paragraph2') }}</p>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n();
</script>

<style scoped>

</style>
