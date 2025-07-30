import { useState } from "react"
import "./forms.css"
import CommentsForms from "./CommentsForm"

export default function Comment(){

    let [ comments , setComments] = useState([{
        username:"yash",
        comment:"this is react comment",
        rating: 4
    }])


    let addNewComment = (comment) =>{
        setComments((currComment) =>[...currComment, comment]);
    }

    return(
        <div>
            {comments.map((comment , idx)=>(
                <div className="comment" key={idx}>
                    <span>
                        {comment.comment}
                    </span>
                    <br />
                    <span>
                        @{comment.username} |
                    </span>
                    &nbsp;
                    <span>
                        Rating:{comment.rating}
                    </span>
                </div>
            ))}
            <CommentsForms addNewComment={addNewComment}></CommentsForms>
        </div>

    )
}