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
            <div className="giant-circle"></div>
            <div className="panel-2">
                <div className="heading">KOWD includes:</div>
                <div className="three-column">
                    <div>
                        <div>Tutorials</div>
                        <img src="tutorials.jpg" alt="tutorials"></img>
                    </div>
                    <div>
                        <div>Exercises</div>
                        <img src="exercises.jpg" alt="exercises"></img>
                    </div>
                    <div>
                        <div>Step by step learning</div>
                        <img src="step.jpg" alt="step"></img>
                    </div>
                </div>
            </div>
            <div className="panel-3">
                <div className="heading">What makes KOWD special?</div>
                <div className="two-column">
                    <div className="right-align">
                        <div className="heading">Made by Students for Students</div>
                        <div >All content is made by Philippine Science High School Scholars and specially curated for Filipinos. Our lessons and exercises are taught in Filipino, making it easier to understand for those who learn better this way.</div>
                    </div>
                    <img src="students.jpg" alt="students"></img>
                </div>
                <div className="two-column">
                    <img src="free.jpg" alt="free"></img>
                    <div className="left-align">
                        <div className="heading">Free and Accessible</div>
                        <div>All the content found on our website is available for free. All those who are passionate and willing to learn are welcome.</div>
                    </div>
                </div>
                <div className="two-column">
                    <div className="right-align">
                        <div className="heading">Learning goes beyond traditional lessons</div>
                        <div>Students learn basic web development through informational videos and demonstrations. At the end of each lesson, interactive exercises that can help deepen the student’s understanding of the topic are available.</div>
                    </div>
                    <img src="lessons.jpg" alt="lessons"></img>
                </div>
            </div>
        </div>
    );
}

export default FrontPage;