<template>
  <div>
    <!-- MobileHeader shown only on screens smaller than 'md' -->
    <MobileHeader class="md:hidden fixed" />
    <!-- DesktopHeader shown only on 'md' screens and larger -->
    <DesktopHeader class="hidden md:flex" />
  </div>
</template>

<script>
import MobileHeader from './MobileHeader.vue'; // Adjust the path as necessary
import DesktopHeader from './DesktopHeader.vue'; // Adjust the path as necessary

export default {
  components: {
    MobileHeader,
    DesktopHeader
  }
};
</script>

<style>
/* Add any specific styles for your header here */
</style>
