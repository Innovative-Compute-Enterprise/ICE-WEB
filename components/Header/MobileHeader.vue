<template>
    <header ref="headermobile" class="fixed mx-auto top-0 left-0 right-0 w-full z-50 py-4 px-8 flex justify-between items-center dark:bg-[#09090B]/[75%] bg-[#FAFAFA]/[75%] border-b border-[#000]/[0.1] dark:border-[#fff]/[0.1] backdrop-blur-[8px] focus-visible:ring-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
      
      <div class="flex justify-start flex-1">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 dark:stroke-white stroke-black" >
         <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
        </svg>
        <span class="font-bold text-[#09090B] dark:text-[#FAFAFA]">continuumglow</span>
      </div>
      
        <!-- Hamburger Menu -->
      <div class="relative" @click="toggleMenu" :class="{ 'z-40': menuOpen }">
        <!-- SVG for Hamburger here -->
        <div>
        <svg ref="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="w-[30px] h-[30px] cursor-pointer dark:stroke-white stroke-black">
          <!-- Lines for hamburger -->
          <path ref="line1" stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5" />
          <path ref="line2" stroke-linecap="round" stroke-linejoin="round" d="M3.75 12h16.5" />
          <path ref="line3" stroke-linecap="round" stroke-linejoin="round" d="M3.75 17.25H12" />
        </svg>
        </div>
      </div>
  
      <!-- Slide-in Menu -->
     
      <div ref="menu" class="fixed top-0 right-0 w-screen h-screen dark:bg-[#09090B] bg-[#FAFAFA] text-black dark:text-white px-6 py-2 transform"
         :class="{ 'translate-x-full': !menuOpen }">

            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 30 28" stroke-width="fill"  class="stroke-current text-black dark:text-white" >
            <path d="M24.1505 1.43143C25.2674 2.46606 25.8836 3.94532 25.9475 5.45357C25.9335 6.91451 25.3653 8.37712 24.3295 9.41377C23.9718 9.75033 23.5724 10.0179 23.1547 10.2748C23.1061 10.3055 23.0576 10.3362 23.0076 10.3677C22.349 10.739 21.5248 10.93 20.7775 10.977C20.139 11.0523 19.8605 11.4957 19.4833 11.9636C18.5296 12.9617 17.0958 13.6225 15.7158 13.6661C15.4021 13.6721 15.0885 13.6729 14.7749 13.6726C14.5642 13.6725 14.3536 13.6735 14.143 13.6747C13.5446 13.6781 12.9463 13.6799 12.3479 13.6804C11.9804 13.6808 11.6129 13.6826 11.2453 13.6852C11.1062 13.6859 10.9671 13.6861 10.828 13.6857C9.71221 13.6827 8.88848 13.7983 8.04332 14.5829C7.25988 15.3959 6.9725 16.4243 6.97861 17.5264C7.00273 18.442 7.2379 19.2321 7.66155 20.0406C7.69194 20.101 7.72232 20.1614 7.75363 20.2236C8.09544 20.8757 8.55936 21.3994 9.08926 21.9035C9.17885 21.9898 9.26495 22.0796 9.35038 22.17C9.35038 22.2185 9.35038 22.2669 9.35038 22.3169C9.39335 22.3369 9.43632 22.357 9.4806 22.3777C9.63999 22.4616 9.76929 22.5541 9.91026 22.6657C10.247 22.9213 10.5971 23.1383 10.9658 23.3449C11.0379 23.3857 11.11 23.4266 11.1843 23.4688C12.3617 24.0982 13.734 24.5409 15.0754 24.5444C15.1429 24.5448 15.2105 24.5453 15.2801 24.5458C15.4222 24.5466 15.5644 24.5469 15.7066 24.5469C15.9196 24.5472 16.1325 24.5499 16.3455 24.5527C19.1472 24.5695 21.5846 23.3263 23.5953 21.4358C23.6422 21.3936 23.6891 21.3515 23.7375 21.3081C24.1653 20.9102 24.4916 20.4211 24.8277 19.9463C24.8996 19.8448 24.9727 19.7439 25.046 19.6434C25.6491 18.7881 26.0537 17.7967 26.3855 16.8098C26.403 16.7597 26.4206 16.7096 26.4386 16.658C26.8199 15.5503 26.8212 14.4572 26.829 13.2956C26.8304 13.1468 26.8326 12.9981 26.8352 12.8493C26.8382 12.6579 26.8394 12.4664 26.8385 12.2749C26.8484 11.6846 26.9416 11.3067 27.34 10.8622C27.7454 10.4761 28.1156 10.468 28.6589 10.4753C29.0585 10.5107 29.3263 10.6359 29.6005 10.9288C29.8874 11.2924 29.992 11.561 29.9941 12.0251C29.9948 12.1307 29.9948 12.1307 29.9955 12.2385C29.9956 12.3522 29.9956 12.3522 29.9958 12.4682C29.996 12.547 29.9962 12.6258 29.9965 12.707C29.9969 12.8741 29.997 13.0411 29.997 13.2082C29.9972 13.4611 29.9985 13.7139 29.9999 13.9667C30.0029 15.0809 29.9278 16.0723 29.6071 17.1448C29.5846 17.2206 29.562 17.2964 29.5388 17.3745C28.8827 19.528 27.8568 21.3595 26.3855 23.0511C26.3437 23.102 26.302 23.1528 26.259 23.2052C25.4839 24.1389 24.5345 24.8896 23.5218 25.5477C23.4729 25.5798 23.4239 25.612 23.3734 25.6451C22.2718 26.359 21.0411 26.886 19.777 27.2365C19.7034 27.2569 19.6298 27.2774 19.5539 27.2985C17.5024 27.8191 15.3238 27.9741 13.242 27.5302C13.1591 27.5131 13.1591 27.5131 13.0745 27.4956C11.5897 27.1776 10.1145 26.5895 8.83639 25.768C8.79325 25.7404 8.75011 25.7128 8.70567 25.6844C7.96805 25.2043 7.32957 24.6253 6.707 24.0057C6.66902 23.968 6.63104 23.9303 6.59191 23.8915C4.91774 22.2079 3.80364 19.8464 3.7332 17.4661C3.77177 16.2112 4.09767 15.0483 4.65821 13.9309C4.68443 13.8786 4.71066 13.8263 4.73768 13.7724C4.75755 13.7328 4.77742 13.6932 4.79789 13.6525C4.7558 13.6528 4.7137 13.6531 4.67034 13.6535C4.23078 13.6567 3.79123 13.6589 3.35167 13.6605C3.18779 13.6613 3.02392 13.6623 2.86005 13.6635C2.62401 13.6653 2.38798 13.6662 2.15193 13.6668C2.0791 13.6676 2.00626 13.6683 1.93122 13.6691C1.35933 13.6692 0.918285 13.6276 0.479457 13.2257C0.396968 13.1523 0.396968 13.1523 0.312812 13.0774C-0.0042125 12.719 -0.00712779 12.3505 0.00246712 11.8905C0.0565266 11.3643 0.30896 11.052 0.709204 10.7248C0.987567 10.5382 1.27201 10.5577 1.59315 10.5579C1.64859 10.5576 1.70403 10.5574 1.76115 10.5571C1.94749 10.5563 2.13383 10.5561 2.32017 10.5558C2.45357 10.5553 2.58696 10.5548 2.72036 10.5543C3.00799 10.5532 3.29563 10.5524 3.58326 10.5517C4.03843 10.5505 4.49359 10.5488 4.94876 10.5469C6.24323 10.5417 7.5377 10.5373 8.83218 10.5335C9.54683 10.5314 10.2615 10.5288 10.9761 10.5257C11.4282 10.5237 11.8802 10.5224 12.3323 10.5216C12.6143 10.5209 12.8963 10.5196 13.1784 10.5182C13.3087 10.5176 13.439 10.5173 13.5692 10.5173C15.072 10.5233 15.072 10.5233 16.3306 9.77459C16.3775 9.72159 16.4244 9.66858 16.4728 9.61397C16.3562 9.35026 16.1932 9.14577 16.0139 8.921C15.0698 7.69021 14.7672 6.21678 14.9308 4.69435C15.185 3.20604 15.9051 1.9272 17.1337 1.02299C17.3961 0.86118 17.665 0.718821 17.9414 0.582426C17.9975 0.554409 18.0536 0.526392 18.1114 0.497526C20.1482 -0.464396 22.4482 0.0337225 24.1505 1.43143ZM18.6756 3.81322C18.1785 4.4515 17.8887 5.01136 17.9569 5.83649C18.0324 6.29404 18.2046 6.65678 18.4554 7.04402C18.4962 7.10914 18.5371 7.17426 18.5793 7.24135C19.0989 7.76102 19.7069 7.98649 20.4379 7.99857C21.2119 7.90641 21.8111 7.59504 22.3022 6.99124C22.7515 6.35451 22.883 5.76303 22.7876 4.98806C22.6334 4.33057 22.2451 3.82682 21.6861 3.45527C20.7389 2.9194 19.4467 3.00713 18.6756 3.81322Z" fill="white"/>
            </svg>

          
            <div class="grid-container pt-10 gap-4">
            <NuxtLink @click="closeMenu" class="grid-item p-4 space-y-3 dark:bg-[#09090B] bg-[#FAFAFA] border border-[#000]/[0.1] dark:border-[#fff]/[0.1] focus-visible:ring-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
             focus-visible:outline-white rounded-md text-sm 
             font-bold"
              v-for="item in menuItems"
               :key="item.id"
               :to="item.to"
              >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-[30px] h-[30px] dark:stroke-[#FAFAFA] stroke-[#09090B] fill-transparent">
                <path :d="item.svgPath"></path>
              </svg>
              <span>{{ item.label }}</span>
            </NuxtLink>
          </div>  
        </div>
        
    </header>
</template>

  <script>
    import { gsap } from 'gsap';

    export default {
      data() {
        return {
          menuOpen: false,
          menuTimeline: null,
          darkMode: false,
          menuItems: [
        { id: 1, label: 'Home', to: '/', svgPath: "m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"},      
        { id: 2, label: 'Services', to: '/services', svgPath: "M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"},        
        { id: 3, label: 'About', to: '/about', svgPath: "M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" },
        { id: 4, label: 'Polices', to: '/polices', svgPath: "M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" },
        { id: 5, label: 'Contact', svgPath: "M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" },
        { id: 7, label: 'Account', svgPath: "M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" },
          ],
        };
      },
      mounted() {
  this.darkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    this.darkMode = e.matches;
  });
  gsap.set(this.$refs.menu, { autoAlpha: 0 }); // Use autoAlpha for fade-in/out
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
}

</style>