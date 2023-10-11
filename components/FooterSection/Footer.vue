<template>
  <div class="grid grid-cols-1 md:grid-cols-2">
    <FormSection class="order-1 md:order-2" />
    <EmailSection class="order-2 md:order-1" />
  </div>
</template>

<script setup>
import EmailSection from './EmailSection.vue';
import FormSection from './FormSection.vue';
</script>

<style scoped>

</style>
