<template>
  <section>
    <div class="container z-50 flex flex-col mx-auto px-6 mt-[64px] mb-[128px] py-[48px] max-w-[1440px] items-center">
      <div class="justify-center md:w-[80%]">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 rounded-[40px]">
          <div class="flex flex-col space-y-6">
            <CardMedium stat="-47%" :description="$t('cardSection.medium1')" />
            <CardMedium stat="24/7" :description="$t('cardSection.medium2')" />
          </div>

          <div class="flex flex-col">
            <CardLarge />
          </div>

          <div class="flex flex-col space-y-6">
            <CardSmall :stat="$t('cardSection.small2')" svgName="Powerful" />
            <CardSmall :stat="$t('cardSection.small1')" svgName="Fast" />
            <CardSmall :stat="$t('cardSection.small3')" svgName="Easy" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CardLarge from './BentoCards2/CardLarge.vue';
import CardSmall from './BentoCards2/CardSmall.vue';
import CardMedium from './BentoCards2/CardMedium.vue';

export default {
  components: {
    CardLarge,
    CardSmall,
    CardMedium,
  },
};
</script>

