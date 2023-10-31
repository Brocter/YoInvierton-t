// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
import {getDatabase,set,get,ref,update,off,push,onValue} from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyA1zmiWZ3CrEKwOv1_mnprsXUDiHRuF0Wo",
  authDomain: "yo-invierto-development.firebaseapp.com",
  databaseURL: "https://yo-invierto-development-default-rtdb.firebaseio.com",
  projectId: "yo-invierto-development",
  storageBucket: "yo-invierto-development.appspot.com",
  messagingSenderId: "735172767787",
  appId: "1:735172767787:web:aa7d8446ba74ac313a7a6e"
};
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_API_KEY,
//   authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_APP_ID,
//   databaseURL: import.meta.env.VITE_DATABASE_URL, // If you need databaseURL
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app)

//Creates user entry in RealTime Database
export const createUser = async (formData, uid) => {

  //Object with user presets
  const userData = {
    isAdmin: false,
    signupDate: Date.now(),
    fullName: {
      name: formData.name,
      surname: formData.lastName
    },
    DNI: formData.DNI,
  } 

  return set(ref(db, "users" + "/" + uid), userData);
}

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider()

