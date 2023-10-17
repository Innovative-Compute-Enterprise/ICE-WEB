<template>
  <div class="px-12 py-16 md:px-24 md:py-24 bg-blue-500 text-black space-y-6">
    <h1>Schedule a demo by submitting your contact information</h1>
    <form class="space-y-4">
      <div class="flex flex-col">
        <input type="text" id="name" name="name" placeholder="Your Name" minlength="5" required class="text-input p-6 rounded-md">
      </div>
      <div class="flex flex-col">
        <input type="text" id="company" name="company" placeholder="Your Company" required class="text-input p-6 rounded-md">
      </div>
      <div class="flex flex-col">
        <input type="email" id="email" name="email" placeholder="Your Email" minlength="5" required class="text-input p-6 rounded-md">
      </div>
      <button type="submit" class="bg-black text-white p-6 w-full rounded-md hover:bg-gray-800">BOOK A DEMO</button>
    <div>
        <label class="inline-flex items-center">
          <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600" required>
          <span class="ml-2">I agree with the <span class="underline">Privacy Policy</span></span>
        </label>
      </div>
    </form>
  </div>
</template>

<style scoped>
h1{
  color: #ffffff;
  line-height: 90%; 
  font-size: 32px;
  letter-spacing: 2.0px;
  opacity: 0.85;
}

.text-input {
  font-size: 20px;
  font-family: 'Helvetica Neue Medium', sans-serif;
}

::placeholder {
  color: #000000;
  opacity: 0.30; 
  font-size: 20px;
}

input:focus::placeholder {
  opacity: 0.90;
}

button {
  font-size: 20px;
  font-family: 'Helvetica Neue Medium', sans-serif;
}
</style>
