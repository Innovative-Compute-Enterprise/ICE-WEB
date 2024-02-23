<template>
  <div ref="heroContainer" class="hero-text-container flex flex-col items-center lg:pb-20 md:my-12 lg:my-20 pb-20">
        <div class=" sm:mb-2 mb-1 sm:flex sm:justify-center justify-start news-text">
          <div class=" dark:bg-[#09090B] bg-[#FAFAFA] relative rounded-full px-3 py-1 text-xs sm:text-sm leading-6 text-gray-600 dark:text-gray-300 ring-1 ring-gray-900/10 hover:ring-[#27272A]/30 dark:ring-gray-700/50 dark:hover:ring-[#e2e2e2]/70 border border-[#E4E4E7]/[100%] dark:border-[#27272a]/[100%]">
            Announcing our next product.
            
            <NuxtLink :to="localePath('services')" class="font-semibold text-blue-600">
              <span class="absolute inset-0" aria-hidden="true"></span>
              Read more <span aria-hidden="true">&rarr;</span>
            </NuxtLink>
          </div>
      </div>
    <div class="w-[100%] md:w-full ">
        <h1 class="text-[#09090B] dark:text-[#FAFAFA] uppercase pb-2 2xl:text-7xl md:text-6xl sm:text-[3.6rem] text-5xl mx-[20px] md:mx-[20px] leading-tight tracking-tight font-bold w-auto md:text-center text-left">
          {{ $t('heroText.title1') }}
        </h1>
   </div>

      <div>
        <p class="text-[#09090B] dark:text-[#FAFAFA] text-left md:text-center text-lg md:text-xl pb-2 mx-[20px] md:mx-auto w-[80%] md:leading-loose leading-relaxed">
          {{ $t('heroText.title2') }}
        </p>

        <div class="flex justify-start md:justify-center gap-4 mx-[20px] md:mx-auto py-4 button-text">
          <NuxtLink :to="localePath('services')">
            <button class="text-base font-semibold rounded-md whitespace-nowrap bg-black dark:bg-white py-2.5 px-3.5 h-9 justify-center items-center dark:text-black text-white dark:hover:bg-[#e2e2e2] hover:bg-[#27272A] inline-flex border-[1px]  focus-visible:ring-1 transition-colors shadow-sm shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              Get Started
            </button>
          </NuxtLink>
          <NuxtLink :to="localePath('services')">
            <button class="text-base font-semibold rounded-md whitespace-nowrap bg-white hover:bg-[#e2e2e2] dark:bg-black dark:hover:bg-[#27272A] py-2.5 px-3.5 h-9 justify-center items-center text-black dark:text-white inline-flex border-[1px]  focus-visible:ring-1 transition-colors shadow-sm border-[#E4E4E7]/[100%] dark:border-[#27272a]/[100%] shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
              View More
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
  gsap.from(heroContainer.value.querySelector('h1'), { duration: 1, opacity: 0, y: -30 });
  gsap.from(heroContainer.value.querySelector('p'), { duration: 1, opacity: 0, x: -100 });
});

 </script>
 
 
 
 
 <style scoped>
 .button-text {
  font-family: "Montserrat", sans-serif;
 }
 .hero-text-container h1, .hero-text-container p {
  will-change: transform, opacity;
}
 .hero-text-container h1 {
  font-family: "Source Code Pro", monospace;
 }
 p{
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
 
 