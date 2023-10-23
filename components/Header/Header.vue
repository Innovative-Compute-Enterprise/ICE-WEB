<template>
  <header class="fixed top-0 left-0 w-full bg-transparent text-white z-50 flex justify-between items-center px-6 py-2">
    <!-- Logo -->
    <div class="text-left">
      <img src="/logo.png" alt="My Website Logo" class="h-15 w-15">
    </div>
    <!-- Hamburger Menu -->
    <div class="relative" @click="toggleMenu" :class="{ 'z-40': menuOpen }">
      <input type="checkbox" class="absolute opacity-0 w-0 h-0" v-model="menuOpen" />
      <!-- SVG for menu -->
      <svg v-if="!menuOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>
      <!-- SVG for close -->
      <svg v-if="menuOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </div>
    <!-- Slide-in Menu -->
    <div ref="menu" class="fixed top-0 right-0 w-64 h-screen bg-gray-700 text-white p-4 transform" :class="{ 'translate-x-full': !menuOpen }">
      <ul class="flex flex-col items-center justify-center h-full space-y-8 text-2xl">
        <li><a href="#" class="hover:text-blue-600">Home</a></li>
        <li><a href="#" class="hover:text-blue-600">About</a></li>
        <li><a href="#" class="hover:text-blue-600">Services</a></li>
        <li><a href="#" class="hover:text-blue-600">Contact</a></li>
      </ul>
    </div>
  </header>
</template>

<script>
import { gsap } from 'gsap';

export default {
  data() {
    return {
      menuOpen: false,
      menuTimeline: null
    };
  },
  mounted() {
    // Set initial state of the menu to be hidden
    gsap.set(this.$refs.menu, { x: '100%' });
    
    this.menuTimeline = gsap.timeline({ paused: true })
      .to(this.$refs.menu, { x: '0%', duration: 0.5, ease: 'power1.out' });
  },
  watch: {
    menuOpen(newValue) {
      if (newValue) {
        this.menuTimeline.play();
      } else {
        this.menuTimeline.reverse();
      }
    }
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    }
  }
};
</script>

<style scoped>
/* Custom transition and transformation styles can be added here if needed */
</style>