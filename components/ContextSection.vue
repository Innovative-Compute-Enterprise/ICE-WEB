<template>
  <div class="grid grid-cols-1 md:grid-cols-2 md:grid-rows-[minmax(600px,1fr)]">
      <!-- Blue Section -->
      <div class="p-12 md:p-16 bg-blue-400 flex flex-col justify-between items-start">
      <h1 class="text-white text-6xl">Blue Section Title</h1>
      <p class="text-white text-xs">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    </div>
      
      <!-- White Section 1 -->
      <div class="p-12 md:p-16 bg-white flex flex-col justify-between items-start">
        <h1 class="text-black text-6xl">White Section 1 Title</h1>
        <p class="text-black text-xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    
      <!-- White Section 2 -->
      <div class="p-12 md:p-16 bg-rose-700  md:bg-white flex flex-col justify-between items-start">
        <h1 class="text-black text-6xl">White Section 2 Title</h1>
        <p class="text-black"></p>
      </div>
    
      <!-- Stone Section -->
      <div class="p-6 md:p-16 bg-gray-300 flex flex-col justify-between items-start">
            <!-- Top Section -->
            <div class="flex-grow flex flex-col justify-center items-start">
              <div>
                <h3 class="text-black text-4xl p-6">TOP</h3>
                <p class="text-black p-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                <div class="flex items-center p-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 cursor-pointer hover:text-blue-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                <a href="#" class="text-black"></a>
                </div>
              </div>
            </div>

            <!-- Bottom Section -->
            <div class="flex-grow flex flex-col justify-center items-start">
              <div>
                <h3 class="text-black text-3xl p-6">BOTTOM</h3>
                <p class="text-black p-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                <div class="flex items-center p-6">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 cursor-pointer hover:text-blue-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                <a href="#" class="text-black"></a>
                </div>
              </div>
            </div>
            </div>

    </div>
  </template>
  
  <script setup>
   
  </script>
  
  <style scoped>
   h1{
    font-family: 'Helvetica Neue Medium', sans-serif;
    font-weight: 400;
    line-height: 100%; 
    letter-spacing: -1.836px;
   }
   p{
    font-family: 'Georgia', sans-serif;
    font-size: 28px;
    font-weight: 400;
    line-height: 37.17px;
   }
  </style>
  