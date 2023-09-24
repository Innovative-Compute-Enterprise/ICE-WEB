// plugins/global-state.js
import { defineNuxtPlugin } from '#app';
import { useGlobalState } from '~/composables/useGlobalState';

export default defineNuxtPlugin(() => {
  const { updateMobileStatus } = useGlobalState();

  if (process.client) {
    window.addEventListener('resize', updateMobileStatus);
  }
});
