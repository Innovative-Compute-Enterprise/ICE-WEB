<template>
  <div class=" custom-text p-4 py-20 md:py-32 my-20 flex flex-col items-center justify-center">
      <h2 class="block md:hidden text-black tracking-wider font-medium text-[4.2rem] lg:text-[5.8rem] ">{{ $t('bookSection.titleMobile') }}</h2>
      <h2 class="hidden md:block text-black tracking-wider font-medium text-[4.2rem] lg:text-[5.8rem] ">{{ $t('bookSection.titlePC') }}</h2>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'


const { t } = useI18n();
</script>

<style scoped>
.custom-text {
  font-style: normal;
  line-height: 9.25rem; /* 111.731% */
  letter-spacing: 1.5rem;
  font-family: 'Helvetica Neue Medium', sans-serif;

  background-image: url('/second.png'); /* Update with the actual path to your image */
  background-position: center; /* This will center the image in the div */
  background-size:50%;
  background-repeat: no-repeat; /* Prevents the image from repeating */
}

@media screen and (max-width: 767px) {
  .custom-text {
    background-position: center; /* This will center the image in the div */
  background-size:140%;
  background-repeat: no-repeat; /* Prevents the image from repeating */
  }
}


</style>
