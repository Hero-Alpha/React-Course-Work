import "./Product.css";
import Price from "./Price.jsx";

export default function Product({idx, title, description, func}) {
    let oldPrices = ["12,494","11,900","1,599","599"];
    let newPrices = ["8,999","9,299","899","278"];
    return (
        <div className="Product">
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{func}</p>

            <Price className="Price" oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}></Price>
        </div>
    )
}
