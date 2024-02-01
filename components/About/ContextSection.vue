<template>
  <div class="flex flex-col my-8">
    <BlueSection />
    <WhiteSection1 />
    <WhiteSection2 />
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';

const BlueSection = defineAsyncComponent(() => import('@//BlueSection.vue'));
const WhiteSection1 = defineAsyncComponent(() => import('@/WhiteSection1.vue'));
const WhiteSection2 = defineAsyncComponent(() => import('@/WhiteSection2.vue'));

</script>

<style scoped>
</style>
