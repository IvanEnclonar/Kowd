import React, { useState } from 'react';
import { NavBar } from './HomePage';
import "./Lesson.css";
import ReactPlayer from 'react-player/lazy';
import Exercises from './Exercise';


function Lesson(){
    const [openExercise, setOpenExercise] = useState(false)

    return(
        <div>
            <NavBar />
            <div>
                <div className="L__Header">
                    <div className="L__HeaderDiv">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="grey"><path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z"/></svg>
                        Previous
                    </div>
                    <div className="L__HeaderDiv">
                        Next
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="grey"><path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z"/></svg>
                    </div>
                </div>
                <h1 className="L__LessonTitle">Lesson Title</h1>
                <div className="L__VideoDiv">
                    <ReactPlayer url="https://www.youtube.com/watch?v=biYgq4L7u-Y&ab_channel=Kaemi" controls="true" width="900px" height="507px" />
                </div>
                <div className="L__ShowExerciseButton" onClick={() =>{ setOpenExercise(!openExercise)}}>Exercises</div>
            </div>
            {openExercise && <Exercises open={openExercise} setOpen={setOpenExercise}/>}
        </div>
    );
}

export default Lesson;