import { auth } from "../../../firebase/firebaseConfig";

export const loginRequest = (email, password) =>
  auth().signInWithEmailAndPassword(email, password);
