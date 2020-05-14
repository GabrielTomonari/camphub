import app from 'firebase/app'
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyA_iiD5fF9NKKewHL71Nur7QBEIhYpWt4Y",
  authDomain: "camphub-5f662.firebaseapp.com",
  databaseURL: "https://camphub-5f662.firebaseio.com",
  projectId: "camphub-5f662",
  storageBucket: "camphub-5f662.appspot.com",
  messagingSenderId: "336033665044",
  appId: "1:336033665044:web:94c271a97ac337ee145701",
  measurementId: "G-HQMJ9V8RGY"
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);
}

export default Firebase;