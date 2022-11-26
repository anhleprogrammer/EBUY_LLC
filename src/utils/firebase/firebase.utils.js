// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKyQBW0WSzpzi1Ly6Af8IHl-0-GiQuqro",
  authDomain: "ebuyllc-916af.firebaseapp.com",
  projectId: "ebuyllc-916af",
  storageBucket: "ebuyllc-916af.appspot.com",
  messagingSenderId: "624410407762",
  appId: "1:624410407762:web:da49af663dc178c61ec08b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGoogle = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocument = async (userAuth, extraInfor = {}) => {
  //Reference to the a user document inside users collection within the database
  const userDocRef = doc(db, "users", userAuth.uid);

  //Snapshot is the data of the document's reference
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createDate = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createDate,
        ...extraInfor,
      });
    } catch (e) {
      console.log(e);
    }
  }
  return userDocRef;
};

export const createUserWithCredentials = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
