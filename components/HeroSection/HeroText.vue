<template>
  <div ref="heroContainer" class="hero-text-container flex flex-col items-center md:my-[24px] lg:my-[36px] py-[12px]">
    <div class="justify-center news-text">
      <div class="dark:bg-[#09090B] font-semibold bg-[#FAFAFA] relative rounded-full px-3 py-1 md:text-[14px] text-[12px] leading-6 text-gray-800 dark:text-gray-300 ring-1 ring-gray-900/30  dark:ring-gray-700/50  border border-[#E4E4E7]/[100%] dark:border-[#27272a]/[100%]">
        {{ $t('heroText.announcement') }}


        <NuxtLink :to="localePath('services')" class="font-semibold text-blue-600">
          <span class="absolute inset-0" aria-hidden="true"></span>
           {{ $t('heroText.more') }} <span aria-hidden="true">&rarr;</span>
        </NuxtLink>
      </div>
    </div>
      <h1 class="text-[#09090B] md:mx-[48x] mx-[36px] dark:text-[#FAFAFA] lg:text-[72px] text-[48px] break-words tracking-[-2.16px] lg:leading-[72px] leading-[48px] font-[700] lg:max-w-[900.9px] md:max-w-[695.9px] w-full text-center py-[12px] md:py-[24px]">
        {{ $t('heroText.title') }}
      </h1>

    <div>
      <div ref="button-container" class="flex justify-start md:justify-center gap-4 mx-[20px] md:mx-auto py-4 button-text">
        <NuxtLink :to="localePath('services')">
          <button class="text-[16px] leading-[16px] font-semibold rounded-lg whitespace-nowrap bg-black dark:bg-white md:p-5 p-3 h-9 justify-center items-center dark:text-black text-white dark:hover:bg-[#e2e2e2] hover:bg-[#27272A] inline-flex border-[1px] focus-visible:ring-1 transition-colors shadow-sm shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            {{ $t('heroText.button') }}
          </button>
        </NuxtLink>
        <NuxtLink :to="localePath('services')">
          <button class="text-[16px] leading-[16px] font-semibold rounded-lg whitespace-nowrap bg-white hover:bg-[#e2e2e2] dark:bg-black dark:hover:bg-[#27272A] md:p-5 p-3 h-9 justify-center items-center text-black dark:text-white inline-flex border-[1px] focus-visible:ring-1 transition-colors shadow-sm border-[#E4E4E7]/[100%] dark:border-[#27272a]/[100%] shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            {{ $t('heroText.button2') }}
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import gsap from 'gsap';

const heroContainer = ref(null);

onMounted(() => {
  gsap.from(heroContainer.value.querySelector('h1'), { duration: 1.2, opacity: 0, y: -30, delay: 0.3 });
});
</script>

<style scoped>
.button-text, .hero-text-container, .hero-text-container h1, .hero-text-container p, .news-text {
  box-sizing: border-box;
}

.button-text {
  font-family: "Montserrat", sans-serif;
}

.hero-text-container h1, .hero-text-container p {
  will-change: transform, opacity;
}

.hero-text-container h1 {
  font-family: "Mona Sans";
  font-stretch: 100%;
}

p {
  letter-spacing: 0.063rem;
  font-family: "Open Sans", sans-serif;
  font-weight: 500;
}

.news-text {
  font-family: "Open Sans", sans-serif;
}

.hero-text-container {
  width: 100%;
  z-index: 5;
}

@media screen and (max-width: 670px) {
  .hero-text-container {
    top: auto;
  }
}
</style>
