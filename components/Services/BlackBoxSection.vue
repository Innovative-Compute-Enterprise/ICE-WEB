<template>
  <div class="black-section flex flex-col items-center justify-center h-[110vh] py-[60px]">
    <div class="flex flex-col items-center mt-[64px]">      
      <h1 class="text-[#FAFAFA] mb-[48px] md:text-[48px] md:leading-[48px] text-[36px] leading-[40px]">{{$t('blackBox.title')}}</h1>
      <img src="/images/bb.jpg" alt="Your Logo" class=" w-[150px] h-[150px] rounded-full mb-[48px]" /> 
      <p class="text-[#FAFAFA] text-[14px]  md:text-[18px] text-center w-[80%] md:w-[45%] mb-[48px]">
        {{$t('blackBox.text')}}
      </p>
    </div>
    <div class="flex justify-center py-4 mb-[60px]">
      <BlackBoxButton />
    </div>
  </div>
</template>

<script setup>
import BlackBoxButton from './BlackBoxButton.vue';
</script>

<style scoped>
.black-section {
  background-color: #000;
  color: #fff;
}

.black-section h1{

  font-family: 'Mona Sans', sans-serif;
  font-stretch: 125%;
  font-weight: 900;
  
}

.black-section p{
  font-family: "Open Sans", sans-serif;
}

@media (max-width: 768px) {
  .black-section {
    flex-direction: column;
    text-align: center;
  }

  .black-section img {
    margin-bottom: 20px;
  }
}
</style>
