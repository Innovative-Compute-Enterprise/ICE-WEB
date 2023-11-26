<template>

<button class="custom-button rounded-md flex items-center gap-1 shadow-md shadow-transparent">{{ $t('button.main') }}
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-7 h-7">
  <path fill-rule="evenodd" d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z" clip-rule="evenodd" />
</svg>

</button>

</template>

<script>
</script>

<style>
.custom-button {
	position: absolute;
  padding: 1rem 1.5rem;
  background-color: #ffffff;
  color: rgb(0, 0, 0);
  border: none;
  font-size: 1.2rem;
  font-weight: 600;
  letter-spacing: 0.1rem;
  border-radius: 0.313rem;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
  overflow: hidden; /* Added to contain the gradient within the button */
}

.custom-button:hover {
  background-color: #000000;
  color: #ffffff;
  box-shadow: 0 0 0 0.1rem rgba(255, 255, 255, 0.872)
}
.custom-button svg {
  transition: transform 0.3s ease-in-out;
}

.custom-button:hover svg {
  animation: slideRight 1s linear infinite;
}

@keyframes slideRight {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(18.5px); /* Adjust the value as needed */
  }
}
@media screen and (max-width: 767px) {

  .custom-button {
	position: absolute;
  padding: 0.8rem 1.2rem;
  background-color: #ffffff;
  color: rgb(0, 0, 0);
  border: none;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.1rem;
  border-radius: 0.313rem;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
  overflow: hidden; /* Added to contain the gradient within the button */
}
}

</style>
