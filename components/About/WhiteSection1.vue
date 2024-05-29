<template>
  <div class="flex flex-col items-center p-8 my-[148px] mt-[164px]">
    <h1 class="text-[48px] leading-[48px] font-bold mb-10 md:mb-12 text-center text-[#09090B] dark:text-[#FAFAFA] z-10">{{ $t('about.roadMap.title') }}</h1>

    <ol class="relative w-full max-w-4xl border dark:bg-[#09090B] bg-[#FAFAFA] border-[#000]/[0.1] dark:border-[#fff]/[0.1] rounded-[40px] shadow-sm">
      <div class="md:p-8 p-4">
        <li v-for="(event, index) in events" :key="index" class="md:ml-8 ml-0 relative my-[86px] pl-4">
          <time class="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-600">{{ event.date }}</time>
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
          date: this.$t('about.roadMap.1.date'),
          title: this.$t('about.roadMap.1.title'),
          description: this.$t('about.roadMap.1.description'),
        },
        {
          date: this.$t('about.roadMap.2.date'),
          title: this.$t('about.roadMap.2.title'),
          description: this.$t('about.roadMap.2.description'),
        },
        {
          date: this.$t('about.roadMap.3.date'),
          title: this.$t('about.roadMap.3.title'),
          description: this.$t('about.roadMap.3.description'),
        },
        {
          date: this.$t('about.roadMap.4.date'),
          title: this.$t('about.roadMap.4.title'),
          description: this.$t('about.roadMap.4.description'),
        },
        {
          date: this.$t('about.roadMap.5.date'),
          title: this.$t('about.roadMap.5.title'),
          description: this.$t('about.roadMap.5.description'),
        }
      ]
    };
  }
};
</script>

<style scoped>
h1 {
  font-family: "Mona Sans";
  font-stretch: 100%;
}
h3 {
  font-family: "Mona Sans"; 
  font-stretch: 100%;
}
p {
  font-family: "Open Sans", sans-serif;
}
a {
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