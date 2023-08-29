// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//! import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDu1GcK_bE5tnPPNNv1dON9iHCY-0Qk1WQ",
  authDomain: "pcgear-b22e7.firebaseapp.com",
  projectId: "pcgear-b22e7",
  storageBucket: "pcgear-b22e7.appspot.com",
  messagingSenderId: "739257822629",
  appId: "1:739257822629:web:6f2860a4781475de1bcc4c",
};

const app = initializeApp(firebaseConfig);

//! const analytics = getAnalytics(app);

export const db = getFirestore(app);
