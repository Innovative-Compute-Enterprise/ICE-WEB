<template>
  <header ref="header" class="fixed top-0 w-full z-50 py-2 px-8 flex justify-between items-center dark:bg-[#09090B]/[75%] bg-[#FAFAFA]/[75%]  border-[#000]/[0.1] dark:border-[#fff]/[0.1] backdrop-blur-[8px] focus-visible:ring-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
    <div class="max-w-[1440px] mx-auto flex justify-between w-full">
     <div class="flex justify-start items-center flex-1">

      <LogoIcon class="w-[40px] h-[40px] fill-black dark:fill-white"/>

        <span class="ml-[6px] logo-text font-[900] text-[24px] text-[#09090B] dark:text-[#FAFAFA]">ICE</span>
      </div>

      <div class="flex items-center justify-center flex-1">
        <nav class="text-[14px] w-full rounded-2xl space-y-[6px] px-[4px] py-[6px] bg-[#000]/[0.2] dark:bg-[#fff]/[0.2] focus-visible:ring-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white backdrop-blur-[4px]">
          <!-- Navigation Links in the middle -->
          <div class="relative flex justify-center gap-2">
            <!-- Button wrappers for NuxtLink to utilize hover functionality -->
            <div class="flex-1" @mouseenter="handleMouseEnter(0)" @mouseleave="handleMouseLeave"> 
              <NuxtLink :to="localePath('index')" class="nav-link block text-center cursor-pointer text-[#09090B] dark:text-[#FAFAFA]">Home</NuxtLink>
            </div>
            <div class="flex-1" @mouseenter="handleMouseEnter(1)" @mouseleave="handleMouseLeave">
              <NuxtLink :to="localePath('services')" class="nav-link block text-center cursor-pointer text-[#09090B] dark:text-[#FAFAFA]">Services</NuxtLink>
            </div>
            <div class="flex-1" @mouseenter="handleMouseEnter(2)" @mouseleave="handleMouseLeave">
              <NuxtLink :to="localePath('about')" class="nav-link block text-center cursor-pointer text-[#09090B] dark:text-[#FAFAFA]">About</NuxtLink>
            </div>
            <div class="flex-1" @mouseenter="handleMouseEnter(3)" @mouseleave="handleMouseLeave">
              <NuxtLink :to="localePath('polices')" class="nav-link block text-center cursor-pointer text-[#09090B] dark:text-[#FAFAFA]">Polices</NuxtLink>
            </div>

            <!-- Underline Element, position updated based on activeLinkIndex -->
            <span :style="{ left: (25 * activeLinkIndex) + '%', width: '25%' }" class="absolute bottom-0 h-full scale-x-100 scale-y-125 rounded-xl bg-[#ffffff] dark:bg-[#000000] transition-all duration-300"></span>
          </div>
        </nav>
      </div>


      <div class="flex justify-end flex-1 items-center">
       <div class="menu-container relative">

        <nav class="flex items-center">
          <a target="_blank">
            <button class="inline-flex justify-center whitespace-nowrap rounded-md px-0 p-2 h-9 w-9 hover:bg-[#F4F4F5] dark:hover:bg-[#27272A] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none ">
              <ContactIcon class="w-[1.2rem] h-[1.2rem] fill-black dark:fill-white" />
            </button>
          </a>

          <a>
            <button @click="toggleMenu" class="menu-toggle-button inline-flex justify-center whitespace-nowrap rounded-md px-0 p-2 h-9 w-9 hover:bg-[#F4F4F5] dark:hover:bg-[#27272A] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none">
            
            <ThemeIcon v-if="currentTheme !== 'dark'" class="w-[1.2rem] h-[1.2rem] fill-black"/>

            <ThemeDarkIcon v-else class="w-[1.2rem] h-[1.2rem] fill-white"/>
           

          </button>
          </a>
        </nav>
        <div v-if="menuOpen" class="absolute right-0 top-10 mt-2 p-1 w-32 rounded-md dark:bg-[#09090B] bg-[#ffffff] border border-[#000]/5 dark:border-[#fff]/5 backdrop-blur-[8px] z-50">
          <button @click="setTheme('light')" class=" rounded-sm block px-4 py-2 text-sm text-[#09090B] dark:text-[#FAFAFA] w-full text-left hover:bg-[#F4F4F5] dark:hover:bg-[#27272A] ">Light</button>
          <button @click="setTheme('dark')" class="rounded-sm block px-4 py-2 text-sm text-[#09090B] dark:text-[#FAFAFA] w-full text-left hover:bg-[#F4F4F5] dark:hover:bg-[#27272A] ">Dark</button>
          <button @click="setTheme('system')" class="rounded-sm block px-4 py-2 text-sm text-[#09090B] dark:text-[#FAFAFA] w-full text-left hover:bg-[#F4F4F5] dark:hover:bg-[#27272A] ">System</button>
        </div>
      </div>
    </div>
   </div>
  </header>
   
</template>

<script>
import LogoIcon from '../SvgIcons/LogoIcon.vue';
import ThemeIcon from '../SvgIcons/ThemeIcon.vue';
import ThemeDarkIcon from '../SvgIcons/ThemeDarkIcon.vue';
import ContactIcon from '../SvgIcons/ContactIcon.vue';
import { ref, onMounted, onBeforeUnmount, computed } from 'vue';
import { useRoute } from 'vue-router';

export default {

  components: {
    LogoIcon,
    ThemeIcon,
    ThemeDarkIcon,
    ContactIcon
  },

  setup() {
    
    const currentTheme = ref('system');
    const menuOpen = ref(true);
    const route = useRoute();
    const hoverIndex = ref(null); // Add this line

    const toggleMenu = () => menuOpen.value = !menuOpen.value;

    const setTheme = theme => {
      currentTheme.value = theme;
      document.documentElement.className = theme;
      toggleMenu(); // Close the menu after setting theme
    };

    const handleClickOutside = event => {
      if (!event.target.closest('.menu-toggle-button') && !event.target.closest('.theme-menu')) {
        menuOpen.value = false;
      }
    };

    const updateThemeBasedOnSystem = () => {
      setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    };

    let mediaQueryList;
    let mediaQueryChangeListener;

    onMounted(() => {
      if (process.client) {
        mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQueryChangeListener = e => setTheme(e.matches ? 'dark' : 'light');
        mediaQueryList.addEventListener('change', mediaQueryChangeListener);
        updateThemeBasedOnSystem();
      }
      document.addEventListener('click', handleClickOutside);
    });

    onBeforeUnmount(() => {
      if (process.client && mediaQueryList) {
        mediaQueryList.removeEventListener('change', mediaQueryChangeListener);
      }
      document.removeEventListener('click', handleClickOutside);
    });

    // Compute activeLinkIndex based on the current route
    const routeIndex = computed(() => {
    const path = route.path.startsWith('/pt') ? route.path.substring(3) : route.path; // Remove the 'pt' prefix if it exists
    switch (path) {
      case '/': return 0;
      case '/services': return 1;
      case '/about': return 2;
      case '/polices': return 3; // Also, make sure this is the correct route, it might be a typo for '/policies'
      default: return 0;
    }
  });


    // Determine which index to display based on hover state
    const activeLinkIndex = computed(() => {
      return hoverIndex.value !== null ? hoverIndex.value : routeIndex.value;
    });

    // Add methods to handle mouse enter and leave events
    const handleMouseEnter = (index) => {
      hoverIndex.value = index;
    };

    const handleMouseLeave = () => {
      hoverIndex.value = null;
    };

    return { currentTheme, menuOpen, setTheme, toggleMenu, activeLinkIndex, handleMouseEnter, handleMouseLeave };
  }
};
</script>



<style scoped>
.menu-container {
  position: relative;
}

.logo-text{
  font-family: "Mona Sans";
  font-stretch: 125%;
}
.theme-menu {
  position: absolute;
  right: 0; 
  top: 100%; 
  z-index: 50; 
}

.nav-link {
font-weight: 600;
font-family: "Open Sans", sans-serif;
position: relative;
overflow: hidden; 
z-index: 35;
}
</style>

