<template>
  <div>
    <!-- MobileHeader shown only on screens smaller than 'md' -->
    <MobileHeader class="md:hidden fixed" />
    <!-- DesktopHeader shown only on 'md' screens and larger -->
    <DesktopHeader class="hidden md:flex" />
  </div>
</template>

<script setup>
import MobileHeader from '@/components/Header/MobileHeader.vue';
import DesktopHeader from '@/components/Header/DesktopHeader.vue';
</script>

<style>
/* Add any specific styles for your header here */
</style>
