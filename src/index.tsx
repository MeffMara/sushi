import './index.css'
import App from './App'
import React from 'react'
import ReactDOM from 'react-dom'
import firebase from 'firebase/compat/app'

firebase.initializeApp({
  apiKey: 'AIzaSyC5OVLCOw-i5vNgsdN6C5tPBxBvTqaIexE',
  authDomain: 'shushi-appua.firebaseapp.com',
  projectId: 'shushi-appua',
  storageBucket: 'shushi-appua.appspot.com',
  messagingSenderId: '125471810618',
  appId: '1:125471810618:web:1fe23b09b9025737d64103',
  measurementId: 'G-PQVBT4FMC6',
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
