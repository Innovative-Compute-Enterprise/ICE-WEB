<template>
  <div class="flex flex-col items-center py-12 md:py-16 mx-4 relative">
    <h1 class="text-[48px] leading-[48px] font-bold mb-6 md:mb-8 text-center text-[#09090B] dark:text-[#FAFAFA] z-10">{{ $t('blueSection.title') }}</h1>
    <p class="text-lg md:text-xl py-5 px-2 text-[#09090B] dark:text-[#FAFAFA] max-w-3xl mx-auto mb-6 md:mb-8 leading-relaxed text-center rounded-[40px] z-10">{{ $t('blueSection.subtitle') }}</p>
    <div class="flex flex-col justify-center items-center max-w-3xl leading-relaxed mx-auto z-10">
      <p class="text-[21px] leading-relaxed text-[#09090B] dark:text-[#FAFAFA] mb-8 text-center">{{ $t('blueSection.paragraph1') }}</p>
      <p class="text-[21px] leading-relaxed text-[#09090B] dark:text-[#FAFAFA] mb-24 text-center">{{ $t('blueSection.paragraph2') }}</p>
      <blockquote class="text-lg md:text-xl text-[#ffffff] dark:text-[#ffffff] max-w-3xl text-center border-l-4 border-black dark:border-[#fff]/[0.8] pl-4 md:pl-8 py-4 relative z-10">{{ $t('blueSection.quote') }}</blockquote>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
h1 {
  font-family: "Mona Sans", sans-serif;
  font-stretch: 100%;
}

p, blockquote {
  font-family: "Open Sans", sans-serif;
}

blockquote {
  font-style: italic;
}


.relative::before {
  content: "";
  position: absolute;
  top: 80%; /* Adjusted position to make it more likely to be visible */
  left: 30%; /* Adjusted for better visibility */
  right: 30%; /* Adjusted for better visibility */
  bottom: 0%; /* Adjusted to prevent the blob from being too low */
  background: rgba(240, 11, 11, 0.9); /* Adjust the opacity and color for better visibility */
  filter: blur(70px); /* Adjust blur as necessary */
  z-index: -1; /* Keep it below the text */

  /* Adjusted faux grain effect for better visibility */
  background-image: 
    linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
  background-size: 5px 5px, 5px 5px; /* Smaller grain size */
}
</style>
