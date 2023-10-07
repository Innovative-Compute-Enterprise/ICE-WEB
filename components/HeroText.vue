<template>
    <div class="hero-text-container bottom">
      <p class="w-auto h-auto text-black pb-20 md:pb-6 lg:pb-6 xl:pb-6 pl-4 text-5xl sm:text-6xl md:text-5xl lg:text-6xl xl:text-7xl">Continuum Glow stands for technological innovation.</p>
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
    padding-bottom: 1.5rem;
    z-index: 3;
    font-weight: 700;
    line-height: screen;
    word-spacing: normal;
    letter-spacing: -1.8px;
    
  }
  @media screen and (max-width: 640px) { /* 640px is Tailwind's 'sm' breakpoint */
  .hero-text-container {
    bottom: auto;
    top: 0;
    padding-top: 6rem;
  }
}
  </style>
  