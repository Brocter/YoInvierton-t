// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import {
  getStorage,
  ref as sRef,
  uploadBytes,
  getDownloadURL,
  deleteObject
} from "firebase/storage";
import {
  getDatabase,
  set,
  get,
  ref,
  child,
  update,
  remove,
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
    console.log("snapshotsnapshot", snapshot);
    return snapshot["ref"]["_location"];
  });
};

export const retrieveImage = async (url) => {
  console.log("search URL", url);
  return getDownloadURL(sRef(storage, url))
    .then((url) => {
      // `url` is the download URL for 'images/stars.jpg'
      return url;
    })
    .catch((error) => {
      // Handle any errors
      console.log("Error retrieving the image");
    });
};

export const retrieveInvestments = async (callback, top) => {
  const investmentRef = ref(db, "investments/regazzoni");

  if (top){
    console.log("TOP 3 REQUESTED")
    const snapshot = await get(investmentRef);

    if (snapshot.exists()) {
      let  investment = Object.values(snapshot.val());

      //Filter Properties
      investment.sort((investmentA, investmentB)=> {
        return investmentB["comprometida"] - investmentA["comprometida"]
      })

      const topArr = investment.slice(0, 3)

      return topArr;
    } else {
      console.log("No data available");
      return null; // Or handle the absence of data as needed
    }
  }else{
    onValue(investmentRef, (snapshot) => {
      const data = snapshot.val();
      callback(data); // Assuming postElement is defined somewhere else
    });
  }
 
};

//Creates user entry in RealTime Database
export const createUser = async (formData, uid) => {
  const userRef = ref(db, "users");

  //Object with user presets
  const userData = {
    isAdmin: false,
    signupDate: Date.now(),
    fullName: {
      name: formData.name,
      surname: formData.lastName,
    },
    DNI: formData.DNI,
    investments: [],
  };

  return set(child(userRef, uid), userData);
};

//Creates user entry in RealTime Database
export const createInvestment = async (formData, id) => {
  const investmentRef = ref(db, "investments/regazzoni");
  return set(child(investmentRef, id), formData);
};

//Delete Investment from the ivnestment object, and any instance
//of it within the user investments list.

export const deleteInvestment = async (targetInvestment, imgUrl) => {

  const userRef = ref(db, "users");
  const investmentRef = ref(db, "investments/regazzoni");
  //Search for references to the investment in all users and delete them

  const allUsersSnapshot = await get(userRef);
  const allUsersObj = allUsersSnapshot.val()

  Object.entries(allUsersObj).forEach(([uid, data]) => {
    let userInvestmentsRef = ref(db, `users/${uid}/investments`);
    data["investments"] && Object.keys(data["investments"]).forEach((investmentKey) => {

      if (investmentKey == targetInvestment){
        const deletedUserInvestment = child(userInvestmentsRef, investmentKey)
        remove(deletedUserInvestment)
      }
    });
  });

  const deletedInvestment = child(investmentRef, targetInvestment)
  const deletedImg = sRef(storage, imgUrl)

  console.log("IMGGG", deletedImg)

  //Delete investment card
  deleteObject(deletedImg).then(()=>{
    remove(deletedInvestment);
  })
};

export const addInvestment = async (uid, newInvestment) => {
  try {

    //Get references to DB
    const investmentCardRef = ref(db, "investments/regazzoni");
    const userInvestmentsRef = ref(db, "users/" + uid + "/investments");

    //Retrieve Total Invested in Property
    const investmentSnapshot = await get(child(investmentCardRef, newInvestment.investment));
    const investmentData = investmentSnapshot.val()

    console.log("investmentDatainvestmentData", investmentData)

    //Create investment in Database
    await set(child(userInvestmentsRef, newInvestment.investment), newInvestment.investmentAmount);

    console.log("AHHHHHHHHHHHHHHHHHHHHHHHHHHHH",  investmentData["comprometida"], newInvestment.investmentAmount)

    //Update Compromised Invesment in Card
    updateInvestmentCard(newInvestment.investment, investmentData["comprometida"] + newInvestment.investmentAmount);

  } catch (error) {
    console.error("Error in addInvestment:", error);
    throw error;
  }
};

export const updateInvestment = async (uid, investment, operation, modifyAmount) => {
  try {

    //Get references for Investment Card and User Investment
    const investmentCardRef = ref(db, "investments/regazzoni");
    const userInvestmentsRef = ref(db, "users/" + uid + "/investments");

    //Bring the actual data from those references
    const investmentSnapshot = await get(child(investmentCardRef, investment));
    const investmentData = investmentSnapshot.val()

    const userInvestmentSnapshot = await get(child(userInvestmentsRef, investment));
    const userInvestmentData = userInvestmentSnapshot.val()


    if (operation == "sum"){
      await updateInvestmentCard(investment, investmentData["comprometida"] + modifyAmount);
      await updateUserInvestment(investment, userInvestmentData + modifyAmount, uid);
    }else if(operation == "substraction"){
      await updateInvestmentCard(investment, investmentData["comprometida"] - modifyAmount);
      await updateUserInvestment(investment, userInvestmentData - modifyAmount, uid);
    } else if(operation == "delete"){
      await updateInvestmentCard(investment, investmentData["comprometida"] - userInvestmentData);
      await updateUserInvestment(investment, null, uid);
    }
  } catch (error) {
    console.error("Error when updating investments", error);
    throw error;
  }
};

export const updateInvestmentCard = async (investment, updatedValue) => {
  console.log("value to modify", investment)

  const investmentCardRef = ref(db, "investments/regazzoni");
  const updatedInvestmentCardValue = {comprometida: updatedValue};
  await update(child(investmentCardRef, investment), updatedInvestmentCardValue);
}

export const updateUserInvestment = async (investment, updatedValue, uid) => {
  console.log("updatedValue", updatedValue)
  const userInvestmentsRef = ref(db, "users/" + uid + "/investments");
  const  updatedUserInvestmentValue = {[investment]: updatedValue};
  await update(userInvestmentsRef, updatedUserInvestmentValue);
}

export const getUserData = async (uid) => {
  const userRef = ref(db, "users");
  console.log("received user ID", uid)
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

export const getAllUsers = async (callback) => {
  try {
    const userRef = ref(db, "users");
    onValue(userRef, (snapshot) => {
      const data = snapshot.val();
      callback(data); // Assuming postElement is defined somewhere else
    });
  } catch (error) {
    throw error; // Rethrow the error or handle it according to your needs
  }
};

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
