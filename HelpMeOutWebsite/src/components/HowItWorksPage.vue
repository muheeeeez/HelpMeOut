<template>
  <div class="title">
    <div class="heading"><h1>How it works</h1></div>
    <div class="card-container">
      <div class="card">
        <div>
          <div class="number"><span>1</span></div>
          <h1>Record Screen</h1>
          <p>
            Click the "Start Recording" button in our extension. choose which
            part of your screen to capture and who you want to send it to.
          </p>
        </div>
        <div>
          <img src="../images/recording.jpg" alt="" />
        </div>
      </div>
      <div class="card">
        <div>
          <div class="number"><span>2</span></div>
          <h1>Share Your Recording</h1>
          <p>
            We generate a shareable link for your video. Simply send it to your
            audience via email or copy the link to send via any platform.
          </p>
        </div>
        <div>
          <img src="../images/recording.jpg" alt="" />
        </div>
      </div>
      <div class="card">
        <div>
          <div class="number"><span>3</span></div>
          <h1>Learn Effortlessly</h1>
          <p>
            Recipients can access your video effortlessly through the provided
            link, with our user-friendly interface suitable for everyone.
          </p>
        </div>
        <div>
          <img src="../images/recording.jpg" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.title {
  /* width: 1440px;
  height: 897px; */
  margin-top: 10px;
}
.heading {
  /* width: 971px; */
  height: 50px;
  top: 103px;
  /* margin-left: 578px; */
  font-family: "Sora", sans-serif;
  font-weight: 700;
  font-size: 40px;
  line-height: 50.4px;
  color: #1b233d;
  text-align: center;
}
.container {
  width: 1240px;
  height: 567px;
  top: 212px;
  left: 100px;
  gap: 83px;
}
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
  gap: 20px;
  padding: 20px;
}
.card {
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  flex: 1;
  max-width: 358px;
  height: 567px;
}
.card h1 {
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 28px;
  line-height: 33.89px;
  text-align: center;
  color: #1b233d;
}
.card p {
  width: 368px;
  height: 120px;
  font-family: "Work Sans", sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 30.26px;
  text-align: center;
  color: #616163;
}
.card img {
  width: 357.88px;
  height: 251.48px;
}
.number {
  width: 68px;
  height: 67px;
  background-color: #120b48;
  border-radius: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}
.number span {
  font-family: "Inter", sans-serif;
  font-weight: 700;
  font-size: 42px;
  line-height: 38.73px;
  text-align: center;
  color: white;
}
@media screen and (min-width: 100px) and (max-width: 1300px) {
  .title {
    width: 100vw;
  }
  .card {
    flex: 1 0 calc(50% 20px);
  }
}
@media (max-width: 480px) {
  .card {
    flex: 1 0 calc(100% - 20px);
  }
}
</style>