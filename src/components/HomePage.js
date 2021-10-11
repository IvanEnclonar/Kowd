import React, { useState } from 'react';
import "./HomePage.css";


function HomePage(){
    const [dropdown, setOpenDropdown] = useState(false);

    return(
        <div>
            <NavBar />
            <div className="HP__FirstDiv">
                <h1 className="HP__MainText">Intro to HTML and CSS</h1>
                <div className="HP__Progbar"></div>
                <div className="HP__Proceed">
                    Continue
                </div>
            </div>
            <div className="HP__CoursesDiv">
                <h1 className="HP__CoursesText">Courses</h1>
                <div className="HP__CoursesContainer"  onClick={() =>{ setOpenDropdown(!dropdown)}}>
                    <svg className="HP__DropdownIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
                    <h2 className="HP__CourseTitle">HTML and CSS</h2>
                </div>
                {dropdown && 
                    <div className="HP__OpenDropdown">
                        <div className="HP__DropdownItem">
                            <svg className="HP__DropdownItemIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-1.25 17.292l-4.5-4.364 1.857-1.858 2.643 2.506 5.643-5.784 1.857 1.857-7.5 7.643z"/></svg>
                            !Doctype
                        </div>
                        <div className="HP__DropdownItem">
                            <svg className="HP__DropdownItemIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z"/></svg>
                            Image
                        </div>
                        <div className="HP__DropdownItem">
                            <svg className="HP__DropdownItemIcon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z"/></svg>
                            Another Lesson
                        </div>
                    </div>
                }
            </div>
        </div>
    );
}

function NavBar(){
    
    
    return(
        <nav className="HP__Nav">
            <div className="HP__NavLeftDiv"> 
                <img src="https://storage.googleapis.com/frontpage-images/Kowd-newLogo.png" className="FrontPage__NavLogo"></img>
                <div className="HP__NavHome">Home</div> 
            </div>
            <div className="HP__NavProfile"></div>
        </nav>
    );
}
export default HomePage;

export {NavBar};