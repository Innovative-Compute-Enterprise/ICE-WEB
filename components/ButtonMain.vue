<template>

<button class="custom-button rounded-md flex items-center gap-1 shadow-md shadow-transparent">{{ $t('button.main') }}
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-7 h-7">
  <path fill-rule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clip-rule="evenodd" />
</svg>

</button>

</template>

<script scoped>
</script>

<style>

.custom-button {
	position: absolute;
  padding: 1rem 1rem;
  background-color: #000000;
  color: rgb(255, 255, 255);
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: 0.1rem;
  cursor: pointer;
}

.custom-button:hover {
  background-color: #2c2c2c;
  color: #ffffff;
}
@media screen and (max-width: 767px) {

  .custom-button {
	position: absolute;
  padding: 0.7rem 1.7rem;
  background-color: #000000;
  color: rgb(255, 255, 255);
  border: none;
  font-size: 4vw;
  font-weight: 600;
  letter-spacing: 0.1rem;
  border-radius: 0.313rem;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
}
}

</style>
