<template>
  <div class="hero-video-container">
    <video autoplay loop muted playsinline class="hero-video">
      <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4">
    </video>
    <div class="overlay"></div>
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
