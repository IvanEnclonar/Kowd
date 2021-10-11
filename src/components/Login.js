import React from 'react';
import "./Login.css";
import TextField from '@material-ui/core/TextField';

function Login({type, setType, setClose}){
    
    if(type){ return(
        <div className="Login__Main">
            <div className="Login__Content">
                <div className="Login__CloseDiv" onClick={() => setClose()}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
                </div>
                <h3 className="Login__Header">Log In</h3>
                <div className="Login__GoogleDiv">
                    <img className="Login__GoogleIcon" src="https://img.icons8.com/fluency/96/000000/google-logo.png"/>
                    <p className="Login__GoogleText">Log In with Google</p>
                </div>
                <div className="Login__OrDiv"><div className="Login__HorizontalLine"></div><p className="Login__Or">or</p><div className="Login__HorizontalLine"></div></div>
                <div className="Login__Input">
                    <TextField fullWidth id="outlined-basic" label="Email" variant="outlined" />
                </div>
                <div className="Login__Input">
                    <TextField fullWidth id="outlined-password-input" label="Password" type="password" autoComplete="current-password" variant="outlined" />
                </div>
                <div className="Login__Button">
                    <div className="FrontPage__CommonButton">Login</div>
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
                <div className="Login__GoogleDiv">
                    <img className="Login__GoogleIcon" src="https://img.icons8.com/fluency/96/000000/google-logo.png"/>
                    <p className="Login__GoogleText">Sign Up with Google</p>
                </div>
                <div className="Login__OrDiv"><div className="Login__HorizontalLine"></div><p className="Login__Or">or</p><div className="Login__HorizontalLine"></div></div>
                <div className="Login__Input">
                    <TextField fullWidth id="outlined-basic" label="Email" variant="outlined" />
                </div>
                <div className="Login__Input">
                    <TextField fullWidth id="outlined-password-input" label="Password" type="password" autoComplete="current-password" variant="outlined" />
                </div>
                <div className="Login__Button">
                    <div className="FrontPage__CommonButton">Sign Up!</div>
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
