<template>
    <div class="hero-text-container bottom">
      <p class="w-auto h-auto text-black pb-20 md:pb-6 lg:pb-6 xl:pb-6 pl-6 sm:pl-4 md:pl-6 lg:pl-10 xl:pl-10 text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl">Continuum Glow stands for technological innovation.</p>
    </div>
  </template>
  
  <style scoped>
  .hero-text-container {
    font-family: 'Helvetica Neue Medium', sans-serif;;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    text-align: left;
    color: white;
    padding-bottom: 2rem;
    z-index: 3;
    font-weight: 500;
    line-height: screen;
    
  }
  @media screen and (max-width: 640px) { /* 640px is Tailwind's 'sm' breakpoint */
  .hero-text-container {
    bottom: auto;
    top: 0;
    padding-top: 6rem;
  }
}
  </style>
  