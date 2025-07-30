import { useState } from "react";
import "./LudoBoard.css";
export default function LudoBoard() {

    let [moves, setMoves] = useState({blue:0,red:0,green:0,yellow:0});
    let [arr, setArr] = useState(["No Moves,"]);
    //using object states for manipulation
    //we need to spread to make changes in the object{...objectName}
    let updateBlue = () =>{

        setArr([...arr, "Blue Moves,"]);

        setMoves((prevMoves) => {
            return{...prevMoves, blue: prevMoves.blue + 1};
        })
    }
    let updateRed = () =>{

        setArr([...arr, "Red Moves,"]);
        
        setMoves((prevMoves) => {
            return{...prevMoves, red: prevMoves.red + 1};
        })
    }
    let updateGreen = () =>{

        setArr([...arr, "Green Moves,"]);

        setMoves((prevMoves) => {
            return{...prevMoves, green: prevMoves.green + 1};
        })
    }
    let updateYellow = () =>{

        setArr([...arr, "Yellow Moves,"]);

        setMoves((prevMoves) => {
            return{...prevMoves, yellow: prevMoves.yellow + 1};
        })
    }

    

    return (
        <div>
            <h3>A ludo game created using state and object in react</h3>
            <h5>Game Begins!!</h5>

            <div className="board">
                <div className="move">
                    <p>Blue moves : {moves.blue}</p>
                    <button className="blue" onClick={updateBlue}>Move Blue</button>
                    <p>Red moves : {moves.red}</p>
                    <button className="red" onClick={updateRed}>Move Red</button>
                </div>
                <div className="move">
                    <p>Yellow moves : {moves.yellow}</p>
                    <button className="yellow" onClick={updateYellow}>Move Yellow</button>
                    <p>Green moves : {moves.green}</p>
                    <button className="green" onClick={updateGreen}>Move Green</button>
                </div>
            </div>
            <h5>Move Logs:</h5>
            <p>{arr}</p>
        </div>
    )
}