<template>
  <div class="w-full h-full grid grid-cols-1 md:grid-cols-3 items-start min-h-[30rem] md:min-h-[50rem] bg-white">
    
          <!-- Watch & Read More Section -->
          <div class="order-3 md:order-none">
            <NuxtLink :to="localePath('services')" >
              <div class="watch-section bg-[#dfdfdf] space-y-4 h-[23.75rem] flex flex-col justify-between p-12 md:p-16 md:col-span-1 md:rounded-tr-[40px]">
                <div>
                  <div class="text-gray-700 text-color text-[2rem] font-bold">{{ $t('keySection.watch') }}</div>
                  <div class="text-gray-700 text-color  text-[2rem] font-bold">{{ $t('keySection.video') }}</div>
                </div>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
                  </svg> 
            </div>
           </NuxtLink>

          <!-- Read More Section -->
          <NuxtLink :to="localePath('about')" >
          <div class="read-section bg-[#646464] h-[23.75rem] flex flex-col justify-between p-12 md:p-16 col-start-1 ">
            <div class="text-black text-color text-[2rem] font-bold">{{ $t('keySection.read') }}</div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
            </svg>
          </div>
        </NuxtLink>

        <!-- Polices Section -->
        <NuxtLink :to="localePath('polices')" >
          <div class="policies-section bg-[#dfdfdf] h-[23.75rem] flex flex-col justify-between p-12 md:p-16 col-start-1 md:rounded-br-[40px]">
            <div class="text-color text-gray-700 text-[2rem] font-bold">{{ $t('keySection.policies') }}</div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
            </svg>
          </div>
        </NuxtLink>
      </div>

    <!-- Key Principles Section -->
    <div class="h-full w-auto bg-black md:bg-white p-12 order-1 md:order-1 md:col-start-2 mb-28 md:mb-0">
      <div class="tittle-text text-color sticky top-28 text-white md:text-black md:text-center text-left text-[13vw] md:text-[4.5rem] font-normal leading-[4rem] tracking-tight">{{ $t('keySection.key') }}</div>
    </div>

    <!-- List of Principles -->
    <div class="md:col-start-3 order-2 md:order-3 pb-16 md:pb-0 md:bg-[#dfdfdf] bg-white md:rounded-bl-[40px] md:rounded-tl-[40px]">
    <ul>
      <li v-for="item in principles" :key="item" class="flex flex-col items-start p-12 space-y-4">
        <div class="w-8 h-8 bg-[#0f151d] rounded-lg rounded-br-xl"></div>
        <div class="text-[#0f151d] text-[1.3rem] leading-8 font-medium">{{ t(item) }}</div>
      </li>
    </ul>
   </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const principles = ref([
  "principles.principle1",
  "principles.principle2",
  "principles.principle3",
  "principles.principle4",
  "principles.principle5"
]);

const { t } = useI18n();
</script>

<style scoped>
.tittle-text {
  font-family: 'Georgia', sans-serif;
  font-weight: 800;
}

ul {
  font-size: 1.313rem;
  font-family: 'Helvetica Neue Medium', sans-serif;
  line-height: 1.438rem;
}

/* Watch Section Styles */
.watch-section {
  background-color: #dfdfdf;
  transition: background-color ease-in 0.5s, color ease-in 0.5s;
}

.watch-section .text-color {
  color: #000000; /* Default color */
}

@media (hover: hover) and (pointer: fine) {
  .watch-section:hover {
    cursor: pointer;
    background-color: #02BDFF;
  }

  .watch-section:hover .text-color {
    color: #ffffff; /* Color on hover */
  }

  .watch-section:hover svg {
    stroke: #ffffff; /* SVG stroke color on hover */
  }
}

.hover-state.watch-section {
  background-color: #02BDFF;
}

.hover-state.watch-section .text-color {
  color: #ffffff;
}

.hover-state.watch-section svg {
  stroke: #ffffff;
}

/* Read Section Styles */
.read-section {
  background-color: #646464;
  transition: background-color ease-in 0.5s, color ease-in 0.5s;
}

.read-section .text-color {
  color: #000000; /* Default color */
}

@media (hover: hover) and (pointer: fine) {
  .read-section:hover {
    cursor: pointer;
    background-color: #da3b3b;
  }

  .read-section:hover .text-color {
    color: #f0f0f0; /* Color on hover */
  }

  .read-section:hover svg {
    stroke: #f0f0f0; /* SVG stroke color on hover */
  }
}

.hover-state.read-section {
  background-color: #da3b3b;
}

.hover-state.read-section .text-color {
  color: #f0f0f0;
}

.hover-state.read-section svg {
  stroke: #f0f0f0;
}

/* Policies Section Styles */
.policies-section {
  background-color: #dfdfdf;
  transition: background-color ease-in 0.5s, color ease-in 0.5s;
}

.policies-section .text-color {
  color: #000000; /* Default color */
}

@media (hover: hover) and (pointer: fine) {
  .policies-section:hover {
    cursor: pointer;
    background-color: #ff670f;
  }

  .policies-section:hover .text-color {
    color: #ffffff; /* Color on hover */
  }

  .policies-section:hover svg {
    stroke: #ffffff; /* SVG stroke color on hover */
  }
}

.hover-state.policies-section {
  background-color: #fe5420;
}

.hover-state.policies-section .text-color {
  color: #ffffff;
}

.hover-state.policies-section svg {
  stroke: #ffffff;
}
</style>
