<template>
  <section>
    <div class="container mx-auto px-6 my-[124px] py-[48px] md:mb-12 lg:mb-16 pb-4 md:pb-10 max-w-[1440px]">
      <!-- Title and Subtitle -->
      <h1 class="md:text-[48px] text-[40px] tracking-[-2.16px] md:leading-[48px] leading-[40px] font-[700] mb-6 text-[#09090B] dark:text-[#FAFAFA] text-center">Why AI ?</h1>

    <div class="justify-center z-50">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 py-6 text-grid rounded-[40px]">
       <div class="flex flex-col space-y-6">
        <div class="card-medium  overflow-hidden relative p-4 dark:bg-[#09090B] bg-[#FAFAFA] border border-[#000]/[0.2] dark:border-[#fff]/[0.2] focus-visible:ring-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
          <!-- SVG positioned absolutely to be in the center of the card -->
          <div class="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            
            <SvgCircle />

          </div>
          <!-- h2 centered horizontally and vertically inside the SVG circle -->
          <div class="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-[#09090B] dark:text-[#FAFAFA]">
            <h2 class="text-4xl font-bold">127%</h2>
          </div>
          <!-- p element positioned below the SVG circle -->
          <div class="absolute text-xl top-2/3 left-1/2 transform -translate-x-1/2 text-center text-[#71717A] dark:text-[#A1A1AA] font-semibold">
            <p>Insert some key statistic</p>
          </div>
         </div>

        <div class="card-medium  rounded-[40px] overflow-hidden relative p-4 dark:bg-[#09090B] bg-[#FAFAFA] border border-[#000]/[0.2] dark:border-[#fff]/[0.2] focus-visible:ring-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
          <!-- SVG positioned absolutely to be in the center of the card -->
          <div class="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          
            <SvgCircle />
            
          </div>
          <!-- h2 centered horizontally and vertically inside the SVG circle -->
          <div class="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-[#09090B] dark:text-[#FAFAFA]">
            <h2 class="text-4xl font-bold">78%</h2>
          </div>
          <!-- p element positioned below the SVG circle -->
          <div class="absolute text-xl top-2/3 left-1/2 transform -translate-x-1/2 text-center text-[#71717A] dark:text-[#A1A1AA] font-semibold">
            <p>Insert some key statistic</p>
          </div>
         </div>
        </div>

        <!-- Middle Column: One Large and One Small Card -->
        <div class="flex flex-col space-y-6">

          <CardLarge />

  


        </div>


        
        <div class="flex flex-col space-y-6">

          <div class="card-small  rounded-[40px] overflow-hidden relative dark:bg-[#09090B] bg-[#FAFAFA] border border-[#000]/[0.2] dark:border-[#fff]/[0.2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            <!-- Card Content -->
            <div class="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-[#09090B] dark:text-[#FAFAFA]  pt-8">
              <h2 class="text-5xl font-bold">9</h2>
            </div>
            <div class="absolute text-lg top-2/3 left-1/2 transform -translate-x-1/2 text-center text-[#71717A] dark:text-[#A1A1AA] opacity-[80%] font-medium text-[1.35rem] w-full">
              <p>Insert some key statistic</p>
            </div>
          </div>

          <div class="card-small  rounded-[40px] overflow-hidden relative dark:bg-[#09090B] bg-[#FAFAFA] border border-[#000]/[0.2] dark:border-[#fff]/[0.2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            <!-- Card Content -->
            <div class="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-[#09090B] dark:text-[#FAFAFA] pt-8">
              <h2 class="text-5xl font-bold">13</h2>
            </div>
            <div class="absolute text-lg top-2/3 left-1/2 transform -translate-x-1/2 text-center text-[#71717A] dark:text-[#A1A1AA] opacity-[80%] font-medium text-[1.35rem] w-full">
              <p>Insert some key statistic</p>
            </div>
          </div>

          <div class="card-small  rounded-[40px] overflow-hidden relative dark:bg-[#09090B] bg-[#FAFAFA] border border-[#000]/[0.2] dark:border-[#fff]/[0.2] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            <!-- Card Content -->
            <div class="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-[#09090B] dark:text-[#FAFAFA] pt-8">
              <h2 class="text-5xl font-bold">210</h2>
            </div>
            <div class="absolute text-lg top-2/3 left-1/2 transform -translate-x-1/2 text-center text-[#71717A] dark:text-[#A1A1AA] opacity-[80%] font-medium text-[1.35rem] w-full">
              <p>Insert some key statistic</p>
            </div>
          </div>

        </div>


       </div>
     </div>
    </div>
  </section>
</template>

<script>
import CardLarge from './BentoCards/CardLarge.vue';
import SvgCircle from '../SvgIcons/SvgCircle.vue';
import CardGrid from './BentoCards/CardGrid.vue';
export default {
  components: {
    CardLarge,
    SvgCircle,
    CardGrid
  },
};
</script>


<style scoped>
.card-small {
  flex: 0 0 auto; /* don't grow, don't shrink, based on the height below */
  height: 191.5px;
  margin-right: auto; /* Push the card to the right */
  width: 70%; /* example fixed height for small cards */
  border-radius: 40px;;
  font-family: "Open Sans", sans-serif;
}

.card-medium {
  flex: 0 0 auto; /* don't grow, don't shrink, based on the height below */
  height: 300px;
  margin-left: auto; /* Push the card to the right */
  width: 70%; /* example fixed height for medium cards */
  border-radius: 40px;
  font-family: "Open Sans", sans-serif;
}

.card-small-mid {
  flex: 0 0 auto; /* don't grow, don't shrink, based on the height below */
  height: 150px; /* example fixed height for medium cards */
  font-family: "Open Sans", sans-serif;
}

/* Responsive Design */
@media screen and (max-width: 767px) {
  .card-small, .card-medium {
    aspect-ratio: 1 / 1; /* For a square aspect ratio on smaller screens */
    width: 100%; /* Full width for small screens */
  }
}
</style>

