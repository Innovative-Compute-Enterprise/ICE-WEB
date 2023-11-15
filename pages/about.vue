<template>
  <div>
  <div class="hero flex items-end justify-start h-[600px] md:h-[700px]">

<li class="list-none pl-4">
  <NuxtLink to="/" prefetch>
      <h1 class="hero-title text-left md:text-[10rem] text-[6rem] font-bold">{{$t('aboutPage.title')}}</h1>
  </NuxtLink>
</li>

</div>
  <ContextSection />
  </div>
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
    background-color: #da3b3b; /* Light grey background for contrast */
    text-align: center;
  }
  
  .hero-title {
    padding-left: 18px;
    color: #ffffff; /* Dark text for readability */
  }
  
</style>
