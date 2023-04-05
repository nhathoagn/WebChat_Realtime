import firebase from "firebase/compat/app";
import "firebase/compat/analytics";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBcNNnTf6_z41cB7YlrBWUUsquA5kl0IsE",
  authDomain: "chatapp-reactjs-229c1.firebaseapp.com",
  projectId: "chatapp-reactjs-229c1",
  storageBucket: "chatapp-reactjs-229c1.appspot.com",
  messagingSenderId: "185915564399",
  appId: "1:185915564399:web:40d52710a28278b8bb089a",
  measurementId: "G-X407J1N8LE",
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();
// auth.useEmulator('http://localhost:9096')
// if (window.location.hostname === 'localhost'){
//     db.useEmulator('localhost','8086')
// }
export { db, auth };
export default firebase;
