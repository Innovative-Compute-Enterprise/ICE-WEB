<template>
    <section class="p-6 rounded-md md:my-40 my-28 flex justify-center">
    <div class="md:w-[60%] w-full mx-[24px]">
      <h2 class="text-[48px] leading-[48px] font-[700] text-[#09090B] dark:text-[#FAFAFA] mb-[48px]">Frequently asked questions</h2>
      <dl>
        <div
          v-for="faq in faqs"
          :key="faq.id"
          class="pt-6 pb-6 dark:bg-[#09090B] bg-[#FAFAFA] border border-[#000]/[0.1] dark:border-[#fff]/[0.1] border-x-0"
        >
          <dt
            class="text-[18px] leading-[18px] font-[500] text-gray-900 dark:text-white cursor-pointer flex justify-between items-center border-x-0 border-b-0 focus-visible:ring-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            @click="toggle(faq.id)"
          >
            {{ faq.question }}
            <button>
              <svg
                v-if="!isOpened(faq.id)"
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                :class="{ 'close-icon': isOpened(faq.id) }"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <!-- Plus icon SVG path -->
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                :class="{ 'open-icon': isOpened(faq.id) }"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <!-- Minus icon SVG path -->
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" />
              </svg>
            </button>
          </dt>
          <transition name="fade" mode="out-in">
            <dd v-if="isOpened(faq.id)" class="mt-2">
              <p class="text-[16px] leading-[16px] font-semibold text-gray-500 dark:text-gray-400">{{ faq.answer }}</p>
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
      {
          id: 1,
          question: this.$t('faqSection.faqs.question1'),
          answer: this.$t('faqSection.faqs.answer1'),
        },
        {
          id: 2,
          question: this.$t('faqSection.faqs.question2'),
          answer: this.$t('faqSection.faqs.answer2'),
        },
        {
          id: 3,
          question: this.$t('faqSection.faqs.question3'),
          answer: this.$t('faqSection.faqs.answer3'),
        },
        {
          id: 4,
          question: this.$t('faqSection.faqs.question4'),
          answer: this.$t('faqSection.faqs.answer4'),
        },
        {
          id: 5,
          question: this.$t('faqSection.faqs.question5'),
          answer: this.$t('faqSection.faqs.answer5'),
        },
        {
          id: 6,
          question: this.$t('faqSection.faqs.question6'),
          answer: this.$t('faqSection.faqs.answer6'),
        },
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
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(-10px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes rotateOpen {
  from { transform: rotate(0deg); }
  to { transform: rotate(90deg); }
}

@keyframes rotateClose {
  from { transform: rotate(45deg); }
  to { transform: rotate(0deg); }
}

@keyframes fadeOut {
  from { opacity: 1; transform: translateY(0); }
  to { opacity: 0; transform: translateY(-10px); }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s, transform 0.2s;
}
.fade-enter, .fade-leave-to{
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

</style>