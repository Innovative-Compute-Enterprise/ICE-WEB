<template>
  <div class="relative md:p-[48px] p-[24px] h-full rounded-[40px] overflow-hidden dark:custom-border-dark custom-border focus-visible:ring-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
      <div class="relative z-10 justify-between">
          <div class="text-start justify-between">
              <h2 class="text-[32px] leading-[32px] font-[600] text-[#09090B] md:mb-[128px] mb-[256px] dark:text-[#FAFAFA]">Primary Topic</h2>
              <p class="text-[16px] leading-[16px] text-[#09090B] dark:text-[#FAFAFA]">Extended discussion on the secondary topic, similar to the main one.</p>
          </div>
          <!-- Dot pattern container -->
          <DotGrid />
      </div>
  </div>
</template>

<script setup>
import DotGrid from './DotGrid.vue';
</script>


<style scoped>
h2 {
    font-family: "Mona Sans";
    font-stretch: 100%;
}

p {
    font-family: "Open Sans", sans-serif;
    font-weight: 500;
}
</style>

