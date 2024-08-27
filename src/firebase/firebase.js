import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7IopoQbBP0v1cFbYT3zS1ZzLyFpDFV68",
  authDomain: "student-dashboard-fdba3.firebaseapp.com",
  projectId: "student-dashboard-fdba3",
  storageBucket: "student-dashboard-fdba3.appspot.com",
  messagingSenderId: "281473335442",
  appId: "1:281473335442:web:32fbf212b3f2b32a6b664b",
  measurementId: "G-89BXXR0XR3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth };
