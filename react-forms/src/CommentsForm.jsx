import { useState } from "react"
import { useFormik } from "formik";
import "./forms.css"

export default function CommentForms({ addNewComment }){

    let [formData , setFormData] = useState({
        username:"",
        comment:"",
        rating:""
    })

    const validate = values => {
        const errors = {};
        if (!values.username) {
          errors.username = 'Username Required';
        }
        return errors;
    }

    const formik = useFormik({
        initialValues:{
            username:"",
            comment:"",
            rating:5
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values , null , 2));
        },
    })
    
    // let [ isValid , setIsValid] = useState(true);

    let handleInputChange = (event) =>{
        let { name , value } = event.target

        setFormData((currData)=>({
            ...currData,
            [ name ] : value
        }))
    }
    
    // let handleSubmit = (event) =>{
    //     // if(!formData.username){
    //     //     console.log("username is null");
    //     //     setIsValid(false);
    //     //     event.preventDefault();
    //     //     return;
    //     // }
    //     console.log(formData);
    //     addNewComment(formData);
    //     setFormData({
    //         username:"",
    //         comment:"",
    //         rating:""
    //     })
    // }
    

    return(
        <div>
            <h4>Give a comment</h4>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="username">User Name</label>
                <input 
                type="text" 
                placeholder="username"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                />
                <br />
                {formik.errors.username ? <p style={{color:"red"}}>{formik.errors.username}</p> : null}
                {/* {!isValid && <p style={{color:"red"}}>Username cannot be empty</p>} */}
                <br />
                <label htmlFor="comment">Comment</label>
                <textarea 
                name="comment"
                id="comment"
                value={formik.values.comment}
                placeholder="Comments"
                onChange={formik.handleChange}>
                </textarea>
                <br />
                <label htmlFor="rating">Rating</label>
                <input 
                type="number" 
                name="rating"
                placeholder="rating"
                max={5}
                min={1}
                value={formik.values.rating}
                onChange={formik.handleChange}
                />
                <br />
                <button type="submit">Add comment</button>
            </form>
        </div>
    )
}