import { useState, useEffect } from 'react';
import './CustomScroll.css';

function CustomScroll({ url }) {

    const [loading, setLoading] = useState(false);
    const [erroMsg, setErrorMsg] = useState('');
    const [apiData, setApiData] = useState([]);
    const [scrollPercentage, setScrollPercentage] = useState(0);

    useEffect(() => {
        async function fetchData(getUrl) {
            try {
                setLoading(true);
                const data = await fetch(`${getUrl}/?limit=20`);
                const jsonData = await data.json();
                console.log(jsonData);
                if (jsonData && jsonData.quotes && jsonData.quotes.length) setApiData(jsonData.quotes);
                setLoading(false);
            }
            catch (e) {
                setErrorMsg(e.message);
                setLoading(false);
            }
        }
        fetchData(url);
    }, [url])

    //function to get scroll percentage
    function handleScrollPercentage() {
        console.log(
            document.body.scrollTop,
            document.documentElement.scrollTop,
            document.documentElement.scrollHeight,
            document.documentElement.clientHeight
        );
        const scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        setScrollPercentage((scrollTop / scrollHeight) * 100);
    }


    //useEffect for getting scroller calculation and triggering event
    useEffect(() => {
        window.addEventListener("scroll", handleScrollPercentage);

        return () => {
            window.removeEventListener("scroll", handleScrollPercentage);
        }
    }, [])


    if (loading) {
        return <h2>Data is being fetched, please be patient....</h2>
    }
    if (erroMsg && erroMsg.length) {
        return (
            <>
                <h2>Some error occurred, please reload page...</h2>
                <p>{erroMsg}</p>
            </>
        )
    }

    return (
        <div className="main-container">
            <div className="scroll-header">
                <div className='heading'>
                    <h1>Custom Scroll Bar</h1>
                </div>
                <div className="scroll-tracker-container">
                    <div
                        className="scroll-tracker"
                        style={{ width: `${scrollPercentage}%` }}
                    ></div>
                </div>
            </div>

            <div className="quote-container">
                {apiData && apiData.length
                    ? apiData.map((item, index) => <p key={index}>{item.quote}</p>)
                    : null}
            </div>
        </div>
    );

}

export default CustomScroll;