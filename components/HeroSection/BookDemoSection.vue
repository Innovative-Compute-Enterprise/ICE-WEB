<template>
  <section class="my-48 py-44 md:py-60 image-custom">
  <div class=" custom-text flex flex-col items-center justify-center">
      <h2 class="block md:hidden  text-[#09090B] dark:text-[#FAFAFA] tracking-wider font-[600] text-5xl lg:text-6xl ">{{ $t('bookSection.titleMobile') }}</h2>
      <h2 class="hidden md:block  text-[#09090B] dark:text-[#FAFAFA] tracking-wider font-[600] text-5xl lg:text-6xl ">{{ $t('bookSection.titlePC') }}</h2>
  </div>
  </section>
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
}

.image-custom{
  background-position: center; /* This will center the image in the div */
  background-size:60%;
  background-repeat: no-repeat; /* Prevents the image from repeating */
}
@media screen and (max-width: 767px) {
  .image-custom {
  background-position: center; /* This will center the image in the div */
  background-size:150%;
  background-repeat: no-repeat; /* Prevents the image from repeating */
  }
}

</style>
