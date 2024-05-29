<template>
  <div class="card-medium rounded-[40px] overflow-hidden relative dark:bg-[#09090B]
     bg-[#FAFAFA] border border-[#000]/[0.2] dark:border-[#fff]/[0.2]">
     <div class="text-center justify-between flex flex-col items-center p-2">
      <p class="lg:text-[72px] md:text-[56px] sm:text-[64px] text-[72px] numbers leading-[72px] text-[#09090B] dark:text-[#FAFAFA] my-16">{{ stat }}</p>
      <p class="text-[16px] leading-[16px] text-[#09090B] dark:text-[#FAFAFA] w-[80%]">{{ description }}</p>
    </div>
  </div>
</template>

<script>
import SvgCircle from '../../SvgIcons/SvgCircle.vue';

export default {
  components: {
    SvgCircle,
  },
  props: {
    stat: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.card-medium {
  flex: 0 0 auto;
  height: 350px;
  width: 100%;
  border-radius: 40px;
  font-family: "Open Sans", sans-serif;
}

@media screen and (max-width: 767px) {
  .card-medium {
    aspect-ratio: 1 / 1;
    width: 100%;
  }
}

.numbers{
  font-family: "Mona Sans";
  font-stretch: 125%;
  font-weight: 900;
 }
</style>