<template>
  <section class="grid grid-cols-1 md:grid-cols-3 items-start gap-x-4 mt-16 mb-16 md:mt-24 md:mb-24 lg:mt-32 lg:mb-32"> <!-- Updated to 3 columns -->
    <!-- Coluna Esquerda -->
    <div class="md:col-span-1 h-full w-full dark:bg-[#09090B] bg-[#FAFAFA]  border border-[#000]/[0.1] dark:border-[#fff]/[0.1] border-l-0 shadow-sm focus-visible:ring-1 p-12 mx-auto md:rounded-tr-[40px] md:rounded-br-[40px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
      <h2 class="sticky md:top-64 text-4xl md:text-5xl lg:text-[54px] py-4 font-normal uppercase text-[#09090B] dark:text-[#FAFAFA]  text-left tracking-tight leading-tight">{{ $t('preFooterSection.title') }}</h2>
    </div>

    <!-- Coluna Direita --> 
    <div class="space-y-16 p-12 mx-auto md:py-20 md:col-span-2 leading-loose text-[#09090B] dark:text-[#FAFAFA] w-full text-base md:text-sm lg:text-lg">
      <!-- Item 1 -->
      <p>{{ $t('preFooterSection.text1') }}</p>

      <!-- Item 2 -->
      <p>{{ $t('preFooterSection.text2') }}</p>
      
      <!-- Item 3 -->
      <p>{{ $t('preFooterSection.text3') }}</p>
     
      <!-- Item 4 -->
      <p>{{ $t('preFooterSection.text4') }}</p>

    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n();
</script>

<style scoped>
h2{
  font-family: 'Work Sans', sans-serif;
}
p {
  font-family: 'Helvetica Neue Medium', sans-serif;
}
</style>
