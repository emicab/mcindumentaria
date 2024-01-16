// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2xEB5BfE4f0FlyBSvh1hG7i_1LlcBJsg",
  authDomain: "mariacindumentaria-828b9.firebaseapp.com",
  projectId: "mariacindumentaria-828b9",
  storageBucket: "mariacindumentaria-828b9.appspot.com",
  messagingSenderId: "133748274067",
  appId: "1:133748274067:web:15a9c006549c180c1b2e66",
  measurementId: "G-2W2JHQ6KSE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);