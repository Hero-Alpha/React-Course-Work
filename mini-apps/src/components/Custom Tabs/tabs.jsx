import { useState } from "react";
import './tabs.css';

function Tabs({ tabContent, onChange }) {

    const [currentIndex, setCurrentIndex] = useState(0);

    function handleClick(getCurrentIndex) {
        setCurrentIndex(getCurrentIndex);
        onChange(getCurrentIndex);
    }

    return (
        <div className="wrapper">
            <div className="heading">
                {tabContent && tabContent.length
                    ? tabContent.map((tabItem, index) => (
                        <button
                            className={index === currentIndex ? "active-tab" : "inactive-tab"}
                            onClick={() => handleClick(index)}
                            key={tabItem.label}
                        >
                            {tabItem.label}
                        </button>
                    ))
                    : null}
            </div>

            <div className="content">
                <p>{tabContent[currentIndex] && tabContent[currentIndex].content}</p>
                <img src={tabContent[currentIndex].url} alt={tabContent[currentIndex].label} />
            </div>
        </div>
    );

}

export default Tabs;