<template>
 <div class="relative" ref="dropdownRoot">
    <button @click="toggleDropdown" class="bg-black text-white leading-6 px-3 py-1 rounded-sm text-[17px] xl:text-[20px]" aria-haspopup="true" :aria-expanded="isDropdownOpen.toString()">
      <svg v-if="!isDropdownOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 inline-block" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"></path>
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 inline-block" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </button>
    
   
    <div v-if="isDropdownOpen" id="dropdownMenu" class="absolute mt-2 shadow-lg rounded-md bg-black p-4 text-[17px] text-white transition-transform transform scale-95" :class="isMobile ? 'bottom-full mb-2 right-[-10px] w-[150px] text-[14px]' : 'right-[-10px] md:w-[165px] xl:w-[173px]'">      
  <!-- Menu list --> 
  <ul class="p-2 space-y-4 justify-center text-center">
    <li>
      <a href="#home" @click.prevent="scrollToSection" class="block py-3 px-4 rounded-md transition-colors">
        Home
      </a>
    </li>
    <li>
      <a href="#about" @click.prevent="scrollToSection" class="block py-3 px-4 rounded-md transition-colors">
        About
      </a>
    </li>
    <li>
      <a href="#faq" @click.prevent="scrollToSection" class="block py-3 px-4 rounded-md transition-colors">
        FAQ
      </a>
    </li>
    <li>
      <a href="#footer" @click.prevent="scrollToSection" class="block py-3 px-4 rounded-md transition-colors">
        Contact
      </a>
    </li>
  </ul>
</div>

    </div>
</template>


<script setup>
import { ref, onMounted } from 'vue';
import { useGlobalState } from '~/composables/useGlobalState';
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const isDropdownOpen = ref(false);
const { isMobile } = useGlobalState();
const dropdownRoot = ref(null);

const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};

const scrollToSection = (event) => {
  const targetId = event.target.getAttribute('href');
  gsap.to(window, {
    duration: 1,
    scrollTo: targetId,
    ease: "power2"
  });
  toggleDropdown();
};

onMounted(() => {
  const links = dropdownRoot.value.querySelectorAll('a')
  links.forEach(link => {
    link.addEventListener('mouseenter', () => {
      gsap.to(link, {
        backgroundColor: 'blue',
        color: 'white',
        delay: 0.2,
        duration: 0.3
      });
      // For pseudo-elements, consider handling the effect via CSS
    });

    link.addEventListener('mouseleave', () => {
      gsap.to(link, {
        backgroundColor: 'transparent',
        color: 'black',
        duration: 0.3
      });
      // For pseudo-elements, consider handling the effect via CSS
    });
  });
});
</script>


<style scoped>
.font-georgia {
  font-family: Georgia, 'Times New Roman', Times, serif;
}

a {
  position: relative;
  overflow: hidden; /* This will ensure the line (pseudo-element) doesn't spill outside the link */
}

a::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 100%; /* Start with the line on the left and not visible */
  height: 2px; /* This is the height of the line. Adjust as needed. */
  background-color: blue; /* The color of the line. Adjust as needed. */
  transition: right 0.6s; /* Animation duration for the line */
}

a:hover::before {
  right: 0; /* On hover, expand the line to the full width of the link */
}

a:hover {
  background-color: rgb(117, 117, 241); /* This will be the filled color */
  animation-delay: 2s;
  color: white; /* Adjust the text color on hover as needed */
}

</style>

