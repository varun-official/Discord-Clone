/** @format */
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBp1k_us2vXVlxkmljDMv1V6gyPJUzndUw",
  authDomain: "discord-clone-db97e.firebaseapp.com",
  databaseURL: "https://discord-clone-db97e.firebaseio.com",
  projectId: "discord-clone-db97e",
  storageBucket: "discord-clone-db97e.appspot.com",
  messagingSenderId: "548780290669",
  appId: "1:548780290669:web:57fb49c3a37d180ec54564",
  measurementId: "G-V0YF70LP9Y",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider};
export default db;