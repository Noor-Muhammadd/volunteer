import React, { useContext, useState } from 'react';
import './Login.css'
import { Link, useHistory, useLocation } from 'react-router-dom';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebaseConfig';
import { UserContext } from '../../App';

const Login = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [user, setUser] = useState({
        isSiggnedIn: false,
        name: '',
        email:'',
    });


    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    let history = useHistory();
    let location = useLocation();

    let { from } = location.state || { from: { pathname: "/" } };

    const googleSingIn = () =>{
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider)
        .then(result =>{
            const {displayName, email} = result.user;   //Destructure
            const signedInUser = {
                isSiggnedIn: true,
                name: displayName,
                email: email
            }
            setUser(signedInUser);
            setLoggedInUser(signedInUser);
            console.log(user);
            history.replace(from);
          })
          .catch(error => {
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(errorCode, errorMessage);
          });
    }
    return (
        <div className="loginContainer">
            <div className="p-5">
                <Link to="/home"><img src="https://iili.io/2VACFV.png" style={{width: 200}} className="d-inline-block align-top" alt=""/></Link>
            </div>
            <div className="w-50 mx-auto border p-5 bg-white">
                <h3 className="p-3">Login With</h3>
                <div className="border rounded p-1 pl-5 pr-5 ">
                    <Link onClick={googleSingIn} className="font-weight-bold text-dark"><span><img src="https://iili.io/2xw5TQ.png" alt=""className="icon m-1"/></span>Continue with Google</Link>
                </div>
                <p className="p-2">Don't have an account? <Link to="">Create an account</Link></p>

            </div>
        </div>
    );
};

export default Login;