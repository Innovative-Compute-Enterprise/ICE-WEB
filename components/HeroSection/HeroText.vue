<template>
  <div class="hero-text-container bottom">
    <h1 class="w-auto h-auto text-white px-4 md:px-8 pb-20 md:pb-8 lg:pb-10 text-[55.09px] sm:text-[63.09px] md:text-[96.09px]">
      Continuum Glow stands for <br> <span id="changingWord">Tech</span> innovation.
    </h1>
  </div>
</template>

  
<script setup>
import { onMounted } from 'vue';
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

let words = ["AI", "Software", "Tech", "Robotic"];
let index = 0;
let wordContainer;

onMounted(() => {
  wordContainer = document.querySelector("#changingWord");
  animateWord();
});

function animateWord() {
  gsap.to(wordContainer, {
    duration: 1.6,
    delay: 1,
    text: words[index],
    onComplete: function() {
      index = (index + 1) % words.length;
      animateWord();
    }
  });
}
  
</script>

  <style scoped>
  #changingWord {
    background: -webkit-linear-gradient(#0e042d, #0d3375, #b3aec0);
   -webkit-background-clip: text;
   -webkit-text-fill-color: transparent;
  }
  .hero-text-container {
    font-family: 'Helvetica Neue Medium', sans-serif;;
    position: absolute;
    
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: left;
    padding-bottom: 1.5rem;
    z-index: 3;
    font-weight: 600;
    word-spacing: normal;
    line-height: 0.9;
    letter-spacing: -1.9px;
    
  }
  @media screen and (max-width: 640px) { /* 640px is Tailwind's 'sm' breakpoint */
  .hero-text-container {
    bottom: auto;
    top: 0;
    padding-top: 6rem;
  }
}
  </style>
  