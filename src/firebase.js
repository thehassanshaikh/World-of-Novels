import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjQ3xovwnlqwmqLLH5fntGCOZCpusGQ5Y",
  authDomain: "worldofnovels-41c7e.firebaseapp.com",
  projectId: "worldofnovels-41c7e",
  storageBucket: "worldofnovels-41c7e.appspot.com",
  messagingSenderId: "491591629497",
  appId: "1:491591629497:web:cb5d9fc8edbd6960947968",
  measurementId: "G-SSCVJNRBTG"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);