<template>
    <div class="hero-text-container bottom">
      <h1 class="w-auto h-auto text-black px-6 md:px-10 pb-20 md:pb-8 lg:pb-10 text-5xl sm:text-6xl md:text-5xl lg:text-6xl xl:text-7xl">Continuum Glow stands for technological innovation.</h1>
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
    font-weight: 600;
    line-height: screen;
    word-spacing: normal;
    letter-spacing: -2.0px;
    
  }
  @media screen and (max-width: 640px) { /* 640px is Tailwind's 'sm' breakpoint */
  .hero-text-container {
    bottom: auto;
    top: 0;
    padding-top: 6rem;
  }
}
  </style>
  