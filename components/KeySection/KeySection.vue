<template>
  <div class="w-full h-full grid grid-cols-1 md:grid-cols-3 items-start min-h-[600px] md:min-h-[900px] bg-white">
    <!-- Watch & Read More Section -->
    <div class="bg-[#dfdfdf] space-y-4 row-span-2 md:row-span-1 ">
      <div class="h-[380px] flex flex-col justify-between p-12 md:p-16">
        <div>
        <div class="text-gray-800 text-[36px] font-normal leading-12">{{ $t('keySection.watch') }}</div>
        <div class="text-gray-800 text-[36px] font-normal leading-12">{{ $t('keySection.video') }}</div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 mt-4 inline cursor-pointer">
        <path fill-rule="evenodd" d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z" clip-rule="evenodd" />
        </svg>
    </div>
      
      <div class="bg-[#646464] h-[380px] flex flex-col justify-between p-12 md:p-16">
        <div class="text-white text-[36px] font-normal leading-12">{{ $t('keySection.read') }}</div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffffff" class="w-12 h-12 mt-4 inline cursor-pointer">
        <path fill-rule="evenodd" d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z" clip-rule="evenodd" />
        </svg>
      </div>
    </div>

    <!-- Key Principles Section -->
    <div class="h-full w-auto bg-black p-12 md:p-16 mb-28 md:col-start-2">
      <div class="tittle-text sticky top-24 text-white text-[48px] md:text-[63px] lg:text-[73px] font-normal leading-[80.78px] tracking-tight">{{ $t('keySection.key') }}</div>
    </div>

    <!-- List of Principles -->
    <ul class="md:col-start-3 ">
      <li v-for="item in principles" :key="item" class="bg-white flex flex-col items-start p-12 md:p-16">
        <div class="w-8 h-8 bg-[#0f151d] rounded-lg rounded-br-xl"></div>
        <div class="text-[#0f151d] text-[21px] leading-8">{{ t(item) }}</div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { ref } from 'vue'

const { t } = useI18n()

// Use `ref` to make it reactive if you need to change the values later
const principles = ref([
  "principles.principle1",
  "principles.principle2",
  "principles.principle3",
  "principles.principle4",
  "principles.principle5"
]);
</script>

<style scoped>
.tittle-text{
  font-family: 'Georgia', sans-serif;
}
ul{
  font-size: 21.09px;
  font-family: 'Helvetica Neue Medium', sans-serif;
  line-height: 23.17px;
}
</style>
