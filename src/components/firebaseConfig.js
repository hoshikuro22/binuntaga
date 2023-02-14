
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAsVk_0KYd-V4K-WBFjTklxFFRE960vAYA",
  authDomain: "binuntaga.firebaseapp.com",
  projectId: "binuntaga",
  storageBucket: "binuntaga.appspot.com",
  messagingSenderId: "570395601062",
  appId: "1:570395601062:web:b9300609848e5fc0f1ec67"
  };
  

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore();


