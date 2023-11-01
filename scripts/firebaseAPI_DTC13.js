//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyDUBCrUPB5D6mq_tHmlwAR0zKWai0kzOrw",
    authDomain: "comp-1800-group-project.firebaseapp.com",
    projectId: "comp-1800-group-project",
    storageBucket: "comp-1800-group-project.appspot.com",
    messagingSenderId: "400433726157",
    appId: "1:400433726157:web:ecf633587d57e5530e9f84"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();