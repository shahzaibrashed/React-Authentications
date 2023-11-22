import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCMqCxObmt6x42A1vnQbiRpzzgoY1NGSWA",
  authDomain: "react-project-1-mod-b.firebaseapp.com",
  projectId: "react-project-1-mod-b",
  storageBucket: "react-project-1-mod-b.appspot.com",
  messagingSenderId: "795695367442",
  appId: "1:795695367442:web:169c17e8a47d7fad6fdfcb",
  measurementId: "G-7Q2KZZZJC3"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export{
    auth
}