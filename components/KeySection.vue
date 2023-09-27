<template>
  <div class="w-full h-full grid grid-cols-1 md:grid-cols-3 items-start min-h-[500px] md:min-h-[800px]">
    <!-- Watch & Read More Section -->
    <div class="bg-stone-50 space-y-4 row-span-2 md:row-span-1">
      <div class="h-[350px] flex flex-col justify-end p-4">
        <div class="text-zinc-800 text-6xl font-normal leading-12">Watch</div>
        <div class="text-zinc-800 text-6xl font-normal leading-12">our video</div>
      </div>

      <div class="bg-gray-200 h-[350px] flex flex-col justify-end p-4">
        <div class="text-zinc-800 text-6xl font-normal leading-12">Read more</div>
      </div>
    </div>

    <!-- Key Principles Section -->
    <div class="h-full w-auto bg-zinc-800 p-4 md:col-start-2">
      <div class="sticky top-10 text-gray-200  text-6xl lg:text-[87px] font-normal leading-[91.78px] tracking-tight">Key principles</div>
    </div>

    <!-- List of Principles -->
    <ul class="md:col-start-3">
      <li v-for="item in principles" :key="item" class="bg-white flex flex-col items-start p-[20px] md:p-[40px]">
        <div class="w-8 h-8 bg-zinc-800 rounded-sm"></div>
        <div class="text-zinc-800 text-xl font-normal leading-10">{{ item }}</div>
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
/* If you have additional styles, place them here */
</style>
