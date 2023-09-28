<!-- layouts/error.vue -->

<template>
    <div class="error-page">
      <h1 v-if="error.statusCode === 404">Página não encontrada</h1>
      <h1 v-else>Erro {{ error.statusCode }}</h1>
      <p>{{ error.message }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: ['error'],
    layout: 'blank'
  }
  </script>
  
  <style scoped>
  .error-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
  }
  </style>
  