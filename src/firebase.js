import firbase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firbase.initializeApp({
  apiKey: "AIzaSyChpIc2or-UgfXFONdK5dEZJOaS9QVy8Ss",
  authDomain: "todoistclone-4f716.firebaseapp.com",
  databaseURL: "https://todoistclone-4f716.firebaseio.com",
  projectId: "todoistclone-4f716",
  storageBucket: "todoistclone-4f716.appspot.com",
  messagingSenderId: "533251034005",
  appId: "1:533251034005:web:34c9d4e5460267982dc49c",
});

export { firebaseConfig as firebase };
