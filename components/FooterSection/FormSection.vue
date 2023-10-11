<template>
    <div class="p-8 md:p-10 bg-blue-500 text-white space-y-6">
      <h1 class="text-4xl font-semibold">Schedule a demo by submitting your contact information</h1>
      <form class="space-y-4">
        <div class="flex flex-col px-2 md:px-4">
          <input type="text" id="name" name="name" placeholder="Your Name" class="p-2 rounded-md">
        </div>
        <div class="flex flex-col px-2 md:px-4">
          <input type="text" id="company" name="company" placeholder="Your Company" class="p-2 rounded-md">
        </div>
        <div class="flex flex-col px-2 md:px-4">
          <input type="email" id="email" name="email" placeholder="Your Email" class="p-2 rounded-md">
        </div>
        <div>
          <label class="inline-flex items-center px-2 md:px-4">
            <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600" checked>
            <span class="ml-2">I agree with the <span class="underline">Privacy Policy</span></span>
          </label>
        </div>
        <button type="submit" class="bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800">BOOK A DEMO</button>
      </form>
    </div>
</template>

  
  <style scoped>
  ::placeholder {
    color: #000000;
    opacity: 0.40; 
  }
  </style>
  