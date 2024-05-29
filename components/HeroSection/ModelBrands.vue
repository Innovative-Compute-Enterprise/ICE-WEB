<template>
  <div class="flex flex-col items-center dark:bg-[#09090B] bg-[#FAFAFA] mx-auto max-w-[1440px] my-[128px] px-4 py-[48px]">
    <h2 class="md:text-[48px] text-[40px] font-[700] my-[36px] tracking-[-2.16px] text-center leading-[40px] md:leading-[48px] md:w-[60%] w-[80%] text-[#09090B] dark:text-[#FAFAFA]">{{ $t('models.title') }}</h2>
    <div class="relative w-full max-w-[1440px] flex flex-wrap justify-center items-start md:my-[164px] my-[32px]">
      <div v-for="(broker, index) in brokers" :key="broker.name" :class="['flex items-center justify-center custom-border bg-[#000]/[0.1] dark:bg-[#fff]/[0.1] rounded-full px-5 py-3 shadow', getMarginClass(index)]">
        <component :is="broker.svgComponent" class="w-9 h-9 fill-current text-black dark:text-white"></component>
        <span class="md:text-[24px] text-[16px] md:leading-[24px] leading-[16px] font-semibold ml-2 dark:text-white text-black">{{ broker.name }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import OpenAISVG from '/components/SvgIcons/OpenAISVG.vue';
import GoogleSVG from '/components/SvgIcons/GoogleSVG.vue';
import MetaSVG from '/components/SvgIcons/MetaSVG.vue';
import MistralAISVG from '/components/SvgIcons/MistralAISVG.vue';
import AnthropicSVG from '/components/SvgIcons/AnthropicSVG.vue';
import MicrosoftSVG from '/components/SvgIcons/MicrosoftSVG.vue';

const brokers = [
  { name: 'OpenAI', svgComponent: OpenAISVG },
  { name: 'Google', svgComponent: GoogleSVG },
  { name: 'Meta', svgComponent: MetaSVG },
  { name: 'MistralAI', svgComponent: MistralAISVG },
  { name: 'Anthropic', svgComponent: AnthropicSVG },
  { name: 'Microsoft', svgComponent: MicrosoftSVG }
];

function getMarginClass(index) {
  const classes = [
    'mt-0 mb-[124px] ml-4 mr-2',  // These values should be adjusted based on the actual layout of the screenshot
    'mt-[100px] mb-0 ml-2 mr-4',
    'mt-0 mb-[124px] ml-4 mr-2',
    'mt-[124px] mb-0 md:ml-2 md:mr-4',
    'md:mt-[10px] md:mb-[124px] md-0 md:ml-4 md:mr-2 mr-[124px] mt-[64px]',
    'md:mt-[124px] mb-0 md:ml-2 md:mr-4 ml-[124px] mr-0 mt-[64px]'
  ];
  return classes[index % classes.length];
}
</script>

<style scoped>
/* Additional styling if needed */
h2 {
  font-family: "Mona Sans";
  font-stretch: 100%;
}
</style>
