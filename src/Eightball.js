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
    const [ball, setBall] = useState({msg: "Think of a Question", color: "black"})

    function handleClick(){
        setBall(answers[getRandomIdx(answers)])
    }

    const ballStyle = {
        borderRadius: "50%", 
        backgroundColor: ball.color,
        color: "white",
        height: "100px",
        width: "100px",
        display: "flex",
        alignItems: "center"
    }

    return (
        <div style={ballStyle} onClick={handleClick}>
            <p>{ball.msg}</p>
        </div>
    )
}

export default Eightball