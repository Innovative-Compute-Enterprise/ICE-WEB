<template>
  <div>
    <div class="bg-white">
      <!-- Hero Section -->
      <div class="hero flex items-end justify-start h-[600px] md:h-[700px]">
        <li class="list-none pl-4">
          <NuxtLink to="/" prefetch>
              <h1 class="hero-title text-left md:text-[10rem] text-[6rem] font-bold">{{$t('policies.title')}}</h1>
          </NuxtLink>
        </li>
      </div>
  
      <!-- Policies Container -->
      <div class="policies-container">
        <!-- Privacy Policy Section -->
        <section id="privacy-policy">
          <h2>{{$t('policies.privacyPolicy')}}</h2>
          <p>{{$t('policies.privacyPolicyDesc')}}</p>
        </section>
    
        <!-- Cookie Policy Section -->
        <section id="cookie-policy">
          <h2>{{$t('policies.cookiePolicy')}}</h2>
          <p>{{$t('policies.cookiePolicyDesc')}}</p>
        </section>
  
        <!-- Copyright Notice Section -->
        <section id="copyright-notice">
          <h2>{{$t('policies.copyrightNotice')}}</h2>
          <p>{{$t('policies.copyrightNoticeDesc')}}</p>
        </section>
  
        <!-- Terms of Service Section -->
        <section id="terms-services" class="mb-12">
          <h2>{{$t('policies.termsOfService')}}</h2>
          <p>{{$t('policies.termsOfServiceDesc')}}</p>
        </section>
      </div>
    </div>
  </div>
</template>

  
  <script>
  export default {
    head() {
      return {
        title: 'Policies - Your Website Name',
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Read our policies regarding privacy, cookies, and more.',
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>

  body {
  overflow-x: hidden;
  background-color: #000000;
  }
  .hero {
    background-color: #197bdd; /* Light grey background for contrast */
    text-align: center;
  }
  
  .hero-title {
    padding-left: 18px;
    color: #ffffff; /* Dark text for readability */
  }
  
  .policies-container {
    max-width: 850px;
    margin: auto;
    padding: 2rem;
    line-height: 1.6;

  }
  
  .policies-container h2 {

    margin-top: 3rem;
    font-size: 48px; /* Clear section headings */
    font-weight: 600;
  }
    p{
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 1rem;


    }
  
  /* Add more styling as needed */
  </style>
  