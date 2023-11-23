<template>
  <div class="bg-[#44ff23]  py-20 flex flex-col items-center justify-center">
    <a href="#" class="cursor-pointer ">
      <h2 class="block md:hidden custom-text text-white uppercase tracking-wider font-medium text-[4.875rem] lg:text-[7.5rem] xl:text-[8.75rem]">{{ $t('bookSection.titleMobile') }}</h2>
      <h2 class="hidden md:block custom-text text-white uppercase tracking-wider font-medium text-[4.875rem] lg:text-[7.5rem] xl:text-[8.75rem]">{{ $t('bookSection.titlePC') }}</h2>
    </a>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'


const { t } = useI18n();
</script>

<style scoped>
.custom-text {
  font-style: normal;
  line-height: 11.25rem; /* 111.731% */
  letter-spacing: -0.188rem;
}
.gradient {
  background-clip: text;
  -webkit-background-clip: text;
  background-image: linear-gradient(120deg, #02BDFF, #9316b4, #da3b3b, #fff40f, #fe5420);
  background-size: 180% 180%; /* Increased to allow for vertical movement */
  animation: gradientAnimation 8s linear infinite;
  transition: background-color 0.3s ease, color 0.3s ease; /* Smooth transition for background and text color */
}
@keyframes gradientAnimation {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

</style>
