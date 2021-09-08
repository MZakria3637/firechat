import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAPk9tMxwDa05Mm08gGGfM2WYmARlp5zGo",
    authDomain: "firechat-cb150.firebaseapp.com",
    projectId: "firechat-cb150",
    storageBucket: "firechat-cb150.appspot.com",
    messagingSenderId: "276605731835",
    appId: "1:276605731835:web:2bbd48f99395edef12015e",
    measurementId: "G-B1G5ETTV99"
});
const db = firebase.firestore();
const auth = firebase.auth();
export { db, auth };