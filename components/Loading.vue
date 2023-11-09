<!-- components/Loading.vue -->
<template>
    <div class="loading-page">
      <svg class="loader10" height="38" viewBox="0 0 38 38" width="38" xmlns="http://www.w3.org/2000/svg">
        <!-- Your SVG markup -->
        <defs>
          <linearGradient id="a" x1="8.042%" x2="65.682%" y1="0%" y2="23.865%">
            <stop offset="0%" stop-color="#fff" stop-opacity="0"/>
            <stop offset="63.146%" stop-color="#fff" stop-opacity=".631"/>
            <stop offset="100%" stop-color="#fff"/>
          </linearGradient>
        </defs>
        <g fill="none" fill-rule="evenodd">
          <g transform="translate(1 1)">
            <path d="M36 18c0-9.94-8.06-18-18-18" stroke="url(#a)" stroke-width="2"></path>
            <circle cx="36" cy="18" fill="#fff" r="1"></circle>
          </g>
        </g>
      </svg>
    </div>
  </template>
  
  <script setup>
  import { onMounted } from 'vue';
  import { gsap } from 'gsap';
  
  onMounted(() => {
    gsap.to('.loader10', {
      duration: 1,
      rotation: 360,
      repeat: -1,
      ease: 'power2',
      transformOrigin: 'center center'
    });
  });
  </script>
  
  <style scoped>
  .loading-page {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(0, 0, 0);
    z-index: 9999;
  }
  
  .loader10 {
    width: 80px;
    height: 80px;
    transform-origin: center;
  }
  </style>
  