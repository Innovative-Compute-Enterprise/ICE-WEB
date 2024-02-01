<template>
  <div class="md:px-20 lg:px-32 my-8 px-4">
    <div class="flex flex-col md:flex-row space-y-8 items-center justify-between rounded-[40px] p-8 md:px-20 md:py-28 dark:bg-[#09090B] bg-[#FAFAFA] border border-[#000]/[0.1] dark:border-[#fff]/[0.1] shadow-sm focus-visible:ring-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white color">
      <h2 class="text-[#09090B] dark:text-[#FAFAFA] text-5xl font-semibold mb-6 md:mb-0 md:mr-8 md:w-[40%] w-full pb-8 md:pb-0">
        Get notified when we’re launching.
      </h2>
      <form @submit.prevent="handleSubmit" class="w-full md:w-auto">
        <div class="flex flex-col md:flex-row items-start md:space-x-4 w-full pt-12 md:pt-0">
          <div class="w-full md:w-auto flex flex-col mb-8 md:mb-0 space-y-2">
            <input
              type="email"
              name="email"
              class="w-full p-2 text-black rounded-md placeholder:opacity-50 
              bg-transparent border-2 border-[#71717A] dark:border-[#A1A1AA] shadow-sm focus-visible:ring-1 
              focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              placeholder="Enter your email"
              required
            />
            <p class="text-[#71717A] dark:text-[#A1A1AA] text-xs">
              We care about your data. Read our
              <NuxtLink :to="localePath('polices')" class="underline">privacy policy</NuxtLink>.
            </p>
          </div>
          <button
            type="submit"
            class="text-sm w-full font-semibold md:w-auto rounded-md whitespace-nowrap bg-black dark:bg-white py-4 px-4 h-9 justify-center items-center dark:text-black text-white dark:hover:bg-[#e2e2e2] hover:bg-[#27272A] inline-flex border-[1px]  focus-visible:ring-1 transition-colors shadow-sm shrink-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white "
          >
            Notify me
          </button>
        </div>
      </form>
    </div>
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
      this.isSubmitted = true;
    }
  }
};
</script>




<style scoped>
.confirmation-message {
  animation-duration: 2s;
  color: rgb(0, 255, 0);
  margin-top: 1rem;
}

</style>
