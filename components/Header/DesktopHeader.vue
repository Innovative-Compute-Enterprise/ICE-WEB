<template>
  <header ref="header" class="fixed top-0 w-full z-50 py-4 px-8 flex justify-between items-center dark:bg-[#09090B]/[75%] bg-[#FAFAFA]/[75%]  border-[#000]/[0.1] dark:border-[#fff]/[0.1] backdrop-blur-[8px] focus-visible:ring-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
    <div class="max-w-screen-2xl mx-auto flex justify-between w-full">
     <div class="flex justify-start items-center flex-1">
      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 468 452" fill="none" class="fill-black dark:fill-white">
        <path d="M376.749 23.2817C394.171 40.1096 403.784 64.1692 404.781 88.7005C404.562 112.462 395.699 136.251 379.541 153.112C373.96 158.586 367.73 162.938 361.213 167.116C360.456 167.615 359.698 168.114 358.918 168.628C348.645 174.666 335.788 177.773 324.129 178.537C314.168 179.762 309.824 186.974 303.94 194.585C289.061 210.817 266.694 221.565 245.166 222.275C240.273 222.372 235.381 222.384 230.488 222.38C227.202 222.379 223.916 222.395 220.63 222.415C211.296 222.47 201.962 222.5 192.628 222.508C186.894 222.514 181.161 222.543 175.427 222.586C173.257 222.597 171.087 222.6 168.917 222.594C151.511 222.545 138.66 224.424 125.476 237.186C113.254 250.409 108.771 267.135 108.866 285.061C109.243 299.953 112.911 312.804 119.52 325.954C119.994 326.936 120.468 327.918 120.957 328.93C126.289 339.536 133.526 348.054 141.792 356.253C143.19 357.656 144.533 359.118 145.866 360.588C145.866 361.376 145.866 362.164 145.866 362.976C146.536 363.303 147.207 363.629 147.897 363.965C150.384 365.33 152.401 366.834 154.6 368.649C159.853 372.807 165.315 376.337 171.066 379.696C172.191 380.361 173.316 381.026 174.476 381.711C192.843 391.949 214.25 399.149 235.176 399.206C236.23 399.214 237.284 399.221 238.369 399.23C240.587 399.242 242.805 399.247 245.022 399.247C248.345 399.252 251.667 399.296 254.989 399.341C298.696 399.615 336.72 379.394 368.086 348.645C368.818 347.96 369.551 347.275 370.305 346.569C376.979 340.097 382.069 332.143 387.312 324.42C388.435 322.768 389.574 321.129 390.718 319.493C400.127 305.583 406.438 289.457 411.614 273.406C411.887 272.591 412.161 271.777 412.443 270.937C418.391 252.92 418.411 235.141 418.533 216.249C418.554 213.829 418.589 211.409 418.629 208.989C418.676 205.876 418.694 202.761 418.68 199.647C418.836 190.046 420.29 183.9 426.505 176.671C432.829 170.391 438.604 170.259 447.078 170.377C453.312 170.954 457.49 172.99 461.768 177.753C466.244 183.666 467.875 188.036 467.908 195.585C467.919 197.302 467.919 197.302 467.93 199.055C467.932 200.904 467.932 200.904 467.934 202.79C467.938 204.072 467.941 205.354 467.945 206.675C467.951 209.392 467.954 212.11 467.954 214.827C467.956 218.939 467.977 223.051 467.999 227.163C468.046 245.286 466.874 261.41 461.871 278.855C461.519 280.088 461.167 281.321 460.805 282.591C450.57 317.616 434.566 347.405 411.614 374.919C410.962 375.746 410.311 376.572 409.64 377.424C397.549 392.61 382.738 404.821 366.941 415.524C366.177 416.047 365.413 416.57 364.626 417.109C347.44 428.721 328.241 437.292 308.522 442.992C307.373 443.325 306.224 443.657 305.041 444C273.037 452.468 239.052 454.988 206.576 447.769C205.282 447.491 205.282 447.491 203.962 447.206C180.8 442.035 157.786 432.469 137.848 419.107C137.175 418.658 136.502 418.21 135.808 417.748C124.302 409.94 114.341 400.522 104.629 390.445C104.037 389.832 103.444 389.219 102.834 388.587C76.7168 361.204 59.3368 322.795 58.2379 284.08C58.8397 263.669 63.9236 244.756 72.6681 226.582C73.0772 225.731 73.4863 224.88 73.9078 224.003C74.2178 223.359 74.5278 222.716 74.8471 222.053C74.1905 222.058 73.5338 222.063 72.8572 222.069C66.0002 222.122 59.1432 222.158 52.286 222.184C49.7296 222.196 47.1732 222.212 44.6168 222.233C40.9345 222.262 37.2525 222.275 33.5702 222.286C32.4339 222.298 31.2977 222.311 30.1271 222.323C21.2056 222.325 14.3253 221.648 7.47953 215.111C6.1927 213.917 6.1927 213.917 4.87986 212.699C-0.0657148 206.871 -0.111194 200.877 0.0384871 193.395C0.881815 184.836 4.81978 179.757 11.0636 174.436C15.4061 171.4 19.8434 171.718 24.8531 171.721C25.718 171.716 26.5829 171.712 27.4739 171.708C30.3809 171.695 33.2878 171.691 36.1947 171.686C38.2757 171.679 40.3567 171.671 42.4376 171.662C46.9247 171.644 51.4118 171.63 55.8989 171.619C62.9995 171.601 70.1001 171.572 77.2007 171.541C97.3944 171.456 117.588 171.385 137.782 171.324C148.931 171.29 160.079 171.248 171.228 171.197C178.28 171.165 185.332 171.143 192.384 171.13C196.783 171.119 201.183 171.098 205.583 171.075C207.615 171.066 209.648 171.061 211.68 171.06C235.124 171.159 235.124 171.159 254.757 158.98C255.489 158.118 256.221 157.256 256.976 156.368C255.156 152.079 252.614 148.753 249.817 145.097C235.089 125.079 230.369 101.114 232.921 76.352C236.886 52.1452 248.119 31.3453 267.285 16.6386C271.379 14.0068 275.574 11.6914 279.885 9.47296C280.761 9.01728 281.636 8.56159 282.539 8.09209C314.313 -7.55324 350.192 0.548485 376.749 23.2817ZM291.34 62.0208C283.585 72.4021 279.064 81.508 280.127 94.9284C281.305 102.37 283.993 108.27 287.904 114.569C288.541 115.628 289.179 116.687 289.836 117.778C297.943 126.23 307.428 129.898 318.831 130.094C330.906 128.595 340.253 123.531 347.915 113.71C354.923 103.354 356.974 93.7337 355.486 81.1291C353.081 70.4353 347.024 62.2419 338.304 56.1987C323.527 47.483 303.368 48.9099 291.34 62.0208Z" fill="theme-fill"/>
      </svg>
        <span class="ml-[10px] logo-text font-bold text-xl text-[#09090B] dark:text-[#FAFAFA]">ContinuumGlow</span>
      </div>

      <nav class="flex items-center text-base flex-1">
        <!-- Navigation Links in the middle -->
        <div class="flex justify-center flex-grow gap-4 text-[#09090B99] dark:text-[#FAFAFA99]">
            <NuxtLink  :to="localePath('index')" class="nav-link cursor-pointer hover:text-[#09090B] hover:dark:text-[#FAFAFA]" active-class="font-semibold  text-[#09090B] dark:text-[#FAFAFA]">{{$t('header.home')}}</NuxtLink>
            <NuxtLink  :to="localePath('services')" class="nav-link cursor-pointer hover:text-[#09090B] hover:dark:text-[#FAFAFA]" active-class="font-semibold  text-[#09090B] dark:text-[#FAFAFA]">{{$t('header.services')}}</NuxtLink>
            <NuxtLink  :to="localePath('about')" class="nav-link cursor-pointer hover:text-[#09090B] hover:dark:text-[#FAFAFA]" active-class="font-semibold  text-[#09090B] dark:text-[#FAFAFA]">{{$t('header.about')}}</NuxtLink>
            <NuxtLink  :to="localePath('polices')" class="nav-link cursor-pointer hover:text-[#09090B] hover:dark:text-[#FAFAFA]" active-class="font-semibold  text-[#09090B] dark:text-[#FAFAFA]">{{$t('header.polices')}}</NuxtLink>
        </div>
      </nav>

      <div class="flex justify-end flex-1">
       <div class="menu-container relative">

        <nav class="flex items-center">
          <a target="_blank">
            <button class="inline-flex justify-center whitespace-nowrap rounded-md px-0 p-2 h-9 w-9 hover:bg-[#F4F4F5] dark:hover:bg-[#27272A]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-[1.2rem] h-[1.2rem] dark:stroke-white dark:fill-white">
                <path d="M3 4a2 2 0 0 0-2 2v1.161l8.441 4.221a1.25 1.25 0 0 0 1.118 0L19 7.162V6a2 2 0 0 0-2-2H3Z" />
                <path d="m19 8.839-7.77 3.885a2.75 2.75 0 0 1-2.46 0L1 8.839V14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8.839Z" />
              </svg>
            </button>
          </a>

          <a>
            <button @click="toggleMenu" class="menu-toggle-button inline-flex justify-center whitespace-nowrap rounded-md px-0 p-2 h-9 w-9 hover:bg-[#F4F4F5] dark:hover:bg-[#27272A]">
            
            <svg v-if="currentTheme !== 'dark'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-[1.2rem] h-[1.2rem]">
              <path d="M10 2a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 2ZM10 15a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 10 15ZM10 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM15.657 5.404a.75.75 0 1 0-1.06-1.06l-1.061 1.06a.75.75 0 0 0 1.06 1.06l1.06-1.06ZM6.464 14.596a.75.75 0 1 0-1.06-1.06l-1.06 1.06a.75.75 0 0 0 1.06 1.06l1.06-1.06ZM18 10a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 18 10ZM5 10a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 5 10ZM14.596 15.657a.75.75 0 0 0 1.06-1.06l-1.06-1.061a.75.75 0 1 0-1.06 1.06l1.06 1.06ZM5.404 6.464a.75.75 0 0 0 1.06-1.06l-1.06-1.06a.75.75 0 1 0-1.061 1.06l1.06 1.06Z" />
            </svg>

            <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="white" class="w-[1.2rem] h-[1.2rem]">
            <path fill-rule="evenodd" d="M7.455 2.004a.75.75 0 0 1 .26.77 7 7 0 0 0 9.958 7.967.75.75 0 0 1 1.067.853A8.5 8.5 0 1 1 6.647 1.921a.75.75 0 0 1 .808.083Z" clip-rule="evenodd" />
            </svg>

          </button>
          </a>
        </nav>
        <div v-if="menuOpen" class="absolute right-0 top-10 mt-2 p-1 w-32 rounded-md dark:bg-[#09090B] bg-[#ffffff] border border-[#000]/5 dark:border-[#fff]/5 backdrop-blur-[8px] z-50">
          <button @click="setTheme('light')" class=" rounded-sm block px-4 py-2 text-sm text-[#09090B] dark:text-[#FAFAFA] w-full text-left hover:bg-[#F4F4F5] dark:hover:bg-[#27272A]">Light</button>
          <button @click="setTheme('dark')" class="rounded-sm block px-4 py-2 text-sm text-[#09090B] dark:text-[#FAFAFA] w-full text-left hover:bg-[#F4F4F5] dark:hover:bg-[#27272A]">Dark</button>
          <button @click="setTheme('system')" class="rounded-sm block px-4 py-2 text-sm text-[#09090B] dark:text-[#FAFAFA] w-full text-left hover:bg-[#F4F4F5] dark:hover:bg-[#27272A]">System</button>
        </div>
      </div>
    </div>
   </div>
  </header>
   
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from 'vue';

export default {
  setup() {
    const currentTheme = ref('system');
    const menuOpen = ref(true);

    // Simplified toggleMenu without redundant value assignment
    const toggleMenu = () => menuOpen.value = !menuOpen.value;

    // Directly set theme without extra function
    const setTheme = theme => {
      currentTheme.value = theme;
      document.documentElement.className = theme;
      toggleMenu(); // Close the menu after setting theme
    };

    // Optimized handleClickOutside for better readability
    const handleClickOutside = event => {
      if (!event.target.closest('.menu-toggle-button') && !event.target.closest('.theme-menu')) {
        menuOpen.value = false;
      }
    };

    // Simplified updateThemeBasedOnSystem
    const updateThemeBasedOnSystem = () => {
      setTheme(window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    };
    

    let mediaQueryList;
    let mediaQueryChangeListener;

    onMounted(() => {
      if (process.client) {
        // Initialize mediaQueryList here
        mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQueryChangeListener = e => setTheme(e.matches ? 'dark' : 'light');
        
        mediaQueryList.addEventListener('change', mediaQueryChangeListener);
        updateThemeBasedOnSystem();
      }

      // Add other client-side logic here
      document.addEventListener('click', handleClickOutside);
    });

    onBeforeUnmount(() => {
      if (process.client && mediaQueryList) {
        mediaQueryList.removeEventListener('change', mediaQueryChangeListener);
      }
      document.removeEventListener('click', handleClickOutside);
    });

    return { currentTheme, menuOpen, setTheme, toggleMenu };
  }
};
</script>

<style scoped>
.menu-container {
  position: relative;
}

.logo-text{
font-family: 'Work Sans', sans-serif;

}
.theme-menu {
  position: absolute;
  right: 0; /* Adjust as necessary */
  top: 100%; /* This ensures it's directly below the button */
  z-index: 50; /* Make sure it's above other elements */
}



h3 {
  padding: 0.5rem 0;
  font-size: 5vw;
  font-weight: bold;
  transition: transform 0.3s ease-out; /* Smooth font scaling */
}


p {
font-size: 4.5vw;
font-family: Georgia, 'Times New Roman', Times, serif;
transition: opacity 0.3s ease-out; /* Fade effect */

}

.nav-link {
font-weight: 500;
font-family: 'Hedvig Letters Sans', sans-serif;
position: relative;
overflow: hidden; /* Ensures the pseudo-element doesn't cause scroll */ /* Smooth color transition */
}



.header-button {
  font-weight: 700;
  padding-bottom: 0.20rem;
  border: 1.5px solid;
  padding: 0.075rem 0.375rem;
  border-radius: 0.2rem;
  font-size: 0.95rem;
  font-family: 'Hedvig Letters Sans', sans-serif;
  cursor: pointer;
  transition: background-color 0.2s;
}
</style>

