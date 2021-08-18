import React from 'react';
import "./FrontPage.css";

function FrontPage(){
    return(
        <div className="main">
            <nav>
                <div className="nav-button">
                    <div>Tutorials</div>
                    <div>Exercises</div>
                </div>
                <img src="logo.jpg" alt="logo"></img>
                <div className="nav-button">
                    <div>About Us</div>
                    <div className="log-in">Log in</div>
                </div>
            </nav>
            <div className="panel-1">
                <div className="two-column">
                    <img src="panel-1-illust.jpg" alt="gallery/pic/art/idk"></img>
                    <div className="two-column-text">
                        <div className="heading big-green">CODING FOR FILIPINOS.</div>
                        <div><span className="ages">Access free and kid-friendly coding resources in Filipino!</span> Ages 8-15!</div>
                        <div className="log-in start-learning">Start Learning</div>
                    </div>
                </div>
            </div>
            <div className="giant-circle">
            </div>
        </div>
    );
}

export default FrontPage;