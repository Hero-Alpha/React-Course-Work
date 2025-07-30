import { useState } from "react"
import "./forms.css"

export default function Forms() {

    // single state creation for every input field
    // let [fullName, setFullName] = useState("Yash Kumar");

    //creating an state-object to make it easier to handle multiple inputs
    let [formData, setFormData] = useState({
        fullname: "",
        username: "",
        password: ""
    })

    // let handlenameChange = (event) => {
    //     setFullName(event.target.value);
    // }

    //common method for handleInputChange function
    let handleInputChange = (event) =>{

        //extracting name and value from the event.target
        let {name , value } = event.target;

        setFormData((currData) =>({
            ...currData,
            [name] : value
        }));
    }

    let handleSubmit = (event) =>{
        event.preventDefault();
    }

    return (
        <form>
            <label htmlFor="fullname">Full Name</label>
            <input
                type="text"
                id="fullname"
                name="fullname"
                placeholder="Enter your full name"
                autoComplete="on"
                value={formData.fullname}
                onChange={handleInputChange} 
            />
            <br />
            <label htmlFor="username">User Name</label>
            <input
                type="text"
                id="username"
                name="username"
                placeholder="Enter your username"
                autoComplete="on"
                value={formData.username}
                onChange={handleInputChange} 
            />
            <br />
            <label htmlFor="username">Password</label>
            <input
                type="text"
                id="password"
                name="password"
                placeholder="Enter your password"
                autoComplete="on"
                value={formData.password}
                onChange={handleInputChange} 
            />
            <br />
            <button onClick={handleSubmit}>Submit</button>
        </form>
    )
}