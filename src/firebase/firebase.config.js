// import { initializeApp } from 'firebase/app'

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_apiKey,
//   authDomain: import.meta.env.VITE_authDomain,
//   projectId: import.meta.env.VITE_projectId,
//   storageBucket: import.meta.env.VITE_storageBucket,
//   messagingSenderId: import.meta.env.VITE_messagingSenderId,
//   appId: import.meta.env.VITE_appId,
// }

// export const app = initializeApp(firebaseConfig)




// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDo0D731WDDKt6VswNnyyXS4-2p6W7KkOk",
  authDomain: "sk-events-manegement.firebaseapp.com",
  projectId: "sk-events-manegement",
  storageBucket: "sk-events-manegement.appspot.com",
  messagingSenderId: "960707275841",
  appId: "1:960707275841:web:2d71f7289f9aaf127eeac0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);