<template>
    <div class="w-full h-full grid md:grid-cols-2 md:grid-rows-2 grid-cols-1">
      <!-- Blue Section -->
      <div class="min-h-[800px] p-8 md:p-16 xl:p-16 lg:p-16 bg-blue-400 flex flex-col justify-between items-start">
        <h1 class="text-white text-7xl">Blue Section Title</h1>
        <p class="text-white">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
      </div>
      
      <!-- White Section 1 -->
      <div class="min-h-[800px] p-8 md:p-16 xl:p-16 lg:p-16 bg-white flex flex-col justify-between items-start">
        <h1 class="text-black text-7xl">White Section 1 Title</h1>
        <p class="text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    
      <!-- White Section 2 -->
      <div class="min-h-[800px] p-8 md:p- xl:p-16 lg:p-16 bg-rose-700  md:bg-white lg:bg-white xl:bg-white flex flex-col justify-between items-start">
        <h1 class="text-black text-7xl">White Section 2 Title</h1>
        <p class="text-black"></p>
      </div>
    
      <!-- Stone Section -->
      <div class="p-4 md:p-16 bg-gray-300 flex flex-col justify-between items-start">
            <!-- Top Section -->
            <div class="flex-grow flex flex-col justify-between items-start">
                <h3 class="text-black text-3xl">Top</h3>
                <p class="text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                <div class="flex items-center">
                <svg class="h-6 w-6 mr-2 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <!-- Your SVG icon content here -->
                </svg>
                <a href="#" class="text-black">Link</a>
                </div>
            </div>

            <!-- Bottom Section -->
            <div class="flex-grow flex flex-col justify-between items-start">
                <h3 class="text-black text-3xl">Bottom</h3>
                <p class="text-black">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                <div class="flex items-center">
                <svg class="h-6 w-6 mr-2 text-black" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <!-- Your SVG icon content here -->
                </svg>
                <a href="#" class="text-black">Link</a>
                </div>
            </div>
            </div>

    </div>
  </template>
  
  <script setup>
    // Any logic for this section can be placed here
  </script>
  
  <style scoped>
   h1{
    font-family: 'Helvetica Neue Medium', sans-serif;
    font-weight: 400;
    line-height: 82.6px; 
    letter-spacing: -1.836px;
   }
   p{
    font-family: 'Georgia', sans-serif;
    font-size: 31.417px;
    font-weight: 400;
    line-height: 37.17px;
   }
  </style>
  