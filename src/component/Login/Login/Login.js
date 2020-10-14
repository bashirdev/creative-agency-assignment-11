// import React from 'react';
// import * as firebase from "firebase/app";
// import "firebase/auth";
// import firebaseConfig from './Firebase.Config';
// import { useHistory, useLocation } from 'react-router-dom';
// const Login = () => {

//     const history = useHistory();
//     const location = useLocation();

//     var provider = new firebase.auth.GoogleAuthProvider();
//     const { from } = location.state || { from: { pathname: "/" } };

//     if(firebase.apps.length ===0){
//         firebase.initializeApp(firebaseConfig);
//     }
//     const handleGoogleLogin = () => {

//         firebase.auth().signInWithPopup(provider).then(function(result) {
//             // This gives you a Google Access Token. You can use it to access the Google API.
//             var token = result.credential.accessToken;
//             // The signed-in user info.
//             var user = result.user;
//             // ...
//           }).catch(function(error) {
//             // Handle Errors here.
//             var errorCode = error.code;
//             var errorMessage = error.message;
//             // The email of the user's account used.
//             var email = error.email;
//             // The firebase.auth.AuthCredential type that was used.
//             var credential = error.credential;
//             // ...
//           });
    
//     };

//     return (
//         <div>
            
//         </div>
//     );
// };

// export default Login;