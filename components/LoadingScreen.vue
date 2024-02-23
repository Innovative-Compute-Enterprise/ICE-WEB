<template>
  <div v-if="isVisible" class="loading-container lottie-container-loading">
    <!-- Lottie animation will be injected here -->
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue';
import lottie from 'lottie-web';

const isVisible = ref(true); // Start with true to ensure it shows on load

onMounted(async () => {
  await nextTick(); // Ensure DOM updates have been applied
  loadLottieAnimation(); // Now load the animation
  setTimeout(() => {
    isVisible.value = false; // Hide after 2 seconds
  }, 2000); // Adjust time as needed
});

let lottieInstance;

function loadLottieAnimation() {
  if (lottieInstance) {
    lottieInstance.destroy(); // Ensure previous instances are destroyed
  }

  lottieInstance = lottie.loadAnimation({
    container: document.querySelector('.lottie-container-loading'), // Referencing the container class
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/AnimationLoading.json' // Make sure this path is correct
  });
}
</script>

<style scoped>
.loading-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  
  justify-content: center;
  align-items: center;
  z-index: 9999; /* Ensure it's above other content */
}
</style>
