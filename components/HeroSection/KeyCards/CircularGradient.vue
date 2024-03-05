<template>
<div class="absolute inset-y-0 left-0 right-0 md:right-auto flex md:items-center md:justify-end justify-center">
      <!-- Outermost circle -->
     <!-- Outermost circle with gradient based on theme -->
     <div class="rounded-full shadow-lg h-80 w-80 flex items-center justify-center relative md:mr-[-150%] md:mt-[5%] mt-[10%]" style="background: linear-gradient(135deg, rgba(250, 250, 250, 0.1) 0%, rgba(9, 9, 11, 0.1) 100%);">
        <!-- First inner circle with gradient -->
        <div class="rounded-full shadow-inner h-64 w-64 absolute" style="background: linear-gradient(135deg, rgba(250, 250, 250, 0.2) 0%, rgba(9, 9, 11, 0.1) 100%); box-shadow: inset 0 0 0 2px rgba(250, 250, 250, 0.1);"></div>
        <!-- Second inner circle with gradient -->
        <div class="rounded-full shadow-inner h-48 w-48 absolute" style="background: linear-gradient(135deg, rgba(250, 250, 250, 0.3) 0%, rgba(9, 9, 11, 0.2) 100%); box-shadow: inset 0 0 0 2px rgba(250, 250, 250, 0.2);"></div>
        <!-- Third inner circle with gradient -->
        <div class="rounded-full shadow-inner h-32 w-32 absolute" style="background: linear-gradient(135deg, rgba(250, 250, 250, 0.4) 0%, rgba(9, 9, 11, 0.3) 100%); box-shadow: inset 0 0 0 2px rgba(250, 250, 250, 0.3);"></div>
        <!-- Fourth inner circle with gradient -->
        <div class="rounded-full shadow-inner h-16 w-16 absolute" style="background: linear-gradient(135deg, rgba(250, 250, 250, 0.5) 0%, rgba(9, 9, 11, 0.4) 100%); box-shadow: inset 0 0 0 2px rgba(250, 250, 250, 0.4);"></div>

        <div class="absolute rounded-full  flex items-center justify-center p-2">
          <!-- Place your SVG code here -->
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-[42px] h-[42px] fill-black dark:fill-white">
            <path fill-rule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clip-rule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
</template>

<style scoped>
</style>