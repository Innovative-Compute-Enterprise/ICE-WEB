<template>
  <div class="w-full h-full grid grid-cols-1 md:grid-cols-3 items-start min-h-[30rem] md:min-h-[50rem] bg-white">
    
    <!-- Watch & Read More Section -->
    <div class="order-3 md:order-none">
        <div class="watch-section bg-[#dfdfdf] space-y-4 h-[23.75rem] flex flex-col justify-between p-12 md:p-16 md:col-span-1">
          <div>
            <div class="text-gray-700 text-[36px] font-normal">{{ $t('keySection.watch') }}</div>
            <div class="text-gray-700  text-[36px] font-normal">{{ $t('keySection.video') }}</div>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12 ">
            <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
          </svg>
        </div>
    

    <!-- Read More Section -->
    <div class="read-section bg-[#646464] h-[23.75rem] flex flex-col justify-between p-12 md:p-16 col-start-1 ">
      <div class="text-white text-[2.25rem] font-normal">{{ $t('keySection.read') }}</div>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-12 h-12">
        <path stroke-linecap="round" stroke-linejoin="round" d="M7.864 4.243A7.5 7.5 0 0119.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 004.5 10.5a7.464 7.464 0 01-1.15 3.993m1.989 3.559A11.209 11.209 0 008.25 10.5a3.75 3.75 0 117.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 01-3.6 9.75m6.633-4.596a18.666 18.666 0 01-2.485 5.33" />
      </svg>
    </div>
</div>
    <!-- Key Principles Section -->
    <div class="h-full w-auto bg-black mb-28 p-6 order-1 md:order-1 md:col-start-2">
      <div class="tittle-text sticky top-28 text-white md:text-center text-[3rem] md:text-[3.7rem] font-normal leading-[4rem] tracking-tight">{{ $t('keySection.key') }}</div>
    </div>

    <!-- List of Principles -->
    <ul class="md:col-start-3 order-2 md:order-3">
      <li v-for="item in principles" :key="item" class="bg-white flex flex-col items-start p-12 md:p-16">
        <div class="w-8 h-8 bg-[#0f151d] rounded-lg rounded-br-xl"></div>
        <div class="text-[#0f151d] text-[1.313rem] leading-8">{{ t(item) }}</div>
      </li>
    </ul>

  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const principles = ref([
  "principles.principle1",
  "principles.principle2",
  "principles.principle3",
  "principles.principle4",
  "principles.principle5"
]);

const { t } = useI18n();

onMounted(() => {
  if (window.innerWidth < 768) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('hover-state');
        } else {
          entry.target.classList.remove('hover-state');
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    });

    const sections = document.querySelectorAll('.watch-section, .read-section');
    sections.forEach(section => {
      observer.observe(section);
    });
  }
});
</script>

<style scoped>
.tittle-text {
  font-family: 'Georgia', sans-serif;
}

ul {
  font-size: 1.313rem;
  font-family: 'Helvetica Neue Medium', sans-serif;
  line-height: 1.438rem;
}

.read-section, .watch-section {
  transition: background-color ease-in 0.5s, color ease-in 0.5s;
}

/* Desktop hover effects */
@media (hover: hover) and (pointer: fine) {
  .watch-section:hover {
    cursor: pointer;
    background-color: #fff40f;
    color: #ffffff; /* Darker text color */
  }

  .watch-section:hover svg {
    fill: #ffffff; /* Change SVG fill color */
    stroke: #ffffff; /* Change SVG stroke color */
  }

  .read-section:hover {
    cursor: pointer;
    background-color: #da3b3b; /* Lighter shade for background */
    color: #f0f0f0; /* Lighter text color */
  }

  .read-section:hover svg {
    color: #ffffff; /* Change SVG fill color */
  }
}

/* Simulated hover state for mobile */
.hover-state.watch-section {
  background-color: #fff40f;
  color: #ffffff;
}

.hover-state.watch-section svg {
  fill: #ffffff;
  stroke: #ffffff;
}

.hover-state.read-section {
  background-color: #da3b3b;
  color: #f0f0f0;
}

.hover-state.read-section svg {
  stroke: #ffffff;
}
</style>
