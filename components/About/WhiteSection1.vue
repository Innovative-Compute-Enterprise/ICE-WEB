<template>
  <div class="flex justify-center p-8 my-12">
    <ol class="relative w-full max-w-4xl border dark:bg-[#09090B] bg-[#FAFAFA] border-[#000]/[0.1] dark:border-[#fff]/[0.1] rounded-[40px] shadow-sm focus-visible:ring-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">                  
      <div class="md:p-10 p-4 space-y-16 my-8">
        <li v-for="(event, index) in events" :key="index" class="mb-10 ml-8 relative pl-4">
          <div class="absolute w-4 h-4 bg-gray-200 rounded-full mt-2.5 -left-2 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{{ event.date }}</time>
          <h3 class="text-xl font-semibold text-[#09090B] dark:text-[#FAFAFA]">{{ event.title }}</h3>
          <p class="mb-4 text-lg font-normal text-[#71717A] dark:text-[#A1A1AA] md:leading-loose leading-relaxed">{{ event.description }}</p>
          <a v-if="event.link" :href="event.link.url" class="inline-flex items-center px-4 py-2 text-base font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
              {{ event.link.text }}
              <svg class="w-4 h-4 ml-2 rtl:rotate-180" aria-hidden="true" fill="none" viewBox="0 0 14 10" xmlns="http://www.w3.org/2000/svg">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m3 3L9 9"></path>
              </svg>
          </a>
        </li>
      </div>
    </ol>
  </div>
</template>

<script>
export default {
  data() {
    return {
      events: [
        {
          date: 'February 2022',
          title: 'Application UI code in Tailwind CSS',
          description: 'Get access to over 20+ pages including a dashboard layout, interactive components, and more.',
        },
        {
          date: 'March 2022',
          title: 'New Component Library Released',
          description: 'We introduced a comprehensive component library to accelerate your development process.',
        },
        {
          date: 'April 2022',
          title: 'Feature Enhancement in Our API',
          description: 'Our API now supports advanced queries, offering you greater flexibility and efficiency.',
        },
        {
          date: 'May 2022',
          title: 'Mobile App Launch',
          description: 'Exciting news! Our mobile app is now available on both Android and iOS platforms.',
          link: {
            url: '#',
            text: 'Read documentation'
          }
        },
      ]
    };
  }
};
</script>

<style scoped>
h3{
  font-family: "Source Code Pro", monospace;
}
p{
  font-family: "Open Sans", sans-serif;
}
a{
  font-family: "Montserrat", sans-serif;
}
</style>
