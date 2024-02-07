<template>
  <section class="pt-20 pb-24 dark:bg-[#09090B] bg-[#FAFAFA] px-4">

        <div class="text-center mb-8">
          <h2 class="text-4xl md:text-5xl  font-bold text-[#09090B] dark:text-[#FAFAFA] mb-4 leading-tight">{{$t('ourPlans.title')}}</h2>
          <p class="text-lg text-[#71717A] dark:text-[#A1A1AA]">{{$t('ourPlans.subtitle')}}</p>
        </div>


        <div class="flex justify-center mb-12">
          <button
            v-for="type in ['monthly', 'annual']"
            :key="type"
            @click="togglePlanType(type)"
            :class="{
              'border-2 border-[#09090B]/[0.4] dark:border-[#FAFAFA]/[0.4] text-[#09090B]  dark:text-[#FAFAFA] focus-visible:ring-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white': planType === type, 
              'border-[#71717A]/[0.1] dark:border-[#A1A1AA]/[0.1] text-[#71717A] border-2 dark:text-[#A1A1AA] focus-visible:ring-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white': planType !== type }"
            class="mx-2 py-2 px-3 rounded-md font-semibold transition-colors duration-200 hover:border-gray-400 hover:text-gray-500">
            {{$t(`ourPlans.${type}`)}}
         </button>
        </div>


    <div class="services-container mx-auto p-4 flex flex-wrap justify-center gap-16 md:gap-6">     

      <div
        v-for="service in services"
        :key="service.id"
        class="service-card shadow-md bg-[#e2e2e2]/[75%]
         dark:bg-[#27272A] transition-colors duration-300 p-6 
         space-y-12 rounded-lg text-black dark:text-white max-w-sm 
         w-full flex flex-col justify-between border border-[#000]/[0.1]
          dark:border-[#fff]/[0.1] backdrop-blur-[8px] focus-visible:ring-1 focus-visible:outline 
          focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
      
         
        <div class="space-4">
          <h2 class="text-2xl font-semibold pb-4">{{$t(`ourPlans.services.${service.id}.title`)}}</h2>
          <p class="text-3xl font-bold py-4"
             :key="planType + service.id">
            {{ planType === 'monthly' ? `$${service.monthlyPrice}` : `$${service.annualPrice}` }}
          </p>
          <ul>
            <li class="py-3 text-base font-semibold flex items-center" v-for="feature in service.features" :key="feature">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="mr-2 w-5 h-5">
                <path fill-rule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0 0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z" clip-rule="evenodd" />
              </svg>
              {{ feature }}
            </li>
          </ul>
        </div>

        <div class="service-footer py-2 cursor-pointer">
          <a  @click="redirectToStripe(service.id)" class="service-link block shadow-sm focus-visible:ring-1 dark:text-black text-white shrink-0 dark:border-[#E4E4E7]/[100%] border-[#27272a]/[100%] border dark:bg-white dark:hover:bg-[#e2e2e2] bg-black hover:bg-[#424246] rounded-lg font-bold text-center py-3 px-6 mt-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors duration-300">
            {{$t('ourPlans.services.signUp')}}
          </a>
        </div>

      </div>
    </div>



  </section>
</template>


<script>
export default {
  name: "ServicesGrid",
  data() {
    return {
      planType: 'monthly', // default plan type
      services: [
        { 
          id: 1, 
          title: "Basic",
          features: ["10GB Storage", "Basic Support", "Email Integration"],
          monthlyPrice: 99.99, 
          annualPrice: 1099.99,
        },
        {
          id: 2, 
          title: "Business",
          features: ["50GB Storage", "Priority Support", "CRM Integration", "Custom Reports"],
          monthlyPrice: 199.99, 
          annualPrice: 1999.99,
        },
        {
          id: 3, 
          title: "Enterprise",
          features: ["Unlimited Storage", "24/7 Support", "Dedicated Manager", "Advanced Analytics", "Custom Integrations"],
          monthlyPrice: 299.99, 
          annualPrice: 2999.99,
        },
      ],
    };
  },
  methods: {
    togglePlanType(type) {
      this.planType = type;
    },
    redirectToStripe(planId) {
  const selectedService = this.services.find(service => service.id === planId);
  const endpoint = `http://localhost:3003/api/stripe-url/${selectedService.title.toLowerCase()}/${this.planType}`;

  fetch(endpoint)
    .then(response => response.json())
    .then(data => {
      // Open the Stripe URL in a new tab or window
      window.open(data.url, '_blank');
    })
    .catch(error => {
  console.error('Error fetching Stripe URL:', error);
  res.status(500).json({ error: 'Internal Server Error' });
});
},

  },
};
</script>




<style scoped>
@media (max-width: 640px) {
  .services-container .service-card {
    flex-basis: 100%;
    max-width: 100%;
  }
}

</style>
