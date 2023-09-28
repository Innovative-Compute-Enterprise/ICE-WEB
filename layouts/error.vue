<template>
    <div class="error-page-container">
      <h1>{{ error.statusCode }}</h1>
      <p>{{ error.message }}</p>
      <nuxt-link to="/">Voltar para a página inicial</nuxt-link>
    </div>
  </template>
  
  <script>
  export default {
    props: ['error'],
  }
  </script>
  
  <style scoped>
  .error-page-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f5f5f5;
    font-family: 'Helvetica Neue Medium', sans-serif;
  }
  
  h1 {
    font-size: 4em;
    color: #ff0000;
  }
  
  p {
    font-size: 1.5em;
    margin-bottom: 20px;
  }
  </style>
  