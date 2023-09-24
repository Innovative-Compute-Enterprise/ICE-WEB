<template>
  <header class="fixed top-0 w-full bg-opacity-0 z-50">
    <div class="font">
    <div class="container max-w-full flex justify-between items-center px-8 py-4">
      <Logo />
      <div class="flex bg-black p-2 rounded-xl">
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
  font-family: CustomHelveticaNeue; 

}
</style>
