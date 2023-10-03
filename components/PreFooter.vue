<template>
    <section class="bg-gray-100 py-16 px-8">
      <div class="container mx-auto">
        <div class="flex flex-wrap -mx-8">
  
          <!-- Coluna Esquerda -->
          <div class="w-full md:w-1/2 px-8 mb-8 md:mb-0">
            <h2 class="text-3xl font-semibold mb-6">Nosso Processo</h2>
          </div>
  
          <!-- Coluna Direita -->
          <div class="w-full md:w-1/2 px-8">
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

  