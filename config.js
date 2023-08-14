import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyB6KqhtJKrr_qnXd9-PSwc2pSLZQEEZvcs",
  authDomain: "bicycle-c61b9.firebaseapp.com",
  projectId: "bicycle-c61b9",
  storageBucket: "bicycle-c61b9.appspot.com",
  messagingSenderId: "315186717378",
  appId: "1:315186717378:web:3d82a962e8f1196e06115b"
};





firebase.initializeApp(firebaseConfig);

export default firebase.firestore();


