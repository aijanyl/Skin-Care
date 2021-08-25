import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyCfVHTdO2X_DUJVq5GA2BDPC-YAhUBxP8Q",
    authDomain: "violet-project-32bf2.firebaseapp.com",
    projectId: "violet-project-32bf2",
    storageBucket: "violet-project-32bf2.appspot.com",
    messagingSenderId: "1076744693074",
    appId: "1:1076744693074:web:67e0fb67529406038bc68b",
    measurementId: "G-53ECFQVPEJ"
})

export const auth = app.auth()
export default app