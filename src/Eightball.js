import React, { useState } from "react";
import list from "./list"
import getRandomIdx from "./random"


/** component that changes the eightball when clicked.
 *
 * Props:
 * -answers array of colors and answers
 *
 * State:
 * - ballState: {answer, ballColor}
 *
 * App -> Eightball
 */

function Eightball({answers = list}){
    const initialBall = {msg: "Think of a Question", color: "black"}
    const [ball, setBall] = useState(initialBall)
    const [records, setRecords] = useState({green:0, red:0, goldenrod:0})

    function handleClick(){
        const newAnswer = answers[getRandomIdx(answers)]
        setBall(newAnswer)
        
        const newRecords = records;
        newRecords[newAnswer.color] = records[newAnswer.color] + 1;
        setRecords(newRecords)
    }

    function reset(){
        setBall(initialBall)
    }


    const ballStyle = {
        borderRadius: "50%",
        backgroundColor: ball.color,
        color: "white",
        height: "100px",
        width: "100px",
        display: "flex",
        alignItems: "center",
    }

    return (
        <div>
            <div style={ballStyle} onClick={handleClick}>
                <p>{ball.msg}</p>
            </div>
            <p>greens = {records.green}</p>
            <p>reds = {records.red}</p>
            <p>yellows = {records.goldenrod}</p>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default Eightball