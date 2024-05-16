<template>
  <div class="m-auto absolute md:top-[35%] top-[45%] w-[100%] max-w-[700px] 2xl:max-w-[960px] aspect-square">
    <canvas ref="canvasEl" class="w-full h-full cursor-grab rounded-full" :style="{ transition: 'opacity 1s ease-in-out', opacity: canvasOpacity }" width="1050" height="1050" 
            @pointerdown="handlePointerDown"
            @pointerup="handlePointerUp"
            @pointerout="handlePointerOut"
            @mousemove="handleMouseMove"
            @touchmove.passive="handleTouchMove" >
     </canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import createGlobe from 'cobe';

const canvasEl = ref(null);
let phi = 0;
let width = ref(0);
let canvasOpacity = ref(0); // Initial opacity set to 0 for transition effect

// New variables for handling drag
const pointerInteracting = ref(false);
const pointerInteractionStart = ref(0);
const pointerInteractionMovement = ref(0);

onMounted(() => {
  const updateSize = () => {
    if (canvasEl.value) {
      width.value = canvasEl.value.offsetWidth;
      canvasEl.value.width = width.value * 1; // Adjust for devicePixelRatio if needed
      canvasEl.value.height = width.value * 1;
    }
  };
  updateSize(); // Initial size update
  window.addEventListener('resize', updateSize); // Adjust size on window resize

  const globe = createGlobe(canvasEl.value, {
    devicePixelRatio: 2,
    width: width.value * 2,
    height: width.value * 2,
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

  // Animate opacity for the canvas after globe initialization
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
    const delta = (e.clientX - pointerInteractionStart.value) / 150; // Change 200 to adjust sensitivity
    pointerInteractionMovement.value += delta;
    pointerInteractionStart.value = e.clientX; // Reset start position for smooth dragging
  }
};

const handleTouchMove = (e) => {
  if (pointerInteracting.value && e.touches.length > 0) {
    const delta = (e.touches[0].clientX - pointerInteractionStart.value) / 100; // Change 200 to adjust sensitivity
    pointerInteractionMovement.value += delta;
    pointerInteractionStart.value = e.touches[0].clientX; // Reset start position for smooth dragging
  }
};
</script>
