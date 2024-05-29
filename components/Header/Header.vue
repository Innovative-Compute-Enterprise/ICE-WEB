<template>
  <div>
    <MobileHeader class="md:hidden fixed" />

    <DesktopHeader class="hidden md:flex" />
  </div>
</template>

<script setup>
import MobileHeader from '@/components/Header/MobileHeader.vue';
import DesktopHeader from '@/components/Header/DesktopHeader.vue';
</script>

<style>
</style>
