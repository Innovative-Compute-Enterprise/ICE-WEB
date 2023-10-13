<template>
  <header class="fixed top-0 w-full bg-opacity-0 z-50 ">
    <div class="font">
      <div class="container max-w-full flex justify-between items-center px-6 md:px-12 py-2 md:py-2 lg:py-4 xl:py-6 ">
        <Logo />
        <div class="hidden md:flex bg-black p-[6px] rounded-lg items-center justify-center ">
          <NavDropdown />
          <ContactButton />
        </div>
      </div>
      <!-- Mobile Menu fixed at bottom -->
      <div class="flex">
      <div v-cloak class="md:hidden fixed bottom-4 left-4 right-4 flex bg-black p-[6px] rounded-lg items-center justify-between align-bottom ">
        <NavDropdown />
        <ContactButton />
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
</script>

<style scoped>
.font{
  font-family: 'Helvetica Neue Medium', sans-serif;
}
[v-cloak] {
    display: none;
    transition: all 0.2s ease;
  }
 
</style>
