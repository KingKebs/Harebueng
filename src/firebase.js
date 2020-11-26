import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
apiKey: "AIzaSyAnzqJjxipGxYd78674ZlcLeSxZggol63M",
  authDomain: "harebueng-shopo.firebaseapp.com",
  databaseURL: "https://harebueng-shopo.firebaseio.com",
  projectId: "harebueng-shopo",
  storageBucket: "harebueng-shopo.appspot.com",
  messagingSenderId: "914265192825",
  appId: "1:914265192825:web:b2539cbbfc240c6951d7a8",
  measurementId: "G-G7DXGJ8V32"

});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };