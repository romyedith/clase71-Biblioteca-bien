import firebase from "firebase";
require("@firebase/firestore");


const firebaseConfig = {
  apiKey: "AIzaSyAKUermT9C6aLnjBNhFfe7AArUpje9nriE",
  authDomain: "biblioteca-fdf22.firebaseapp.com",
  projectId: "biblioteca-fdf22",
  storageBucket: "biblioteca-fdf22.appspot.com",
  messagingSenderId: "700944767800",
  appId: "1:700944767800:web:d86882acaa790971fe7fcd"
};
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
