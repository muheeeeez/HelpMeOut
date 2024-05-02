// import { storage } from "./firebase";
// import { ref, uploadBytes } from "firebase/storage";

console.log("Hi i have been injected");
var recorder = null;
function onAccessApproved(stream) {
  recorder = new MediaRecorder(stream);
  recorder.start();
  recorder.onstop = function () {
    stream.getTracks().forEach(function (track) {
      if (track.readyState === "live") {
        track.stop();
      }
    });
  };

  recorder.ondataavailable = function (event) {
    let recordedBlob = event.data;
    let url = URL.createObjectURL(recordedBlob);
    let a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.target = "_blank";
    a.download = "screen-recording.webm";
    a.download = url + ".webm";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    console.log(url);

    // const app = firebase.initializeApp(firebaseConfig);
    // const storage = firebase.storage();
    // const storageRef = ref(storage, "folder/myscreenrecord.webm");
    // uploadBytes(storageRef, recordedBlob).then((snapshot) => {
    //   console.log("uploaded");
  };
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "request_recording") {
    console.log("requesting recording");
    sendResponse("processed: ${message.action}");
    navigator.mediaDevices
      .getDisplayMedia({
        audio: true,
        video: {
          width: 999999999,
          height: 999999999,
        },
      })
      .then((stream) => {
        onAccessApproved(stream);
      });
    return true;
  }
  if (message.action === "stopvideo") {
    console.log("stopping video");
    sendResponse("processed: ${message.action}");
    if (!recorder) return console.log("no recorder");
    recorder.stop();
    return sendResponse("Video recording stopped");
  }
});
