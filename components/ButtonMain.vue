<template>

<button class="custom-button rounded-md">{{$t('button.main')}}</button>


</template>


<style>
.custom-button {
	position: absolute;
  padding: 16px 36px;
  background-color: #ffffff;
  color: rgb(0, 0, 0);
  border: none;
  font-size: 18px;
  font-weight: 600;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}

.custom-button:hover {
  color: rgb(0, 0, 0);
  background-color: rgb(48, 22, 216);
  transform: scale(1.05);
  
}
</style>
