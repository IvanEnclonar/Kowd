import React from 'react';
import "./FrontPage.css";

function FrontPage(){
    return(
        <div>
            <nav className="FrontPage__nav">
                <h2 className="FrontPage__NavLinks">Tutorials</h2>
                <h2 className="FrontPage__NavLinks">Exercises</h2>
                <img src="https://storage.googleapis.com/frontpage-images/Kowd-newLogo.png" className="FrontPage__NavLogo"></img>
                <h2 className="FrontPage__NavLinks">About Us</h2>
                <div className="FrontPage__CommonButton">Login</div>
            </nav>
            <div className="FrontPage__Body">
                <div className="FrontPage__MainImageDiv"><img className="FrontPage__MainImage" src="https://storage.googleapis.com/frontpage-images/Main-image.svg"></img></div>
                <div className="FrontPage__MainTextDiv">
                    <div className="FrontPage__MainHeading">CODING FOR FILIPINOS</div>
                    <div className="FrontPage__SubHeading">Access free and kid-fiendly coding resources in Filipino! Ages 8-15</div>
                    <div className="FrontPage__CommonButton FrontPage__StartLearning">Start Learning</div>
                </div>
            </div>
            <div class="custom-shape-divider-top-1631618645">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                    </svg>
            </div>
            <div className="FrontPage__SecondSection">
                <div className="FrontPage__SecondSectionHeading">KOWD includes:</div>
                <div className="FrontPage__IncludesDiv">
                    <div>
                        <h3>Tutorials</h3>
                        <img className="FrontPage__IncludesImages" src="https://storage.googleapis.com/frontpage-images/tutorial.png"></img>
                    </div>
                    <div>
                        <h3>Exercises</h3>
                        <img className="FrontPage__IncludesImages" src="https://storage.googleapis.com/frontpage-images/exercise.png"></img>
                    </div>
                    <div>
                        <h3>Step by step learning</h3>
                        <img className="FrontPage__IncludesImages" src="https://storage.googleapis.com/frontpage-images/stepbystep.png"></img>
                    </div>
                </div>
                <div className="FrontPage__HorizontalLine"></div>
            </div>
            <div className="FrontPage__ThirdSection">
                <h2 className="FrontPage__TSHeading ">What makes KOWD special?</h2>
                <div className="FrontPage__TSDiv">
                    <div>
                        <h3 className="FrontPage__TSLabel FrontPage__TextAllignRight">Made by Students for Students</h3>
                        <p className="FrontPage__TSText FrontPage__TextAllignRight">All content are made by Philippine Science High School Scholars, and are specially curated for Filipinos. Our lessons and exercises are taught in Filipino, making it easier to understand for those who learn better this way.</p>
                    </div>
                    <img className="FrontPage__BottomImages" src="https://storage.googleapis.com/frontpage-images/madeby.png"></img>
                </div>
                <div className="FrontPage__TSDiv">
                    <img className="FrontPage__BottomImages" src="https://storage.googleapis.com/frontpage-images/accessible.png"></img>
                    <div>
                        <h3 className="FrontPage__TSLabel FrontPage__TextAllignLeft">Free and Accessible</h3>
                        <p className="FrontPage__TSText FrontPage__TextAllignLeft">All the content found on our website is available for free. All those who are passionate and willing to learn are welcome.</p>
                    </div>
                </div>
                <div className="FrontPage__TSDiv">
                    <div>
                        <h3 className="FrontPage__TSLabel FrontPage__TextAllignRight">Learning goes beyond traditional lessons</h3>
                        <p className="FrontPage__TSText FrontPage__TextAllignRight">Students learn basic web development through informational videos and demonstrations. At the end of each lesson, interactive exercises that can help deepen the student’s understanding of the topic are available.</p> 
                    </div>
                    <img className="FrontPage__BottomImages" src="https://storage.googleapis.com/frontpage-images/learning.png"></img>
                </div>
            </div>
        </div>
    );
}

export default FrontPage;