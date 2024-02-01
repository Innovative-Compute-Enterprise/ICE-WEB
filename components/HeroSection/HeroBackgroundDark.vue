<template>
    <div class="m-auto absolute w-[100%] max-w-[600px] aspect-square">
      <canvas ref="canvasEl" class="w-full h-full cursor-grab rounded-full" style="transition: opacity 1s ease-in-out; opacity: 1;" width="1050" height="1050"></canvas>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import createGlobe from 'cobe';
  
  const canvasEl = ref(null);
  let phi = 0;
  let width = 0;
  
  const updateSize = () => {
    if (canvasEl.value) {
      width = canvasEl.value.offsetWidth;
    }
  };
  
  onMounted(() => {
    window.addEventListener('resize', updateSize);
    updateSize();
  
    const globe = createGlobe(canvasEl.value, {
      devicePixelRatio: 2,
      width: width * 2,
      height: width * 2,
      phi: 0,
      theta: 0.2,
      dark: 1.1,
      diffuse: 1.1,
      mapSamples: 16000,
      mapBrightness: 1.8,
      mapBaseBrightness: .05,
      baseColor: [1.1, 1.1, 1.1],
      markerColor: [251 / 255, 100 / 255, 21 / 255],
      glowColor: [1.1, 1.1, 1.1],
      markers: [],
      opacity: .7,
      onRender: (state) => {
        state.phi = phi;
        phi += 0.005;
        state.width = width * 2;
        state.height = width * 2;
      },
    });
  });
  </script>
  