<template>
  <div class="loading-page" v-if="isLoading" ref="loadingPage">
    <div ref="lottieContainer" class="lottie-container"></div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import lottie from 'lottie-web';

const isLoading = ref(true);
const loadingPage = ref(null);
const lottieContainer = ref(null);

onMounted(() => {
  const animation = lottie.loadAnimation({
    container: lottieContainer.value,
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/Animation - 1706398966016.json' // adjust the path as necessary
  });
});
</script>


<style scoped>
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.9);
  z-index: 9999;
  overflow: hidden;
  opacity: 1;
}

.lottie-container {
  width: 100%; 
  height: 100%;
}
</style>
