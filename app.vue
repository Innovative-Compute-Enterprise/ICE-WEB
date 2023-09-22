<script setup lang="ts">
console.log('Hello from the app')
const version = 2 + 1
</script>

<template>
  <div class="hello">
    Hello and Welcome to Nuxt {{ version }}!
    <a href="/pages/index">
    <p>Continuum Glow Website</p>
   </a>
  </div>
</template>

<style scoped>
.hello {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 3rem;
  padding: 2rem;
}
</style>
