<template>
    <section class="bg-gray-100 ">
      <div class="container">
        <div class="flex flex-wrap">
  
          <!-- Coluna Esquerda -->
          <div class="w-full md:w-1/2 p-6 mb-8 md:mb-0 bg-[#0f151d]">
            <h2 class="text-[48px] md:text-[64px] xl:text-[96px] mb-6 text-white">Nosso Processo</h2>
          </div>
  
          <!-- Coluna Direita -->
          <div class="w-full md:w-1/2 p-6">
            <!-- Item 1 -->
            <div class="flex items-start mb-8">
              <p>Texto descritivo  relacionado ao ícone 1. Explicando o processo ou a característica em questão.</p>
            </div>

            <!-- Item 2 -->
            <div class="flex items-start mb-8">
              <p>Texto descritivo relacionado ao ícone 2. Explicando o processo ou a característica em questão.</p>
            </div>
            <!-- Adicione mais itens conforme necessário -->
          </div>
  
        </div>
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

  