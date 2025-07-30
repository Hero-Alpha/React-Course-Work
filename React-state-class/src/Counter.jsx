import { useState } from "react";

export default function Counter(){
    // let [stateVariable, setStateVariable] = useState(0);
    let [count, setCount] = useState(0);
    console.log("Component is re-rendered");
    console.log(`Count = ${count}`);

    //using callback to setCount and manipulate the async behaviour of 
    // setCount
    let increaseCount = () =>{
        setCount((currCount) => {
            return currCount + 1;
        });
        setCount((currCount) => {
            return currCount + 1;
        });
        console.log(`Inside component re-rendering, Count = ${count}`);
    }
    return(
        <div>
            <h3>Count = {count}</h3>
            <button onClick={increaseCount}>Increase Count</button>
        </div>  
    ) 
}