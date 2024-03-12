<template>
    <footer class="dark:bg-[#09090B] bg-[#FAFAFA] py-[24px] my-[64px]">
      <div class="space-y-[36px]">
        <div class="nav-items flex justify-center md:space-x-12 space-x-6 text-[16px] font-[500]">
          <!-- Add your navigation links here -->
          <NuxtLink :to="localePath('services')" class="text-[#71717A] dark:text-[#A1A1AA] hover:text-[#09090B] hover:dark:text-[#FAFAFA]">Services</NuxtLink>
          <NuxtLink :to="localePath('polices')" class="text-[#71717A] dark:text-[#A1A1AA] hover:text-[#09090B] hover:dark:text-[#FAFAFA]">Polices</NuxtLink>
          <NuxtLink :to="localePath('about')" class="text-[#71717A] dark:text-[#A1A1AA] hover:text-[#09090B] hover:dark:text-[#FAFAFA]">About</NuxtLink>
          <NuxtLink href="#" class="text-[#71717A] dark:text-[#A1A1AA] hover:text-[#09090B] hover:dark:text-[#FAFAFA]">Contact</NuxtLink>
        </div>
        <div class="flex justify-center md:space-x-12 space-x-6">
          <!-- Add your social media links here -->
          <a href="#" class="text-[#71717A] dark:text-[#A1A1AA] hover:text-[#09090B] hover:dark:text-[#FAFAFA]">
            <span class="sr-only">X</span>
            <!-- X Icon -->
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" /></svg>
          </a>
          <a href="#" class="text-[#71717A] dark:text-[#A1A1AA] hover:text-[#09090B] hover:dark:text-[#FAFAFA]">
            <span class="sr-only">GitHub</span>
            <!-- GitHub Icon -->
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
          </a>
          <a href="#" class="text-[#71717A] dark:text-[#A1A1AA] hover:text-[#09090B] hover:dark:text-[#FAFAFA]">
            <span class="sr-only">Share</span>
            <!-- Share Icon -->
            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-share" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" /><path d="M8.7 10.7l6.6 -3.4" /><path d="M8.7 13.3l6.6 3.4" /></svg>
          </a>
        </div>
        <div class="flex justify-center">
          <p class="text-center text-[16px] text-[#71717A] dark:text-[#A1A1AA]">
            &copy; {{ currentYear }} {{ $t('footerEmail.copyright') }}
          </p>
        </div>
      </div>
    </footer>
  </template>

  <script setup>
  const currentYear = ref(new Date().getFullYear());
  </script>
  
  <style scoped>
  .nav-items {
    font-family: "Open Sans", sans-serif;
  }
  span{
    font-family: "Open Sans", sans-serif;
  }
 </style>