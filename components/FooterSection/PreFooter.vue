<template>
  <section class="bg-gray-100 grid grid-cols-1 md:grid-cols-2 items-start">
    <!-- Coluna Esquerda -->
    <div class="h-full bg-[#0f151d] px-12 py-16 md:px-24 md:py-24 mb-28">
      <h2 class="sticky top-24 
      text-[48px] md:text-[72px] leading-[80.78px text-white">Nosso processo</h2>
    </div>

    <!-- Coluna Direita --> 
    <div class="h-full space-y-16 px-10 py-16 md:px-12 md:py-20">
      <!-- Item 1 -->
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

      <!-- Item 2 -->
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      
      <!-- Item 3 -->
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
     
      <!-- Item 3 -->
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      features: [
        {
          id: 1,
          icon: "path/to/your/icon1.svg",
          title: "Feature 1",
          description: "Descrição da feature 1"
        },
        {
          id: 2,
          icon: "path/to/your/icon2.svg",
          title: "Feature 2",
          description: "Descrição da feature 2"
        },
        // ... adicione outros recursos conforme necessário
      ]
    };
  }
};
</script>

<style scoped>
p {
  font-family: 'Georgia', sans-serif;
  font-size: 21.09px;
  line-height: 23.09px;
}
</style>
