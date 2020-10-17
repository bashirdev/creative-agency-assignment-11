import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import { Link, useHistory, useLocation } from 'react-router-dom';
import { userContext } from '../../../App';
import firebaseConfig from './FirebaseConfig';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  } from '@fortawesome/free-solid-svg-icons';
// import {  faCoffe } from '@fortawesome/free-regular-svg-icons';
import {  faGoogle } from '@fortawesome/free-brands-svg-icons';
import logo from '../../../images/logos/logo.png';

const Login = () => {

 
    const [loggedInUser, setLoggedInUser]= useContext(userContext);
  
    const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: "/order" } };

 if(firebase.apps.length === 0){
    firebase.initializeApp(firebaseConfig);
 }
  const handleGoogleSignIn=()=>{
    const provider = new firebase.auth.GoogleAuthProvider();
   firebase.auth().signInWithPopup(provider)
   .then((result)=> {
       const {displayName, email} = result.user;
       const signedInUser={name:displayName, email}
       setLoggedInUser(signedInUser);
       StoreAuthToken();
      
      })
      .catch((error)=> {
         const errorMessage=error.message;
         console.log(errorMessage);
      });
        
};

const StoreAuthToken=()=>{
  firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
  .then((idToken) =>{
    sessionStorage.getItem('token', idToken);
    history.replace(from);
    // Send token to your backend via HTTPS
    // ...
  }).catch(function(error) {
    // Handle error
  });
}
    return (
      <div className="text-center">
      <div className=' align-items-center  mt-5'>
        <img style={{height:'47px'}} src={logo} alt="" />
        </div>
        <div className='d-flex justify-content-center'>
          <div style={{marginTop:'100px', width:"300px", height:'300px'}} className="card text-center justify-content-center align-items-center">
         
          <div className='logn-form  '>
          <h3>Login with</h3>
            <button style={{backgroundColor:'none', border:'1px solid gray'}} className="btn w-75 border my-3" onClick={handleGoogleSignIn}>
           <FontAwesomeIcon className='mr-3' icon={faGoogle} /> Google Sign in</button>
           <p> <small>Don't have an account? <Link to='/login'>Create an account</Link></small></p>
           
            </div>
          </div>
          </div>
    </div>
    );
};
  

export default Login;