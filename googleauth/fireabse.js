import firebase from 'firebase/app'; 
import 'firebase/auth';


export const firebaseConfig = {
    apiKey: "AIzaSyDIVzExgSEiGwkkNwnFRJ00FXv5c_kWGCg",
    authDomain: "babu-s-blog.firebaseapp.com",
    projectId: "babu-s-blog",
    storageBucket: "babu-s-blog.appspot.com",
    messagingSenderId: "968411893966",
    appId: "1:968411893966:web:1b5bfd86d3d3a4253fc09f"
}


export const initializeLoginFramework = () => {
    if(firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
}


const setUser = (res) => {
  localStorage.setItem("loggedinUser", JSON.stringify(res)); 
}


export const signInWithGoogle = () => {
const googleProvider = new firebase.auth.GoogleAuthProvider();
   return firebase.auth()
  .signInWithPopup(googleProvider)
  .then((result) => {
    const {displayName, email, photoURL} = result.user;
    const signedInUser = {
        name:displayName, 
        email:email,
        img:photoURL 
    }
    setUser(signedInUser);
    return signedInUser ;
    // ...
  }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
}







export default firebase;