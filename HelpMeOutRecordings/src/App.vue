<template>
  <div class="app">
    <div>
      <navigation-bar></navigation-bar>
    </div>
    <div>
      <video-page></video-page>
    </div>
    <div>
      <save-video></save-video>
    </div>
    <div>
      <the-footer></the-footer>
    </div>
  </div>
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue";
import SaveVideo from "./components/SaveVideo.vue";
import TheFooter from "./components/TheFooter.vue";
import VideoPage from "./components/VideoPage.vue";
export default {
  components: { NavigationBar, VideoPage, SaveVideo, TheFooter },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Sora:wght@700&family=Work+Sans:wght@500&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Sen&display=swap");
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@200&display=swap');
.app {
  /* overflow: hidden; */
  margin: 0;
  padding: 0;
}
</style>