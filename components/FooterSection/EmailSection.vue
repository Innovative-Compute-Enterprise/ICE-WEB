<template>
    <div class="px-12 py-20 md:px-24 md:py-28 bg-white pt-8 pb-24">
        <h1 class="md:text-[3.6rem] text-[2.6rem] font-semibold text-gray-800 leading-tight mb-28">{{ $t('footerEmail.title') }}</h1>
        
        <div>
            <div class="space-y-2">
                <h2 class="text-xl font-medium text-gray-700">{{ $t('footerEmail.email') }}</h2>
                <a href="#" class="text-lg text-blue-500 underline hover:text-blue-600">info@continuumglow.com</a>
            </div>
            <div class="space-y-2">
                <h2 class="text-xl font-medium text-gray-700">{{ $t('footerEmail.title2') }}</h2>
                <div class="text-lg text-gray-600 leading-snug">
                    {{ $t('footerEmail.address1') }}<br />
                    {{ $t('footerEmail.address2') }}<br />
                    {{ $t('footerEmail.address3') }}<br />
                </div>
            </div>
        </div>

        <div class="flex space-x-2 pt-4">
            <a href="#" class="svg-container">
                <!-- Inline SVG for X -->
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="46" height="46" viewBox="0 0 48 48">
                <path fill="#212121" fill-rule="evenodd" d="M38,42H10c-2.209,0-4-1.791-4-4V10c0-2.209,1.791-4,4-4h28c2.209,0,4,1.791,4,4v28C42,40.209,40.209,42,38,42z" clip-rule="evenodd"></path><path fill="#fff" d="M34.257,34h-6.437L13.829,14h6.437L34.257,34z M28.587,32.304h2.563L19.499,15.696h-2.563 L28.587,32.304z"></path><polygon fill="#fff" points="15.866,34 23.069,25.656 22.127,24.407 13.823,34"></polygon><polygon fill="#fff" points="24.45,21.721 25.355,23.01 33.136,14 31.136,14"></polygon>
                </svg>
            </a>
            <a href="#" class="svg-container">
                <!-- Inline SVG for GitHub -->
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="46" height="46" viewBox="0 0 30 30">
                <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                </svg>
            </a>
        </div>
        <p class="text-[1.063rem] p-2">&copy; {{ currentYear }} {{ $t('footerEmail.copyright') }}</p>
    </div>
</template>
<script setup>
const currentYear = ref(new Date().getFullYear());
</script>

<style scoped>
h1{
  line-height: 95%; 
  letter-spacing: 0.063rem;
}
.svg-container:hover {
    transform: scale(1.1);
}



</style>
