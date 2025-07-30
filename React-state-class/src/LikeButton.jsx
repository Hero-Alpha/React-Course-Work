import { useState } from "react";
export default function LikeButton(){

    let [isLiked, setIsLiked] = useState(false);
    

    let clickLike = () => {
        setIsLiked(!isLiked);
    }

    return(
        <div>
            <p onClick={clickLike}>
                {
                    isLiked ? <i className="fa-solid fa-heart"></i> : <i className="fa-regular fa-heart"></i>
                }
            </p>
        </div>
    )
}