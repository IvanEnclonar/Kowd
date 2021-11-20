import React, { useState } from 'react';
import "./HomePage.css";
import { useAuth } from "../contexts/AuthContext.js";
import { Link, useHistory } from "react-router-dom";
import Login from "./Login.js";


function NavBar({use}){
    const { currentUser, logout } = useAuth();
    const [openProf, setOpenProf] = useState(false);
    const [authModal, setAuthModal] = useState(false);
    const [authLogin, setAuthLogin] = useState(false);
    
    const history = useHistory()

    function handleLogout() {
        logout().then(()=>{
            history.push("/frontpage")
        }).catch((e) =>{
            alert(e.message);
        })
    }
    
    return(
        <>
        {authModal && <Login type={authLogin} setType={setAuthLogin}setClose={() => {setAuthModal(false)}}/>}
        <nav className={use=="lesson" ? "HP__Nav" : "HP__NavDash"}>
            <div className="HP__NavLeftDiv"> 
                <img src="https://storage.googleapis.com/frontpage-images/Kowd-newLogo.png" className="FrontPage__NavLogo"></img>
                {use==="lesson" && <Link to="/" className="HP__NavHome">Home</Link>} 
            </div>
            {currentUser && <div className="HP__NavProfile" onClick={() =>{ setOpenProf(!openProf)}}>
                <img src={"https://avatars.dicebear.com/api/bottts/" + currentUser.email.slice(0,6) + ".svg"} />
            </div>}
            {currentUser===null && <div className="FrontPage__CommonButton" onClick={() => {setAuthModal(true)}}>Sign Up!</div>}
            { (openProf&&currentUser) && <Profile />}
        </nav>
        </>
    );
    
    function Profile(){
        return(
            <>
            <div className="Prof__MainDiv"> 
                <div className="Prof__ProfPicDiv">
                  <img src={"https://avatars.dicebear.com/api/bottts/" + currentUser.email.slice(0,6) + ".svg"} />
                </div>
                <p className="Prof__Email">{currentUser.email}</p>
                <div className="Prof__Logout" onClick={() =>{ handleLogout()}}>Log out</div>
            </div>
            <div className="Prof__Mask" onClick={() =>{ setOpenProf(!openProf)}}>

            </div>
        </>
        );
    }
}




export default NavBar;