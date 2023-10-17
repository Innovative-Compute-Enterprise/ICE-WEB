<template>
  <div v-if="showBanner" class="cookie-banner fixed bottom-0 left-0 w-full z-50 bg-blue-600 text-white px-4 py-2 sm:px-6 sm:py-4">
    <div class="container mx-auto flex flex-col sm:flex-row items-center justify-between">
      
      <div class="flex flex-col sm:flex-row items-center mb-2 sm:mb-0">
        <div class="text-sm sm:text-lg mb-2 sm:mb-0">
          We and selected third parties use cookies or similar technologies for technical purposes and, with your consent, for other purposes as specified in the 
          <a href="#" class="underline text-white">cookie policy</a>. Denying consent may make related features unavailable.
        </div>
      </div>

      <div class="flex space-x-2 sm:space-x-4">
        <button @click="declineCookies" class="text-white bg-transparent border border-white px-2 sm:px-4 py-1 sm:py-2 rounded hover:bg-white hover:text-blue-600">Reject</button>
        <button @click="acceptCookies" class="bg-white text-blue-600 px-2 sm:px-4 py-1 sm:py-2 rounded hover:bg-blue-600 hover:text-white">Accept</button>
      </div>

    </div>
  </div>
</template>



<script setup>
const cookieConsent = useCookie('cookieConsent');

const showBanner = ref(!cookieConsent.value);
const acceptCookies = () => {
  cookieConsent.value = 'accepted';
  showBanner.value = false;
};
const declineCookies = () => {
  cookieConsent.value = 'declined';
  showBanner.value = false;
};
</script>

<!-- Seus estilos aqui -->
  <style scoped>
  button{
text-align: center;
font-weight: bold;
font-size: 21px;
  }
  </style>
  