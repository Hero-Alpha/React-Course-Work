import { useEffect, useState } from 'react';
import axios from 'axios';
import { BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs';
import './ImageSlider.css';
export default function ImageSlider({ url, page, limit }) {

    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [errorMsg, setErrorMsg] = useState(null);
    const [loading, setLoading] = useState(false);

    //async function to fetch the data from the url
    async function fetchImages(url) {
        try {
            setLoading(true);
            const completeUrl = `${url}?page=${page}&limit=${limit}`;
            const { data } = await axios(completeUrl);
            // const data = await response.json();
            if (data) setImages(data);
            setLoading(false);
        }
        catch (e) {
            setErrorMsg(e.message);
            setLoading(false);
        }
    }

    //useEffect to trigger whenever a new url is given or the app is triggered
    useEffect(() => {
        if (url !== "") fetchImages(url);
    }, [url, page, limit]);

    //loading and error problem
    if (loading) {
        return (
            <div>Data is being fetched....</div>
        )
    }
    if (errorMsg) {
        return (
            <div>Error has occured : {errorMsg}</div>
        )
    }

    //functions to handle arrow clicks
    function handlePrevious() {
        setCurrentSlide(
            currentSlide === 0 ? images.length - 1 : currentSlide - 1
        )
    }
    function handleNext() {
        setCurrentSlide(
            currentSlide === images.length - 1 ? 0 : currentSlide + 1
        )
    }
    return (
        <div className='container'>
            <div className='image-wrapper'>
                <BsArrowLeftCircleFill onClick={handlePrevious} className='arrow arrow-left' />
                {
                    images && images.length ?
                        images.map((imageItem, index) => (
                            <img
                                key={imageItem.id}
                                src={imageItem.download_url}
                                alt={imageItem.download_url}
                                className={currentSlide === index ? 'current-image' : 'current-image-hidden'}
                            />
                        )) : null
                }
                <BsArrowRightCircleFill onClick={handleNext} className='arrow arrow-right' />
                <span className='circle-indiactors'>
                    {
                        images && images.length ?
                            images.map((__, index) => (
                                <button key={index} 
                                onClick={()=>setCurrentSlide(index)}
                                className={
                                    currentSlide === index ? 'current-indicator current-indicator-active' : 'current-indicator'
                                }></button>
                            )) : null
                    }
                </span>
            </div>

        </div>
    )

}
