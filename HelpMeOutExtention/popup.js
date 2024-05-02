import { storage } from "./firebase";
import { ref, uploadBytes } from "firebase/storage";
var channel = new BroadcastChannel('videoChannel');
channel.onmessage = function(event) {
    // Use the received video data
    var videoData = event.data.videoData;
    console.log('Received video data:', videoData);
    // Example: Create a video element and set its source to the received data
    var videoElement = document.createElement('video');
    videoElement.src = videoData;
    document.body.appendChild(videoElement);
    const app = firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
const storageRef = ref(storage, "folder/myscreenrecord.webm");
uploadBytes(storageRef, videoData).then((snapshot) => {
  console.log("uploaded");
});
};




