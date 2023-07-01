// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, setUserId } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendEmailVerification,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  addDoc,
  updateDoc,
  getDoc,
  collection,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBdzKfH745iLNvnF_MWnKyIllBBJkPMmmM",
  authDomain: "inventory-app-1866f.firebaseapp.com",
  projectId: "inventory-app-1866f",
  storageBucket: "inventory-app-1866f.appspot.com",
  messagingSenderId: "668859288146",
  appId: "1:668859288146:web:24a6b2f106d60b12562d8b",
  measurementId: "G-TDS3Q8QB9N",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth();
const db = getFirestore(app);

export const login = async (email, password, setNotification, setUser) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    setUser({ id: user.uid, email: email });
    return true;
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    setNotification(error.message);
    throw errorMessage;
  }
};

export const getUserState = async () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);
      return { user: user, isOnline: true };
    } else {
      return { user: null, isOnline: false };
    }
  });
};

export const getData = async (col, id) => {
  const docRef = doc(db, col, id);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    return docSnap.data();
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
    return null;
  }
};

export const getUser = (setIsLoading) => {
  setIsLoading(true);
  return new Promise((resolve, reject) => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userData = await getData("users", user.uid);
        if (!userData) {
          setIsLoading(false);
          resolve({ user: null, isOnline: false });
        } else {
          setIsLoading(false);
          resolve({ user: userData, isOnline: true });
        }
      } else {
        setIsLoading(false);
        resolve({ user: null, isOnline: false });
      }
    });
  });
};

export const sendMail = async () => {
  sendEmailVerification(auth.currentUser).then(() => {
    // Email verification sent!
    // ...
  });
};

export const createData = async (colName, data) => {
  const docRef = await addDoc(collection(db, colName), {
    data,
  });
  console.log("Document written with ID: ", docRef.id);
};

export const updateData = async () => {
  const washingtonRef = doc(db, "cities", "DC");

  // Set the "capital" field of the city 'DC'
  await updateDoc(washingtonRef, {
    capital: true,
  });
};
