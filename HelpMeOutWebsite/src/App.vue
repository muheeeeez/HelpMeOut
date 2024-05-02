<template>
  <div class="app">
    <div>
      <navigation-bar></navigation-bar>
    </div>
    <div>
      <first-page></first-page>
    </div>
    <div>
      <features-page></features-page>
    </div>
    <div>
      <HowItWorksPage></HowItWorksPage>
    </div>
    <div>
      <the-footer></the-footer>
    </div>
    <!-- <div>
    <login-page></login-page>
  </div> -->
  </div>
</template>


<script>
import FeaturesPage from "./components/FeaturesPage.vue";
import FirstPage from "./components/FirstPage.vue";
import HowItWorksPage from "./components/HowItWorksPage.vue";
import NavigationBar from "./components/NavigationBar.vue";
import TheFooter from "./components/TheFooter.vue";
import LoginPage from "./components/LoginPage.vue";
export default {
  components: {
    NavigationBar,
    FirstPage,
    FeaturesPage,
    HowItWorksPage,
    TheFooter,
    LoginPage,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Sora:wght@700&family=Work+Sans:wght@500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Sen&display=swap");
</style>