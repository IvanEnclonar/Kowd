import React, { useState } from 'react';
import "./Login.css";
import TextField from '@mui/material/TextField';
import { useAuth } from "../contexts/AuthContext.js";
import { Link, useHistory } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import firebase from 'firebase/app';
import { auth, firestore } from "../Firebase.js"

function Login({type, setType, setClose}){
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [lpassword, setLPassword] = useState('');
    const [lemail, setLEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const { signup, login, currentUser } = useAuth();
    const history = useHistory()


    function LogIn() {
            setLoading(true);
          login(lemail, lpassword).then(() =>{
            history.push("/")
            setLoading(false);  
          }).catch((e) =>{
            alert(e.message);
            setLoading(false);
          })
    }


    function SignUp(){
        setLoading(true);
        signup(email, password).then((data) =>{
            firestore.collection("Users").doc(data.user.uid).set({
                uid: data.user.uid,
                email: data.user.email,
                Courses:{
                    WNbIRH1JsXgZQhyD3kNQ:{
                      completed: [],
                      lastLesson: null,
                      nextLesson: 1,
                      name: "Introduction to HTML and CSS",
                      uid: "WNbIRH1JsXgZQhyD3kNQ"
                }}
            }).then((docRef) => {
                history.push("/");
                setLoading(false);  
            }).catch((error) => {
                console.error("Error adding document: ", error);
            });
        }).catch((e) =>{
        alert(e.message);
        setLoading(false);
      })
    }

    function GoogleSignUp(){
            setLoading(true);
            var provider = new firebase.auth.GoogleAuthProvider();
            auth.signInWithPopup(provider)
            .then((result) => {
                if(result.additionalUserInfo.isNewUser){
                    var user = result.user;
                    console.log("User: ", user);
                    firestore.collection("Users").doc(user.uid).set({
                      uid: user.uid,
                      email: user.email,
                      Courses:{
                          WNbIRH1JsXgZQhyD3kNQ:{
                            completed: [],
                            lastLesson: null,
                            nextLesson: 1,
                            name: "Introduction to HTML and CSS",
                            uid: "WNbIRH1JsXgZQhyD3kNQ"
                      }}
                      }).then((docRef) => {
                      history.push("/");
                      setLoading(false);  
                      }).catch((error) => {
                      console.error("Error adding document: ", error);
                      });
                }
                else{
                    history.push("/");
                    setLoading(false);  
                }
            }).catch((error) => {alert(error.message)});
    }

    if(loading){
        return(
            <div className="Login__Main">
                <div className="Login__Content">
                    <div className="Login__LoadingDiv">
                        <CircularProgress />
                    </div>
                </div>
                <div className="Login__Mask" onClick={() => setClose()}></div>
            </div>
        );
    }
    else if(type){ return(
        <div className="Login__Main">
            <div className="Login__Content">
                <div className="Login__CloseDiv" onClick={() => setClose()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
                </div>
                <h3 className="Login__Header">Log In</h3>
                <div className="Login__GoogleDiv" onClick={() =>{ GoogleSignUp()}}>
                    <img className="Login__GoogleIcon" src="https://img.icons8.com/fluency/96/000000/google-logo.png"/>
                    <p className="Login__GoogleText">Log In with Google</p>
                </div>
                <div className="Login__OrDiv"><div className="Login__HorizontalLine"></div><p className="Login__Or">or</p><div className="Login__HorizontalLine"></div></div>
                <div className="Login__Input">
                    <TextField fullWidth id="outlined-basic" label="Email" variant="outlined" value={lemail} onInput={e => setLEmail(e.target.value)}/>
                </div>
                <div className="Login__Input">
                    <TextField fullWidth id="outlined-password-input" label="Password" type="password" autoComplete="current-password" variant="outlined" value={lpassword} onInput={e => setLPassword(e.target.value)} />
                </div>
                <div className="Login__Button">
                    <div className="FrontPage__CommonButton" onClick={() =>{ LogIn()}}>Login</div>
                </div>
                <div className="Login__Footer">
                    <p className="Login__FText1">No account?</p>
                    <p className="Login__FText2" onClick={() => setType(false)}>Sign Up</p>
                </div>
            </div>
            <div className="Login__Mask" onClick={() => setClose()}></div>
        </div>
    );}
    else{ return(
        <div className="Login__Main">
            <div className="Login__Content">
                <div className="Login__CloseDiv" onClick={() => setClose()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
                </div>
                <h3 className="Login__Header">Sign Up</h3>
                <div className="Login__GoogleDiv" onClick={() =>{ GoogleSignUp()}}>
                    <img className="Login__GoogleIcon" src="https://img.icons8.com/fluency/96/000000/google-logo.png"/>
                    <p className="Login__GoogleText">Sign Up with Google</p>
                </div>
                <div className="Login__OrDiv"><div className="Login__HorizontalLine"></div><p className="Login__Or">or</p><div className="Login__HorizontalLine"></div></div>
                <div className="Login__Input">
                    <TextField fullWidth id="outlined-basic" label="Email" variant="outlined" value={email} onInput={e => setEmail(e.target.value)} />
                </div>
                <div className="Login__Input">
                    <TextField fullWidth id="outlined-password-input" label="Password" type="password" autoComplete="current-password" variant="outlined"  value={password} onInput={e => setPassword(e.target.value)}/>
                </div>
                <div className="Login__Button">
                    <div className="FrontPage__CommonButton" onClick={() => {SignUp()}}>Sign Up!</div>
                </div>
                <div className="Login__Footer">
                    <p className="Login__FText1">Already have an account?</p>
                    <p className="Login__FText2" onClick={() => setType(true)}>Log In</p>
                </div>
            </div>
            <div className="Login__Mask" onClick={() => setClose()}></div>
        </div>)
    }
}

export default Login;
