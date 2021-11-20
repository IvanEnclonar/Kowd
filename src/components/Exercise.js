import React, { useState } from 'react';
import "./Exercise.css";

function Exercises({open, setOpen, questions, next}){
    const[counter, setCounter] = useState(0);
    const length = questions.length;
    console.log(length);    

    return(
        <div className="Exercise__Main">
            <div className="Exercise__Content">
                <div className="Exercise__Close" onClick={() => {setOpen(!open)}}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg></div>
                <div className="Exercise__QuestionDiv">
                    <p>{questions[counter].question}</p>
                </div>
                <MC counter={counter} nextLesson={next}setCounter={setCounter} length={length} choices={questions[counter].choices} correct={questions[counter].answer}/>
            </div>
            <div className="Exercise__Mask" onClick={() => {setOpen(!open)}}></div>
        </div>
    );
}

function MC({choices, correct, length, counter, setCounter, nextLesson}){
    const [answer, setAnswer] = useState(null);
    const [solved, setSolved] = useState(false);
    console.log("Solved: ", solved);

    console.log("Counter: ", counter);
    console.log("Length: ", length)


    const next = () =>{
        setCounter(counter + 1);
        setSolved(false);
        setAnswer(null);
    }

    const checkAnswer = (index) =>{
        if(index==correct && answer===index){
            return "Exercise__MCItemCorrect"
        }
        else if(index===answer) return "Exercise__MCItemWrong"
        else return "Exercise__MCItem"
    }

    if(answer===null){
        console.log("Case 1")
        return(
            <div className="Exercise__MCDiv">
                {choices.map((val, index)=> {
                    return (<div className="Exercise__MCItem" key={index} onClick={() =>{ 
                        setAnswer(index)
                        if(index===correct) setSolved(true);
                    }}>{val}</div>);
                })}
                {solved && <div className="L__ContinueButton" >Continue</div>}
            </div>
        );
    }
    else{
        return(
            <div className="Exercise__MCDiv">
                {choices.map((val, index)=> {
                    return (<div className={ checkAnswer(index) } onClick={() =>{ 
                        setAnswer(index);
                        if(index===correct) setSolved(true);
                    }} key={index}>{val}</div>);
                })}
                {(solved && counter < length - 1) && <div className="L__ContinueButton" onClick={() =>{next()}}>Continue</div>}
                {(solved && counter == length - 1) && <div className="L__ContinueButton" onClick={() =>{nextLesson()}} >Next Lesson</div>}
            </div>
        );
    }
}
export default Exercises;