<template>
  <div v-if="showBanner" class="cookie-banner fixed inset-x-0 bottom-0 z-50 bg-white text-black px-4 py-2 sm:px-6 sm:py-3">
    <div class="container mx-auto flex items-center justify-between flex-col sm:flex-row">
      
      <div class="flex items-center mb-4 sm:mb-0">
        <svg class="mr-2 h-10 w-10" viewBox="0 0 24 24" fill="none" stroke="black">
          <!-- SVG path for cookie icon -->
          <path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm6,13a1,1,0,1,1,1-1A1,1,0,0,1,18,15Zm-8-4a1,1,0,1,1,1-1A1,1,0,0,1,10,11Zm6-3a1,1,0,1,1,1-1A1,1,0,0,1,16,8Zm-4-2a1,1,0,1,1,1-1A1,1,0,0,1,12,6Z" fill="#FFF"/>
        </svg>
        <div class="text-xs sm:text-sm">
          We and selected third parties use cookies or similar technologies for technical purposes and, with your consent, for other purposes as specified in the 
          <a href="/pages/about.vue" class="underline">cookie policy</a>. Denying consent may make related features unavailable.
        </div>
      </div>

      <div class="flex space-x-2">
        <button @click="declineCookies" class="reject-button">Reject</button>
        <button @click="acceptCookies" class="accept-button">Accept</button>
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
.cookie-banner {
  box-shadow: 0 -0.125rem 0.250rem rgba(0, 0, 0, 0.1);
  font-family: 'Arial', sans-serif;
}

button {
  text-align: center;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  transition: background-color 0.3s, color 0.3s;
}

.reject-button {
  width: auto;
  background-color: transparent;
  border: 0.063rem solid #646464;
  color: #646464;
}

.reject-button:hover {
  background-color: white;
  color: #1e40af;
}

.accept-button {
  background-color: #4CAF50; /* Green shade */
  color: white;
  width: auto;
}

.accept-button:hover {
  background-color: #45a049; /* A slightly darker green for hover effect */
  color: white;
}

a {
  text-decoration: underline;
}

a:hover {
  color: #ffeb3b;
}

@media (max-width: 640px) {
  .cookie-banner {
    padding: 1rem;
  }

  .cookie-banner svg {
    width: 40px;
    height: 40px;
  }
}
</style>
