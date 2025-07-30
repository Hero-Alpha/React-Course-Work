import { useState, useEffect } from "react"


export default function Counter() {

    let [countx, setCountx] = useState(0);
    let [county, setCounty] = useState(0);

    let increaseCountx = () => {
        setCountx((currCount) => currCount + 1);
    };
    let increaseCounty = () => {
        setCounty((currCount) => currCount + 1);
    };

    //passing the dependency countx so, useEffect only triggers while countx
    // is rerendered
    useEffect(
        function printSomething() {
            console.log("The button has been pressed");
        }, [countx])

    return (
        <div>
            <h4>Count-X : {countx}</h4>
            <button onClick={increaseCountx}>Press me</button>
            <h4>Count-Y : {county}</h4>
            <button onClick={increaseCounty}>Press me</button>
        </div>
    );
}