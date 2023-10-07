<template>
  <div class="w-full h-full grid grid-cols-1 md:grid-cols-3 items-start min-h-[500px] md:min-h-[800px]">
    <!-- Watch & Read More Section -->
    <div class="bg-gray-200 space-y-4 row-span-2 md:row-span-1">
      <div class="h-[350px] flex flex-col justify-between p-6">
        <div>
        <div class="text-gray-800 text-[36px] font-normal leading-12">Watch</div>
        <div class="text-gray-800 text-[36px] font-normal leading-12">our video</div>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 mt-4">
        <path fill-rule="evenodd" d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z" clip-rule="evenodd" />
        </svg>
        
    </div>
      
      <div class="bg-gray-300 h-[350px] flex flex-col justify-between p-6">
        <div class="text-gray-800 text-[36px] font-normal leading-12">Read more</div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-12 h-12 mt-4">
        <path fill-rule="evenodd" d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z" clip-rule="evenodd" />
        </svg>
      </div>
    </div>

    <!-- Key Principles Section -->
    <div class="h-full w-auto bg-[#0f151d] p-6 mb-28 md:col-start-2">
      <div class="sticky top-8 text-gray-100  text-[48px] lg:text-[73px] font-normal leading-[91.78px] tracking-tight">Key principles</div>
    </div>

    <!-- List of Principles -->
    <ul class="md:col-start-3">
      <li v-for="item in principles" :key="item" class="bg-white flex flex-col items-start p-6 md:p-10">
        <div class="w-8 h-8 bg-[#0f151d] rounded-lg rounded-br-xl"></div>
        <div class="text-[#0f151d] text-[21px] font-semibold leading-10">{{ item }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      principles: [
        "Companies cannot access genetic data held by other partner companies",
        "GENXT does not process, transmit or store any genetic or personal information",
        "Companies establish their own policies for collaboration with their chosen partners",
        "Identified matches contain only the personal information that individuals agreed to disclose",
        "Companies themselves deliver matches to their customer accounts"
      ]
    };
  }
}
</script>

<style scoped>
ul{
  font-family: 'Georgia', sans-serif;
  line-height: 23.17px;
}
</style>
