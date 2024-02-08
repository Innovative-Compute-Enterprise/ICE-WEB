<template>
  <div class="w-full h-full grid grid-cols-1 md:grid-cols-3 items-start mt-16 mb-16 md:mt-24 md:mb-24 lg:mt-32 lg:mb-32">
    
          <!-- Watch & Read More Section -->
          <div class="order-3 md:order-none" >
            <NuxtLink :to="localePath('services')" >
              <div ref="watchSection" class="watch-section space-y-4 h-[22rem] flex flex-col justify-between p-12 md:col-span-1 md:rounded-tr-[40px] dark:bg-[#09090B] border-l-0 border-b-0 bg-[#FAFAFA] hover:bg-[#F4F4F5] dark:hover:bg-[#27272A] border border-[#000]/[0.1] dark:border-[#fff]/[0.1] shadow-sm focus-visible:ring-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                <div>
                  <div class="text-[#09090B] dark:text-[#FAFAFA] text-color text-3xl font-bold">{{ $t('keySection.watch') }}</div>
                  <div class="text-[#09090B] dark:text-[#FAFAFA] text-color  text-3xl font-bold">{{ $t('keySection.video') }}</div>
                </div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-11 h-11 text-[#09090B] dark:text-[#FAFAFA]">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                  </svg> 
            </div>
           </NuxtLink>

          <!-- Read More Section -->
          <NuxtLink :to="localePath('about')" >
          <div ref="readSection" class="read-section h-[22rem] flex flex-col justify-between p-12 col-start-1 bg-[#09090B] dark:bg-[#FAFAFA] border border-l-0 border-y-0 dark:hover:bg-[#F4F4F5] hover:bg-[#27272A] dark:border-[#000]/[0.1] border-[#fff]/[0.1] shadow-sm focus-visible:ring-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            <div class=" text-3xl font-bold dark:text-[#09090B] text-[#FAFAFA]">{{ $t('keySection.read') }}</div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#dfdfdf" class="w-12 h-12 stroke-current dark:text-black text-white">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
          </div>
        </NuxtLink>

        <!-- Polices Section -->
        <NuxtLink :to="localePath('polices')" >
          <div ref="policiesSection" class="policies-section h-[22rem] flex flex-col justify-between p-12 col-start-1 md:rounded-br-[40px] hover:bg-[#F4F4F5] dark:hover:bg-[#27272A] dark:bg-[#09090B] bg-[#FAFAFA] border border-l-0 border-t-0 border-[#000]/[0.1] dark:border-[#fff]/[0.1] shadow-sm focus-visible:ring-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            <div class=" text-[#09090B] dark:text-[#FAFAFA] text-3xl font-bold">{{ $t('keySection.policies') }}</div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-11 h-11 stroke-current text-black dark:text-white">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
            </svg>
          </div>
        </NuxtLink>
      </div>

    <!-- Key Principles Section -->
    <div class="h-full w-auto p-12 order-1 md:order-1 md:col-start-2 md:mb-0 border-y md:border-0 lg:border-0 border-[#000]/[0.1] dark:border-[#fff]/[0.1] shadow-sm md:shadow-none focus-visible:ring-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
      <div class="tittle-text sticky uppercase md:top-64 text-[#09090B] dark:text-[#FAFAFA] md:text-center text-left py-4 text-4xl md:text-5xl lg:text-[54px] font-normal leading-tight tracking-tight">{{ $t('keySection.key') }}</div>
    </div>

    <!-- List of Principles -->
    <div  class="md:col-start-3 order-2 h-[66rem] md:order-3 dark:bg-[#09090B] bg-[#FAFAFA] md:border md:border-r-0 border-y border-[#000]/[0.1] dark:border-[#fff]/[0.1] shadow-sm focus-visible:ring-1 md:rounded-bl-[40px] md:rounded-tl-[40px] z-30 overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
    <ul>
      <li v-for="item in principles" :key="item" class="flex flex-col items-start py-10 px-12 space-y-6">
        <div class="w-8 h-8 bg-[#27272A] opacity-85 rounded-lg rounded-br-xl"></div>
        <div class="text-[#09090B] dark:text-[#FAFAFA] md:text-lg text-base  leading-6 font-medium">{{ t(item) }}</div>
      </li>
    </ul>
   </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const principles = ref([
  "principles.principle1",
  "principles.principle2",
  "principles.principle3",
  "principles.principle4",
  "principles.principle5",
]);

</script>


<style scoped>
.tittle-text {
  font-family: 'Work Sans', sans-serif;
}

ul {
  font-family: 'Hedvig Letters Sans', sans-serif;
}
</style>
