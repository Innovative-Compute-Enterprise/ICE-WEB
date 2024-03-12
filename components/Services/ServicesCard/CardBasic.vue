<template>
  <div class="bg-white/70% custom-border dark:bg-black/70% transition-colors duration-300  p-[36px] space-y-10 rounded-[24px] text-black dark:text-white max-w-sm w-full flex flex-col justify-between backdrop-blur-[8px]">
    <div class="space-4">
      <h2 class="text-[24px] font-[700] pb-[12px]">Basic</h2>
      <p class="text-[14px] w-[80%] font-[500] tracking-wider">Everything you need to supercharge your productivity.</p>
      <p class="text-[48px] font-bold pt-[48px] pb-[48px] leading-[48px]">{{ currentPrice }}</p>
      <div class="cursor-pointer">
      <a class="block shadow-sm focus-visible:ring-1 dark:text-black text-white shrink-0 dark:border-[#E4E4E7]/[100%] border-[#27272a]/[100%] border dark:bg-white dark:hover:bg-[#e2e2e2] bg-black hover:bg-[#424246] rounded-lg font-bold text-center py-3 px-6  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors duration-300">
        {{$t('ourPlans.services.signUp')}}
      </a>
    </div>
      <ul class="pt-[24px]">
        <p class="text-[14px] font-[500] pb-[12px]">Includes:</p>
        <li class="py-4 text-base font-semibold flex items-center" v-for="feature in features" :key="feature">
          <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 w-6 h-6"  xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 12 12"><g fill="none"><path d="M9.765 3.205a.75.75 0 0 1 .03 1.06l-4.25 4.5a.75.75 0 0 1-1.075.015L2.22 6.53a.75.75 0 0 1 1.06-1.06l1.705 1.704l3.72-3.939a.75.75 0 0 1 1.06-.03z" fill="currentColor"></path></g></svg>          
          {{ feature }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "BasicCard",
  props: {
      planType: String,
    monthlyPrice: [Number, String], // Now accepts both Number and String
    annualPrice: [Number, String], // Now accepts both Number and String
    features: Array,
  },
  computed: {
    currentPrice() {
      return this.planType === 'monthly' ? `$${this.monthlyPrice}` : `$${this.annualPrice}`;
    }
  },
};
</script>

<style scoped>
h2{
  font-family: 'Mona Sans', sans-serif;
  font-stretch: 100%;
  
}

p{
  font-family: "Open Sans";
}
</style>