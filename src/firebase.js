import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyB6N0gmT6qzvojjejD8NlwHjMdPt-U1FTU",
  authDomain: "todolist-d9ae6.firebaseapp.com",
  databaseURL: "https://todolist-d9ae6.firebaseio.com",
  projectId: "todolist-d9ae6",
  storageBucket: "todolist-d9ae6.appspot.com",
  messagingSenderId: "24791510622",
  appId: "1:24791510622:web:07bbc18308027c1c864ecf",
  measurementId: "G-HQE2E3GK4M"
});
const db = firebaseApp.firestore();
export default db;