<template>
  <div class="relative md:p-[48px] p-[24px] h-full rounded-[40px] dark:custom-border-dark custom-border overflow-hidden focus-visible:ring-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
    <!-- Gradient Circles with SVG in the middle, right-aligned on desktop, center on mobile -->
    <CircularGradient />

    <div class="relative z-10 flex justify-between">
      <div class="text-start space-y-4">
        <h2 class="text-[32px] leading-[32px] font-[600] text-[#09090B] md:mb-[128px] mb-[256px] dark:text-[#FAFAFA]">Primary Topic</h2>
        <p class="text-[16px] leading-[16px] text-[#09090B] dark:text-[#FAFAFA]">Extended discussion on the secondary topic, similar to the main one.</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import CircularGradient from './CircularGradient.vue'; // Adjust the path as necessary
</script>

<style scoped>
/* Your scoped styles if any */
h2 {
  font-family: "Mona Sans";
  font-stretch: 100%;
}
p {
  font-family: "Open Sans", sans-serif;
  font-weight: 500;
}
</style>
