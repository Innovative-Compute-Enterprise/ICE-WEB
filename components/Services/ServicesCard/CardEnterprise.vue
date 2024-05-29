<template>
  <div class="bg-white/70% custom-border dark:bg-black/70% transition-colors duration-300  p-6 rounded-[20px] text-black dark:text-white max-w-[400px] w-full flex flex-col justify-between backdrop-blur-[8px]">
    <div class="space-y-2 z-50">
      <div class="min-h-[240px]">
      <h2 class="text-[32px] leading-[24px] font-[700] pb-[24px]">{{$t('ourPlans.services.3.title')}}</h2>
      <p class="text-[16px] w-[80%] font-[500] tracking-wider">{{$t('ourPlans.services.3.subtitle')}}</p>   
      <span class="text-[16px] font-medium pl-[2px]"></span>
      </div>

      <NuxtLink  :to="link" class="block  cursor-pointer dark:text-black text-white shrink-0 dark:border-[#E4E4E7]/[100%] border-[#27272a]/[100%] border dark:bg-white dark:hover:bg-[#e2e2e2] bg-black hover:bg-[#424246] rounded-lg font-bold text-center py-3 px-5 transition-colors duration-300">
        {{$t('ourPlans.services.button3')}}
      </NuxtLink>

      <ul class="pt-[24px]">
        <p class="text-[14px] font-[500] pb-[6px]">{{$t('ourPlans.services.2.include')}}</p>
        <li class="py-3 text-[14px] font-semibold flex items-center" v-for="feature in features" :key="feature">
          <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 w-5 h-5" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256S119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" fill="currentColor"></path></svg>         
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
    features: Array,
  },
  computed: {
    currentPrice() {
      return this.planType === 'monthly' ? `$${this.monthlyPrice}` : `$${this.annualPrice}`;
    },
    planPeriod() {
      return this.planType === 'monthly' ? '/month' : '/year';
    },
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