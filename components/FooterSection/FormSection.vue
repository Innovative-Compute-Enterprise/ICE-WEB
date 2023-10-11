<template>
    <div class="p-8 bg-blue-500 text-white space-y-6">
      <h1 class="text-4xl font-semibold">Schedule a demo by submitting your contact information</h1>
      <form class="space-y-4">
        <div class="flex flex-col">
          <label for="name" class="text-xl font-medium mb-2">NAME</label>
          <input type="text" id="name" name="name" placeholder="Your Name" class="p-2 rounded-md">
        </div>
        <div class="flex flex-col">
          <label for="company" class="text-xl font-medium mb-2">COMPANY NAME</label>
          <input type="text" id="company" name="company" placeholder="Your Company" class="p-2 rounded-md">
        </div>
        <div class="flex flex-col">
          <label for="email" class="text-xl font-medium mb-2">EMAIL</label>
          <input type="email" id="email" name="email" placeholder="Your Email" class="p-2 rounded-md">
        </div>
        <div>
          <label class="inline-flex items-center">
            <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600" checked>
            <span class="ml-2">I agree with the <span class="underline">Privacy Policy</span></span>
          </label>
        </div>
        <button type="submit" class="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800">BOOK A DEMO</button>
      </form>
    </div>
</template>

  
  <style scoped>
  /* Adicione seus estilos aqui conforme necessário */
  </style>
  