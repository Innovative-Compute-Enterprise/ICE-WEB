// composables/useGlobalState.js
import { useState } from '#app';

export const useGlobalState = () => {
  // Initialize isMobile with a function that will only execute on the client-side
  const isMobile = useState('isMobile', () => {
    if (process.client) {
      return window.innerWidth <= 768;
    }
    return false; // default value when on the server-side
  });

  const updateMobileStatus = () => {
    if (process.client) {
      isMobile.value = window.innerWidth <= 768;
    }
  };

  return {
    isMobile,
    updateMobileStatus,
  };
};
