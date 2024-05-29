<template>
    <section>
      <div class="container flex flex-col items-center mt-[64px] mb-[128px] mx-auto max-w-[1440px] px-6 py-[48px]">
        <div class="grid md:grid-cols-3 grid-cols-1 gap-8  relative md:w-[80%]">
       
        <div class="md:col-span-2 col-span-1">
           <TopicCard />
        </div>

         <div>
          <div class="relative lg:p-[48px] md:p-[24px] p-[16px] h-full rounded-[40px] border border-[#000]/[0.2] dark:border-[#fff]/[0.2] justify-center">
            <div class="relative z-10 justify-between items-center">
              <div class="text-center justify-between flex flex-col items-center p-2">
              <h2 class="text-[24px] leading-[24px] font-[600] text-[#09090B] dark:text-[#FAFAFA]">{{ $t('grid.title2') }}</h2>
              <p class="lg:text-[72px] md:text-[56px] sm:text-[64px] text-[72px] numbers leading-[72px] text-[#09090B] dark:text-[#FAFAFA] my-16">83%</p>
              <p class="text-[16px] leading-[16px] text-[#09090B] dark:text-[#FAFAFA]">{{ $t('grid.topic2') }}</p>
              </div>
           </div>
          </div>
         </div>
         
         
         <div class="md:col-span-1">
          <div class="relative lg:p-[48px] md:p-[24px] p-[16px] h-full rounded-[40px]  border border-[#000]/[0.2] dark:border-[#fff]/[0.2]">
            <div class="relative z-10 justify-between">
              <div class="text-center justify-between flex flex-col items-center p-2">
              <h2 class="text-[24px] leading-[24px] font-[600] text-[#09090B] dark:text-[#FAFAFA]">{{ $t('grid.title3') }}</h2>
              <p class="lg:text-[72px] md:text-[56px] sm:text-[64px] text-[72px] numbers leading-[72px] text-[#09090B] dark:text-[#FAFAFA] my-16">+1T$</p>
              <p class="text-[16px] leading-[16px] text-[#09090B] dark:text-[#FAFAFA]">{{ $t('grid.topic3') }}</p>
            </div>
            </div>
          </div>
         </div>
         
         <div class="md:col-span-2 col-span-1">
            <Integration />
         </div>

        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import TopicCard from './BentoCards1/TopicCard.vue'; 
  import Integration from './BentoCards1/Integration.vue';
  </script>
  
  <style scoped>
  .numbers{
  font-family: "Mona Sans";
  font-stretch: 125%;
  font-weight: 900;
 }
h2 {
  font-family: "Mona Sans";
  font-stretch: 100%;
}
p {
  font-family: "Open Sans", sans-serif;
  font-weight: 500;
}

.grid-background {
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px);
    background-size: 50px 50px; /* Size of the squares in the grid */
    overflow: hidden;
}

</style>
