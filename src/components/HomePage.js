import React, { useEffect, useState } from 'react';
import "./HomePage.css";
import NavBar from './NavBar.js';
import { useAuth } from "../contexts/AuthContext.js";
import { firestore } from "../Firebase.js";
import CircularProgress from '@mui/material/CircularProgress';
import { Link, useHistory } from "react-router-dom";
import Footer from "./Footer.js";
import Login from "./Login.js";

function HomePage(){
    const [dropdown, setOpenDropdown] = useState(false);
    const [lessons, setLessons] = useState({});
    const [firstLesson, setFirstLesson] = useState({});
    const [openProf, setOpenProf] = useState(false);
    const [authModal, setAuthModal] = useState(false);
    const [authLogin, setAuthLogin] = useState(true);
    const { currentUser, userData } = useAuth();
    const history = useHistory()

    useEffect(() =>{
        firestore.collection("Courses").doc("WNbIRH1JsXgZQhyD3kNQ").collection("Lessons").orderBy("order").get().then((snapshot) => {
            snapshot.docs.forEach(doc => {
                setLessons(prevLessons => ({...prevLessons, [doc.id]: doc.data()}))
                if(doc.data().order === 1){
                    setFirstLesson(doc.id);
                }
            })
            }).catch((error) => {
                console.log("Error getting document:", error);
        });
    },[])

    const Continue = () =>{
        if(userData){
            history.push("/lesson/" + userData.Courses.WNbIRH1JsXgZQhyD3kNQ.nextLessonID);
        }
    }


    if(currentUser&&userData){
        return(
            <div>
                <NavBar use="dashboard" />
                <div className="HP__FirstDiv">
                    <h1 className="HP__MainText">Intro to HTML and CSS</h1>
                    <p className="HP__SubText">These two programming languages are two of the core technologies for building Web Pages. HTML provides the elements and the structure of the page while CSS provides the color and styles.</p>
                    {userData.Courses.WNbIRH1JsXgZQhyD3kNQ.nextLessonID &&<div className="HP__Proceed" onClick={() =>{ Continue()}}>
                        Continue
                    </div>}
                    {userData.Courses.WNbIRH1JsXgZQhyD3kNQ.nextLesson===1 && <div className="HP__Proceed" onClick={() =>{ history.push("/lesson/" + firstLesson);}}>
                        Start!
                    </div>}
                </div>
                <img src="https://storage.googleapis.com/frontpage-images/wavesOpacity.svg" />
                <div className="HP__CoursesDiv">
                    <h1 className="HP__CoursesText">COURSES</h1>
                    <div className="HP__CoursesContainer"  onClick={() =>{ setOpenDropdown(!dropdown)}}>
                        <svg className="HP__DropdownIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
                        <h2 className="HP__CourseTitle">Introduction to HTML and CSS</h2>
                    </div>
                    {dropdown && 
                        <div className="HP__OpenDropdown">
                            {
                                lessons ? Object.keys(lessons).map((key, index) =>{
                                    if( lessons[key].order <= userData.Courses.WNbIRH1JsXgZQhyD3kNQ.nextLesson){
                                        return(
                                            <Link to={"/lesson/" + key} className="HP__DropdownItem" key={key}>
                                                {lessons[key].name}
                                                { userData.Courses.WNbIRH1JsXgZQhyD3kNQ.completed.includes(key) ? <svg className="HP__DropdownItemIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"/></svg> : <svg className="HP__DropdownItemIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z"/></svg>}
                                            </Link>);   
                                    }
                                    else return(
                                        <div className="HP__DropdownItemLocked" key={key}>
                                            {lessons[key].name}
                                            { userData.Courses.WNbIRH1JsXgZQhyD3kNQ.completed.includes(key) ? <svg className="HP__DropdownItemIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"/></svg> : <svg className="HP__DropdownItemIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z"/></svg>}
                                        </div>
                                    );
                                }) : <div className="HP__DropDownLoading">
                                <CircularProgress />
                            </div>
                            }
    
                        </div>
                    }
                </div>
                <Footer />
            </div>
        );
    }
    else{
        return(
        <div>
            {authModal && <Login type={authLogin} setType={setAuthLogin}setClose={() => {setAuthModal(false)}}/>}
            <NavBar use="dashboard" />
            <div className="HP__FirstDiv">
                    <h1 className="HP__MainText">Intro to HTML and CSS</h1>
                    <p className="HP__SubText">These two programming languages are two of the core technologies for building Web Pages. HTML provides the elements and the structure of the page while CSS provides the color and styles.</p>
                    <div className="HP__Proceed" onClick={() => {setAuthModal(true)}} >
                        Log In!
                    </div>
            </div>
            <img src="https://storage.googleapis.com/frontpage-images/wavesOpacity.svg" />
            <div className="HP__CoursesDiv">
                    <h1 className="HP__CoursesText">COURSES</h1>
                    <div className="HP__CoursesContainer"  onClick={() =>{ setOpenDropdown(!dropdown)}}>
                        <svg className="HP__DropdownIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
                        <h2 className="HP__CourseTitle">Introduction to HTML and CSS</h2>
                    </div>
                    {dropdown && 
                        <div className="HP__OpenDropdown">
                            {
                                lessons ? Object.keys(lessons).map((key, index) =>{
                                   return(
                                        <div className="HP__DropdownItemLocked" key={key}>
                                            {lessons[key].name}
                                            <svg className="HP__DropdownItemIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z"/></svg>
                                        </div>
                                    );
                                }) : <div className="HP__DropDownLoading">
                                <CircularProgress />
                            </div>
                            }
    
                        </div>
                    }
                </div>
                <Footer />

        </div>
        );
    }
}
export default HomePage;

