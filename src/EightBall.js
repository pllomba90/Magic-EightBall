import React, {useState} from "react";
import answers from "./answers";
import "./eightball.css";

const EightBall = () =>{
    const answerIdx = Math.floor(Math.random() * answers.length);
    const answer = answers[answerIdx]
    const [question, getAnswer] = useState("Ask a question");
    const [color, setColor] = useState("black");

    function handleClick(){
        const {msg, color} = answer;
        getAnswer(msg)
        setColor(color)
    }

    return (
        <div className="container">
        <div className="eightball" onClick={handleClick}
      style={{ backgroundColor: color }}>
           
            <div >
            <h1>{question}</h1>
            </div>

        </div>
        </div>
    )
}

export default EightBall;