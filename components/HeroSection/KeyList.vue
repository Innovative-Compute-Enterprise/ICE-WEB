<template>
    <section>
      <div class="flex flex-col items-center dark:bg-[#09090B] bg-[#FAFAFA]  py-[72px] my-[128px] mx-auto max-w-[1440px]">
        <h1 class="md:text-[48px] text-[40px] tracking-[-2.16px] md:leading-[48px] leading-[40px] font-bold mb-6 text-[#09090B] dark:text-[#FAFAFA] text-center">Our Company's Foundations</h1>
        <div class="grid md:grid-cols-3 grid-cols-1 md:gap-6 gap-8  relative md:w-[85%] w-[90%] my-[24px]">
          <!-- Using TopicCard component -->
          <!-- Corrected TopicCard with GradientCircles -->
        <div class="md:col-span-2 col-span-1">
           <TopicCard />
        </div>

         <div>
          <div class="relative md:p-[48px] p-[24px] h-full rounded-[40px] border border-[#000]/[0.2] dark:border-[#fff]/[0.2]  focus-visible:ring-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            <div class="relative z-10 justify-between">
              <div class="text-start justify-between ">
              <h2 class="text-[32px] leading-[32px] font-[600] text-[#09090B] mb-[128px] dark:text-[#FAFAFA]">Primary Topic</h2>
              <p class="text-[16px] leading-[16px] text-[#09090B] dark:text-[#FAFAFA]">Extended discussion on the secondary topic, similar to the main one.</p>
              </div>
           </div>
          </div>
         </div>
         
         
         <div class="md:col-span-1">
          <div class="relative md:p-[48px] p-[24px] h-full rounded-[40px]  border border-[#000]/[0.2] dark:border-[#fff]/[0.2]  focus-visible:ring-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            <div class="relative z-10 justify-between">
              <div class="text-start justify-between ">
              <h2 class="text-[32px] leading-[32px] font-[600] text-[#09090B] mb-[128px] dark:text-[#FAFAFA]">Primary Topic</h2>
              <p class="text-[16px] leading-[16px] text-[#09090B] dark:text-[#FAFAFA]">Extended discussion on the secondary topic, similar to the main one.</p>
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
  import TopicCard from './KeyCards/TopicCard.vue'; // Adjust the path as necessary
  import Integration from './KeyCards/Integration.vue';
  </script>
  
  <style scoped>
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
