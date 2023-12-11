<template>
  <div>
  <div class="hero flex items-end justify-start h-[27.5rem] md:h-[37.5rem]">
      <li class="list-none pl-4">
            <h1 class="hero-title text-left md:pl-[1.15rem] text-[18.488vw] md:text-[9vw] font-medium">{{$t('aboutPage.title')}}</h1>
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
}
.hero {
    background-color: #da3b3b; /* Light grey background for contrast */
    text-align: center;
  }
  
  .hero-title {
    color: #ffffff; /* Dark text for readability */
  }
  
</style>
