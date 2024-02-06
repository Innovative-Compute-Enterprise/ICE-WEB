<template>
  <section class="my-28 py-28 md:py-40">
    <div class="custom-text flex flex-col items-center justify-center pb-12">
      <h2 class="block md:hidden text-[#09090B] dark:text-[#FAFAFA] tracking-wider font-[600] text-5xl lg:text-6xl w-[50%] space-y-4 justify-center">{{ $t('bookSection.titleMobile') }}</h2>
      <h2 class="hidden md:block text-[#09090B] dark:text-[#FAFAFA] tracking-wider font-[600] text-5xl lg:text-6xl">{{ $t('bookSection.titlePC') }}</h2>
    </div> 
    <div class="lottie-container bg-white rounded-[600px]"></div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';
import lottie from 'lottie-web';
import { useI18n } from 'vue-i18n'

const { t } = useI18n();

let lottieInstance;

onMounted(() => {
  loadLottieAnimation();
});

function loadLottieAnimation() {
  if (lottieInstance) {
    lottieInstance.destroy();
  }

  lottieInstance = lottie.loadAnimation({
    container: document.querySelector('.lottie-container'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: '/AnimationFocus.json' // Path to your animation file
  });
}
</script>

<style scoped>
/* Your styles remain the same as before */
.lottie-container {
  /* ... your existing styles ... */
  width: 40%; /* Adjust the width to make the animation smaller */
  height: 40%; /* Adjust the height to maintain aspect ratio */
  margin: auto; /* This will center the animation in the container */
}

@media (min-width: 768px) {
  .lottie-container {
    width: 30%; /* Smaller width for larger devices */
    height: 30%; /* Smaller height for larger devices */
  }
}
@media (min-width: 1200px) {
  .lottie-container {
    width: 20%; /* Smaller width for larger devices */
    height: 20%; /* Smaller height for larger devices */
  }
}

</style>
