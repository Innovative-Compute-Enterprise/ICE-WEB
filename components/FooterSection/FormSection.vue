<template>
  <div>
    <div class="flex flex-col md:flex-row space-y-[72px] items-center justify-between rounded-[66px] mx-[12px] md:mx-[0px] p-[36px] md:p-[60px] md:m-[24px] dark:bg-[#09090B] bg-[#FAFAFA] border border-[#000]/[0.1] dark:border-[#fff]/[0.1] shadow focus-visible:ring-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white color">
      <h2 class="text-[#09090B]  dark:text-[#FAFAFA] md:text-[48px] text-[48px] tracking-[-2.16px] leading-[40px] md:leading-[48px] font-bold md:w-[45%] w-full md:py-[64px] py-[0px] mb-[64px] md:mb-[0px]">
        Get notified when we’re launching.
      </h2>
      <form @submit.prevent="handleSubmit" class="w-full md:w-auto space-y-[24px]">
        <div class="flex flex-col md:flex-row items-start  w-full md:space-x-[12px]">
          <div class="w-full md:w-auto flex flex-col">
            <input
              type="email"
              name="email"
              class="w-full p-1 text-black dark:text-white rounded-md placeholder:opacity-50 
              bg-transparent border-2 border-[#71717A] dark:border-[#A1A1AA] shadow-sm focus-visible:ring-1 
              focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              placeholder="Enter your email"
              required
            />
            <p class="text-[#71717A] dark:text-[#A1A1AA] text-xs py-[12px]">
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
h2{
  font-family: "Mona Sans";
  font-stretch: 100%;
}
p{
  font-family: "Open Sans", sans-serif;
}
button{
  font-family: "Montserrat", sans-serif;

}
.confirmation-message {
  animation-duration: 2s;
  color: rgb(0, 255, 0);
  margin-top: 1rem;
}

</style>
