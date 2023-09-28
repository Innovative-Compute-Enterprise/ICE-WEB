<template>
    <div class="hero-video-container">
      <video autoplay loop muted class="hero-video">
        <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4">
      </video>
    </div>
  </template>
  
  <style scoped>
  .hero-video-container {
    position: relative;
    overflow: hidden;
  }
  
  .hero-video {
    display: inline;
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
  </style>
  