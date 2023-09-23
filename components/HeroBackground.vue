<template>
    <div class="hero-video-container">
      <video autoplay loop muted class="hero-video">
        <source src="@/assets/your-video.mp4" type="video/mp4">
      </video>
    </div>
  </template>
  
  <style scoped>
  .hero-video-container {
    position: relative;
    overflow: hidden;
  }
  
  .hero-video {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
  </style>
  