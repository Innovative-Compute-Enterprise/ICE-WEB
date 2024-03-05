<template>
  <div class="md:justify-center md:flex">
  <div class="flex flex-col max-w-[1024px]">
    <FormSection />
    <EmailSection />
  </div>
  </div>
</template>

<script setup>
import EmailSection from '@/components/FooterSection/EmailSection.vue';
import FormSection from '@/components/FooterSection/FormSection.vue';
</script>

<style scoped>

</style>
