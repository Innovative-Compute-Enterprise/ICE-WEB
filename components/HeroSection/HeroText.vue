<template>
     <div class="hero-text-container bottom flex flex-col items-start justify-start md:justify-end h-screen">
    <h1 class="text-white px-6 md:px-12 pb-6 text-[3rem] md:text-[4.6rem] leading-none">
      {{ $t('heroText.title1') }}
      <br>
      <span class="animated-text ">{{ animatedText }}<span class="cursor"></span></span>
      <br> {{ $t('heroText.title2') }}   
    </h1>
    <p class="text-white text-left text-[1.125rem] mx-6 md:mx-12 pb-6 w-[40%]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
    <div class=" px-6 md:px-12">
    <ButtonMain />
  </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import gsap from 'gsap';
import ButtonMain from '~/components/ButtonMain.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const animatedText = ref(''); // Inicializa vazio
const cursorVisible = ref(true); // Estado do cursor
const words = ['AI', 'TECHNOLOGY', 'AUTOMATION'];
let wordIndex = 0;

const typeText = async (text) => {
  for (let i = 0; i <= text.length; i++) {
    animatedText.value = text.slice(0, i);
    await gsap.to({}, { duration: 0.1 }); // Suaviza a digitação
  }
};

const deleteText = async () => {
  for (let i = animatedText.value.length; i >= 0; i--) {
    animatedText.value = animatedText.value.slice(0, i);
    await gsap.to({}, { duration: 0.1 }); // Suaviza o apagamento
  }
};

const updateText = async () => {
  await deleteText();
  wordIndex = (wordIndex + 1) % words.length;
  await typeText(words[wordIndex]);
};

const blinkCursor = () => {
  cursorVisible.value = !cursorVisible.value;
};

let intervalId, cursorInterval;
onMounted(() => {
  typeText(words[0]);
  intervalId = setInterval(updateText, 4500); // Ajuste conforme necessário
  cursorInterval = setInterval(blinkCursor, 300); // Velocidade do piscar do cursor
});

onUnmounted(() => {
  clearInterval(intervalId);
  clearInterval(cursorInterval);
});
</script>


<style scoped>
.hero-text-container h1 {
  font-family: 'Helvetica Neue Medium', sans-serif;
  font-weight: 600;
  word-spacing: normal;
  line-height: 1;
  letter-spacing: -0.188rem;
}
p{
line-height: 1.1;
letter-spacing: 0.063rem;

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

@media screen and (max-width: 767px) {
  .hero-text-container {
    bottom: 0;
    padding-top: 10rem;
    top: auto;
  }
}
@keyframes gradientAnimation {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  .animated-text {
    display: inline-block;
    background-image: linear-gradient(90deg, #02BDFF, #9316b4, #da3b3b, #fff40f, #fe5420);
    background-size: 100% 100%;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: gradientAnimation 4s linear infinite;
    animation: blinkCursor 1s step-end infinite;
}
.cursor {
  display: inline-block;
  background-color: rgb(255, 255, 255);
  width: 2px; /* Largura maior */
  height: 1em; /* Altura ajustada para combinar com a altura do texto */
  vertical-align: top; /* Centraliza verticalmente em relação ao texto */
  margin-left: 1px; /* Espaçamento opcional à esquerda do cursor */
  animation: blink 1s step-end infinite; /* Animação de piscar */
}

@keyframes blink {
  50% { opacity: 0; }
}

</style>
