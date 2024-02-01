<template>
  <div>
  <div class="hero bg-red-600  flex items-center justify-center h-[28.5rem] md:h-[38.5rem]">
      <li class="list-none">
            <h1 class="hero-title leading-tight  max-w-screen-2xl tracking-wide text-center text-[#FAFAFA] text-6xl md:text-7xl lg:text-8xl font-bold mx-auto my-auto">{{$t('aboutPage.title')}}</h1>
      </li>

  </div>
  <div class="my-8">
  <ContextSection />
  </div>
  </div>
</template>

<script setup>
const ContextSection = defineAsyncComponent(() => import('@/components/About/ContextSection.vue'));
</script>

<script>

export default {
  head() {
    return {
      title: 'About - Your Website Name',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Read our policies regarding privacy, cookies, and more.',
        },
      ],
    };
  },
};
</script>

<style scoped>
body {
  overflow-x: hidden;
}
.hero {
  text-align: center;
}

.hero-title {
  font-family: 'Work Sans', sans-serif;
}
  
</style>
