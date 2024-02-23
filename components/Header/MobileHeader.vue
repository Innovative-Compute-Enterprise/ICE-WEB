<template>
    <header ref="headermobile" class="fixed mx-auto top-0 left-0 right-0 w-full z-50 py-2 px-4 flex justify-between items-center dark:bg-[#09090B]/[75%] bg-[#FAFAFA]/[75%] border-[#000]/[0.1] dark:border-[#fff]/[0.1] backdrop-blur-[8px] focus-visible:ring-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
      
      <div class="flex justify-start items-center flex-1">
        <LogoIcon class="w-10 h-9 fill-black dark:fill-white"/>
        <span class="ml-[8px] logo-text font-bold text-xl text-[#09090B] dark:text-[#FAFAFA]">ICE</span>
      </div>
      
        <!-- Hamburger Menu -->
      <div class="relative" @click="toggleMenu" :class="{ 'z-40': menuOpen }">
        <!-- SVG for Hamburger here -->
        <div>
        <svg ref="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-[30px] h-[30px] cursor-pointer dark:stroke-white stroke-black stroke-2">
          <!-- Lines for hamburger -->
          <path ref="line1" stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5" />
          <path ref="line2" stroke-linecap="round" stroke-linejoin="round" d="M3.75 12h16.5" />
          <path ref="line3" stroke-linecap="round" stroke-linejoin="round" d="M3.75 17.25H12" />
        </svg>
        </div>
      </div>
  
      <!-- Slide-in Menu -->
     
      <div ref="menu" class="fixed top-0 right-0 w-screen h-screen dark:bg-[#09090B] bg-[#FAFAFA] text-black dark:text-white px-4 py-2 transform"
         :class="{ 'translate-x-full': !menuOpen }">

         <div class="flex justify-start items-center flex-1">
          <LogoIcon class="w-10 h-9 fill-black dark:fill-white"/>
        <span class="ml-[8px] logo-text font-bold text-xl text-[#09090B] dark:text-[#FAFAFA]">ICE</span>
        </div>
          
            <div class="grid-container py-8 gap-4 ">

            <NuxtLink @click="closeMenu" class="min-h-[100px] min-w-[100px] grid-item p-4 space-y-3 dark:bg-[#09090B] bg-[#FAFAFA] border border-[#000]/[0.1] dark:border-[#fff]/[0.1] focus-visible:ring-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
             focus-visible:outline-white rounded-md text-sm 
             font-bold"
              v-for="item in menuItems"
               :key="item.id"
               :to="item.to"
              >
              <component :is="item.iconComponent" class="w-[30px] h-[30px] fill-black dark:fill-white" />
              <span>{{ item.label }}</span>
            </NuxtLink>


            <button @click="toggleTheme" class="min-h-[100px] min-w-[100px] grid-item p-4 space-y-3 dark:bg-[#09090B] bg-[#FAFAFA] border border-[#000]/[0.1] dark:border-[#fff]/[0.1] focus-visible:ring-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
             focus-visible:outline-white rounded-md text-sm 
             font-bold"
              >    
            <ThemeIcon v-if="!darkMode" class="w-[1.2rem] h-[1.2rem] fill-black"/>

            <ThemeDarkIcon v-else class="w-[1.2rem] h-[1.2rem] fill-white"/>
           
              <span>Theme</span>
          </button>

          </div> 
        
        </div> 
    </header>
</template>


  <script>
  import LogoIcon from '../SvgIcons/LogoIcon.vue';
  import ThemeIcon from '../SvgIcons/ThemeIcon.vue';
  import ThemeDarkIcon from '../SvgIcons/ThemeDarkIcon.vue';
  import AboutIconM from '../SvgIcons/AboutIconM.vue';
  import ContactIcon from '../SvgIcons/ContactIcon.vue';
  import HomeIconM from '../SvgIcons/HomeIconM.vue';
  import PolicesIconM from '../SvgIcons/PolicesIconM.vue';
  import ServicesIconM from '../SvgIcons/ServicesIconM.vue';
  import AccountIcon from '../SvgIcons/AccountIcon.vue';
  import { gsap } from 'gsap';
  
    export default {
      components: {
      LogoIcon,
      ThemeIcon,
      ThemeDarkIcon,
      AboutIconM,
      ContactIcon,
      HomeIconM,
      PolicesIconM,
      ServicesIconM,
      AccountIcon
       },
      data() {
        return {
          menuOpen: false,
          menuTimeline: null,
          darkMode: false,
          menuItems: [
        { id: 1, label: 'Home', to: '/', iconComponent: 'HomeIconM'},      
        { id: 2, label: 'Services', to: '/services', iconComponent: 'ServicesIconM' },        
        { id: 3, label: 'About', to: '/about', iconComponent: 'AboutIconM' },
        { id: 4, label: 'Polices', to: '/polices', iconComponent: 'PolicesIconM' },
        { id: 5, label: 'Contact', iconComponent: 'ContactIcon' },
        { id: 7, label: 'Soon', iconComponent: 'AccountIcon' },
          ],
        };
      },
   mounted() {
        this.initTheme(); // Initialize theme based on system preference or stored preference
    gsap.set(this.$refs.menu, { autoAlpha: 0 }); 
    this.menuTimeline = gsap.timeline({ paused: true })
      .to(this.$refs.menu, { autoAlpha: 1, duration: 0.2, ease: 'power3.in' });
    this.toggleBodyScroll(this.menuOpen);
  },
  methods: {
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    this.toggleBodyScroll(this.menuOpen); // Add this line
    this.animateIcon(this.menuOpen);
    if (this.menuOpen) {
      this.menuTimeline.play();
    } else {
      this.menuTimeline.reverse();
    }
  },
  toggleTheme() {
      this.darkMode = !this.darkMode;
      document.documentElement.classList.toggle('dark', this.darkMode);
      // Optionally, save the darkMode state to localStorage to remember the user's choice
      localStorage.setItem('darkMode', this.darkMode ? 'true' : 'false');
    },
    initTheme() {
      // Check if a theme preference is saved in localStorage
      const savedTheme = localStorage.getItem('darkMode');
      if (savedTheme !== null) {
        this.darkMode = savedTheme === 'true';
      } else {
        // If not, use the system preference
        this.darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      }
      document.documentElement.classList.toggle('dark', this.darkMode);
      
      // Listen for changes in the system theme preference
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        this.darkMode = e.matches;
        document.documentElement.classList.toggle('dark', this.darkMode);
      });
    },
  closeMenu() {
    this.menuOpen = false;
    this.toggleBodyScroll(this.menuOpen);
    this.menuTimeline.reverse();
    this.animateIcon(false);
  },
  attachMenuCloseEvent() {
    const menuItems = this.$refs.menu.querySelectorAll('.menu-item'); // Change '.menu-item' to your actual menu item class or selector
    menuItems.forEach(item => {
      item.addEventListener('click', this.closeMenu);
    });
  },
    animateIcon(open) {
        if (open) {
        gsap.to(this.$refs.line1, { attr: { d: 'M6 18L18 6' }, duration: 0.2 });
        gsap.to(this.$refs.line2, { opacity: 0, duration: 0.2});
        gsap.to(this.$refs.line3, { attr: { d: 'M6 6l12 12' }, duration: 0.2 });
      } else {
        gsap.to(this.$refs.line1, { attr: { d: 'M3.75 6.75h16.5' }, duration: 0.2 });
        gsap.to(this.$refs.line2, { opacity: 1, duration: 0.2 });
        gsap.to(this.$refs.line3, { attr: { d: 'M3.75 17.25H12' }, duration: 0.2 });
      }
    },
    toggleBodyScroll(isMenuOpen) {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  },
    localePath(routeName) {
      const locale = this.$i18n.locale;
      return locale === 'en' ? `/${routeName}` : `/${locale}/${routeName}`;
    }
  },
};
</script>

<style scoped>
.logo-text {
  font-family: "Source Code Pro", monospace;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(3, max-content); /* 3 columns of max-content width */
  justify-content: center; /* Center grid container */
}

.grid-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-family: "Open Sans", sans-serif;
}

</style>