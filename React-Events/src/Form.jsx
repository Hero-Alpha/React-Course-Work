function handleForm(event){
    event.preventDefault();
    console.log("Form was submitted");
}
export default function Form(){
    return(
        <form>
            <input type="text" placeholder="Type something" />
            <button onClick={handleForm}>Submit</button>
        </form>
    )
}