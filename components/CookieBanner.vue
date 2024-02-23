<template>
  <div v-if="showBanner" class="cookie-banner fixed bottom-0 md:right-6 md:bottom-4 z-[997] dark:bg-[#09090B] bg-[#FAFAFA] px-4 py-2 flex flex-col justify-between items-center rounded-xl w-full md:w-[40%] lg:w-[30%] transition-all ease-in-out duration-300 border-[#000]/[0.1] dark:border-[#fff]/[0.1] focus-visible:ring-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white border">
    <div class="flex flex-col items-center mb-2 space-y-2 max-w-full ">
      <div class="flex flex-row items-start w-full max-w-xs md:max-w-sm lg:max-w-md">

        <svg class="h-10 w-10 mt-1 mr-2 fill-black dark:fill-white" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M21.27 10.9c-1.21-.33-2.31-1.46-2.29-2.89c.01-.56-.4-1.02-.96-1.01C15.83 7.03 14 5.22 14 3.02c0-.49-.35-.9-.84-.96C6.53 1.22 2 6.81 2 12c0 5.52 4.48 10 10 10c5.61 0 10.11-4.62 10-10.18a.972.972 0 0 0-.73-.92zM8.5 15c-.83 0-1.5-.67-1.5-1.5S7.67 12 8.5 12s1.5.67 1.5 1.5S9.33 15 8.5 15zm2-5C9.67 10 9 9.33 9 8.5S9.67 7 10.5 7s1.5.67 1.5 1.5s-.67 1.5-1.5 1.5zm4.5 6c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1z" ></path></svg>

        <div class="text-base text-left w-full p-2 text-[#09090B] dark:text-[#FAFAFA]">
          We use <strong>cookies</strong> or similar technologies for technical purposes and, with your consent, for other purposes as specified in the <NuxtLink :to="localePath('polices')" class="underline cursor-pointer">cookie policy</NuxtLink>. Denying consent may make related features unavailable.
        </div>
      </div>
    </div>

    <div class="flex flex-col sm:flex-row gap-4 w-full max-w-xs md:max-w-sm lg:max-w-md px-4 font-bold">
      <button @click="declineCookies" class="reject-button bg-transparent border border-gray-400 text-gray-400 hover:bg-white hover:text-red-600 rounded px-3 py-2 transition-colors duration-300 w-full">Reject</button>
      <button @click="acceptCookies" class="accept-button bg-green-500 text-white hover:bg-green-600 rounded px-3 py-2 transition-colors duration-300 w-full">Accept</button>
    </div>
  </div>
</template>



<script setup>
const cookieConsent = ref(null); // Initialize with default value or null
const showBanner = ref(!cookieConsent.value);
const acceptCookies = async () => {
  await fetch('/api/cookies', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ consent: 'accepted' }),
  });
  cookieConsent.value = 'accepted';
  showBanner.value = false;
};

const declineCookies = async () => {
  await fetch('/api/cookies', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ consent: 'declined' }),
  });
  cookieConsent.value = 'declined';
  showBanner.value = false;
};

</script>

<!-- Seus estilos aqui -->
<style scoped>
.cookie-banner {
font-family: "Open Sans", sans-serif;
}
.cookier-banner button {
  font-family: "Montserrat", sans-serif;
}
</style>
