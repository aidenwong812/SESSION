import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "session-49c98.firebaseapp.com",
  projectId: "session-49c98",
  storageBucket: "session-49c98.appspot.com",
  messagingSenderId: "891853708828",
  appId: "1:891853708828:web:40b3f4c8cd1f84122d49d9",
  measurementId: "G-PDWZST4BEH",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

auth.languageCode = "en-GB"

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app)

export { auth, db }
