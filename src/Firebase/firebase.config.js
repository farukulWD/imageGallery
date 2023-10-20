import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAZxbqwYcNO8YhmBKS2NVemEVl1c0jrdcY",
  authDomain: "imagegallery-c10e3.firebaseapp.com",
  projectId: "imagegallery-c10e3",
  storageBucket: "imagegallery-c10e3.appspot.com",
  messagingSenderId: "150237357464",
  appId: "1:150237357464:web:3768b341f9274bb41577ed",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;
