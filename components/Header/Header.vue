<template>
  <div>
    <!-- MobileHeader shown only on screens smaller than 'md' -->
    <MobileHeader class="md:hidden fixed" />
    <!-- DesktopHeader shown only on 'md' screens and larger -->
    <DesktopHeader class="hidden md:flex" />
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';

const MobileHeader = defineAsyncComponent(() => import('@/components/Header/MobileHeader.vue'));
const DesktopHeader = defineAsyncComponent(() => import('@/components/Header/DesktopHeader.vue'));

</script>

<style>
/* Add any specific styles for your header here */
</style>
