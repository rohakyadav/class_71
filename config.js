import * as firebase from 'firebase'
require('@firebase/firestore')

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAiYOjBPXYfyGHZf7E3bjMNUQJA8ep7rUQ",
    authDomain: "wilylibraryapp.firebaseapp.com",
    projectId: "wilylibraryapp",
    storageBucket: "wilylibraryapp.appspot.com",
    messagingSenderId: "662185255245",
    appId: "1:662185255245:web:8f7d10d96da2580f971704"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export default firebase.firestore()