<template>
  <div class="bg-[#44ff23] py-20 flex flex-col items-center justify-center">
    <a href="#" class="cursor-pointer">
      <h2 class="block md:hidden custom-text text-white uppercase tracking-wider font-medium text-[78px] lg:text-[120px] xl:text-[140px]">{{ $t('bookSection.titleMobile') }}</h2>
      <h2 class="hidden md:block custom-text text-white uppercase tracking-wider font-medium text-[78px] lg:text-[120px] xl:text-[140px]">{{ $t('bookSection.titlePC') }}</h2>
    </a>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'


const { t } = useI18n()
</script>

<style scoped>
.custom-text {
  font-style: normal;
  line-height: 200.33px; /* 111.731% */
  letter-spacing: -2.976px;
}
</style>
