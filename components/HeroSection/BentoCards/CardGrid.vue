<template>
  <div class="card-grid">
    <div class="dark:bg-black bg-white opacity-50">
    <div class="background-image dark:opacity-75 opacity-100 bg-card-brain"></div>
  </div>
    <h1 class="centered-title text-white font-bold text-4xl">COMPUTE</h1>
  </div>
</template>


<style>
.card-grid {
  position: relative;
  width: 100%;
  height: 300px;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
}

.centered-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}
</style>
