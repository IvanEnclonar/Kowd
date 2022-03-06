import React, { useEffect, useState } from 'react';
import NavBar from './NavBar.js';
import Footer from './Footer.js';
import "./Lesson.css";
import ReactPlayer from 'react-player/lazy';
import Exercises from './Exercise';
import { firestore } from "../Firebase.js";
import LoadingDiv from "../components/LoadingDiv.js";
import { useAuth } from "../contexts/AuthContext.js";
import firebase from "firebase/app";
import { useHistory } from "react-router-dom";
import { ReactComponent as ArrowSVG} from "../arrow.svg";

function sampleWithReplacements(arr, n){
    const r = () => Math.floor(Math.random() * arr.length);
    const res = [];
    for(let i=0;i<n;i++) res.push(arr[r()]);
    return res;
}

function genColor() {
    const hexCodes = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
    return `#${sampleWithReplacements(hexCodes,6).join('')}`;
}

function ParticipantDisplay({participants}) {
    const spans = participants.map((p) => {
        const pstyle = {backgroundColor: genColor()};
        console.log(pstyle)
        return(
            <span className="L__ProfileContainer">
                <div className="L__ParticipantProfile" style={pstyle}></div>
                <span className="L__ParticipantName">{p}</span>
            </span>
        );
        }
    );
    return (
        <div className="L__ParticipantList">
            <h3 className="L__ParticipantLabel">Presenters:</h3>
            {spans}
        </div>
    )
}

function ChecklistItem({is_highlighted,id,text,border_bottom}) {
    let labelclass;
    if (!border_bottom) { labelclass=""; }
    else { labelclass = is_highlighted ? "L__CheckHL" : "L__Check"; }
    return (
        <div className={`L__CheckTemplate ${labelclass}`}>
            <input type="checkbox" id={id} value={text} className={`L__CheckboxTemplate ${is_highlighted ? "L__CheckboxHL" : "L__Checkbox"}`}/>
            <label for={id} className={`L__CheckLabelTemplate ${is_highlighted ? "L__CheckLabelHL" : "L__CheckLabel"}`}>{text}</label>
        </div>
    );
}


function ExerciseCheckbox({items}) {
    const checkItems = items.map((item) => {
        const border_bottom = !(item.text == items.slice(-1).text)
        return(
        <ChecklistItem is_highlighted={item.is_highlighted} id={item.id} text={item.text} border_bottom={border_bottom}/>)
    })
    return (
        <div className="L__ChecklistContainer">
            {checkItems}
        </div>
    )
}

function CourseProgress({progress}) {
    return (
        <div className="L__CourseProgress">
            <h1 className="L__CourseProgressTitle">Course Progress:</h1>
            <h1 className="L__CourseProgressPercent">{progress}%</h1>
        </div>
    )
}
            


function Lesson(props){
    const [openExercise, setOpenExercise] = useState(false)
    const [lessonDoc, setLessonDoc] = useState({});
    const [nextLessonDoc, setNextLessonDoc] = useState(null);
    const { userData } = useAuth();
    const history = useHistory();

    // these are all placeholder values
    const descText = "Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis ex maximus ultrices molestie. Maecenas sed nunc velit.  \n\nNullam mauris neque, malesuada in velit quis, rhoncus fermentum est. Ut scelerisque, magna at venenatis lacinia, leo est varius nulla, id accumsan augue arcu ut ipsum."

    const participants = ['Juan de la Cruz', 'Dulce de Leche']

    const checkItems = [
        {
            is_highlighted: true,
            id: 1,
            text: "Introduction to HTML and CSS"
        },
        {
            is_highlighted: false,
            id: 2,
            text: "Lesson 2"
        },
        {
            is_highlighted: false,
            id: 3,
            text: "Lesson 3"
        },
        {
            is_highlighted: false,
            id: 4,
            text: "Summary"
        }
    ]

    const courseProgress = 17;
    
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
            <div className="L__BackArrow">
                <ArrowSVG className="arrow"/>
                <h3 className="L_BackArrowText">Courses</h3>
            </div>
            <div className="L__Container">
                <div className="L__Main">
                    <div className="L__VideoDiv">
                        <ReactPlayer url={lessonDoc.url} controls="true" width="900px" height="507px" />
                    </div>
                    <h1 className="L__LessonTitle">{lessonDoc.name}</h1>
                    <p className="L__Desc">{descText}</p>
                    <ParticipantDisplay participants={participants} />
                    <ExerciseCheckbox items={checkItems} />
                    <div className="L__SocMed">
                        <span className="L__SocMedLabel">Share on:</span>
                        <h3 className="L__SocMedIcon L__Twitter"><span>T</span></h3>
                        <h3 className="L__SocMedIcon L__FB"><span>f</span></h3>
                        <h3 className="L__SocMedIcon L__Insta"><span>I</span></h3>
                        <h3 className="L__SocMedIcon L__Email"><span>E</span></h3>
                    </div>
                    {lessonDoc.questions ? <div className="L__ShowExerciseButton" onClick={() => { setOpenExercise(!openExercise)}}>Exercises</div> : <div className="L__ShowExerciseButton" onClick={() => { next()}}>Next Lesson</div>}
                </div>
                <CourseProgress progress={courseProgress} />
            </div>
            {openExercise && <Exercises open={openExercise} next={next} setOpen={setOpenExercise} questions={lessonDoc.questions}/>}
           <Footer />      
        </div>
    );
    else return(<LoadingDiv />);
}

export default Lesson;
