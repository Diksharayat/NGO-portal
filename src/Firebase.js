import firebase from "firebase";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtTW_yceTx0Bl1s6UbFczBb8rC8AP0S1s",
  authDomain: "ngo-908ba.firebaseapp.com",
  projectId: "ngo-908ba",
  storageBucket: "ngo-908ba.appspot.com",
  messagingSenderId: "795504236429",
  appId: "1:795504236429:web:f34e2768a11d32ff1a8fc4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const storage = firebaseApp.storage();
const auth = firebaseApp.auth();

export { db, auth, storage };
