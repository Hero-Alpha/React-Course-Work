import "./Price.css";

export default function Price({oldPrice, newPrice}) {
    return (
        <div className="Price">
            <p><s>{oldPrice}</s></p>
            <p><b>{newPrice}</b></p>
        </div>
    )
}