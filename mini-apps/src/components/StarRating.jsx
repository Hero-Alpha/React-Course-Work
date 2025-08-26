import {FaStar }from 'react-icons/fa';
import './ColorGenerator.css';
import { useState } from 'react';

export default function StarRating({noOfStar = 5}){
    //There will be 2 main states that will be getting affected
    // -Rating(star clicked)
    // -hover(mouse over star)
    const [rating , setRating] = useState(0);
    const [hover , setHover] = useState(0);
    
    //There will be 3 actions happening
    // -clicking on star
    // -mouse over star
    // -mouse off of star
    function handleClickStar(currentIndex){
        setRating(currentIndex);
    }
    function handleMouseOverStar(currentIndex){
        setHover(currentIndex);
    }
    function handleMouseExit(){
        setHover(rating);
    }

    return (
        <div className='star-rating'>
            {[...Array(noOfStar)].map((_ , index) => {
                index++;

                return(
                    <FaStar
                        key={index}
                        onClick={()=> handleClickStar(index)}
                        onMouseEnter={()=> handleMouseOverStar(index)}
                        onMouseLeave={()=> handleMouseExit()}
                        className={index <= (hover || rating) ?
                            "active" : "inactive"}
                        size={80}
                        style={{
                            margin:".3rem"
                        }}
                    />
                )
            })}
        </div>
    )
}