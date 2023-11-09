<template>
  <section class="bg-white grid grid-cols-1 md:grid-cols-2 items-start">
    <!-- Coluna Esquerda -->
    <div class="h-full bg-black px-12 py-16 md:px-24 md:py-24 mb-28 ">
      <h2 class="sticky top-24 
      text-[48px] md:text-[72px] leading-[80.78px] text-white text-left">{{ $t('preFooterSection.title') }}</h2>
    </div>

    <!-- Coluna Direita --> 
    <div class="h-full space-y-16 px-10 py-16 md:px-12 md:py-20">
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

const { t } = useI18n()
</script>

<style scoped>
h2{
  font-family: 'Georgia', sans-serif;
}
p {
  font-family: 'Helvetica Neue Medium', sans-serif;
  font-size: 21.09px;
  line-height: 23.09px;
}
</style>
