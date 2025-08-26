import { useState, useEffect } from "react";
import './ColorGenerator.css';

export default function ColorGenerator() {

    //There will be 2 states - color & type of color
    const [typeOfColor, setTypeOfColor] = useState('hex');
    const [color, setColor] = useState('#000000ff');

    function generateColorCode(length){
        return Math.floor(Math.random()*length);
    }

    function generateRandomHexColor() {
        const code = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexCode = "#";
        for(let i = 0 ; i < 6 ; i++){
            hexCode += code[generateColorCode(code.length)];
        }
        setColor(hexCode);
        
    }
    function generateRandomRgbColor() {
        const r = generateColorCode(256);
        const g = generateColorCode(256);
        const b = generateColorCode(256);

        setColor(`rgb(${r}, ${g}, ${b})`);
    }

    //Everytime the type of color will be changed new color will be made
    useEffect(() => {
        if (typeOfColor === 'hex') generateRandomHexColor();
        else generateRandomRgbColor();
    },[typeOfColor])

    return (
        <div className="container"
            style={{
                width: "100vw",
                height: "100vh",
                background: color
            }}>
            <div>
                <button className="button-54 " 
                onClick={typeOfColor === 'hex' ?
                    () => generateRandomHexColor() :
                    () => setTypeOfColor('hex')}>HEX Color
                </button>
                <button className="button-54" 
                onClick={typeOfColor === 'rgb' ?
                    () => generateRandomRgbColor() :
                    () => setTypeOfColor('rgb')}>RGB Color
                </button>
            </div>
            <div>
                <button className="button-54 type"
                    onClick={typeOfColor === 'hex'
                        ? () => generateRandomHexColor()
                        : () => generateRandomRgbColor()
                    }>
                    Generate Random Color
                </button>
            </div>
            <div className="displayColor">
                {typeOfColor === 'hex' ?
                    <><h1>HEX</h1> <p className="code">{color}</p></> :
                    <><h1>RGB</h1> <p className="code">{color}</p></>
                }
            </div>
        </div>
    )
}