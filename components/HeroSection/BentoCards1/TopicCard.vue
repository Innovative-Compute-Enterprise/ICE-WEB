<template>
  <div class="relative lg:p-[48px] md:p-[24px] p-[16px] h-full rounded-[40px] dark:custom-border-dark custom-border overflow-hidden">

    <CircularGradient />

    <div class="relative z-10 flex justify-between p-2">
      <div class="text-start space-y-4">
        <h2 class="text-[24px] leading-6 font-[600] text-[#09090B] md:mb-[128px] mb-[256px] dark:text-[#FAFAFA]">{{ $t('grid.title') }}</h2>
        <p class="text-[16px] md:w-[50%] w-full leading-[16px] text-[#09090B] dark:text-[#FAFAFA]">{{ $t('grid.topic') }}</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import CircularGradient from './CircularGradient.vue'; 
</script>

<style scoped>
/* Your scoped styles if any */
h2 {
  font-family: "Mona Sans";
  font-stretch: 100%;
}
p {
  font-family: "Open Sans", sans-serif;
  font-weight: 500;
}
</style>
