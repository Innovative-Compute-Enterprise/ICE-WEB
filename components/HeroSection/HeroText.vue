<template>
  <div class="hero-text-container flex flex-col items-center justify-center h-screen px-4">
   <div class="w-full text-left md:text-center ">
     <h1 class="text-black pb-8 text-[18vw] md:text-[6.6rem]">
       {{ $t('heroText.title1') }} <br>
       {{ $t('heroText.title2') }}.
     </h1>
   </div>
   <div>
     <p class="text-black text-left md:text-center pl-2 md:pl-0 text-[6vw] md:text-[1.6rem] font-bold pb-6">
       {{ $t('heroText.title3') }}
     </p>
     <div class="flex justify-start md:justify-center pl-2">
     <ButtonMain />
    </div>
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
 const timeline = gsap.timeline({ defaults: { duration: 1.2, opacity: 0, ease: 'power3.out', delay: 0.9} });
 
 timeline
   .from('.hero-text-container h1', { y: -30 })
   .from('.hero-text-container p', { x: -100 }, '<');
 });
 </script>
 
 
 
 
 <style scoped>
 .hero-text-container h1 {
 font-family: 'Helvetica Neue Medium', sans-serif;
 font-weight: 600;
 word-spacing: normal;
 line-height: 1;
 letter-spacing: -0.20rem;
 }
 p{
 line-height: 1;
 letter-spacing: 0.063rem;
 text-shadow: 2px 2px 4px rgba(255, 255, 255, 0.597); /* Adjust values as needed */

 }
 
 .hero-text-container {
 font-family: 'Helvetica Neue Medium', sans-serif;
 position: absolute;
 bottom: 0;
 right: 0;
 width: 100%;
 padding-top: 3rem;
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
 .btn-secondary {
    /* Styling for the new button */
    background-color: blue;
    color: white;
    /* Other styles as needed */
  }
 

 
 
 
 </style>
 
 