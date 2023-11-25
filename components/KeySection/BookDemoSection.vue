<template>
  <div class="md:bg-[#545454] bg-white custom-text py-28 flex flex-col items-center justify-center">
    <a href="#" class="cursor-pointer ">
      <h2 class="block md:hidden gradient text-black  tracking-wider font-medium text-[3.875rem] lg:text-[6.5rem] xl:text-[6.75rem]">{{ $t('bookSection.titleMobile') }}</h2>
      <h2 class="hidden md:block gradient text-white  tracking-wider font-medium text-[3.875rem] lg:text-[6.5rem] xl:text-[6.75rem]">{{ $t('bookSection.titlePC') }}</h2>
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
  letter-spacing: 2rem;
}
</style>
