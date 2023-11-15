import { useState } from '#app';

export const useGlobalState = () => {
  // Initialize isMobile with a function that will only execute on the client-side
  const isMobile = useState('isMobile', () => {
    // Ensure we are in the client environment before accessing window
    if (process.client) {
      return window.innerWidth <= 768;
    }
    // Default value when on the server-side
    return false;
  });

  const updateMobileStatus = () => {
    // Again, ensure we are in the client environment
    if (process.client) {
      isMobile.value = window.innerWidth <= 768;
    }
  };

  return {
    isMobile,
    updateMobileStatus,
  };
};
