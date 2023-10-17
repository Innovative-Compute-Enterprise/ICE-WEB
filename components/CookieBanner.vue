<template>
  <div v-if="showBanner" class="cookie-banner fixed bottom-0 left-0 p-4 flex flex-col z-50 bg-gray-800 text-white rounded-r-lg space-y-4">
    <div class="flex items-center">
      <!-- Cookie icon -->
      <svg class="w-6 h-6 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h4m2 0h14M4 12h18m-8-8v8"></path>
      </svg>
      <div class="text-sm leading-5">
        Este site usa cookies para melhorar sua experiência.
      </div>
    </div>
    <div class="flex space-x-4">
      <button @click="acceptCookies" class="text-center text-sm px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded text-white">Aceitar</button>
      <button @click="declineCookies" class="text-center text-sm px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded text-white">Recusar</button>
      <a href="#" class="text-sm underline">Política de Privacidade</a>
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
  