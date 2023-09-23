<template>
  <header class="fixed top-0 left-0 w-full bg-opacity-0 z-50">
    <div class="container mx-auto flex justify-between items-center p-4">
      <Logo />
      <div class="flex bg-black p-2 rounded-lg">
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
/* Custom styling if needed */
</style>
