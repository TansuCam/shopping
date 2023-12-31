import { initializeApp } from "firebase/app";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyAqpS-ivmleLmUnqq5D_EgEyujgJGwxzMQ",
  authDomain: "shopping-bff10.firebaseapp.com",
  projectId: "shopping-bff10",
  storageBucket: "shopping-bff10.appspot.com",
  messagingSenderId: "671602144802",
  appId: "1:671602144802:web:4cadbd24e6f3597cd0fc7b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export const db = getFirestore(app);

// User Login
export const register = async (email: string, password: string) => {
  return await createUserWithEmailAndPassword(auth, email, password);
};

export default app;
