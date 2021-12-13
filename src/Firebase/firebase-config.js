import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCA-vXVwrJqdRHr1f9tHZvb7TYTQwaIZi4",
  authDomain: "bank-react-task.firebaseapp.com",
  projectId: "bank-react-task",
  storageBucket: "bank-react-task.appspot.com",
  messagingSenderId: "936217977564",
  appId: "1:936217977564:web:8d4549876b31619ad20a19",
  measurementId: "G-0VP0RR06VM",
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth();
