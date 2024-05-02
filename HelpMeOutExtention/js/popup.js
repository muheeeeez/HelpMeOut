document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".cancel-icon").addEventListener("click", function () {
    window.close();
  });
  const cameraToggle = document.querySelector(".toggle");
  cameraToggle.addEventListener("click", () => {
    cameraToggle.classList.toggle("camera-active");
  });
  const audioToggle = document.querySelector(".toggled");
  audioToggle.addEventListener("click", () => {
    audioToggle.classList.toggle("audio-active");
  });

  const startRecording = document.querySelector(".recording-button");
  startRecording.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      chrome.tabs.sendMessage(
        tabs[0].id,
        { action: "request_recording" },
        function (response) {
          if (!chrome.runtime.lastError) {
            console.log(response);
          } else {
            console.log(chrome.runtime.lastError, "error1");
          }
        }
      );
    });
  });
  //   audioToggle.addEventListener("click", () => {
  //     chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  //       chrome.tabs.sendMessage(
  //         tabs[0].id,
  //         { action: "stopvideo" },
  //         function (response) {
  //           if (!chrome.runtime.lastError) {
  //             console.log(response);
  //           } else {
  //             console.log(chrome.runtime.lastError, "error2");
  //           }
  //         }
  //       );
  //     });
  //   });
});
const audioToggle = document.querySelector(".toggled");
// cameraToggle.classList.toggle("camera-active");
//
// audioToggle.addEventListener("click", () => {
//   audioToggle.classList.toggle("audio-active");
// });
// if (cameraToggle.classList.contains("camera-active")) {
// console.log(window.myData);
// cameraToggle.classList.toggle("camera-active");
