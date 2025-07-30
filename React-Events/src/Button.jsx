function handleClick() {
    console.log("on-click event");
}
function handleMouseOver() {
    console.log("no-click event");
}
function handleDblClick(){
    console.log("Double click event");
}
export default function Button() {
    return (
        <div>
            {/* //click events */}
            <button onClick={handleClick}>Click Me</button>

            {/* //non-click events */}
            <p onMouseOver={handleMouseOver}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati et incidunt culpa unde aut tempora non ab omnis animi fugit sapiente, alias quibusdam similique eveniet fuga quae quisquam quidem vitae!
            </p>

            <button onDoubleClick={handleDblClick}>Double Click Me</button>
        </div>
    )
}

