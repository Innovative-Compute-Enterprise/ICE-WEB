<template>
  <header class="fixed top-0 w-full bg-opacity-0 z-50">
    <div class="font">
      <div class="headerA container max-w-full flex justify-between items-center px-4 md:px-8 py-4 ">
        <Logo />
        <div class="hidden md:flex bg-black p-[8px] rounded-lg items-center justify-center">
          <ContactButton />
          <NavDropdown />
        </div>
      </div>
      <!-- Mobile Menu fixed at bottom -->
      <div class=" flex flex-col headerM justify-center pb-6">
      <div v-cloak class="md:hidden fixed bottom-4 left-4 right-4 flex bg-black p-[8px] rounded-lg items-center justify-between align-bottom ">
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
/* existing styles */
.font{
  font-family: 'Helvetica Neue Medium', sans-serif;
}

.headerM {
  width: 100%;
  position: fixed;
  top: 0px; /* adding px unit also seems to be important for whatever reason, albeit I think we all concur that this should be unitless */
  left: 0px;
  bottom: 0px;
  height: 100vh;
  overflow: scroll; /* not auto! */

  /* magic mobile viewport iOS bug fix */
  /* also see: https://css-tricks.com/css-fix-for-100vh-in-mobile-webkit/ */
  /* also see: https://allthingssmitty.com/2020/05/11/css-fix-for-100vh-in-mobile-webkit/ */
  height: -webkit-fill-available;
  -webkit-overflow-scrolling: touch;
}
</style>

