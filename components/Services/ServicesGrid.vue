<template>
  <section class="pt-12 pb-24 dark:bg-[#09090B] bg-[#FAFAFA] px-4 my-12">
    <div class="text-center mb-9">
      <h1 class="text-6xl leading-none font-bold text-[#09090B] dark:text-[#FAFAFA] mb-6">
        {{$t('ourPlans.title')}}
      </h1>
      <p class="text-lg text-[#71717A] dark:text-[#A1A1AA] text-center">
        {{$t('ourPlans.subtitle')}}
      </p>
    </div>
    
    <div class="flex justify-center mb-12">
      <div class="border-2 border-gray-300 dark:border-gray-500 rounded-[20px]">
        <button
          v-for="type in ['monthly', 'annual']"
          :key="type"
          @click="togglePlanType(type)"
          :class="buttonClass(type)"
          class="py-2 px-4 first:mr-1 last:ml-1 transition-opacity font-bold duration-400 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#ffffff]"
          style="min-width: 90px;">
          {{$t(`ourPlans.${type}`)}}
        </button>
      </div>
    </div>

    <div class="mx-auto flex flex-wrap justify-center gap-9">
      <CardBasic
        :planType="planType"
        :monthlyPrice="getPrice('basic', 'monthly')"
        :annualPrice="getPrice('basic', 'annual')"
        :features="[
          $t('features.freeBlackBoxTier'),
          $t('features.basicSupport')
        ]"
      />
      <CardBusiness
        :planType="planType"
        :monthlyPrice="getPrice('business', 'monthly')"
        :annualPrice="getPrice('business', 'annual')"
        :features="[
          $t('features.prioritySupport'),
          $t('features.crmIntegration')
        ]"
      />
      <CardEnterprise
        :features="[
          $t('features.unlimitedStorage'),
          $t('features.247Support'),
          $t('features.dedicatedManager'),
          $t('features.advancedAnalytics')
        ]"
      />
    </div>
  </section>
</template>

<script>
import CardBasic from './ServicesCard/CardBasic.vue';
import CardBusiness from './ServicesCard/CardBusiness.vue';
import CardEnterprise from './ServicesCard/CardEnterprise.vue';

export default {
  components: {
    CardBasic,
    CardBusiness,
    CardEnterprise
  },
  data() {
    return {
      planType: 'monthly',
      pricing: {
        basic: { monthly: 0, annual: 0 },
        business: { monthly: 20, annual: 200 },
        enterprise: { monthly: 39, annual: 399 }
      }
    };
  },
  methods: {
    togglePlanType(type) {
      try {
        this.planType = type;
      } catch (error) {
        console.error('Error toggling plan type:', error);
      }
    },
    getPrice(plan, type) {
      return this.pricing[plan][type];
    },
    buttonClass(type) {
      return {
        'bg-[#09090B] dark:bg-white text-white dark:text-[#09090B] rounded-[18px]': this.planType === type,
        'bg-transparent text-black dark:text-white rounded-[18px] hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-300': this.planType !== type
      };
    }
  }
};
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
