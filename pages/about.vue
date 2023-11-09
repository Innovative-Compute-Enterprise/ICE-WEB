<template>
  <div class="hero flex items-end justify-start h-[600px] md:h-[700px]">

<li class="list-none pl-1">
  <NuxtLink to="/" prefetch>
      <h1 class="hero-title text-left md:text-[10rem] text-[6rem] font-bold">About</h1>
  </NuxtLink>
</li>

</div>
  <ContextSection />
</template>

<script>
import ContextSection from '~/components/BodyTextSection/ContextSection.vue';

export default {
  components: {
    ContextSection
  },
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
  background-color: #000000;
}
.hero {
    background-color: #dd1919; /* Light grey background for contrast */
    text-align: center;
  }
  
  .hero-title {
    padding-left: 18px;
    color: #ffffff; /* Dark text for readability */
  }
  
</style>
