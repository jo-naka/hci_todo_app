// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
var firebase = require("firebase/app");
// Add the Firebase products that you want to use
require("firebase/auth");

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBJJeojDkkpoEYkv8gsNN5SBFI23JqI6Mo",
  authDomain: "todo-manage-79493.firebaseapp.com",
  projectId: "todo-manage-79493",
  storageBucket: "todo-manage-79493.appspot.com",
  messagingSenderId: "362635062589",
  appId: "1:362635062589:web:ec45e6d73424b661a42954"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);