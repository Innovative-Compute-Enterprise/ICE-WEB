<template>
  <section class="pt-16 pb-32 bg-white">
    <div class="text-center mb-8">
      <h2 class="text-[48px] font-bold text-black mb-3">{{$t('ourPlans.title')}}</h2>
      <p class="text-[18px] text-black">{{$t('ourPlans.subtitle')}}</p>
    </div>

    <!-- Flex container for the cards with responsive direction -->
    <div class="flex flex-col sm:flex-row justify-center items-center gap-10 mx-auto p-4">
      <div v-for="service in services" :key="service.id" class="service-card bg-blue-500 hover:bg-blue-600 transition ease-in-out duration-300 space-y-8 py-8">
        <h3 class="service-title text-[28px] text-white font-bold py-4">{{$t(`ourPlans.services.${service.id}.title`)}}</h3>
        <ul>
        <li class="service-description text-white text-[17px] mb-4">{{$t(`ourPlans.services.${service.id}.description`)}}</li>
      </ul>
        <NuxtLink :to="service.link" class="service-link">{{$t('ourPlans.services.signUp')}}</NuxtLink>
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
        { id: 1, color: 'blue', link: '#' },
        { id: 2, color: 'blue', link: '#' },
        { id: 3, color: 'blue', link: '#' },
      ],
    };
  },
};

</script>

<style scoped>
.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 40px;
}

.service-card {
  /* Fixed width for cards on larger screens and full width on mobile */
  width: 100%;
  max-width: 300px; /* This will ensure that on larger screens cards have the same size */
  border-radius: 0.5rem;
  text-align: center;
  padding: 2rem;
  transition: background-color 0.3s;
  /* Rest of the styles remain the same */
}

.service-title {
  margin-bottom: 1rem;
}

.service-description {
  font-size: 1rem;
  margin-bottom: 1rem;
}

.service-link {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.75rem 1.5rem;
  background-color: #ffffff;
  color: #000;
  border-radius: 0.375rem;
  text-decoration: none;
  font-weight: bold;
  transition: transform 0.3s ease-in-out;
}

.service-link:hover {
  transform: translateY(-0.25rem);
}
</style>
