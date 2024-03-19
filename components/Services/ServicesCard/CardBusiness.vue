<template>
  <div class="dark:bg-white custom-border bg-black transition-colors duration-300  p-6 rounded-[20px] dark:text-black text-white max-w-[400px] w-full flex flex-col justify-between backdrop-blur-[8px]">
    <div class="space-y-2 z-50">
      <h2 class="text-[24px] leading-[24px] font-[700] pb-[12px]">Business</h2>
      <p class="text-[14px] w-[80%] font-[500] tracking-wider">Everything you need to supercharge your productivity.</p>
      <div class="flex flex-row items-baseline">
        <p class="text-[60px] font-bold pt-[36px] pb-[36px] leading-[60px]">{{ currentPrice }}</p>
        <span class="text-[16px] font-medium pl-[2px]">{{ planPeriod }}</span>
      </div>        
      <div class="cursor-pointer">
      <a class="block shadow-sm focus-visible:ring-1 text-black dark:text-white shrink-0 border-[#E4E4E7]/[100%] dark:border-[#27272a]/[100%] border bg-white hover:bg-[#e2e2e2] dark:bg-black dark:hover:bg-[#424246] rounded-lg font-bold text-center py-3 px-5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors duration-300">
        {{$t('ourPlans.services.signUp')}}
      </a>
    </div>
      <ul class="pt-[24px]">
        <p class="text-[14px] font-[500] pb-[6px]">Includes:</p>
        
        <li class="py-3 text-[14px] font-semibold flex items-center">
          <BlackBoxSVG class="w-5 h-5 mr-2 dark:fill-black fill-white" />
          BlackBox - Prime Tier
        </li>

        <li class="py-3 text-[14px] font-semibold flex items-center" v-for="feature in features" :key="feature">
          <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 w-5 h-5" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256S119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" fill="currentColor"></path></svg>          
          {{ feature }}
        </li>
      
      </ul>
    </div>
  </div>
</template>

<script>
import BlackBoxSVG from '~/components/SvgIcons/BlackBoxSVG.vue';


export default {
  components: {
    BlackBoxSVG,
  },
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
    },
    planPeriod() {
      return this.planType === 'monthly' ? '/month' : '/year';
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