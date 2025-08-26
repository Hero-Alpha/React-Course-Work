import React, { useState } from 'react';
import './LightDark.css';
import useLocalStorage from './useLocalStorage';

function LightDark() {

    const [theme , setTheme] = useLocalStorage('theme' , "dark")

    function handleThemeToggle(){
        setTheme(theme === "dark" ? "light" : "dark");
        console.log(theme);
    }

    return (
        <div className="main-container" data-theme={theme}>
            <h2 className='black'>Sometimes you have to change your prespective...</h2>
            <button className='button-30' onClick={handleThemeToggle}>Change</button>
            <h2 className='white'>To see the complete truth about something</h2>
        </div>
    );
}

export default LightDark;