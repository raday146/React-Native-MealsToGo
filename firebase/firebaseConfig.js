import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyB4xf5u4Shya4hOWSGweTK1yfr-PxCVEEo",
  authDomain: "react-native-mealstogo.firebaseapp.com",
  projectId: "react-native-mealstogo",
  storageBucket: "react-native-mealstogo.appspot.com",
  messagingSenderId: "668499614311",
  appId: "1:668499614311:web:a1b0745190419ecb4ad2c2",
};
let app;
let firebasecIns;

if (firebase.apps.length === 0) {
  firebasecIns = firebase.initializeApp(config);
} else {
  firebasecIns = firebase.app();
}
const auth = firebase.default.auth;
export { auth, firebasecIns };
