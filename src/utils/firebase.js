// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {
  getStorage,
  ref as sRef,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import {
  getDatabase,
  set,
  get,
  ref,
  child,
  update,
  off,
  push,
  onValue,
} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA1zmiWZ3CrEKwOv1_mnprsXUDiHRuF0Wo",
  authDomain: "yo-invierto-development.firebaseapp.com",
  databaseURL: "https://yo-invierto-development-default-rtdb.firebaseio.com",
  projectId: "yo-invierto-development",
  storageBucket: "yo-invierto-development.appspot.com",
  messagingSenderId: "735172767787",
  appId: "1:735172767787:web:aa7d8446ba74ac313a7a6e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const userRef = ref(db, "users");

//File Storage Settings
const storage = getStorage(app);
const imagesRef = sRef(storage, "images");

export const uploadImage = async (file) => {
  //Generates unique ID for the image using the date
  const uniqueId = Date.now().toString();

  //Creates path within storage
  const imageRef = sRef(imagesRef, uniqueId);

  //Uploads the File
  return await uploadBytes(imageRef, file).then((snapshot) => {
    console.log("snapshotsnapshot", snapshot)
    return snapshot["ref"]["_location"];
  });
};

//Creates user entry in RealTime Database
export const createUser = async (formData, uid) => {
  //Object with user presets
  const userData = {
    isAdmin: false,
    signupDate: Date.now(),
    fullName: {
      name: formData.name,
      surname: formData.lastName,
    },
    DNI: formData.DNI,
  };

  return set(child(userRef, uid), userData);
};

export const getUserData = async (uid) => {
  try {
    const snapshot = await get(child(userRef, uid));
    if (snapshot.exists()) {
      console.log("Data received from db:", snapshot.val());
      return snapshot.val();
    } else {
      console.log("No data available");
      return null; // Or handle the absence of data as needed
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error; // Rethrow the error or handle it according to your needs
  }
};

export const getAllUsers = async (uid) => {
  try {
    const snapshot = await get(userRef);
    if (snapshot.exists()) {
      console.log("Data received from db:", snapshot.val());
      return snapshot.val();
    } else {
      console.log("No data available");
      return null; // Or handle the absence of data as needed
    }
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error; // Rethrow the error or handle it according to your needs
  }
};

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
