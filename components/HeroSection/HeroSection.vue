<template>
  <section class="hero-section bg-[#FAFAFA] dark:bg-[#09090B] md:mt-[1.4rem] mt-0">
    <div class="text-overlay">
      <HeroText />
    </div>
    <HeroBackground />
  </section>
</template>

<script setup>
import HeroBackground from '@/components/HeroSection/GlobeBG/HeroBackground.vue';
import HeroText from '@/components/HeroSection/HeroText.vue';
</script>

<style scoped>
.hero-section {
  position: relative;
  width: 100%;
  height: 150vh; /* Keep or adjust based on your layout needs */
  display: flex;
  z-index: 2;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.text-overlay {
  position: absolute; 
  top: 5%; 
  z-index: 3; 
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
    height: 115vh;
  }
}
</style>