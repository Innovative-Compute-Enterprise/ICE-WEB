<template>
  <section class="my-[128px] py-[84px] md:py-[128px]">
    <div class="custom-text flex flex-col items-center justify-center pb-[48px] m-[24px]">
      <h2 class="block uppercase font-bold md:hidden text-[#09090B] dark:text-[#FAFAFA] tracking-wider text-4xl lg:text-5xl w-[50%] space-y-4 justify-center">{{ $t('bookSection.titleMobile') }}</h2>
      <h2 class="hidden uppercase font-bold md:block text-[#09090B] dark:text-[#FAFAFA] tracking-wider text-4xl lg:text-5xl">{{ $t('bookSection.titlePC') }}</h2>
    </div> 
    <div class="book-section-lottie-container bg-white rounded-[600px]"></div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import lottie from 'lottie-web';

let lottieInstance;

onMounted(() => {
  loadLottieAnimation();
});

function loadLottieAnimation() {
  if (lottieInstance) {
    lottieInstance.destroy();
  }

lottieInstance = lottie.loadAnimation({
  container: document.querySelector('.book-section-lottie-container'), // Updated class name
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: '/AnimationFocus.json' // Path to your animation file
});
}
</script>

<style scoped>
h2{
  font-family: "Source Code Pro", monospace;
}
.book-section-lottie-container {
  /* ... your existing styles ... */
  z-index: 88;
  width: 50%; /* Adjust the width to make the animation smaller */
  height: 50%; /* Adjust the height to maintain aspect ratio */
  margin: auto; /* This will center the animation in the container */
}

@media (min-width: 768px) {
  .book-section-lottie-container {
    width: 30%; /* Smaller width for larger devices */
    height: 30%; /* Smaller height for larger devices */
  }
}
@media (min-width: 1200px) {
  .book-section-lottie-container {
    width: 20%; /* Smaller width for larger devices */
    height: 20%; /* Smaller height for larger devices */
  }
}

</style>
