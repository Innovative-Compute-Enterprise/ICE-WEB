<template>
  <div class="hero-text-container flex flex-col items-center justify-center h-screen px-2 md:px-0">
    <div>
      <h1 class="text-white pb-6 sm:text-[2.8rem] text-[3.8rem] md:text-[6.2rem] lg:text-[7.2rem]">
        {{ $t('heroText.title1') }} <br class="md:hidden" />
        <span class="animated-text-wrapper">
          <span class="animated-text">{{ $t('heroText.title2') }}</span>.
        </span>
              </h1>
    </div>
    <div>
      <p class="text-white text-center text-[1.1rem] md:text-[1.325rem] pb-6 md:w-[100%]">
        {{ $t('heroText.title3') }}
      </p>
    </div>
    <div class="flex justify-center">
      <ButtonMain />
    </div>
  </div>
</template>


<script setup>
import ButtonMain from '~/components/ButtonMain.vue';
import { useI18n } from 'vue-i18n';
import { onMounted } from 'vue';
import gsap from 'gsap';

const { t } = useI18n();

onMounted(() => {
  const timeline = gsap.timeline({ defaults: { duration: 1, opacity: 0, ease: 'power2.out' } });

  timeline
    .from('.hero-text-container h1', { y: -30 })
    .from('.animated-text', { y: 30 }, '<0.8') // slight delay for text animation
    .from('.hero-text-container p', { x: -100 }, '<');
});
</script>




<style scoped>
.hero-text-container h1 {
  font-family: 'Helvetica Neue Medium', sans-serif;
  font-weight: 600;
  word-spacing: normal;
  line-height: 0.9;
  letter-spacing: -0.18rem;
}
p{
line-height: 1;
letter-spacing: 0.063rem;

}

.hero-text-container {
  font-family: 'Helvetica Neue Medium', sans-serif;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  padding-top: 2rem;
  padding-bottom: 8rem;
  z-index: 3;
  font-weight: 500;
  word-spacing: normal;

}

@media screen and (max-width: 767px) {
  .hero-text-container {
    bottom: 0;
    padding-top: 1rem;
    padding-bottom: 8rem;
    top: auto;
  }
}

.animated-text-wrapper {
  display: flex; /* Use flexbox for centering */
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically (if needed) */
}

@media screen and (max-width: 767px) {
  .animated-text-wrapper {
    justify-content: flex-start; /* Align text to the left on mobile */
  }
}


</style>
