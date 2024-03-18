<template>
  <div class="flex flex-col mb-[124px] space-y-4">
    <WhiteSection2 class="my-[48px]" /> 
    <BlueSection />
    <WhiteSection1 class="my-[64px]" />
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';

const BlueSection = defineAsyncComponent(() => import('@/components/About/BlueSection.vue'));
const WhiteSection1 = defineAsyncComponent(() => import('@/components/About/WhiteSection1.vue'));
const WhiteSection2 = defineAsyncComponent(() => import('@/components/About/WhiteSection2.vue'));

</script>

<style scoped>
</style>
