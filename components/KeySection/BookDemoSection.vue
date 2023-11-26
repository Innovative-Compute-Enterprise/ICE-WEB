<template>
  <div class=" custom-text py-16 md:py-28 flex flex-col items-center justify-center">
    <a href="#" class="cursor-pointer ">
      <h2 class="block md:hidden text-white tracking-wider font-medium text-[4.875rem] lg:text-[6.7rem] xl:text-[7rem]">{{ $t('bookSection.titleMobile') }}</h2>
      <h2 class="hidden md:block text-white  tracking-wider font-medium text-[4.875rem] lg:text-[6.7rem] xl:text-[7rem]">{{ $t('bookSection.titlePC') }}</h2>
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
  line-height: 9.25rem; /* 111.731% */
  letter-spacing: 1.5rem;
  font-family: 'Helvetica Neue Medium', sans-serif;

  background-image: url('/second.png'); /* Update with the actual path to your image */
  background-position: center; /* This will center the image in the div */
  background-size:350%;
  background-repeat: no-repeat; /* Prevents the image from repeating */
}

@media screen and (max-width: 767px) {
  .custom-text {
    background-position: center; /* This will center the image in the div */
  background-size:500%;
  background-repeat: no-repeat; /* Prevents the image from repeating */
  }
}


</style>
