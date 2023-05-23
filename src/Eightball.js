import React, { useState } from "react";

const list = [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" },
  ]

/** Order entering system before it ships.
 *
 * Props:
 * -answers 
 *
 * State:
 * - ballState: {msg, color}
 *
 * App -> Eightball
 */

function Eightball({answers = list}){
    const [ballState, setBallState] = useState({msg: "Think of a Question", color: "black"})

    function handleClick(){
        const randomIdx = Math.floor(Math.random() * answers.length);
        setBallState(answers[randomIdx])
    }

    const ballStyle = {
        borderRadius: "50%", 
        backgroundColor: ballState.color,
        color: "white",
        height: "100px",
        width: "100px",
        display: "flex",
        alignItems: "center"
    }

    return (
        <div style={ballStyle} onClick={handleClick}>
            <p>{ballState.msg}</p>
        </div>
    )
}

export default Eightball