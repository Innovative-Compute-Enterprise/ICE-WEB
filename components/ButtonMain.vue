<template>

<button class="custom-button rounded-md">{{$t('button.main')}}</button>


</template>


<style>
.custom-button {
	position: absolute;
  padding: 1rem 2.25rem;
  background-color: #ffffff;
  color: rgb(0, 0, 0);
  border: none;
  font-size: 1.125rem;
  font-weight: 600;
  border-radius: 0.313rem;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

.custom-button:hover {
  color: rgb(0, 0, 0);
  background-color: rgb(48, 22, 216);
  transform: scale(1.05);
  
}
</style>
