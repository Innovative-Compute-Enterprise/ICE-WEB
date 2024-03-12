<template>
  <div class="bg-white/70% custom-border dark:bg-black/70% transition-colors duration-300  p-[36px] space-y-10 rounded-[24px] text-black dark:text-white max-w-sm w-full flex flex-col justify-between backdrop-blur-[8px]">
    <div class="space-4">
      <h2 class="text-[24px] font-[700] pb-[12px]">Business</h2>
      <p class="text-[14px] w-[80%] font-[500] tracking-wider">Everything you need to supercharge your productivity.</p>
      <div class="flex flex-row items-baseline">
        <p class="text-[48px] font-bold pt-[48px] pb-[48px] leading-[48px]">{{ currentPrice }}</p>
        <span class="text-[16px] font-medium pl-[2px]">{{ planPeriod }}</span>
      </div>        
      <div class="cursor-pointer">
      <a class="block shadow-sm focus-visible:ring-1 dark:text-black text-white shrink-0 dark:border-[#E4E4E7]/[100%] border-[#27272a]/[100%] border dark:bg-white dark:hover:bg-[#e2e2e2] bg-black hover:bg-[#424246] rounded-lg font-bold text-center py-3 px-6  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors duration-300">
        {{$t('ourPlans.services.signUp')}}
      </a>
    </div>
      <ul class="pt-[24px]">
        <p class="text-[14px] font-[500] pb-[12px]">Includes:</p>
        
        <li class="py-4 text-base font-semibold flex items-center">
        <svg class="w-8 h-8 mr-2 border border-gray-300 rounded-full" viewBox="0 0 500 498" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="500" height="497.537" rx="248.768" fill="white"/><path d="M249.752 236.454L141.378 180.297L140.639 179.948V316.503L250.491 373.4L359.358 316.011V180.297L249.752 236.454Z" fill="black"/><path d="M140.639 179.804L249.752 236.454V372.907L140.393 316.503L140.639 179.804Z" fill="url(#paint0_linear_733_3)"/><g filter="url(#filter0_bd_733_3)"><path d="M250.245 121.183L152.708 172.414L250.245 222.66L347.536 172.168L250.245 121.183Z" fill="black"/></g><path d="M249.741 237.439L250.521 372.908" stroke="white" stroke-opacity="0.1" stroke-width="2"/><defs><filter id="filter0_bd_733_3" x="148.708" y="117.183" width="202.828" height="113.478" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feGaussianBlur in="BackgroundImageFix" stdDeviation="2"/><feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_733_3"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="2"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/><feBlend mode="normal" in2="effect1_backgroundBlur_733_3" result="effect2_dropShadow_733_3"/><feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_733_3" result="shape"/></filter><linearGradient id="paint0_linear_733_3" x1="150.245" y1="200.986" x2="227.092" y2="385.469" gradientUnits="userSpaceOnUse"><stop/><stop offset="1" stop-color="#575353" stop-opacity="0"/></linearGradient></defs></svg>
        BlackBox - Prime Tier
        </li>
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