<template>
  <section class="my-4">
    <div class="max-w-7xl mx-auto md:px-6 px-2 py-16">
      <div class="text-center mb-16">
        <h2 class="text-[48px] leading-[48px] tracking-[-2.16px] font-[700] mb-[24px] text-[#09090B] dark:text-[#FAFAFA]">{{ $t('AboutValues.our_values') }}</h2>
        <p class="text-[18px] mx-auto leading-relaxed text-[#71717A] dark:text-[#A1A1AA]" style="max-width: 60%;">
          {{ $t('AboutValues.values_description') }}
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-[24px] items-center mx-4 md:mx-32 md:my-24">

        <!-- Feature 1 -->
        <div class="flex items-start p-[24px]">
          <div class="mr-[12px]">
            <OpenessSVG class="icon-size text-black dark:text-white" />
          </div>
          <div>
            <h3 class="text-[24px] leading-[24px] font-bold text-[#09090B] dark:text-[#FAFAFA] mb-2">{{ $t('AboutValues.openness') }}</h3>
            <p class="text-[#71717A] dark:text-[#A1A1AA] text-base md:w-[90%] w-full md:leading-loose leading-relaxed">{{ $t('AboutValues.openness_description') }}</p>
          </div>
        </div>

        <!-- Feature 2 -->
        <div class="flex items-start p-[24px]">
          <div class="mr-[12px]">
            <InnovationSVG class="icon-size text-black dark:text-white" />
          </div>
          <div>
            <h3 class="text-[24px] leading-[24px] font-bold text-[#09090B] dark:text-[#FAFAFA] mb-2">{{ $t('AboutValues.innovation') }}</h3>
            <p class="text-[#71717A] dark:text-[#A1A1AA] text-base md:w-[90%] w-full md:leading-loose leading-relaxed">{{ $t('AboutValues.innovation_description') }}</p>
          </div>
        </div>

        <!-- Feature 3 -->
        <div class="flex items-start p-[24px]">
          <div class="mr-[12px]">
            <SecuritySVG class="icon-size text-black dark:text-white" />
          </div>
          <div>
            <h3 class="text-[24px] leading-[24px] font-bold text-[#09090B] dark:text-[#FAFAFA] mb-2">{{ $t('AboutValues.security') }}</h3>
            <p class="text-[#71717A] dark:text-[#A1A1AA] text-base md:w-[90%] w-full md:leading-loose leading-relaxed">{{ $t('AboutValues.security_description') }}</p>
          </div>
        </div>

        <!-- Feature 4 -->
        <div class="flex items-start p-[24px]">
          <div class="mr-[12px]">
            <CoperationSVG class="icon-size text-black dark:text-white" />
          </div>
          <div>
            <h3 class="text-[24px] leading-[24px] font-bold text-[#09090B] dark:text-[#FAFAFA] mb-2">{{ $t('AboutValues.coperation') }}</h3>
            <p class="text-[#71717A] dark:text-[#A1A1AA] text-base md:w-[90%] w-full md:leading-loose leading-relaxed">{{ $t('AboutValues.coperation_description') }}</p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
import InnovationSVG from '../SvgIcons/SvgAbout/InnovationSVG.vue';
import OpenessSVG from '../SvgIcons/SvgAbout/OpenessSVG.vue';
import SecuritySVG from '../SvgIcons/SvgAbout/SecuritySVG.vue';
import CoperationSVG from '../SvgIcons/SvgAbout/CoperationSVG.vue';

export default {
   components: {
    OpenessSVG,
    InnovationSVG,
    SecuritySVG,
    CoperationSVG,
},
};
</script>

<style scoped>
h2{
font-family: "Mona Sans", sans-serif;
font-stretch: 100%;
}
p{
  font-family: "Open Sans", sans-serif;
}
h3{
font-family: "Mona Sans", sans-serif;
font-stretch: 100%;
}
.feature-item {
  /* Larger gap between items for more whitespace */
  gap: 2rem;
}

.icon-size {
  width: 2rem; /* 48px */
  height: 2rem; /* 48px */
}
@media (min-width: 640px) { /* Tailwind's 'md' breakpoint */
  .icon-size {
    width: 2.5rem; /* 64px */
    height: 2.5rem; /* 64px */
  }
}

</style>
