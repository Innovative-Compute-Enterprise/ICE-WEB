<template>
  <div class="hero-text-container bottom flex flex-col items-start justify-start md:justify-end h-screen">
    <h1 class="text-white px-4 md:px-12 pb-4 text-[50.09px] md:text-[85.09px] leading-none">
      {{ $t('heroText.title1') }}  AI
      <br> {{ $t('heroText.title2') }}    </h1>
    <p class="text-white text-left text-[18px] mx-8 md:mx-12 mb-10 w-[40%]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
    <div class=" ml-8 md:ml-12">
    <ButtonMain />
  </div>
  </div>
</template>

<script setup>
import ButtonMain from '~/components/ButtonMain.vue';
import { useI18n } from 'vue-i18n';


const { t } = useI18n(); // This is the translation function

</script>


<style scoped>
.hero-text-container h1 {
  font-family: 'Helvetica Neue Medium', sans-serif;
  font-weight: 600;
  word-spacing: normal;
  line-height: 1;
  letter-spacing: -3px;
}
p{
line-height: 1.1;
letter-spacing: 1px;

}

#changingWord {
  -webkit-background-clip: text;
  background-clip: text; /* Standard property */
  -webkit-text-fill-color: transparent;
  color: transparent; /* Standard property */
}

.hero-text-container {
  font-family: 'Helvetica Neue Medium', sans-serif;
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  text-align: left;
  padding-bottom: 10rem;
  z-index: 3;
  font-weight: 500;
  word-spacing: normal;
}

@media screen and (max-width: 640px) {
  .hero-text-container {
    bottom: 0;
    padding-top: 8rem;
    top: auto;
  }
}
</style>
