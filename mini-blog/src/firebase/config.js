import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase"

const firebaseConfig = {
  apiKey: "AIzaSyDqeggWHJSCLsSz-UQv-HkNr0GJ0ghPkak",
  authDomain: "mini-blog-e1a40.firebaseapp.com",
  projectId: "mini-blog-e1a40",
  storageBucket: "mini-blog-e1a40.appspot.com",
  messagingSenderId: "1082862398220",
  appId: "1:1082862398220:web:d5660be96c7be7fcc0f729",
  measurementId: "G-4DB051SJJ3"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }