<template>
  <div class="loading-page" v-if="isLoading" ref="loadingPage">
    <svg version="1.1" id="L4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enable-background="new 0 0 0 0" xml:space="preserve" class="svg-loader">
      <circle fill="#000" stroke="none" cx="6" cy="50" r="6">
        <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.1"/>    
      </circle>
      <circle fill="#000" stroke="none" cx="26" cy="50" r="6">
        <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.2"/>       
      </circle>
      <circle fill="#000" stroke="none" cx="46" cy="50" r="6">
        <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.3"/>     
      </circle>
    </svg>
    <div class="loading-bar" ref="loadingBar"></div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { gsap } from 'gsap';

const isLoading = ref(true);
const loadingPage = ref(null);
const loadingBar = ref(null);

onMounted(() => {
  gsap.timeline()
    .to(loadingBar.value, {
      duration: 0.7, // Duration for the horizontal expansion
      width: '100%',
      ease: 'power2.out'
    })
    .to(loadingBar.value, {
      duration: 0.5, // Duration for the vertical expansion
      height: '100vh',
      top: '0%',
      ease: 'power2.in'
    })
    .to(loadingPage.value, {
      duration: 0.6, // Duration for the fade-out animation
      opacity: 0,
      ease: 'power2.in',
      onComplete: () => {
        isLoading.value = false; // Hide the loading screen
      }
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
  display: flex; /* Use flexbox for centering */
  align-items: center; /* Align items vertically in the center */
  justify-content: center; /* Align items horizontally in the center */
  background-color: #fff;
  z-index: 9999;
  overflow: hidden;
  opacity: 1;
  transition: opacity 0.7s ease-out;
}

.svg-loader {
  position: relative; /* Adjusted from absolute to relative */
  width: 9.375rem; /* Adjust size as needed */
  height: 6.25rem;
  padding-left: 3.125rem;
  padding-bottom: 0.938rem;
}

.loading-bar {
  position: absolute;
  bottom: 50%;
  left: 0;
  width: 0;
  height: 1.125rem;
  background-color: black;
  box-shadow: #fff 0 0 10px 10px;
}

</style>
