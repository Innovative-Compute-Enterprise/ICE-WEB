<template>
  <div>
    <Header />
    <NuxtLoadingIndicator>
      <div class="loading-container">
        <div class="infinity"></div>
      </div>
    </NuxtLoadingIndicator>
    <Nuxt />
  </div>
</template>


<script setup>
import Header from '~/components/Header.vue';
</script>

<style scoped>
.loading-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #ffffff; /* cor de fundo da tela de carregamento */
}

.infinity {
  width: 100px;
  height: 50px;
  border: 8px solid #333; /* cor do símbolo do infinito */
  border-top-color: transparent;
  border-radius: 50px;
  animation: rotateInfinity 2s linear infinite;
}

@keyframes rotateInfinity {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
