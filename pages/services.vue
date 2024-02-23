<template>
  <div class="scroll-smooth">
    <div>
      <!-- Hero Section -->
      <div class="hero bg-gradient-to-r from-blue-700 to-blue-600 flex items-center justify-center h-[28.5rem] md:h-[38.5rem]">
        <h1 class="hero-title leading-tight  max-w-screen-2xl tracking-wide text-center text-[#FAFAFA] text-5xl md:text-6xl lg:text-7xl font-bold mx-auto my-auto">
          {{$t('services.title')}}
        </h1>
      </div>
    </div>

    <!-- Services Grid -->
    <div class="my-8">
      <ServicesGrid />
    </div>

    <!-- Black Section -->
    <div class="my-8">
      <BlackBoxSection />
    </div>

    <!-- FAQ Section -->
    <div>
      <FaqSection />
    </div>
    
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';

const ServicesGrid = defineAsyncComponent(() => import('~/components/Services/ServicesGrid.vue'));
const FaqSection = defineAsyncComponent(() => import('~/components/Services/FaqSection.vue'));
const BlackBoxSection = defineAsyncComponent(() => import('~/components/Services/BlackBoxSection.vue'));

useSeoMeta({
  title: 'Services',
  description: '[description]',
  ogTitle: '[og:title]',
  ogDescription: '[og:description]',
  ogImage: '[og:image]',
  ogUrl: '[og:url]',
  twitterTitle: '[twitter:title]',
  twitterDescription: '[twitter:description]',
  twitterImage: '[twitter:image]',
  twitterCard: 'summary'
})

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      hid: 'icon',
      rel: 'icon',
      type: 'image/png',
      href: '/faviconblue.png'
    }
  ]
});

</script>

<script>
export default {
  methods: {
    localePath(routeName) {
      const locale = this.$i18n.locale;
      return locale === 'en' ? `/${routeName}` : `/${locale}/${routeName}`;
    },
  },
};
</script>

<style scoped>
.hero {
  text-align: center;
}

.hero-title {
  font-family: "Source Code Pro", monospace;
}

.black-section {
  background-color: #000;
  color: #fff;
}

@media (max-width: 768px) {
  .black-section {
    flex-direction: column;
    text-align: center;
  }

  .black-section img {
    margin-bottom: 20px;
  }
}
</style>
