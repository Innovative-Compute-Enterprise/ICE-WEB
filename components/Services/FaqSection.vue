<template>
  <section class="p-6 rounded-md my-28 md:my-40 flex justify-center">
    <div class="w-full md:w-3/5 mx-6">
      <h2 class="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-12">Frequently asked questions</h2>
      <dl>
        <div
          v-for="faq in faqs"
          :key="faq.id"
          class="py-6 border-t border-gray-200 dark:border-gray-600"
        >
          <dt
            class="text-lg font-medium text-gray-900 dark:text-gray-100 cursor-pointer flex justify-between items-center"
            @click="toggle(faq.id)"
          >
            {{ faq.question }}
            <button>
              <svg
                v-if="!isOpened(faq.id)"
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
              </svg>
            </button>
          </dt>
          <transition name="fade">
            <dd v-if="isOpened(faq.id)" class="mt-2">
              <p class="text-base font-semibold text-gray-500 dark:text-gray-400">{{ faq.answer }}</p>
            </dd>
          </transition>
        </div>
      </dl>
    </div>
  </section>
</template>

<script>
export default {
  name: 'FAQSection',
  data() {
    return {
      openFaqIds: [], // Array to store open FAQ IDs
      faqs: [
        { id: 1, question: this.$t('faqSection.faqs.question1'), answer: this.$t('faqSection.faqs.answer1') },
        { id: 2, question: this.$t('faqSection.faqs.question2'), answer: this.$t('faqSection.faqs.answer2') },
        { id: 3, question: this.$t('faqSection.faqs.question3'), answer: this.$t('faqSection.faqs.answer3') },
        { id: 4, question: this.$t('faqSection.faqs.question4'), answer: this.$t('faqSection.faqs.answer4') },
        { id: 5, question: this.$t('faqSection.faqs.question5'), answer: this.$t('faqSection.faqs.answer5') },
        { id: 6, question: this.$t('faqSection.faqs.question6'), answer: this.$t('faqSection.faqs.answer6') },
      ],
    };
  },
  methods: {
    toggle(id) {
      const index = this.openFaqIds.indexOf(id);
      if (index !== -1) {
        this.openFaqIds.splice(index, 1); // Remove ID if already open
      } else {
        this.openFaqIds.push(id); // Add ID if not open
      }
    },
    isOpened(id) {
      return this.openFaqIds.includes(id);
    },
  },
};
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s, transform 0.2s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

button {
  transition: transform 0.3s ease;
}

.open-icon {
  animation: rotateOpen 0.3s forwards; 
}

.close-icon {
  animation: rotateClose 0.3s forwards; 
}

dd {
  animation: fadeIn 0.3s ease-out; 
}

@keyframes rotateOpen {
  from { transform: rotate(0deg); }
  to { transform: rotate(90deg); }
}

@keyframes rotateClose {
  from { transform: rotate(45deg); }
  to { transform: rotate(0deg); }
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
