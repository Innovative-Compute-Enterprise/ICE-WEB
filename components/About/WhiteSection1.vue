<template>
  <div class="flex justify-center p-8 my-[148px]">
    
    <ol class="relative w-full max-w-4xl border dark:bg-[#09090B] bg-[#FAFAFA] border-[#000]/[0.1] dark:border-[#fff]/[0.1] rounded-[40px] shadow-sm focus-visible:ring-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">                  
      <div class="md:p-8 p-4">
        <li v-for="(event, index) in events" :key="index" class="md:ml-8 ml-0 relative my-[64px] pl-4 ">

          <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{{ event.date }}</time>

          <h3 class="text-[21px] leading-[21px] font-semibold text-[#09090B] dark:text-[#FAFAFA]">{{ event.title }}</h3>
          <p class="mb-4 text-[16px] font-normal text-[#71717A] dark:text-[#A1A1AA] md:leading-loose leading-relaxed">{{ event.description }}</p>

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
        },
      ]
    };
  }
};
</script>

<style scoped>
h3{
  font-family: "Mona Sans", sans-serif;
  font-stretch: 100%;
}
p{
  font-family: "Open Sans", sans-serif;
}
a{
  font-family: "Montserrat", sans-serif;
}
time {
  background-color: #f0f4f8; /* Light grey background */
  color: #333; /* Darker text color */
  font-weight: bold; /* Make it bold */
  text-transform: uppercase; /* UPPERCASE text */
  padding: 2px 8px; /* Top and Bottom, Left and Right padding */
  border-radius: 12px; /* Rounded corners */
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  display: inline-block; /* Align with text */
  margin-bottom: 8px; /* More space below the date */
}

</style>
