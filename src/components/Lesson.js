import React, { useEffect, useState } from 'react';
import NavBar from './NavBar.js';
import "./Lesson.css";
import ReactPlayer from 'react-player/lazy';
import Exercises from './Exercise';
import { firestore } from "../Firebase.js";
import LoadingDiv from "../components/LoadingDiv.js";
import { useAuth } from "../contexts/AuthContext.js";
import firebase from "firebase/app";
import { useHistory } from "react-router-dom";


function Lesson(props){
    const [openExercise, setOpenExercise] = useState(false)
    const [lessonDoc, setLessonDoc] = useState({});
    const [nextLessonDoc, setNextLessonDoc] = useState(null);
    const { userData } = useAuth();
    const history = useHistory()
    
    useEffect(() =>{
        firestore.collection("Courses").doc("WNbIRH1JsXgZQhyD3kNQ").collection("Lessons").doc(props.match.params.id).get().then((doc) => {
                setLessonDoc(doc.data());
                firestore.collection("Courses").doc("WNbIRH1JsXgZQhyD3kNQ").collection("Lessons").where("order", "==", doc.data().order + 1).get().then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        console.log(doc.id, " => ", doc.data());
                        setNextLessonDoc(doc.id);
                    });
                })
                .catch((error) => {
                    console.log("Error getting documents: ", error);
                });
            }).catch((error) => {
                console.log("Error getting document:", error);
        });

    }, []);


    const next = () =>{
        if(userData.Courses.WNbIRH1JsXgZQhyD3kNQ.nextLesson === lessonDoc.order){
            var nextLesson = lessonDoc.order + 1;
            firestore.collection("Users").doc(userData.uid).update({
                "Courses.WNbIRH1JsXgZQhyD3kNQ.completed": firebase.firestore.FieldValue.arrayUnion(props.match.params.id),
                "Courses.WNbIRH1JsXgZQhyD3kNQ.nextLesson": nextLesson,
                "Courses.WNbIRH1JsXgZQhyD3kNQ.nextLessonID": nextLessonDoc,
            }).then(() => {
                if(nextLessonDoc === null){
                    history.push("/")
                    window.location.reload(false);
                }
                else{
                    history.push("/lesson/" + nextLessonDoc);
                    window.location.reload(false);
                }
            })
        }
        else{
            if(nextLessonDoc === null){
                history.push("/")
                window.location.reload(false);
            }
            else{ 
                history.push("/lesson/" + nextLessonDoc);
                window.location.reload(false);
            }
        }
    }
    
    if(lessonDoc) return(
        <div>
            <NavBar use="lesson" />
            <div>
                <h1 className="L__LessonTitle">{lessonDoc.name}</h1>
                <div className="L__VideoDiv">
                    <ReactPlayer url={lessonDoc.url} controls="true" width="900px" height="507px" />
                </div>
                {lessonDoc.questions ? <div className="L__ShowExerciseButton" onClick={() => { setOpenExercise(!openExercise)}}>Exercises</div> : <div className="L__ShowExerciseButton" onClick={() => { next()}}>Next Lesson</div>}
            </div>
            {openExercise && <Exercises open={openExercise} next={next} setOpen={setOpenExercise} questions={lessonDoc.questions}/>}
                
        </div>
    );
    else return(<LoadingDiv />);
}

export default Lesson;