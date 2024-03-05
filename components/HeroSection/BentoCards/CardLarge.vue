<template>
     <div>
        <div class="card-large rounded-2xl overflow-hidden relative dark:bg-[#09090B] bg-[#FAFAFA] dark:custom-border-dark custom-border focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            <!-- Large Card Content -->
            <div class="p-2 md:p-4 h-full">

              <div class="mt-5 ml-4 pb-[12px]">
              <h2 class="Hprime md:text-[48px] text-[40px] font-[700] break-words tracking-[-2.16px] leading-[48px] text-[#09090B] dark:text-[#FAFAFA] mb-2 md:w-[70%] w-[60%] text-left">Major feature </h2>
             </div> 
             
             <div class="w-full flex justify-center gap-4 mt-auto" style="height: calc(100% - 1.5rem);"> <!-- Adjust the calc() value to control the space at the bottom -->
                <!-- v-for to render each bar -->
                <div v-for="(value, index) in chartData" :key="index" class="w-10 md:w-12 relative" style="height: 100%;">
                  <div :style="{ transform: `scaleY(${value.height})` }" class="bar-animation absolute bottom-0 w-full bg-black to-transparent rounded-t-xl dark:bg-white"></div>
                </div>
              </div>

              <div>
              <div class="absolute top-10 right-5 text-green-500 dark:bg-[#09090B]/75 bg-[#FAFAFA]/75 text-3xl font-bold p-2 rounded-2xl border border-[#000]/[0.1] dark:border-[#fff]/[0.1] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white ring-green-500/50 ring-1">+11%</div>
             </div>
            </div>
          </div>
        </div>
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
        }, 700); // Adjust time as needed for faster or slower animations
      };
      animate();
    },
  },
};
</script>

<style>
.Hprime {
  font-family: "Mona Sans";
}
.bar-animation {
  /* Base height for the scaleY transform to work on */
  height: 100%; /* Set to the height of the parent container */
  transform-origin: bottom;
  transition: transform 1s ease;
}

.card-large {
  flex: 0 0 auto; /* don't grow, don't shrink, based on the height below */
  height: 625px; /* example fixed height for large cards */
  border-radius: 40px;
}


/* Responsive Design */
@media screen and (max-width: 767px) {
  .card-large {
    aspect-ratio: 1 / 1; /* For a square aspect ratio on smaller screens */
    width: 100%; /* Full width for small screens */
  }
}
</style>