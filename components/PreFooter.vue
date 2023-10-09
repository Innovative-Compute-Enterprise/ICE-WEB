<template>
  <section class="bg-gray-100 grid grid-cols-1 md:grid-cols-2 items-start gap-4">
    <!-- Coluna Esquerda -->
    <div class="p-6 bg-[#0f151d] h-full min-h-[200px]">
      <h2 class="sticky top-8 text-[48px] md:text-[64px] xl:text-[96px] text-white">Nosso processo</h2>
    </div>

    <!-- Coluna Direita --> 
    <div class="p-6 space-y-8">
      <!-- Item 1 -->
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

      <!-- Item 2 -->
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      
      <!-- Adicione mais itens conforme necessário -->
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
  font-size: 21.045px;
  line-height: 23.17px;
}
</style>
