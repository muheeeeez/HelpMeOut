<template>
  <div class="container">
    <div class="right-container">
      <h1 class="text">Your video is ready!</h1>
      <div class="box-container">
        <label class="box-label">Name</label>
        <div class="box">
          <input
            type="text"
            class="input-url"
            value="Untitled_Video_20232509"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
          >
            <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
            <path
              d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"
            />
          </svg>
        </div>
      </div>
      <div class="receiver-container">
        <input
          type="email"
          placeholder="enter email of receiver"
          class="receiver-container-input"
          v-model="receiverEmail"
        />
        <button @click.prevent="onShowDialog()">Send</button>
      </div>
      <transition>
        <dialog-modal
          v-if="showDialog"
          :cancel="cancel"
          :message="receiverEmail"
        ></dialog-modal
      ></transition>

      <div class="video-url-container">
        <label for="url" class="url">Video Url</label>
        <div class="box-video-url">
          <input type="text" v-model="textToCopy" />
          <button @click="copyText">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path
                d="M384 336H192c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16l140.1 0L400 115.9V320c0 8.8-7.2 16-16 16zM192 384H384c35.3 0 64-28.7 64-64V115.9c0-12.7-5.1-24.9-14.1-33.9L366.1 14.1c-9-9-21.2-14.1-33.9-14.1H192c-35.3 0-64 28.7-64 64V320c0 35.3 28.7 64 64 64zM64 128c-35.3 0-64 28.7-64 64V448c0 35.3 28.7 64 64 64H256c35.3 0 64-28.7 64-64V416H272v32c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V192c0-8.8 7.2-16 16-16H96V128H64z"
              />
            </svg>
            Copy
          </button>
        </div>
      </div>
      <div class="share-container">
        <h4>Share your video</h4>
        <div class="share-buttons">
          <button @click="openFacebookInNewTab">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_577_919)">
                <path
                  d="M24.5 11.9993C24.5 5.37187 19.1274 -0.000705719 12.5 -0.000705719C5.87258 -0.000705719 0.5 5.37187 0.5 11.9993C0.5 17.9888 4.88823 22.9533 10.625 23.8535V15.468H7.57813V11.9993H10.625V9.35554C10.625 6.34805 12.4165 4.68679 15.1576 4.68679C16.4705 4.68679 17.8438 4.92117 17.8438 4.92117V7.87429H16.3306C14.8399 7.87429 14.375 8.7993 14.375 9.74829V11.9993H17.7031L17.1711 15.468H14.375V23.8535C20.1118 22.9533 24.5 17.9888 24.5 11.9993Z"
                  fill="#1877F2"
                />
                <path
                  d="M17.1711 15.4688L17.7031 12H14.375V9.74899C14.375 8.80001 14.8399 7.875 16.3306 7.875H17.8438V4.92188C17.8438 4.92188 16.4705 4.6875 15.1576 4.6875C12.4165 4.6875 10.625 6.34875 10.625 9.35625V12H7.57812V15.4688H10.625V23.8542C11.2359 23.9501 11.8621 24 12.5 24C13.1379 24 13.7641 23.9501 14.375 23.8542V15.4688H17.1711Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_577_919">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            Facebook
          </button>
          <button @click="redirectToWebsite">
            <svg
              width="21"
              height="22"
              viewBox="0 0 21 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M17.5859 3.87197C15.7061 1.98972 13.2059 0.952615 10.542 0.95166C5.05283 0.95166 0.58547 5.41855 0.58356 10.9092C0.582605 12.6644 1.04147 14.3776 1.91288 15.8874L0.5 21.0481L5.77909 19.6634C7.2335 20.457 8.87128 20.8748 10.5377 20.8753H10.542C16.0302 20.8753 20.4981 16.4079 20.5 10.9173C20.5009 8.25627 19.4662 5.7547 17.5859 3.87244V3.87197ZM10.542 19.1935H10.5387C9.05367 19.1931 7.59689 18.7939 6.32583 18.0399L6.02357 17.8604L2.89078 18.6822L3.72686 15.6277L3.53013 15.3144C2.70169 13.9966 2.26383 12.4734 2.26479 10.9097C2.2667 6.3463 5.97963 2.63337 10.5454 2.63337C12.7561 2.63432 14.8342 3.49619 16.3969 5.06091C17.9598 6.62516 18.8197 8.7051 18.8188 10.9163C18.8168 15.4802 15.1039 19.1931 10.542 19.1931V19.1935ZM15.0819 12.9948C14.8332 12.8702 13.6099 12.2685 13.3816 12.1855C13.1534 12.1024 12.9877 12.0609 12.822 12.3101C12.6563 12.5594 12.1793 13.1199 12.0342 13.2856C11.889 13.4518 11.7438 13.4723 11.4951 13.3477C11.2463 13.223 10.4446 12.9604 9.49395 12.1129C8.75433 11.453 8.25483 10.6384 8.10972 10.3892C7.96456 10.1399 8.09444 10.0053 8.21856 9.8816C8.33028 9.76988 8.46733 9.59083 8.59194 9.44566C8.71661 9.30049 8.75767 9.19644 8.84072 9.03071C8.92383 8.86455 8.88228 8.71944 8.82022 8.59477C8.75811 8.47016 8.26061 7.24538 8.05289 6.74738C7.85089 6.26227 7.64561 6.32816 7.49328 6.32004C7.34811 6.31288 7.18244 6.31145 7.01628 6.31145C6.85011 6.31145 6.58078 6.37352 6.35256 6.62277C6.12433 6.87199 5.48162 7.4741 5.48162 8.69838C5.48162 9.92266 6.37311 11.1064 6.49772 11.2725C6.62233 11.4387 8.25244 13.9517 10.7483 15.0299C11.3418 15.2863 11.8054 15.4395 12.1669 15.5542C12.7628 15.7437 13.3052 15.717 13.734 15.653C14.212 15.5814 15.2061 15.0509 15.4133 14.4698C15.6206 13.8887 15.6206 13.3902 15.5585 13.2865C15.4964 13.1829 15.3303 13.1204 15.0815 12.9958L15.0819 12.9948Z"
                fill="#25D366"
              />
            </svg>
            WhatsApp
          </button>
          <button @click="openTelegramInNewTab">
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.5 20C16.0228 20 20.5 15.5228 20.5 10C20.5 4.47715 16.0228 0 10.5 0C4.97715 0 0.5 4.47715 0.5 10C0.5 15.5228 4.97715 20 10.5 20Z"
                fill="url(#paint0_linear_577_930)"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.0173 9.89096C7.93008 8.6137 9.87712 7.78815 10.8584 7.38317C13.631 6.23052 14.2073 6.02803 14.5812 6.01245C14.659 6.01245 14.846 6.02803 14.9706 6.12149C15.064 6.19937 15.0952 6.3084 15.1108 6.38628C15.1263 6.46416 15.1419 6.6355 15.1263 6.77569C14.9706 8.3489 14.3319 12.1963 13.9893 13.9564C13.8491 14.704 13.5687 14.9533 13.3039 14.9844C12.7276 15.0311 12.2759 14.595 11.7151 14.2368C10.8428 13.6604 10.3444 13.3022 9.48771 12.7414C8.5064 12.0872 9.14503 11.729 9.70578 11.1526C9.84596 10.9969 12.4161 8.676 12.4628 8.45793C12.4628 8.42678 12.4784 8.33332 12.4161 8.2866C12.3538 8.23987 12.2759 8.25544 12.2136 8.27102C12.1201 8.28659 10.7182 9.22117 7.99238 11.0592C7.5874 11.3396 7.22914 11.4642 6.90204 11.4642C6.54378 11.4642 5.85842 11.2617 5.34441 11.0903C4.72135 10.8878 4.22291 10.7788 4.26964 10.4361C4.30079 10.2648 4.55001 10.0779 5.0173 9.89096Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_577_930"
                  x1="0.5"
                  y1="9.99276"
                  x2="20.4855"
                  y2="9.99276"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#2AABEE" />
                  <stop offset="1" stop-color="#229ED9" />
                </linearGradient>
              </defs>
            </svg>
            Telegram
          </button>
        </div>
      </div>
    </div>
    <!-- <div class="vertical-line"></div> -->
    <div class="left-container">
      <div class="video-container">
        <video src="../videos/video1.mp4" id="myVideo" width="575" height="473">
          <source type="video/mp4" />
        </video>
        <div class="video-controls">
          <div class="durationDisplay">
            {{ currentTime }} / {{ formattedDuration }}
          </div>
          <div class="controls">
            <button @click="togglePlay">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9V168c0-8.7 4.7-16.7 12.3-20.9z"
                />
              </svg>
              <span>Play</span>
            </button>
            <button @click="toggleMute">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 640 512"
              >
                <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  d="M533.6 32.5C598.5 85.3 640 165.8 640 256s-41.5 170.8-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z"
                />
              </svg>
              <span> Volume</span>
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"
              >
                <!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  d="M495.9 166.6c3.2 8.7 .5 18.4-6.4 24.6l-43.3 39.4c1.1 8.3 1.7 16.8 1.7 25.4s-.6 17.1-1.7 25.4l43.3 39.4c6.9 6.2 9.6 15.9 6.4 24.6c-4.4 11.9-9.7 23.3-15.8 34.3l-4.7 8.1c-6.6 11-14 21.4-22.1 31.2c-5.9 7.2-15.7 9.6-24.5 6.8l-55.7-17.7c-13.4 10.3-28.2 18.9-44 25.4l-12.5 57.1c-2 9.1-9 16.3-18.2 17.8c-13.8 2.3-28 3.5-42.5 3.5s-28.7-1.2-42.5-3.5c-9.2-1.5-16.2-8.7-18.2-17.8l-12.5-57.1c-15.8-6.5-30.6-15.1-44-25.4L83.1 425.9c-8.8 2.8-18.6 .3-24.5-6.8c-8.1-9.8-15.5-20.2-22.1-31.2l-4.7-8.1c-6.1-11-11.4-22.4-15.8-34.3c-3.2-8.7-.5-18.4 6.4-24.6l43.3-39.4C64.6 273.1 64 264.6 64 256s.6-17.1 1.7-25.4L22.4 191.2c-6.9-6.2-9.6-15.9-6.4-24.6c4.4-11.9 9.7-23.3 15.8-34.3l4.7-8.1c6.6-11 14-21.4 22.1-31.2c5.9-7.2 15.7-9.6 24.5-6.8l55.7 17.7c13.4-10.3 28.2-18.9 44-25.4l12.5-57.1c2-9.1 9-16.3 18.2-17.8C227.3 1.2 241.5 0 256 0s28.7 1.2 42.5 3.5c9.2 1.5 16.2 8.7 18.2 17.8l12.5 57.1c15.8 6.5 30.6 15.1 44 25.4l55.7-17.7c8.8-2.8 18.6-.3 24.5 6.8c8.1 9.8 15.5 20.2 22.1 31.2l4.7 8.1c6.1 11 11.4 22.4 15.8 34.3zM256 336a80 80 0 1 0 0-160 80 80 0 1 0 0 160z"
                />
              </svg>
              <span> Settings</span>
            </button>
          </div>
        </div>
      </div>
      <div class="transcript">
        <h1>Transcript</h1>
        <select>
          <option value="">English</option>
          <option value="">Spanish</option>
          <option value="">Arabic</option>
          <option value="">French</option>
        </select>
      </div>
    </div>
  </div>
  <div class="dialog-box"></div>
</template>

<script>
import DialogModal from "./DialogModal.vue";

export default {
  components: { DialogModal },
  provide() {
    return { buttonClicked: this.downloadVideo };
  },
  data() {
    return {
      duration: "0:00",
      currentTime: "0:00",
      isMuted: false,
      showDialog: false,
      textToCopy: "https://www.helpmeout/Untitled_Video_20232509",
      receiverEmail: "johnmark@gmail.com",
    };
  },
  computed: {
    formattedDuration() {
      return this.duration;
    },
  },
  mounted() {
    const video = document.getElementById("myVideo");
    video.addEventListener("loadedmetadata", () => {
      this.duration = this.formatTime(video.duration);
    });
    video.addEventListener("timeupdate", () => {
      this.currentTime = this.formatTime(video.currentTime);
    });
  },
  methods: {
    formatTime(seconds) {
      const minutes = Math.floor(seconds / 60);
      const secs = Math.floor(seconds % 60);
      return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
    },
    togglePlay() {
      const video = document.getElementById("myVideo");
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    },
    toggleMute() {
      const video = document.getElementById("myVideo");
      video.muted = !video.muted;
      this.isMuted = video.muted;
    },
    onShowDialog() {
      this.showDialog = true;
      // this.receiverEmail = this.receiverEmail
    },
    cancel() {
      this.showDialog = false;
    },
    copyText() {
      const textarea = document.createElement("textarea");
      textarea.value = this.textToCopy;
      document.body.appendChild(textarea);
      textarea.select();
      textarea.setSelectionRange(0, 99999);
      document.execCommand("copy");
      document.body.removeChild(textarea);
      alert("Text copied to clipboard");
    },
    redirectToWebsite() {
      window.open(
        "https://wa.me/2349015381887?text=Hello%20from%20your%20website",
        "_blank"
      );
    },
    openTelegramInNewTab() {
      window.open("https://t.me/muheeeeez", "_blank");
    },
    openFacebookInNewTab() {
      window.open("https://www.facebook.com/muiz.olaleye", "_blank");
    },
    downloadVideo() {
      const videoUrl = "../videos/video1.mp4";
      const a = document.createElement("a");
      a.href = videoUrl;
      a.download = "downloaded-video.mp4";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    },
  },
};
</script>

<style scoped>
h1 {
  width: 452px;
  height: 57px;
  font-weight: 700;
  font-size: 50px;
  line-height: 56.7px;
  color: #141414;
}
label {
  display: block;
}
h4 {
  font-weight: 600;
  font-size: 20px;
  line-height: 20.16px;
  color: #08051e;
}
select {
  width: 169px;
  height: 35px;
  border-radius: 4px;
  color: #cfcfcf;
  border: 1px solid #cfcfcf;
  padding: 8px;
  gap: 80px;
  font-size: 16px;
  font-family: "Work Sans", sans-serif;
  font-weight: 400;
}
.container {
  width: 1437px;
  height: 970px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: auto;
}
.right-container {
  height: 622px;
  width: 100%;
  /* gap: 72px; */
}
.text {
  font-weight: 700;
  font-size: 45px;
  font-family: "Sora", sans-serif;
}
.box-container {
  /* width: 385px; */
  height: 61px;
  margin-bottom: 67px;
}
.box-label {
  width: 49px;
  height: 20px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20.16px;
  color: #727272;
  margin-left: 10px;
  font-family: "Sora", sans-serif;
}
.box {
  width: 385px;
  height: 32px;
  background-color: white;
  display: flex;
  align-items: center;
}
.box > svg {
  font-size: 25px;
  color: #777;
  cursor: pointer;
}
.box > input {
  flex: 1;
  height: 40px;
  border: none;
  outline: none;
  font-size: 24px;
  font-weight: 600;
  line-height: 30.24px;
  color: #413c6d;
  padding-left: 10px;
}
.input-url {
  width: 385px;
  height: 32px;
  font-family: "Sora", sans-serif;
}
.receiver-container {
  width: 550px;
  height: 68px;
  display: flex;
  align-items: center;
  border-radius: 16px;
  border: 0.5px solid #e7e7ed;
  background-color: #e7e7ed;
  margin-bottom: 67px;
}
.receiver-container > input {
  flex: 1;
  height: 40px;
  border: none;
  outline: none;
  justify-content: space-between;
  padding-left: 15px;
  background-color: #e7e7ed;
  color: #434343;
  opacity: 80%;
  font-size: 18px;
  line-height: 21.11px;
  font-weight: 400;
  font-family: "Work Sans", sans-serif;
}
.receiver-container > button {
  width: 75px;
  height: 44px;
  border: #605c84;
  border-radius: 8px;
  font-size: 25px;
  color: #ffff;
  background-color: #605c84;
  margin-right: 20px;
  font-family: "Manrope", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
}
.video-url-container {
  width: 550px;
  height: 88px;
  margin-bottom: 88px;
}
.video-url-container label {
  width: 96px;
  height: 35px;
  font-size: 20px;
  font-weight: 600;
  line-height: 25.2px;
  font-family: "Sora", sans-serif;
}
.box-video-url {
  width: 550px;
  height: 68px;
  display: flex;
  align-items: center;
  border-radius: 16px;
  border: 0.5px solid #929292;
  background-color: #fafafa;
}
.box-video-url > input {
  flex: 1;
  height: 40px;
  border: none;
  outline: none;
  justify-content: space-between;
  padding-left: 15px;
  background-color: #fafafa;
  color: #4b4b4b;
  opacity: 80%;
  font-size: 16px;
  line-height: 21.11px;
  font-weight: 400;
  font-family: "Work Sans", sans-serif;
}
.box-video-url > button {
  width: 75px;
  height: 44px;
  border: 1px solid #120b48;
  border-radius: 8px;
  color: #120b48;
  background-color: transparent;
  margin-right: 20px;
  font-family: "Manrope", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
}
.share-container {
  height: 83px;
  width: 534px;
}
.share-container h4 {
  font-family: "Sora", sans-serif;
}
.share-buttons {
  display: flex;
  gap: 16px;
  width: 534px;
  height: 48px;
}
.share-buttons button {
  background-color: transparent;
  width: 141px;
  height: 48px;
  border-radius: 6px;
  color: #08051e;
  border: 1px solid #0a0628;
  font-family: "Inter", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  cursor: pointer;
}
/* .vertical-line {
  border-left: 2px solid black;
  height: 200px;
} */
.video-container {
  border: 1px solid #413c6d;
  border-radius: 8px;
  width: 575px;
  height: 573px;
}
.video-controls {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 8px;
  background-color: #ffffff;
}
.durationDisplay {
  font-size: 24px;
  font-weight: 500;
  line-height: 29.05px;
  color: #939393;
  margin-top: 15px;
  margin-left: 25px;
}
.controls {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
  width: 204px;
  height: 50px;
}
.controls button {
  width: 35px;
  height: 50px;
  font-size: 22px;
  border: 0px;
  background-color: transparent;
  margin: auto;
}
.controls svg {
  width: 32px;
  height: 32px;
  cursor: pointer;
}
.transcript {
  font-family: "Sora", sans-serif;
  font-weight: 600;
  font-size: 24px;
}
.v-enter-from {
  transform: translateY(-400px);
}
.v-enter-to {
  transform: translateY(0px);
}
.v-enter-active {
  transition: all 1s;
}
.dialog-box {
  display: flex;
  justify-content: center;
  align-items: center;
}
@media screen and (min-width: 100px) and (max-width: 1300px) {
  video {
    width: 100vw;
  }
  .container {
    width: 100vw;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 70px;
  }
  .text {
    width: 100vw;
    font-size: 25px;
    font-family: "Sora", sans-serif;
  }
  .box {
    width: 100vw;
  }
  .box-label {
    margin-bottom: 5px;
  }
  .box-container {
    width: 100vw;
  }
  .receiver-container {
    width: 100vw;
  }
  .box-video-url {
    width: 100vw;
  }
  .share-container {
    width: 100vw;
  }

  .share-buttons {
    width: 100vw;

    /* display: grid;
    grid-template-columns: 1fr 1fr 1fr; */
    display: flex;
    flex-wrap: wrap;
    flex: 1 0 calc(100% - 20px);
  }
  .share-buttons button {
    width: auto;
  }
  .video-url-container {
    width: 100vw;
  }
  .url {
    margin-bottom: 10px;
  }
  .left-container {
    width: 100vw;
  }
  .video-container {
    width: 100vw;
  }
  .controls {
    gap: 5px;
  }
  .controls span {
    display: none;
  }
}
</style>