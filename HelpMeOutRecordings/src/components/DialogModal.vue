<template>
  <div class="overlay">
    <div class="dialog">
      <div class="dialog-content">
        <div class="dialog-title">
          <div class="envelope">
            <svg
              width="318"
              height="286"
              viewBox="0 0 318 286"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <rect width="318" height="286" fill="url(#pattern0)" />
              <defs>
                <pattern
                  id="pattern0"
                  patternContentUnits="objectBoundingBox"
                  width="1"
                  height="1"
                >
                  <use
                    xlink:href="#image0_593_1726"
                    transform="scale(0.00666667 0.00740741)"
                  />
                </pattern>
                <image
                  id="image0_593_1726"
                  width="150"
                  height="150"
                  xlink:href="data:image/png;base64,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"
                />
              </defs>
            </svg>
          </div>
          <div
            @click.prevent="cancel"
            class="cancel"
            :receiverEmail="receiverEmail"
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.9997 37.4166C10.3925 37.4166 2.58301 29.6071 2.58301 19.9999C2.58301 10.3927 10.3925 2.58325 19.9997 2.58325C29.6069 2.58325 37.4163 10.3927 37.4163 19.9999C37.4163 29.6071 29.6069 37.4166 19.9997 37.4166ZM19.9997 4.08325C11.2235 4.08325 4.08301 11.2238 4.08301 19.9999C4.08301 28.7761 11.2235 35.9166 19.9997 35.9166C28.7758 35.9166 35.9163 28.7761 35.9163 19.9999C35.9163 11.2238 28.7758 4.08325 19.9997 4.08325Z"
                fill="#292D32"
                stroke="#120B48"
              />
              <path
                d="M15.8127 25.2465L15.8066 25.2526L15.8007 25.2589C15.6772 25.3913 15.485 25.4668 15.2829 25.4668C15.0917 25.4668 14.9045 25.3978 14.7532 25.2465C14.4651 24.9585 14.4651 24.4751 14.7532 24.187L24.1865 14.7537C24.4746 14.4656 24.958 14.4656 25.2461 14.7537C25.5341 15.0417 25.5341 15.5251 25.2461 15.8132L15.8127 25.2465Z"
                fill="#292D32"
                stroke="#120B48"
              />
              <path
                d="M24.7163 25.4668C24.5251 25.4668 24.3378 25.3978 24.1865 25.2465L14.7532 15.8132C14.4651 15.5251 14.4651 15.0417 14.7532 14.7537C15.0412 14.4656 15.5247 14.4656 15.8127 14.7537L25.2461 24.187C25.5341 24.4751 25.5341 24.9585 25.2461 25.2465C25.0948 25.3978 24.9075 25.4668 24.7163 25.4668Z"
                fill="#292D32"
                stroke="#120B48"
              />
            </svg>
          </div>
        </div>
        <div class="dialog-message">
          <h2>Your video link has been sent to {{ message }}</h2>
        </div>
        <div class="dialog-contents">
          <p class="box">
            Would you need to view this video later? Save to your account now!
          </p>
          <button>Save Video</button>
          <p class="info">
            Don’t have an account? <span><a href="">Create account</a></span>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cancel", "message"],
};
</script>

<style scoped>
/* @import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@100&display=swap"); */
.overlay {
  position: fixed;
  padding: 20px;
  z-index: 10;
  background-color: #f2f4f7;
  /* justify-content: center;
  align-items: center; */
  width: 598px;
  height: 876px;
  top: 0;
  margin-top: 100px;
  margin-left: 423px;
  display: flex;
  border-radius: 24px;
}

.dialog-title {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
}
.envelope {
  width: 348px;
  height: 286px;
  margin-top: 56px;
  margin-left: 125px;
  gap: 40px;
}
.cancel {
  width: 40px;
  height: 40px;
  margin-top: 64px;
  /* left: 494px; */
}
.dialog-message {
  width: 348px;
  margin: auto;
  font-size: 24px;
  font-family: "Work Sans", sans-serif;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: center;
  color: #08051e;
}
.dialog-contents {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.box {
  width: 370px;
  height: 42px;
  text-align: center;
  font-size: 18px;
  line-height: 21.11px;
  font-family: "Work Sans", sans-serif;
  font-weight: 400;
  color: #141414;
}
.dialog-contents button {
  width: 150px;
  height: 51px;
  border: 1px solid #120b48;
  border-radius: 8px;
  padding: 16px 32px 16px 32px;
  background-color: #120b48;
  color: #f9f9ff;
  font-family: "Work Sans", sans-serif;
  font-weight: 500;
  font-size: 15px;
  line-height: 18.77px;
  text-align: center;
}
.info {
  width: 314px;
  height: 20px;
  font-family: "Work Sans", sans-serif;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  line-height: 18.77px;
}
.info span {
  font-weight: 600;
  line-height: 20.16px;
  color: #120b48;
}
@media screen and (min-width: 100px) and (max-width: 1300px) {
  .overlay {
    width: min-content;
    height: max-content;
    margin: 0;
    left: 0;
  }

  .envelope {
    width: 40vw;
    display: none;
  }
  .cancel {
    width: 100vw;
    margin: auto;
  }
  .dialog-message {
    font-size: 14px;
    text-align: center;
  }
  .dialog-contents {
    width: auto;
  }
}
</style>