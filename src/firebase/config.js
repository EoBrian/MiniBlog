import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDqeggWHJSCLsSz-UQv-HkNr0GJ0ghPkak",
  authDomain: "mini-blog-e1a40.firebaseapp.com",
  projectId: "mini-blog-e1a40",
  storageBucket: "mini-blog-e1a40.appspot.com",
  messagingSenderId: "1082862398220",
  appId: "1:1082862398220:web:7fcc2125f813e0c1c0f729",
  measurementId: "G-908XQ2J0XT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app)


const db = getFirestore(app)

export { db }