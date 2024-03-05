<template>
  <div class="flex flex-col my-12 space-y-4">
    <WhiteSection2 /> 
    <BlueSection />
    <WhiteSection1 />
   
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
