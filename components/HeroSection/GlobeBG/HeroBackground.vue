<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import createGlobe from 'cobe';

const canvasEl = ref(null);
let phi = 0;
let width = ref(0);
let canvasOpacity = ref(0); 

// New variables for handling drag
const pointerInteracting = ref(false);
const pointerInteractionStart = ref(0);
const pointerInteractionMovement = ref(0);

onMounted(() => {
  const updateSize = () => {
    if (canvasEl.value) {
      width.value = canvasEl.value.offsetWidth;
      canvasEl.value.width = width.value * window.devicePixelRatio;
      canvasEl.value.height = width.value * window.devicePixelRatio;
    }
  };
  updateSize(); // Initial size update
  window.addEventListener('resize', updateSize); 

  const globe = createGlobe(canvasEl.value, {
    devicePixelRatio: 1,
    width: width.value * 1,
    height: width.value * 1,
    phi: 0,
    theta: 0.2,
    dark: 1.1,
    diffuse: 3,
    mapSamples: 16000,
    mapBrightness: 1.8,
    mapBaseBrightness: 0,
    baseColor: [1.1, 1.1, 1.1],
    markerColor: [251 / 255, 100 / 255, 21 / 255],
    glowColor: [1.1, 1.1, 1.1],
    markers: [],
    opacity: .7,
    onRender: (state) => {
      state.phi = phi + pointerInteractionMovement.value;
      phi += 0.005;
    },
  });

  canvasOpacity.value = 1;

  // Cleanup on unmount
  onUnmounted(() => {
    globe.destroy();
    window.removeEventListener('resize', updateSize);
  });
});

const handlePointerDown = (e) => {
  pointerInteracting.value = true;
  pointerInteractionStart.value = e.clientX;
};

const handlePointerUp = () => {
  pointerInteracting.value = false;
};

const handlePointerOut = () => {
  pointerInteracting.value = false;
};

const handleMouseMove = (e) => {
  if (pointerInteracting.value) {
    const delta = (e.clientX - pointerInteractionStart.value) / 150;
    pointerInteractionMovement.value += delta;
    pointerInteractionStart.value = e.clientX;
  }
};

const handleTouchMove = (e) => {
  if (pointerInteracting.value && e.touches.length > 0) {
    const delta = (e.touches[0].clientX - pointerInteractionStart.value) / 75;
    pointerInteractionMovement.value += delta;
    pointerInteractionStart.value = e.touches[0].clientX; 
  }
};
</script>


<template>
  <div class="m-auto absolute md:top-[35%] top-[45%] w-[110%] md:w-[100%] max-w-[700px] 2xl:max-w-[960px] aspect-square">
    <div class="absolute inset-0 flex items-center justify-center text-white text-5xl">
      <h1>ICE</h1>
    </div>    
    <canvas ref="canvasEl" class="w-full h-full cursor-grab rounded-full" 
    :style="{ transition: 'opacity 1s ease-in-out', opacity: canvasOpacity }" 
    width="1050" height="1050" 
     @pointerdown="handlePointerDown"
     @pointerup="handlePointerUp"
     @pointerout="handlePointerOut"
     @mousemove="handleMouseMove"
     @touchmove="handleTouchMove" >
     </canvas>
  </div>
</template>


<style scoped>
h1{
  font-family: 'Mona Sans';
  font-stretch: 125%;
  font-weight: 900;
}
</style>