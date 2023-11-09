<template >
  <div class="px-12 py-16 md:px-24 md:py-24 bg-blue-500 text-black space-y-6">
    <h1>{{ $t('footerForm.title') }}</h1>
    <form 
    @submit.prevent="handleSubmit"
    name="contact"
    class="space-y-4" 
    method="POST" 
    netlify
    data-netlify-honeypot="bot-field"
    >
      <input class="hidden" name="bot-field">
      <div class="flex flex-col">
        <input type="text" id="inputname" name="name" :placeholder="$t('footerForm.namePlaceholder')" minlength="5" required class="text-input p-6 rounded-md">
      </div>
      <div class="flex flex-col">
        <input type="text" id="inputcompany" name="company" :placeholder="$t('footerForm.companyPlaceholder')" required class="text-input p-6 rounded-md">
      </div>
      <div class="flex flex-col">
        <input type="email" id="inputemail" name="email" :placeholder="$t('footerForm.emailPlaceholder')" minlength="5" required class="text-input p-6 rounded-md">
      </div>
      <button type="submit" class="bg-black text-white p-6 w-full rounded-md hover:bg-gray-800">{{ $t('footerForm.buttonText') }}</button>
      <div>
        <label class="inline-flex items-center">
          <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600" required>

          <li class="list-none pl-1 underline">
            <NuxtLink to="/polices">
              {{ $t('footerForm.privacyPolicy') }}
            </NuxtLink>
          </li>
          
        </label>
      </div>
    </form>
    <span v-if="isSubmitted" class="confirmation-message">{{ $t('footerForm.confirmationMessage') }}</span>
  </div>
</template>


<script>
export default {
  data() {
    return {
      isSubmitted: false
    };
  },
  methods: {
    handleSubmit() {
      // After successful submission:
      this.isSubmitted = true;
    }
  }
};

</script>

<style scoped>
h1{
  font-family: 'Georgia', sans-serif;
  color: #ffffff;
  line-height: 90%; 
  font-size: 32px;
  letter-spacing: 2.0px;
  opacity: 0.85;
}

.text-input {
  font-size: 20px;
  font-family: 'Helvetica Neue Medium', sans-serif;
}

::placeholder {
  color: #000000;
  opacity: 0.30; 
  font-size: 20px;
}

input:focus::placeholder {
  opacity: 0.90;
}

button {
  font-size: 20px;
  font-family: 'Helvetica Neue Medium', sans-serif;
  font-weight: 500;
}
.confirmation-message {
  animation-duration: 2s;
  color: green;
  margin-top: 1rem;
}
</style>
