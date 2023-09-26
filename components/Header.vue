<template>
  <header class="fixed top-0 w-full bg-opacity-0 z-50">
    <div class="font">
    <div class="container max-w-full flex justify-between items-center px-2 py-2 md:px-8 md:py-4 lg:px-8 lg:py-4 xl:px-8 xl:py-4 ">
      <Logo />
      <div class="flex bg-black p-[4.448px] gap-2 rounded-xl items-center justify-center ">
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
</style>
