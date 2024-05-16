<template>
  <div class="scroll-smooth">
    <div>
      <!-- Hero Section -->
      <div class="hero bg-gradient-to-r from-blue-700 to-blue-600 flex items-center justify-center h-[28.5rem] md:h-[38.5rem]">
        <h1 class="hero-title max-w-[1440px]  text-center text-[#FAFAFA] text-[72px] leading-[72px] font-[700] mx-auto my-auto">
          {{$t('services.title')}}
        </h1>
      </div>
    </div>

 <!-- Black Section -->
    <div>
      <BlackBoxSection />
    </div>

    <!-- Services Grid -->
    <div class="my-[64px]">
      <ServicesGrid />
    </div>

   

    <!-- FAQ Section -->
    <div>
      <FaqSection />
    </div>
    
  </div>
</template>

<script setup>
import ServicesGrid from '@/components/Services/ServicesGrid.vue';
import FaqSection from '@/components/Services/FaqSection.vue';
import BlackBoxSection from '@/components/Services/BlackBoxSection.vue';

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
      href: '/faviconblack.png'
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
  font-family: "Mona Sans";
  font-stretch: 100%;
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
