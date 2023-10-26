
<template>
  <header ref="header" class="fixed top-0 left-0 w-full bg-transparent text-white z-50 flex justify-between items-center px-8 py-1">
    <div class="text-left">
      <img src="/logo.png" alt="My Website Logo" class="h-14 w-14">
    </div>
    <!-- Hamburger Menu -->
    <div class="relative" @click="toggleMenu" :class="{ 'z-40': menuOpen }">
      <div ref="iconContainer">
        <svg ref="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" class="w-10 h-10 cursor-pointer">
          <!-- Lines for hamburger -->
          <path ref="line1" stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5" />
          <path ref="line2" stroke-linecap="round" stroke-linejoin="round" d="M3.75 12h16.5" />
          <path ref="line3" stroke-linecap="round" stroke-linejoin="round" d="M3.75 17.25h16.5" />
        </svg>
      </div>
    </div>
    <!-- Slide-in Menu -->
    <div ref="menu" class="fixed top-0 right-0 w-64 h-screen bg-[#E1E1E1]  text-[#646464] p-4 transform" :class="{ 'translate-x-full': !menuOpen }">
      <ul class="flex flex-col items-center justify-center h-full space-y-8 text-2xl">
          <li><a href="#home" class="hover:text-blue-600">Home</a></li>
          <li><a href="#about" class="hover:text-blue-600">About</a></li>
          <li><a href="#faq" class="hover:text-blue-600">Services</a></li>
          <li><a href="#footer" class="hover:text-blue-600">Contact</a></li>
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
      menuTimeline: null,
    };
  },
  mounted() {
    gsap.set(this.$refs.menu, { x: '100%' });
    this.menuTimeline = gsap.timeline({ paused: true })
      .to(this.$refs.menu, { x: '0%', duration: 0.7, ease: 'power2.out' });

    // Add event listener for scroll
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  watch: {
    menuOpen(newValue) {
      this.animateIcon(newValue);
      if (newValue) {
        this.menuTimeline.play();
      } else {
        this.menuTimeline.reverse();
      }
    },
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    animateIcon(open) {
      if (open) {
        gsap.to(this.$refs.line1, {attr: {d: 'M6 18L18 6'}, duration: 0.3});
        gsap.to(this.$refs.line2, {opacity: 0, duration: 0.2});
        gsap.to(this.$refs.line3, {attr: {d: 'M6 6l12 12'}, duration: 0.3});
      } else {
        gsap.to(this.$refs.line1, {attr: {d: 'M3.75 6.75h16.5'}, duration: 0.3});
        gsap.to(this.$refs.line2, {opacity: 1, duration: 0.2});
        gsap.to(this.$refs.line3, {attr: {d: 'M3.75 17.25h16.5'}, duration: 0.3});
      }
    },
    handleScroll() {
  if (window.scrollY > 10) {
    this.$refs.header.classList.add('scrolled');
  } else {
    this.$refs.header.classList.remove('scrolled');
  }
 }
  },
};
</script>

<style scoped>
.scrolled {
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(13.5px);
  -webkit-backdrop-filter: blur(13.5px);
  border-radius: 0px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}
</style>
