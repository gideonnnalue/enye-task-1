import firebase from "firebase/app";
import "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBOLy8hwebDxz_NUwuAPhVI1Sjvf4joxEU",
  authDomain: "enye-user-form.firebaseapp.com",
  databaseURL: "https://enye-user-form.firebaseio.com",
  projectId: "enye-user-form",
  storageBucket: "enye-user-form.appspot.com",
  messagingSenderId: "873512907717",
  appId: "1:873512907717:web:92b7888a5c5a00bfb951ac",
  measurementId: "G-QV3K4SGY48"
};

firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();
const firebaseUsers = firebaseDB.ref("users");

export { firebase, firebaseDB, firebaseUsers };
