import firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyBcQiENa7-3t3hbbglxjdP3UqATFnuRCTY",
  authDomain: "test-d9c12.firebaseapp.com",
  databaseURL: "https://test-d9c12.firebaseio.com",
  projectId: "test-d9c12",
  storageBucket: "test-d9c12.appspot.com",
  messagingSenderId: "643688174367",
  appId: "1:643688174367:web:3e4cf10dbe376de87c962a"
}

firebase.initializeApp(config)
const db = firebase.firestore()

export const dbMenuRef = db.collection('menu')