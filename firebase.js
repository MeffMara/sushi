// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC5OVLCOw-i5vNgsdN6C5tPBxBvTqaIexE',
  authDomain: 'shushi-appua.firebaseapp.com',
  projectId: 'shushi-appua',
  storageBucket: 'shushi-appua.appspot.com',
  messagingSenderId: '125471810618',
  appId: '1:125471810618:web:1fe23b09b9025737d64103',
  measurementId: 'G-PQVBT4FMC6',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
