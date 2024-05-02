<template>
  <div class="container">
    <div class="details-container">
      <div>
        <h1 class="">
          To ensure the availability and privacy of your video, we recommend
          saving it to your account.
        </h1>
      </div>
      <div class="save-button">
        <button @click.prevent="buttonTrigger">Save Video</button>
      </div>
      <div>
        <h3>
          Don't have an account?<span><a>Create account</a></span>
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["buttonClicked"],
  methods: {
    buttonTrigger() {
      this.buttonClicked;
    },
  },
};
</script>

<style scoped>
h1 {
  width: 553px;
  height: 60px;
  margin: auto;
  font-size: 24px;
  font-family: "Sora", sans-serif;
  font-weight: 600;
  line-height: 30.24px;
  text-align: center;
  color: #141414;
}
button {
  width: 150px;
  height: 51px;
  border-radius: 8px;
  padding: 16px 32px 16px 32px;
  background-color: #120b48;
  color: #f9f9ff;
  font-family: "Work Sans", sans-serif;
  font-weight: 500;
  font-size: 15px;
  line-height: 18.77px;
  text-align: center;
  margin: 30px 0;
  cursor: pointer;
}
h3 {
  width: 653px;
  height: 30px;
  font-size: 24px;
  text-align: center;
  line-height: 30.24px;
  font-family: "Sora", sans-serif;
  font-weight: 600;
  color: #7e7e7e;
}
h3 span a {
  text-decoration: underline;
  color: #120b48;
  padding: 5px;
  cursor: pointer;
}
.container {
  /* width: 1441px; */
  /* width: 100vw; */
  height: 317px;
  /* padding: 48px 347px 48px 347px; */
  padding-top: 55px;
  margin: 0;
  background-color: #e7e7ed;
}
.details-container {
  width: 747px;
  height: 221px;
  margin: auto;
}
.save-button {
  display: flex;
  justify-content: center;
  align-items: center;
}
@media screen and (min-width: 100px) and (max-width: 1300px) {
  h1 {
    margin: 0;
    text-align: center;
    width: 100vw;
  }
  h3 {
    width: 100vw;
    text-align: center;
    margin: 0;
  }

  .container {
    max-width: 100vw;
    height: 100%;
    margin: 30px 0px;
    background-color: transparent;
    padding: 0;
  }
  .details-container {
    width: 100vw;
  }
  .save-button {
    width: 100vw;
    justify-content: center;
    align-content: center;
    margin-top: 35px;
  }
}
</style>