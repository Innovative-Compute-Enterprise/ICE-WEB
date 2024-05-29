<template>
     <div>
        <div class="card-large rounded-2xl overflow-hidden relative dark:bg-[#09090B] bg-[#FAFAFA] dark:custom-border-dark custom-border">
           
          <div class="p-1 md:p-2 h-full">
              <div class="mt-5 ml-4 pb-[12px]">
              <h2 class="Hprime md:text-[36px] text-[32px] font-[700] break-words tracking-[-2.16px] leading-[36px] text-[#09090B] dark:text-[#FAFAFA] mb-3 md:w-[70%] w-[60%] text-left">{{$t('cardSection.large1')}}</h2>
              <p class="text-[16px] leading-[21px] text-[#09090B] dark:text-[#FAFAFA] w-[80%]">{{$t('cardSection.large2')}}</p>
             </div> 
             
             <div class="w-full flex justify-center gap-1 mt-auto" style="height: calc(100% - 1.5rem);"> 
                <div v-for="(value, index) in chartData" :key="index" class="w-14 md:w-16 relative" style="height: 100%;">
                  <div :style="{ transform: `scaleY(${value.height})` }" class="bar-animation absolute bottom-0 w-full rounded-xl  bg-gradient-to-b from-black dark:to-transparent to-gray-600 dark:from-white"></div>
                </div>
              </div>

              <div>
              <div class="absolute top-8 right-5 text-green-500 text-3xl font-[900] p-2 rounded-2xl border border-green-400/[0.2] dark:border-green-300/[0.2] ring-green-400/90 ring-2 numbers">+33%</div>
             </div>
            </div>
          </div>

        </div>
</template>

<script>
export default {
  data() {
    return {
      chartData: [], 
    };
  },
  mounted() {
    if (process.client) {
      this.chartData = this.generateChartData(); 
      this.setupClientSpecificFeatures();
    }
  },
  methods: {
    generateRandomHeight() {
      return Math.random() * (0.9 - 0.6) + 0.5;
    },
    generateChartData() {
      return Array.from({ length: 6 }, () => ({ height: this.generateRandomHeight() }));
    },
    setupClientSpecificFeatures() {
      this.animateBars();
    },
    animateBars() {
      const animate = () => {
        this.chartData = this.chartData.map(() => ({
          height: this.generateRandomHeight(),
        }));

        setTimeout(() => {
          if (process.client) {
            requestAnimationFrame(animate);
          }
        }, 700); 
      };
      animate();
    },
  },
};
</script>

<style>
p {
  font-family: "Open Sans", sans-serif;
}
.numbers {
  font-family: "Mona Sans";
  font-stretch: 125%;
}
.Hprime {
  font-family: "Mona Sans";
  font-stretch: 100%;
}
.bar-animation {
  /* Base height for the scaleY transform to work on */
  height: 100%; /* Set to the height of the parent container */
  transform-origin: bottom;
  transition: transform 1s ease;
}

.card-large {
  flex: 0 0 auto; /* don't grow, don't shrink, based on the height below */
  height: 725px; /* example fixed height for large cards */
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