// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBT0AnZTGYfu6WDST5v_iul5C2xIkcr74g",
  authDomain: "helpmeout-bd0f2.firebaseapp.com",
  projectId: "helpmeout-bd0f2",
  storageBucket: "helpmeout-bd0f2.appspot.com",
  messagingSenderId: "274579447622",
  appId: "1:274579447622:web:0cf23c9e19bf1bb1208f47",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
import { getStorage } from "firebase/storage";
const storage = getStorage(app);
export { storage };


