<template>
  <section class="hero-section bg-[#FAFAFA] dark:bg-[#09090B] md:mt-[1.4rem] mt-[0.4rem]">
    <div class="text-overlay">
      <HeroText />
    </div>
    <HeroBackground />
  </section>
</template>

<script setup>
import HeroBackground from './GlobeBG/HeroBackground.vue';
import HeroText from './HeroText.vue';
</script>

<style scoped>
.hero-section {
  position: relative;
  width: 100%;
  height: 130vh; /* Keep or adjust based on your layout needs */
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.text-overlay {
  position: absolute; /* Keeps the text overlay in place */
  top: 5%; /* Keeps text position relative to the top */
  z-index: 2; /* Ensures text is above the globe */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}



@media screen and (max-width: 670px) {
  .text-overlay {
    top: 10%;
  }
  .hero-section {
    height: 100vh;
  }
}
</style>