<template>
  <header class="fixed top-0 w-full bg-opacity-0 z-50 ">
    <div class="font">
      <div class="headerA container max-w-full flex justify-between items-center px-4 md:px-8 py-1 md:py-2 lg:py-2 xl:py-4 ">
        <Logo />
        <div class="hidden md:flex bg-black p-[6px] rounded-lg items-center justify-center">
          <ContactButton />
          <NavDropdown />
        </div>
      </div>
      <!-- Mobile Menu fixed at bottom -->
      <div class="flex headerM">
      <div v-cloak class="md:hidden fixed bottom-4 left-4 right-4 flex bg-black p-[6px] rounded-lg items-center justify-between align-bottom ">
        <ContactButton />
        <NavDropdown />
      </div>
    </div>
    </div>
  </header>
</template>

<script setup>
// Import the components
import Logo from './Logo.vue';
import NavDropdown from './NavDropdown.vue';
import ContactButton from './ContactButton.vue';
import { gsap } from "gsap";
onMounted(() => {
  gsap.from(".headerA", {
    duration: 2.0,
    delay: 0.5,
    opacity: 0.0,
    y: -50,
    ease: "power1.out"
  });
});
onMounted(() => {
  gsap.from(".headerM", {
    duration: 2.0,
    delay: 0.5,
    opacity: 0.0,
    ease: "power1.out"
  });
});
</script>

<style scoped>
.font{
  font-family: 'Helvetica Neue Medium', sans-serif;
}
[v-cloak] {
    display: none;
    transition: all 0.2s ease;
  }
 
  .headerM {
    padding-bottom: env(safe-area-inset-bottom);
}


</style>
