import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIpEQUrb22_8YCf8hnj2_woCXhbRhdcqQ",
  authDomain: "react-slack-59273.firebaseapp.com",
  projectId: "react-slack-59273",
  storageBucket: "react-slack-59273.appspot.com",
  messagingSenderId: "1096392586098",
  appId: "1:1096392586098:web:38c2385867b56b019d23eb"
};

  // Use this to initialize the firebase App
  const firebaseapp = firebase.initializeApp(firebaseConfig);

  // Use these for db, auth & provider
  const db = firebaseapp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider }
