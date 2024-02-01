<template>
  <div class="flex flex-col dark:bg-[#09090B] bg-[#FAFAFA] ">
    <FormSection />
    <EmailSection />
  </div>
</template>

<script setup>

const EmailSection = defineAsyncComponent(() => import('@/components/FooterSection/EmailSection.vue'));
const FormSection = defineAsyncComponent(() => import('@/components/FooterSection/FormSection.vue'));

</script>

<style scoped>

</style>
