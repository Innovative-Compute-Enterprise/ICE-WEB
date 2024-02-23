<template>
  <div class="black-section flex flex-col items-center justify-center py-28 my-4">
    <div class="flex flex-col items-center gap-y-6 mx-10 md:mx-22">
      <img src="/images/bb.jpg" alt="Your Logo" class="logo w-36 h-36 rounded-full" /> 
      <h1 class="text-[#FAFAFA] mb-4 text-4xl font-bold">{{$t('services.blacktitle')}}</h1>
      <p class="text-[#FAFAFA] text-xl text-center md:w-[60%] w-[80%] mb-12">
        {{$t('services.blacktext')}}
      </p>
    </div>
    <div class="flex justify-center py-4">
      
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.black-section {
  background-color: #000;
  color: #fff;
}

.black-section h1{
  font-family: "Source Code Pro", monospace;
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
