<template>
  <section class="py-[48px] my-[128px] text-center text-[#09090B] dark:text-[#FAFAFA] w-full justify-center">
    <!-- Title section -->
    <div class="p-[12px] mb-6">
      <h1 class="md:text-[48px] text-[40px] font-[700] md:leading-[48px] leading-[40px] tracking-[-2.16px]">{{ $t('ourProcess.title') }}</h1>
    </div>
    <!-- Text section centralized and justified -->
    <div class="leading-relaxed text-[21px] text-justify max-w-[824px] mx-auto">
      <p class="py-[24px] mx-[24px] md:mx-[96px]">{{ $t('ourProcess.text1') }}</p>
      <p class="py-[24px] mx-[24px] md:mx-[96px]">{{ $t('ourProcess.text2') }}</p>
      <p class="py-[24px] mx-[24px] md:mx-[96px]">{{ $t('ourProcess.text3') }}</p>
      <p class="py-[24px] mx-[24px] md:mx-[96px]">{{ $t('ourProcess.text4') }}</p>
      <p class="py-[24px] mx-[24px] md:mx-[96px]">{{ $t('ourProcess.text5') }}</p>
    </div>
  </section>
</template>

<script setup>

</script>

<style scoped>
h2 {
  font-family: "Mona Sans";
  font-stretch: 100%;
}
p {
  font-family: "Open Sans", sans-serif;
}
</style>
