import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDHM1H-4oXu_t2e_bOkEtIDMRvFI-esYnk",
  authDomain: "fcursos-11525.firebaseapp.com",
  databaseURL: "https://fcursos-11525.firebaseio.com",
  projectId: "fcursos-11525",
  storageBucket: "fcursos-11525.appspot.com",
  messagingSenderId: "21374834813",
  appId: "1:21374834813:web:250dc0fae63aa84c997914",
};
// Initialize Firebase

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;
