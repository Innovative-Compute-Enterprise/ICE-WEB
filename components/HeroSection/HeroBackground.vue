<template>
  <div class="hero-video-container">
   
   <img class="hero-image " src="/main.png" alt="main" />
    
    <div class="overlay"></div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.hero-video-container {
  position: relative;
  overflow: hidden;
}

.hero-video, .hero-image {
  display: inline;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  position: relative;
  z-index: 1;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  cursor: default; /* Optional, to show that it's not clickable */
}
</style>
