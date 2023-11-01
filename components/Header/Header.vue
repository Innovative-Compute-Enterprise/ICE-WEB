
<template>
  <header ref="header" class="fixed top-0 left-0 w-full bg-transparent z-50 flex justify-between items-center px-3 py-3 md:py-4 md:px-4 transition-all duration-500 ease-in-out">   
     <div class="text-left">
      <div class="logo flex">
      
        <svg xmlns="http://www.w3.org/2000/svg" width="95" height="35" viewBox="0 0 95 35" fill="none">
  <path d="M35.9119 13.3198L36.9882 14.0827C38.6273 15.2444 40.8402 15.1695 42.3969 13.8994L43.8435 12.7192C45.3481 11.4917 45.3075 9.17992 43.7607 8.00607L38.5035 4.32186L36.4802 3.28472C35.0679 2.56079 33.5899 1.97298 32.0662 1.52925L29.2479 0.708502L28.4724 0.54562C26.9687 0.229779 25.439 0.0532403 23.9029 0.018244L23.1021 0H20.1403L18.1411 0.283401L16.0249 0.828557C14.8703 1.12601 13.7384 1.50568 12.6379 1.96467L11.403 2.47976L10.6616 2.86991C9.18501 3.64699 7.78993 4.56995 6.49722 5.62498L5.92362 6.09312L4.46693 7.61762C3.85925 8.25359 3.29944 8.93361 2.79205 9.65214L2.4937 10.0746C1.96806 10.819 1.52242 11.6168 1.16419 12.4547C0.638058 13.6853 0.305786 14.99 0.179201 16.3223L0.138727 16.7484C0.0464774 17.7193 0.0523722 18.6971 0.156322 19.6669C0.249371 20.535 0.420587 21.3929 0.667887 22.2302L1.25877 24.2308C1.6023 25.123 2.08009 25.9575 2.67563 26.7054L2.96181 27.0648L3.99844 28.1275L5.03507 29.1903L5.09136 29.2441C5.74399 29.8686 6.443 30.4427 7.18238 30.9615L9.03351 32.0951L9.26803 32.2154C10.4918 32.8426 11.7652 33.3679 13.0753 33.7858L13.106 33.7955L15.3274 34.3623L16.5861 34.5749C17.6206 34.7634 18.6701 34.8583 19.7216 34.8583H23.5464L25.0036 34.7234C25.5615 34.6717 26.1142 34.5747 26.6563 34.4332L28.3593 34.0789L30.1364 33.5121L33.1723 32.4494L36.4302 30.8198L39.318 28.9777L42.1317 27.0648L45.7599 24.1599L48.6477 21.751L52.9423 18.1377L56.4965 15.3745L59.4583 13.249L61.6056 12.0445L62.4144 11.6244C63.601 11.0081 64.8352 10.4879 66.105 10.0689L66.3445 9.98988L66.6865 9.90377C68.33 9.48991 70.0114 9.24427 71.7047 9.17062L72.4162 9.13968L73.4069 9.18829C74.6692 9.25023 75.9234 9.42363 77.1551 9.70648L79.1597 10.4132C79.6982 10.603 80.2194 10.8383 80.7179 11.1165C81.4009 11.4977 82.0371 11.9573 82.6136 12.486L82.8125 12.6683C83.2848 13.1014 83.7099 13.5834 84.0807 14.1062L84.3944 14.5486C84.7491 15.0487 85.021 15.6026 85.1997 16.189L85.2065 16.2112C85.3667 16.7369 85.4482 17.2834 85.4482 17.8329C85.4482 18.9545 85.1091 20.0499 84.4754 20.9753L84.3226 21.1985C84.1353 21.472 83.9273 21.7306 83.7002 21.9719L83.4337 22.2553C82.5135 23.2336 81.4241 24.0374 80.2178 24.6279C79.3155 25.0696 78.3576 25.3872 77.3701 25.5721L76.834 25.6725C75.9147 25.8446 74.9814 25.9312 74.0461 25.9312H72.9476C71.7078 25.9312 70.4711 25.8086 69.2555 25.5651C68.3527 25.3843 67.4644 25.1374 66.5977 24.8264L64.3453 24.0182L62.3545 22.9896C61.2152 22.4009 60.1229 21.7255 59.0873 20.9692L57.8293 20.0506C56.3439 19.0473 54.3701 19.1654 53.0149 20.3386L52.924 20.4174C50.9474 22.1285 51.0427 25.2239 53.1209 26.8102L55.682 28.7652L57.3209 29.8943C58.693 30.8396 60.1562 31.6453 61.6886 32.2995L64.1972 33.3704L66.4365 33.9985C67.8042 34.3821 69.2021 34.6484 70.6151 34.7945L71.2315 34.8583L74.1434 34.9379C75.6545 34.9792 77.1661 34.8834 78.6599 34.6516L79.1543 34.5749L81.2276 34.0789L83.3749 33.3704L83.4301 33.3484C84.5764 32.8914 85.6874 32.3501 86.7538 31.729L86.855 31.67L88.5976 30.3997C89.5056 29.7377 90.3279 28.9654 91.0456 28.1007C91.6562 27.3649 92.1874 26.5666 92.6303 25.7192L93.0094 24.9936C93.545 23.9686 93.9663 22.8878 94.2657 21.7706C94.4588 21.05 94.6006 20.3165 94.6899 19.5758L94.8305 18.4095C94.9429 17.4774 94.9203 16.534 94.7635 15.6083C94.6255 14.7945 94.385 14.0014 94.0475 13.248L93.2693 11.5105C92.6495 10.1267 91.8265 8.84307 90.8276 7.70224C90.3026 7.10275 89.7315 6.54537 89.1194 6.03523L87.7436 4.88866L85.3741 3.32996L83.6107 2.46756C82.5667 1.95699 81.4825 1.53309 80.3691 1.20015C79.1176 0.825951 77.8343 0.568164 76.5355 0.430073L75.1559 0.283401H70.417C69.0375 0.377684 67.669 0.593514 66.3275 0.928381L64.9673 1.26789C63.8137 1.55587 62.682 1.92579 61.5809 2.37483L60.3982 2.85721C59.2794 3.31348 58.1952 3.85024 57.1541 4.46329L54.8675 5.80972L53.3125 7.01417L50.2026 9.28138L45.6859 13.3198L39.9104 18.1377L37.3928 19.9798L36.1951 20.8393C35.2178 21.5407 34.1911 22.1706 33.1231 22.7241L31.173 23.7348L27.4708 25.081L25.0273 25.7186L24.732 25.759C23.2044 25.9678 21.6608 26.0348 20.1209 25.9593L19.5479 25.9312L17.8445 25.7596C17.1074 25.6854 16.383 25.5163 15.6891 25.2565C15.2512 25.0925 14.8274 24.8931 14.4219 24.6603L13.5503 24.1599L11.9953 22.9555L11.2594 22.2073C10.9612 21.9041 10.6994 21.5672 10.4793 21.2034C10.1595 20.6749 9.93154 20.096 9.80514 19.4913L9.69992 18.9879L9.58622 17.791C9.51488 17.0403 9.61713 16.2831 9.88504 15.5782C10.0081 15.2544 10.165 14.9444 10.3532 14.6536L10.5273 14.3846C10.8631 13.8655 11.2584 13.3873 11.7051 12.9599L12.5136 12.1862C13.546 11.4336 14.6811 10.8134 15.8711 10.3487C17.0764 9.87793 18.3476 9.5609 19.6332 9.41329L21.3991 9.21053H22.523C24.4819 9.21053 26.434 9.44077 28.3392 9.89651L28.7295 9.98988L32.2097 11.336L35.9119 13.3198Z" fill="url(#paint0_angular_165_49)"/>
  <defs>
    <radialGradient id="paint0_angular_165_49" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(43.0203) rotate(82.7062) scale(35.2855 58.8058)">
      <stop offset="0.153678" stop-color="#EEEEEE"/>
      <stop offset="0.426161" stop-color="#E7E7E7"/>
      <stop offset="0.750368" stop-color="white"/>
      <stop offset="1" stop-color="#E9E9E9"/>
    </radialGradient>
  </defs>
</svg>

    </div>
    </div>
    <!-- Hamburger Menu -->
    <div class="relative" @click="toggleMenu" :class="{ 'z-40': menuOpen }">
      <div ref="iconContainer">
        <svg ref="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#ffffff" class="w-[35px] h-[35px] cursor-pointer">
          <!-- Lines for hamburger -->
          <path ref="line1" stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5" />
          <path ref="line2" stroke-linecap="round" stroke-linejoin="round" d="M3.75 12h16.5" />
          <path ref="line3" stroke-linecap="round" stroke-linejoin="round" d="M3.75 17.25h16.5" />
        </svg>
      </div>
    </div>
    <!-- Slide-in Menu -->
    <div ref="menu" class="fixed top-0 right-0 w-64 h-screen bg-[#646464]  text-white p-4 transform" :class="{ 'translate-x-full': !menuOpen }">
      <ul class="flex flex-col items-center justify-center h-[70%] space-y-8 text-2xl">
          <li><a href="#home" class="hover:text-blue-600">Home</a></li>
          <li><a href="#about" class="hover:text-blue-600">About</a></li>
          <li><a href="#faq" class="hover:text-blue-600">Services</a></li>
          <li><a href="#footer" class="hover:text-blue-600">Contact</a></li>
      </ul>
      
      <hr>
      <h3>Contunuum Glow</h3>
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
    };
  },
  mounted() {
    gsap.set(this.$refs.menu, { x: '100%' });
    this.menuTimeline = gsap.timeline({ paused: true })
      .to(this.$refs.menu, { x: '0%', duration: 0.7, ease: 'power2.out' });

    // Add event listener for scroll
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  watch: {
    menuOpen(newValue) {
      this.animateIcon(newValue);
      if (newValue) {
        this.menuTimeline.play();
      } else {
        this.menuTimeline.reverse();
      }
    },
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    animateIcon(open) {
      if (open) {
        gsap.to(this.$refs.line1, {attr: {d: 'M6 18L18 6'}, duration: 0.3});
        gsap.to(this.$refs.line2, {opacity: 0, duration: 0.2});
        gsap.to(this.$refs.line3, {attr: {d: 'M6 6l12 12'}, duration: 0.3});
      } else {
        gsap.to(this.$refs.line1, {attr: {d: 'M3.75 6.75h16.5'}, duration: 0.3});
        gsap.to(this.$refs.line2, {opacity: 1, duration: 0.2});
        gsap.to(this.$refs.line3, {attr: {d: 'M3.75 17.25h16.5'}, duration: 0.3});
      }
    },
    handleScroll() {
      if (window.scrollY > 30) {
        this.$refs.header.classList.add('scrolled');
      } else {
        this.$refs.header.classList.remove('scrolled');
      }
    }
  },
};
</script>

<style scoped>
.scrolled {
  background: rgba(147, 147, 147, 0.497);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.10);
  backdrop-filter: blur(20.5px);
  -webkit-backdrop-filter: blur(20.5px);
  border-radius: 0px;
}
hr {
    height: 2px;
    width: 100%;
    border: none;
    background-color: white;
    margin-top: 1rem;
}

h3 {
    padding: 0.5rem 0;
    font-size: 1.2rem;
    font-weight: bold;
}


</style>
