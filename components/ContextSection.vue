<template>
  <div class="grid grid-cols-1 md:grid-cols-2 md:grid-rows-[minmax(600px,1fr)]">
      <!-- Blue Section -->
      <div class="p-4 md:p-6 bg-blue-500 flex flex-col justify-between items-start">
      <h1 class="text-white mb-16 md:mb-0">Blue Section Title</h1>
      <p class="text-white mb-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    </div>
      
      <!-- White Section 1 -->
      <div class="p-4 md:p-6 bg-white flex flex-col justify-between items-start">
        <h1 class="text-black mb-16 md:mb-0">White Section 1 Title</h1>
        <p class="text-black mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    
      <!-- White Section 2 -->
      <div class="p-4 md:p-6 bg-rose-700 md:bg-white flex flex-col justify-between items-start">
        <h1 class="text-black ">White Section 2 Title</h1>
        <p class="text-black "></p>
      </div>
    
      <!-- Stone Section -->
      <div class="p-4 md:p-6 bg-[#0f151d] flex flex-col justify-between items-start">
            <!-- Top Section -->
            <div class="flex-grow flex flex-col justify-center items-start ">
              <div class="bg-white rounded-tl-[44px] rounded-tr-[22px] shadow-2xl">
                <h3 class="text-black p-6">Top</h3>
                <p class="text-black p-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                <div class="flex items-center p-4">
                  <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 cursor-pointer hover:text-blue-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                 </a>
                </div>
              </div>
            </div>
            <br>
            <!-- Bottom Section -->
            <div class="flex-grow flex flex-col justify-center items-start ">
              <div class="bg-white rounded-br-[22px] shadow-2xl">
                <h3 class="text-black p-6">Bottom</h3>
                <p class="text-black p-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                <div class="flex items-center p-4">
                  <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 cursor-pointer hover:text-blue-500">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                  </a>
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
    font-weight: 600;
    line-height: 90%; 
    font-size: 36px;
    letter-spacing: -1.836px;
   }
   p{
    font-family: 'Georgia', sans-serif;
    font-size: 21px;
    font-weight: 300;
    line-height: 23.17px;
   }
   h3{
    font-family: 'Georgia', sans-serif;
    font-size: 28px;
    font-weight: 500;
    line-height: 30.17px;
   }
  </style>
  