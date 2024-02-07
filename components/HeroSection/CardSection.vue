<template>
  <section>
    <div class="container mx-auto px-6 my-2 md:my-8 lg:my-12 pb-4 md:pb-10">
      <!-- Title and Subtitle -->

    <div class="justify-center">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 text-grid rounded-[40px]">
       <div class="flex flex-col space-y-6">
        <div class="card-medium overflow-hidden rounded-md relative p-4 dark:bg-[#09090B] bg-[#FAFAFA] border border-[#000]/[0.1] dark:border-[#fff]/[0.1] shadow-sm focus-visible:ring-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
          <!-- SVG positioned absolutely to be in the center of the card -->
          <div class="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 200 200" fill="none">
              <circle cx="100" cy="100" r="96.5" class="stroke-current text-black dark:text-white" stroke-opacity="0.3" stroke-width="7"/>
              <path d="M84.1649 4.80809C97.3262 2.61872 110.798 3.18236 123.731 6.4634C136.663 9.74444 148.775 15.6716 159.301 23.8705C169.826 32.0694 178.537 42.3619 184.884 54.098C191.23 65.8341 195.074 78.7587 196.172 92.0555C197.271 105.352 195.6 118.732 191.265 131.351C186.931 143.969 180.027 155.552 170.989 165.367C161.951 175.182 150.977 183.016 138.758 188.375C126.539 193.733 113.342 196.5 100 196.5" class="stroke-current text-black dark:text-white" stroke-width="7"/>
            </svg>
          </div>
          <!-- h2 centered horizontally and vertically inside the SVG circle -->
          <div class="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-[#09090B] dark:text-[#FAFAFA]">
            <h2 class="text-[2rem] font-bold">00%</h2>
          </div>
          <!-- p element positioned below the SVG circle -->
          <div class="absolute text-xl top-2/3 left-1/2 transform -translate-x-1/2 text-center text-[#71717A] dark:text-[#A1A1AA] font-semibold">
            <p>Insert some key statistic</p>
          </div>
         </div>

        <div class="card-medium rounded-[40px] overflow-hidden relative p-4 dark:bg-[#09090B] bg-[#FAFAFA] border border-[#000]/[0.1] dark:border-[#fff]/[0.1] shadow-sm focus-visible:ring-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
          <!-- SVG positioned absolutely to be in the center of the card -->
          <div class="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" width="150" height="150" viewBox="0 0 200 200" fill="none">
              <circle cx="100" cy="100" r="96.5" class="stroke-current text-black dark:text-white" stroke-opacity="0.3" stroke-width="7"/>
              <path d="M84.1649 4.80809C97.3262 2.61872 110.798 3.18236 123.731 6.4634C136.663 9.74444 148.775 15.6716 159.301 23.8705C169.826 32.0694 178.537 42.3619 184.884 54.098C191.23 65.8341 195.074 78.7587 196.172 92.0555C197.271 105.352 195.6 118.732 191.265 131.351C186.931 143.969 180.027 155.552 170.989 165.367C161.951 175.182 150.977 183.016 138.758 188.375C126.539 193.733 113.342 196.5 100 196.5" class="stroke-current text-black dark:text-white" stroke-width="7"/>
            </svg>
          </div>
          <!-- h2 centered horizontally and vertically inside the SVG circle -->
          <div class="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-[#09090B] dark:text-[#FAFAFA]">
            <h2 class="text-[2rem] font-bold">00%</h2>
          </div>
          <!-- p element positioned below the SVG circle -->
          <div class="absolute text-xl top-2/3 left-1/2 transform -translate-x-1/2 text-center text-[#71717A] dark:text-[#A1A1AA] font-semibold">
            <p>Insert some key statistic</p>
          </div>
         </div>
        </div>

        <!-- Middle Column: One Large and One Small Card -->
        <div class="flex flex-col space-y-6">

          <div class="card-large rounded-2xl overflow-hidden relative dark:bg-[#09090B] bg-[#FAFAFA] border border-[#000]/10 dark:border-[#fff]/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            <!-- Large Card Content -->
            <div class="p-2 md:p-4 h-full">

              <div class="mt-5 ml-4">
              <h2 class="text-2xl lg:text-3xl font-bold text-[#09090B] dark:text-[#FAFAFA] mb-2 w-[70%] text-left">Insert major feature name</h2>
              <p class="text-base lg:text-md text-[#71717A] dark:text-[#A1A1AA] text-left w-[50%]">Insert some statistic or metric name</p>
             </div> 
             
             <div class="w-full flex justify-center gap-4 mt-auto" style="height: calc(100% - 2rem);"> <!-- Adjust the calc() value to control the space at the bottom -->
                <!-- v-for to render each bar -->
                <div v-for="(value, index) in chartData" :key="index" class="w-10 md:w-12 xl:w-14 relative" style="height: 100%;">
                  <div :style="{ transform: `scaleY(${value.height})` }" class="bar-animation absolute bottom-0 w-full bg-gradient-to-b from-[#09090B] to-transparent rounded-t-xl dark:bg-gradient-to-b dark:from-[#FAFAFA] dark:to-transparent"></div>
                </div>
              </div>

              <div>
              <div class="numberGreen absolute top-10 right-5 text-green-500 dark:bg-[#09090B]/75 bg-[#FAFAFA]/75 text-2xl font-bold p-2 rounded-3xl border border-[#000]/[0.1] dark:border-[#fff]/[0.1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">+11%</div>
             </div>
            </div>
          </div>

          <div class="card-small-mid rounded-[40px] overflow-hidden relative dark:bg-[#09090B] bg-[#FAFAFA] border border-[#000]/[0.1] dark:border-[#fff]/[0.1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            <!-- Small Card Content -->
          </div>

        </div>


        
        <div class="flex flex-col space-y-6">

          <div class="card-small rounded-[40px] overflow-hidden relative dark:bg-[#09090B] bg-[#FAFAFA] border border-[#000]/[0.1] dark:border-[#fff]/[0.1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            <!-- Card Content -->
            <div class="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-[#09090B] dark:text-[#FAFAFA]  pt-8">
              <h2 class="text-[3.5rem] font-bold">000</h2>
            </div>
            <div class="absolute text-xl top-2/3 left-1/2 transform -translate-x-1/2 text-center text-[#71717A] dark:text-[#A1A1AA] opacity-[70%] font-normal text-[1.35rem] w-full">
              <p>Insert some key statistic</p>
            </div>
          </div>

          <div class="card-small rounded-[40px] overflow-hidden relative dark:bg-[#09090B] bg-[#FAFAFA] border border-[#000]/[0.1] dark:border-[#fff]/[0.1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            <!-- Card Content -->
            <div class="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-[#09090B] dark:text-[#FAFAFA] pt-8">
              <h2 class="text-[3.5rem] font-bold">000</h2>
            </div>
            <div class="absolute text-xl top-2/3 left-1/2 transform -translate-x-1/2 text-center text-[#71717A] dark:text-[#A1A1AA] opacity-[70%] font-normal text-[1.35rem] w-full">
              <p>Insert some key statistic</p>
            </div>
          </div>

          <div class="card-small rounded-[40px] overflow-hidden relative dark:bg-[#09090B] bg-[#FAFAFA] border border-[#000]/[0.1] dark:border-[#fff]/[0.1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            <!-- Card Content -->
            <div class="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-[#09090B] dark:text-[#FAFAFA] pt-8">
              <h2 class="text-[3.5rem] font-bold">000</h2>
            </div>
            <div class="absolute text-xl top-2/3 left-1/2 transform -translate-x-1/2 text-center text-[#71717A] dark:text-[#A1A1AA] opacity-[70%] font-normal text-[1.35rem] w-full">
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
export default {
  data() {
    return {
      chartData: [], // Initialize as empty array
    };
  },
  mounted() {
    if (process.client) {
      this.chartData = this.generateChartData(); // Generate chart data on the client side
      this.setupClientSpecificFeatures();
    }
  },
  methods: {
    generateRandomHeight() {
      // Generate a random height between 0.2 and 0.8 for scaleY
      return Math.random() * (0.9 - 0.6) + 0.5;
    },
    generateChartData() {
      return Array.from({ length: 6 }, () => ({ height: this.generateRandomHeight() }));
    },
    setupClientSpecificFeatures() {
      this.animateBars();
      // Any other client-specific code can be initialized here
    },
    animateBars() {
      const animate = () => {
        this.chartData = this.chartData.map(() => ({
          height: this.generateRandomHeight(),
        }));

        // Run the animation at a set interval, e.g., every 500ms
        setTimeout(() => {
          if (process.client) {
            requestAnimationFrame(animate);
          }
        }, 600); // Adjust time as needed for faster or slower animations
      };
      animate();
    },
  },
};
</script>


<style scoped>
.bar-animation {
  /* Base height for the scaleY transform to work on */
  height: 100%; /* Set to the height of the parent container */
  transform-origin: bottom;
  transition: transform 1s ease;
}
.text-grid {
color: rgba(255, 255, 255, 0.66);

text-align: center;
/* H2 */
font-size: 1.6rem;
font-style: normal;
font-weight: 600;
line-height: normal;
}

.card-small {
  flex: 0 0 auto; /* don't grow, don't shrink, based on the height below */
  height: 210px;
  margin-right: auto; /* Push the card to the right */
  width: 80%; /* example fixed height for small cards */
  border-radius: 40px;;
}

.card-medium {
  flex: 0 0 auto; /* don't grow, don't shrink, based on the height below */
  height: 325px;
  margin-left: auto; /* Push the card to the right */
  width: 80%; /* example fixed height for medium cards */
  border-radius: 40px;
}

.card-small-mid {
  flex: 0 0 auto; /* don't grow, don't shrink, based on the height below */
  height: 150px; /* example fixed height for medium cards */
}

.card-large {
  flex: 0 0 auto; /* don't grow, don't shrink, based on the height below */
  height: 500px; /* example fixed height for large cards */
  border-radius: 40px;
}

/* Responsive Design */
@media screen and (max-width: 767px) {
  .card-small, .card-medium, .card-large {
    aspect-ratio: 1 / 1; /* For a square aspect ratio on smaller screens */
    width: 100%; /* Full width for small screens */
  }
}
</style>

