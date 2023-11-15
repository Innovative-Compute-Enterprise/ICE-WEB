<template>
  <div class="hero-text-container bottom flex flex-col items-start justify-center h-screen">
    <h1 class="text-white px-8 md:px-12 pb-6 text-[47.09px] sm:text-[65.09px] md:text-[85.09px] leading-none">
      {{ $t('heroText.title1') }} <br> <span ref="changingWordRef"></span>
      <br> {{ $t('heroText.title2') }}    </h1>
    <p class="text-white text-left text-[18px] mx-8 md:mx-12 mb-10 w-[40%]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </p>
    <div class=" ml-8 md:ml-12">
    <ButtonMain />
  </div>
  </div>
</template>

<script setup>
import ButtonMain from '~/components/ButtonMain.vue';
import { onMounted, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const { t } = useI18n(); // This is the translation function
const words = ref([
  t('words.ai'),
  t('words.software'),
  t('words.tech')
]);

let index = 0;
const changingWordRef = ref(null);

// Watch for language changes and update the words array
watch(() => t('words.ai'), (newVal) => {
  words.value[0] = newVal;
});
watch(() => t('words.software'), (newVal) => {
  words.value[1] = newVal;
});
watch(() => t('words.tech'), (newVal) => {
  words.value[2] = newVal;
});

onMounted(() => {
  if (changingWordRef.value) {
    animateWord();
    animateGradient();
  }
});

function animateWord() {
  gsap.to(changingWordRef.value, {
    duration: 1.5,
    delay: 0.5,
    text: words.value[index],
    onComplete: () => {
      index = (index + 1) % words.value.length;
      animateWord();
    }
  });
}

function animateGradient() {
  const colors = ["red", "blue", "green", "yellow"];
  let colorIndex = 0;

  function changeColor() {
    gsap.to(changingWordRef.value, {
      color: colors[colorIndex % colors.length],
      duration: 2.5,
      onComplete: () => {
        colorIndex++;
        changeColor();
      }
    });
  }

  changeColor();
}
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
  padding-bottom: 2rem;
  z-index: 3;
  font-weight: 500;
  word-spacing: normal;
}

@media screen and (max-width: 640px) {
  .hero-text-container {
    bottom: 0;
    top: auto;
  }
}
</style>
