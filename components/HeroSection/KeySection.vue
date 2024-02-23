<template>
  <div class="w-full h-full grid grid-cols-1 md:grid-cols-3 items-start mt-16 mb-16 md:mt-24 md:mb-24 lg:mt-32 lg:mb-32">
          <!-- Watch & Read More Section -->
          <div class="order-3 md:order-none" >
            <NuxtLink :to="localePath('services')" >
              <div ref="watchSection" class="watch-section space-y-4 h-[22rem] flex flex-col justify-between p-12 md:col-span-1 md:rounded-tr-[40px] dark:bg-[#09090B] border-l-0 border-b-0 bg-[#FAFAFA] hover:bg-[#F4F4F5] dark:hover:bg-[#27272A] border border-[#000]/[0.1] dark:border-[#fff]/[0.1] shadow focus-visible:ring-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                <div>
                  <div class="text-[#09090B] dark:text-[#FAFAFA] text-color text-2xl font-bold">{{ $t('keySection.watch') }}</div>
                  <div class="text-[#09090B] dark:text-[#FAFAFA] text-color  text-2xl font-bold">{{ $t('keySection.video') }}</div>
                </div>
                 <ServicesIconM class="w-11 h-11 fill-[#09090B] dark:fill-[#FAFAFA]"/>
                  
            </div>
           </NuxtLink>

          <!-- Read More Section -->
          <NuxtLink :to="localePath('about')" >
          <div ref="readSection" class="read-section h-[22rem] flex flex-col justify-between p-12 col-start-1 bg-[#09090B] dark:bg-[#FAFAFA] border border-l-0 border-y-0 dark:hover:bg-[#F4F4F5] hover:bg-[#27272A] dark:border-[#000]/[0.1] border-[#fff]/[0.1] shadow focus-visible:ring-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            <div class=" text-2xl font-bold dark:text-[#09090B] text-[#FAFAFA]">{{ $t('keySection.read') }}</div>
           <AboutIconM class="w-12 h-12 stroke-current dark:fill-black fill-white"/>
            
          </div>
        </NuxtLink>

        <!-- Polices Section -->
        <NuxtLink :to="localePath('polices')" >
          <div ref="policiesSection" class="policies-section h-[22rem] flex flex-col justify-between p-12 col-start-1 md:rounded-br-[40px] hover:bg-[#F4F4F5] dark:hover:bg-[#27272A] dark:bg-[#09090B] bg-[#FAFAFA] border border-l-0 border-t-0 border-[#000]/[0.1] dark:border-[#fff]/[0.1] shadow focus-visible:ring-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            <div class=" text-[#09090B] dark:text-[#FAFAFA] text-2xl font-bold">{{ $t('keySection.policies') }}</div>
            <PolicesIconM class="w-11 h-11 stroke-current fill-black dark:fill-white"/>
          </div>
        </NuxtLink>
      </div>

    <!-- Key Principles Section -->
    <div class="h-full w-auto p-12 order-1 md:order-1 md:col-start-2 md:mb-0 border-y md:border-0 lg:border-0 border-[#000]/[0.1] dark:border-[#fff]/[0.1] shadow md:shadow-none focus-visible:ring-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
      <div class="tittle-text sticky uppercase md:top-64 text-[#09090B] dark:text-[#FAFAFA] md:text-center text-left py-4 text-4xl md:text-5xl lg:text-[54px] font-bold leading-tight tracking-tight">{{ $t('keySection.key') }}</div>
    </div>

    <!-- List of Principles -->
    <div  class="md:col-start-3 order-2 md:h-[66rem] h-[60rem] md:order-3 dark:bg-[#09090B] bg-[#FAFAFA] md:border md:border-r-0 border-y border-[#000]/[0.1] dark:border-[#fff]/[0.1] shadow focus-visible:ring-1 md:rounded-bl-[40px] md:rounded-tl-[40px] z-30 overflow-hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
    <ul>
      <li v-for="item in principles" :key="item" class="flex flex-col items-start py-6 md:py-10 px-8 space-y-6 lg:space-y-8">
        <div class="w-8 h-8 bg-[#27272A] opacity-85 rounded-lg rounded-br-xl"></div>
        <div class="text-[#09090B] dark:text-[#FAFAFA] md:text-lg text-xl leading-6 font-normal">{{ t(item) }}</div>
      </li>
    </ul>
   </div>

  </div>
</template>

<script setup>
import ServicesIconM from '../SvgIcons/ServicesIconM.vue';
import AboutIconM from '../SvgIcons/AboutIconM.vue';
import PolicesIconM from '../SvgIcons/PolicesIconM.vue';
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
  font-family: "Source Code Pro", monospace;
}

ul {
  font-family: "Open Sans", sans-serif;
}
</style>
