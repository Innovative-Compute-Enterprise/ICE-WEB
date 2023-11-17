<template>
  <section class="pt-20 pb-36 bg-white px-4">
    <div class="text-center mb-8">
      <h2 class="text-5xl font-bold text-black mb-3">{{$t('ourPlans.title')}}</h2>
      <p class="text-lg text-gray-700">{{$t('ourPlans.subtitle')}}</p>
    </div>

    <div class="plan-type-selector text-center mb-12">
      <button 
        @click="togglePlanType('monthly')" 
        :class="{'bg-blue-700 text-white': planType === 'monthly'}" 
        class="plan-button">
        {{$t('ourPlans.monthly')}}
      </button>
      <button 
        @click="togglePlanType('annual')" 
        :class="{'bg-blue-700 text-white': planType === 'annual'}" 
        class="plan-button">
        {{$t('ourPlans.annual')}}
      </button>
    </div>

    <div class="services-container mx-auto p-4">
    <div 
      v-for="service in services" 
      :key="service.id" 
      class="service-card bg-blue-500 hover:bg-blue-600 transition-colors duration-300 py-8 px-6 space-y-6">
      <h3 class="service-title text-xl text-white font-bold">{{$t(`ourPlans.services.${service.id}.title`)}}</h3>
        <ul class="list-none text-white text-xl">
          <li class="py-2" v-for="feature in service.features" :key="feature"> 
            {{ feature }}
          </li>
        </ul>
        <div class="service-footer py-2 mt-4">
        <p class="service-price text-2xl py-2 text-white font-bold"
           :key="planType + service.id">
          {{ planType === 'monthly' ? `$${service.monthlyPrice}/mo` : `$${service.annualPrice}/yr` }}
        </p>
          <a :href="service.link" class="service-link">{{$t('ourPlans.services.signUp')}}</a>
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
      services: [
        { 
          id: 1, 
          title: "Basic",
          features: [
            "10GB Storage",
            "Basic Support",
            "Email Integration"
          ],
          monthlyPrice: 100, 
          annualPrice: 1100, 
          link: '#'
        },
        { 
          id: 2, 
          title: "Business",
          features: [
            "50GB Storage",
            "Priority Support",
            "CRM Integration",
            "Custom Reports"
          ],
          monthlyPrice: 200, 
          annualPrice: 2000, 
          link: '#'
        },
        { 
          id: 3, 
          title: "Enterprise",
          features: [
            "Unlimited Storage",
            "24/7 Support",
            "Dedicated Manager",
            "Advanced Analytics",
            "Custom Integrations"
          ],
          monthlyPrice: 300, 
          annualPrice: 3000, 
          link: '#' 
        },
      ],
      planType: 'monthly',
    };
  },
  methods: {
    togglePlanType(type) {
      this.planType = type;
    }
  }
};
</script>


<style scoped>
.plan-type-selector {
  margin-bottom: 2rem;
}

.plan-button {
  margin: 0 1rem;
  padding: 0.5rem 1rem;
  color: #333;
  background-color: #f3f4f6;
  border: 2px solid transparent;
  border-radius: 0.375rem;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
}

.plan-button:hover,
.plan-button.bg-blue-700 {
  background-color: #2563eb;
  color: white;
  border-color: #2563eb;
}

.services-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
}

.service-card {
  flex-basis: calc(33.333% - 2rem);
  max-width: calc(33.333% - 2rem);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  border-radius: 0.5rem;
  text-align: center;
}

@media (max-width: 640px) {
  .service-card {
    flex-basis: 100%;
    max-width: 100%;
  }
}

.service-title {
  font-size: 1.75rem;
}



.service-footer {
  margin-top: auto;
  padding: 1rem 0;
}

.service-price {
  font-size: 1.5rem;
  font-weight: bold;
}

.service-link {
  display: block;
  background-color: #ffffff;
  color: #2563eb;
  border-radius: 0.375rem;
  text-decoration: none;
  font-weight: bold;
  text-align: center;
  padding: 0.75rem 1.5rem;
  transition: background-color 0.3s ease-in-out;
}

.service-link:hover {
  background-color: #e2e8f0;
}
.service-price {
  font-size: 1.5rem;
  font-weight: bold;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  display: inline-block; 
}

</style>



