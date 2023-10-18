<template>
  <section>
    <HeroSection id="home"/>
    <ContextSection id="about" />
    <KeySection />
    <BookDemoSection  />
    <PreFooter id="faq" />
  </section>
</template>

<script setup>
import HeroSection from '~/components/HeroSection/HeroSection.vue';
import ContextSection from '~/components/BodyTextSection/ContextSection.vue';
import KeySection from '~/components/KeySection/KeySection.vue';
import BookDemoSection from '~/components/KeySection/BookDemoSection.vue'; 
import PreFooter from '~/components/FooterSection/PreFooter.vue';

import { gsap } from "gsap";

// On component mounted lifecycle hook
onMounted(() => {
  gsap.from("#home", {
    duration: 3,
    opacity: 0.0,
    ease: "power3.out"
  });
});

onMounted(() => {
  gsap.from("#about", {
    duration: 1.5,
    opacity: 0.50,
    x: 50,
    ease: "power1.out"
  });
});
</script>

<style scoped>
body {
  overflow-x: hidden;
  background-color: #FEFEFE;
}
</style>
