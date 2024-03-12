<!-- components/DotGrid.vue -->
<template>
  <div class="text-center absolute md:top-[-10%] md:left-[40%] right-0 left-0 top-[20%]">
    <!-- Center text and content -->
    <div class="inline-block">
      <!-- Use inline-block for inner grid centering -->
      <div class="grid md:grid-cols-10 grid-cols-8 gap-[40px]">
        <div v-for="n in 40" :key="n" class="dot bg-gray-400 dark:bg-gray-300" :class="{ 'active': activeIndex === n - 1 }"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const activeIndex = ref(0);

const getRandomStyle = () => {
  const delay = Math.random() * 5; // Random delay between 0 and 5 seconds
  const duration = Math.random() * 4 + 2; // Random duration between 1 and 3 seconds
  return {
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`,
  };
};

const startAnimation = () => {
  setInterval(() => {
    activeIndex.value = (activeIndex.value + 1) % 40;
  }, 1000);
};

onMounted(() => {
  const dots = document.querySelectorAll('.dot');
  dots.forEach((dot) => {
    const randomStyle = getRandomStyle();
    Object.assign(dot.style, randomStyle);
  });
  startAnimation();
});
</script>

<style scoped>
.dot {
  width: 1px;
  height: 1px;
  border-radius: 50%;
  animation: pulse infinite;
  position: relative;
}



@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(6);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}

</style>