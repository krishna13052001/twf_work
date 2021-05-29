import firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyD8uqAjRpgeXUNRSRaY_TvDIW4J87oN7YI",
    authDomain: "twf-work-auth.firebaseapp.com",
    projectId: "twf-work-auth",
    storageBucket: "twf-work-auth.appspot.com",
    messagingSenderId: "8389033194",
    appId: "1:8389033194:web:5374c880e31d4cd9e72b93",
    measurementId: "G-PQWVE3RG95"
  };

const connection  = firebase.initializeApp(firebaseConfig);

export default connection;