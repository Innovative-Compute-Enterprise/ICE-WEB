<template>
  <div class="button-container">
    <button class="fancy-button text-[13px] w-auto">
      {{$t('blackBox.button')}}
    <svg class="w-8 h-8" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><path d="M11.71 15.29l2.59-2.59a.996.996 0 0 0 0-1.41L11.71 8.7c-.63-.62-1.71-.18-1.71.71v5.17c0 .9 1.08 1.34 1.71.71z" fill="currentColor"></path></svg>    
  </button>
  </div>
</template>


<style scoped>
button{
  font-family: "Mona Sans", sans-serif; 
  font-stretch: 125%;
  font-weight: 900;
}

.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.fancy-button {
  background-color: black; /* Button background */
  color: white; /* Text color */
  border: 2px solid white; /* Border */
  cursor: pointer;
  padding: 15px 30px;
  border-radius: 10px; /* Adjust for rounded corners */
  display: flex;
  align-items: center;
  gap: 10px; /* Space between text and SVG */
  transition: color 0.3s, background-color 0.3s; /* Smooth transition */
}

.button-svg {
  fill: white; /* SVG color */
  transition: fill 0.3s; /* Smooth transition for SVG */
}

.fancy-button:hover {
  background-color: #F3F3F3; /* Color on hover */
  color: black; /* Text color on hover */
}

.fancy-button:hover .button-svg {
  fill: black; /* SVG color on hover */
}
</style>
