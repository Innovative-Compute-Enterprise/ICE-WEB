<template>
  <section class="pt-[48px] pb-24 dark:bg-[#09090B] bg-[#FAFAFA] px-4 my-[48px]">

    <div class="text-center mb-[36px]">
      <h1 class="text-[48px] leading-[48px] font-bold text-[#09090B] dark:text-[#FAFAFA] mb-[24px]"> {{$t('ourPlans.title')}}</h1>
      <p class="text-[16px] text-[#71717A] dark:text-[#A1A1AA]">{{$t('ourPlans.subtitle')}}</p>
    </div>

    <div class="flex justify-center mb-[48px]">
    <div class="border-2 border-gray-300 dark:border-gray-500 rounded-[20px]">
      <button
        v-for="type in ['monthly', 'annual']"
        :key="type"
        @click="togglePlanType(type)"
        :class="{
          'bg-[#09090B] dark:bg-white text-white dark:text-[#09090B] rounded-[18px]': planType === type,
          'bg-transparent text-gray-600 dark:text-gray-400 rounded-[18px] hover:bg-gray-200 dark:hover:bg-gray-500': planType !== type
        }"
        class="py-2 px-4 first:mr-1 last:ml-1 transition-opacity font-bold duration-400 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#5B21B6]"
        style="min-width: 90px;">
        {{$t(`ourPlans.${type}`)}}
      </button>
    </div>
  </div>


    <div class="mx-auto flex flex-wrap justify-center gap-[36px]">
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
        :planType="planType"
        :monthlyPrice="getPrice('enterprise', 'monthly')"
        :annualPrice="getPrice('enterprise', 'annual')"
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
  methods: {
    togglePlanType(type) {
      this.planType = type;
    },
    getPrice(plan, type) {
      return this.pricing[plan][type];
    }
  },
  data() {
    return {
      planType: 'monthly',
      // Assuming you have pricing info structured in this way, otherwise adjust as needed
      pricing: {
        basic: { monthly: 0, annual: 0 },
        business: { monthly: 20, annual: 200 }, // Assuming 10 months payment for annual for simplicity
        enterprise: { monthly: 40, annual: 400  }
      }
    };
  },
};
</script>

<style scoped>

</style>