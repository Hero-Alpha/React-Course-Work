import { useEffect, useState } from "react";
import './LoadMore.css';

export default function LoadMore() {

    //states needed
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState(null);
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [disableButton, setDisableButton] = useState(false);

    //function to fetch the data from API
    useEffect(() => {
        async function fetchProducts() {
            try {
                setLoading(true);
                const res = await fetch(`https://dummyjson.com/products?limit=5&skip=${count * 5}`);
                const data = await res.json();
                if (count === 0) {
                    setProducts(data.products);
                } else {
                    setProducts((prev) => [...prev, ...data.products]);
                }
                setLoading(false);
            } catch (err) {
                setErrorMsg(err.message);
                setLoading(false);
            }
        }

        fetchProducts();
    }, [count]);

    //useEffect for button disabling
    useEffect(() => {
        if (products.length >= 20) {
            setDisableButton(true);
        }
    }, [products])


    //Error and Loading function
    if (loading) {
        return (<h2>Data is being fetched...</h2>)
    }
    if (errorMsg) {
        return (<h2>Error occurred, please reload the page...</h2>)
    }

    return (
        <div className="container">
            <div className="product-list">
                {
                    products && products.length ?
                        products.map((item) => (
                            <div className="product-card">
                                <img className="product-image" src={item.thumbnail} alt={item.title} />
                                <div className="product-info">
                                    <h2>{item.title}</h2>
                                    <p>{item.description}</p>
                                    <h3>Brand : {item.brand}</h3>
                                    <h3>Price : &#8377;{item.price}/-</h3>
                                </div>
                            </div>
                        ))
                        : null
                }
            </div>
            <button disabled={disableButton} onClick={() => setCount(count + 1)} className="button-82-pushable" role="button">
                <span className="button-82-shadow"></span>
                <span className="button-82-edge"></span>
                <span className="button-82-front text">
                    {disableButton ? "You have reached the limit" : "Load More"}
                </span>
            </button>
        </div>
    )
}