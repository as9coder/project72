import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBOIDZSdo4TozefJKSLuIQ037l-NORqE4o",
  authDomain: "bicycle-f24b0.firebaseapp.com",
  projectId: "bicycle-f24b0",
  storageBucket: "bicycle-f24b0.appspot.com",
  messagingSenderId: "18970019061",
  appId: "1:18970019061:web:22bc02be2e9fd710da31bc"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
