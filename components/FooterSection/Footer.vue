<template>
  <div class="flex flex-col">
    <FormSection />
    <EmailSection />
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';

const EmailSection = defineAsyncComponent(() => import('@/components/FooterSection/EmailSection.vue'));
const FormSection = defineAsyncComponent(() => import('@/components/FooterSection/FormSection.vue'));

</script>

<style scoped>

</style>
