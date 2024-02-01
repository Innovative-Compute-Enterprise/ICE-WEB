<template>
  <section class="p-6 rounded-md md:mx-32 md:my-40 lg:mx-40 mx-4 my-28">
    <h2 class="text-3xl font-extrabold text-[#09090B] dark:text-[#FAFAFA] mb-8">Frequently asked questions</h2>
    <dl>
      <div 
        v-for="faq in faqs"
        :key="faq.id"
        class="pt-6 pb-6 dark:bg-[#09090B] bg-[#FAFAFA] border border-[#000]/[0.1] dark:border-[#fff]/[0.1] border-x-0 "
      >
        <dt 
          class="text-lg leading-6 font-medium text-gray-900 dark:text-white cursor-pointer flex justify-between items-center border-x-0 border-b-0 focus-visible:ring-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          @click="toggle(faq.id)"
        >
          {{ faq.question }}
          <button>
            <svg v-if="!isOpened(faq.id)" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <!-- Plus icon SVG path -->
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <!-- Minus icon SVG path -->
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
            </svg>
          </button>
        </dt>
        <dd v-if="isOpened(faq.id)" class="mt-2">
          <p class="text-base text-gray-500 dark:text-gray-400">{{ faq.answer }}</p>
        </dd>
      </div>
    </dl>
  </section>
</template>

<script>
export default {
  name: 'FAQSection',
  data() {
    return {
      openFaqId: null,
      faqs: [
      { id: 1, question: 'What\'s the best thing about Switzerland?', answer: 'I don\'t know, but the flag is a big plus.' },
      { id: 2, question: 'How do you make holy water?', answer: 'You boil the hell out of it.' },
      { id: 3, question: 'Why do we tell actors to "break a leg"?', answer: 'Because every play has a cast.' },
      { id: 4, question: 'Why don\'t scientists trust atoms?', answer: 'Because they make up everything.' },
      { id: 5, question: 'Why don\'t some couples go to the gym?', answer: 'Because some relationships don\'t work out.' },
      { id: 6, question: 'Why did the scarecrow win an award?', answer: 'Because he was outstanding in his field.' }
      ]
    };
  },
  methods: {
    toggle(id) {
      this.openFaqId = this.openFaqId === id ? null : id;
    },
    isOpened(id) {
      return this.openFaqId === id;
    }
  }
};
</script>
