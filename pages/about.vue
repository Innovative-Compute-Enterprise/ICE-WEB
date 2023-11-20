<template>
  <div>
  <div class="hero flex items-end justify-start h-[25rem] md:h-[37.5rem]">
      <li class="list-none pl-4">
            <h1 class="hero-title text-left text-[4.688rem] md:text-[7.813rem] font-bold">{{$t('aboutPage.title')}}</h1>
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
    padding-left: 1.125rem;
    color: #ffffff; /* Dark text for readability */
  }
  
</style>
