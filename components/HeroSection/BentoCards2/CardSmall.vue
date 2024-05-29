<template>
  <div class="card-small rounded-[40px] overflow-hidden relative dark:bg-[#09090B] bg-[#FAFAFA] border border-[#000]/[0.2] dark:border-[#fff]/[0.2]">
    <div class="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center pt-8">
      <component :is="svgComponent" class="w-20 h-20 mx-auto dark:fill-white" v-if="svgComponent" />
    </div>
    <div class="absolute top-2/3 left-1/2 transform -translate-x-1/2 text-center w-full">
      <p class="text-[20px] leading-[24px] font-[900] text-[#09090B] dark:text-[#FAFAFA]">{{ stat }}</p>
    </div>
  </div>
</template>

<script>
import Fast from '../../SvgIcons/SvgCard/Fast.vue';
import Powerful from '../../SvgIcons/SvgCard/Powerful.vue';
import Easy from '../../SvgIcons/SvgCard/Easy.vue';

export default {
  props: {
    stat: {
      type: String,
      required: true,
    },
    svgName: {
      type: String,
      required: true,
    },
  },
  computed: {
    svgComponent() {
      const svgComponents = {
        Powerful,
        Fast,
        Easy,
      };
      return svgComponents[this.svgName] || null;
    }
  }
};
</script>

<style scoped>
.card-small {
  flex: 0 0 auto;
  height: 225px;
  width: 100%;
  border-radius: 40px;
  font-family: "Mona Sans";
}

@media screen and (max-width: 767px) {
  .card-small {
    aspect-ratio: 1 / 1;
    width: 100%;
  }
}

p {
  font-family: "Mona Sans";
  font-stretch: 100%;
}
</style>