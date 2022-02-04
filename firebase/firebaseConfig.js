import * as firebase from "firebase";

export const config = () => {
  const con = {
    apiKey: "AIzaSyB4xf5u4Shya4hOWSGweTK1yfr-PxCVEEo",
    authDomain: "react-native-mealstogo.firebaseapp.com",
    projectId: "react-native-mealstogo",
    storageBucket: "react-native-mealstogo.appspot.com",
    messagingSenderId: "668499614311",
    appId: "1:668499614311:web:a1b0745190419ecb4ad2c2",
  };

  return firebase.initializeApp(con);
};
