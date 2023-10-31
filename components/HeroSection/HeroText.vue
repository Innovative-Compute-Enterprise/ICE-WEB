<template>
  <div class="hero-text-container bottom">
    <h1 class="w-auto h-auto text-white px-4 md:px-8 pb-20 md:pb-8 lg:pb-10 text-[55.09px] sm:text-[63.09px] md:text-[75.09px]">
      Continuum Glow stands for <br> <span ref="changingWordRef"></span> innovation.
    </h1>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);

const words = ["AI", "Software", "Tech", "Robotic", "Automation"];
let index = 0;
const changingWordRef = ref(null);

onMounted(() => {
  animateWord();
  animateGradient();
});

function animateWord() {
  gsap.to(changingWordRef.value, {
    duration: 1.5,
    delay: 0.5,
    text: words[index],
    onComplete: function() {
      index = (index + 1) % words.length;
      animateWord();
    }
  });
}

function animateGradient() {
  gsap.to(changingWordRef.value, {
    color: "#059ce9",
    duration: 2.5,

    onComplete: function() {
      gsap.to(changingWordRef.value, {
        color: "#6f26ba",
        duration: 2.5,
    
        onComplete: function() {
          gsap.to(changingWordRef.value, {
            color: "#ef062d",
            duration: 2.5,
        
            onComplete: function() {
              gsap.to(changingWordRef.value, {
                color: "#fef440",
                duration: 2.5,
            
                onComplete: animateGradient
              });
            }
          });
        }
      });
    }
  });
}
</script>

<style scoped>
#changingWord {
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-text-container {
  font-family: 'Helvetica Neue Medium', sans-serif;
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: left;
  padding-bottom: 2rem;
  z-index: 3;
  font-weight: 600;
  word-spacing: normal;
  line-height: 0.9;
  letter-spacing: -3px;
}

@media screen and (max-width: 640px) {
  .hero-text-container {
    bottom: auto;
    top: 0;
    padding-top: 6rem;
  }
}
</style>
