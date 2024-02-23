<template>
  <section class="hero-section bg-[#FAFAFA] dark:bg-[#09090B] md:mt-[1.6rem] mt-0">
    <HeroText />
    <HeroBackgroundDark v-if="isDarkMode" />
    <HeroBackground v-else />
  </section>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import HeroBackground from './GlobeBG/HeroBackground.vue';
import HeroBackgroundDark from './GlobeBG/HeroBackgroundDark.vue';
import HeroText from './HeroText.vue';

const isDarkMode = ref(false);
let observer;

const updateDarkMode = () => {
  // Assuming the 'dark' class represents dark mode
  isDarkMode.value = document.documentElement.classList.contains('dark');
};

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

// Destroy WebGL context when the component is unmounted
const destroyWebGLContext = (component) => {
  if (component && typeof component.destroyWebGLContext === 'function') {
    component.destroyWebGLContext();
  }
};

onUnmounted(() => {
  destroyWebGLContext(HeroBackground);
  destroyWebGLContext(HeroBackgroundDark);
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
