<template>
  <section class="hero-section bg-[#FAFAFA] dark:bg-[#09090B]">
    <HeroText />
    <template v-if="isDarkMode">
      <HeroBackgroundDark />
    </template>
    <template v-else>
      <HeroBackground />
    </template>
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import HeroBackground from './HeroBackground.vue';
import HeroBackgroundDark from './HeroBackgroundDark.vue';
import HeroText from './HeroText.vue';

const isDarkMode = ref(false);

const updateDarkMode = () => {
  isDarkMode.value = document.documentElement.classList.contains('light') === false;
};

let observer;

onMounted(() => {
  updateDarkMode(); // Initial check

  // Set up MutationObserver
  observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.type === "attributes" && mutation.attributeName === "class") {
        updateDarkMode();
      }
    });
  });

  observer.observe(document.documentElement, {
    attributes: true // Observe attribute changes
  });
});

onUnmounted(() => {
  // Disconnect the observer when the component unmounts
  if (observer) {
    observer.disconnect();
  }
});

</script>


<style scoped>
.hero-section {
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
</style>
