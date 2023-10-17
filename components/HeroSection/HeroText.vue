<template>
    <div class="hero-text-container bottom">
      <h1 class="w-auto h-auto text-black px-4 md:px-8 pb-20 md:pb-8 lg:pb-10 text-[55.09px] sm:text-[63.09px] md:text-[84.09px] lg:text-[96.09px]">Continuum Glow stands for technological innovation.</h1>
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
    word-spacing: normal;
    line-height: 0.9;
    letter-spacing: -1.9px;
    
  }
  @media screen and (max-width: 640px) { /* 640px is Tailwind's 'sm' breakpoint */
  .hero-text-container {
    bottom: auto;
    top: 0;
    padding-top: 6rem;
  }
}
  </style>
  