<template>
    <div class="error-page-container">
      <div class="text-center">
      <p class="text-base font-semibold text-red-600 mb-6">{{ error.statusCode }}</p>
      <h1 class="mt-4 text-5xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl mb-8">{{ error.message }}</h1>
      <p class="mt-8 text-base leading-7 text-gray-600 mb-6">{{ error.description }}</p>
      <div class="mt-10 flex items-center justify-center gap-6">
        <a href="/" class="rounded-md bg-blue-600 px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Go back home</a>
        <a href="#" class="text-sm px-4 py-2 font-semibold text-gray-900 dark:text-white rounded-md">Contact support <span aria-hidden="true">&rarr;</span></a>
      </div>
    </div>
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
    align-items: center;
    justify-content: center;
    height: 100vh;
    font-family: 'Helvetica Neue Medium', sans-serif;
    padding-bottom: 5rem;
  }

  </style>
  