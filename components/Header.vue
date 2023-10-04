<template>
  <header class="fixed top-0 w-full bg-opacity-0 z-50 ">
    <div class="font">
      <div class="container max-w-full flex justify-between items-center px-4 py-2 md:px-16 md:py-4 lg:px-16 lg:py-4 xl:px-16 xl:py-4 ">
        <Logo />
        <div class="hidden md:flex bg-black p-[6px] rounded-lg items-center justify-center ">
          <NavDropdown />
          <ContactButton />
        </div>
      </div>
      <!-- Mobile Menu fixed at bottom -->
      <div v-cloak class="md:hidden fixed bottom-4 left-7 right-7 flex bg-black p-1 rounded-md items-center justify-between align-bottom ">
        <NavDropdown />
        <ContactButton />
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
