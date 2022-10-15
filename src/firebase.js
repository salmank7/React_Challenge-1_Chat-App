import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage} from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyDdVMfSHosSoZ4cP5dTIOcNJaX63ar0tdE",
  authDomain: "warhsapp-d8324.firebaseapp.com",
  projectId: "warhsapp-d8324",
  storageBucket: "warhsapp-d8324.appspot.com",
  messagingSenderId: "954784512071",
  appId: "1:954784512071:web:a3ed01f23eb8b918175962",
  measurementId: "G-RNMD3S54QH"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db = getFirestore(app);
// const analytics = getAnalytics(app);