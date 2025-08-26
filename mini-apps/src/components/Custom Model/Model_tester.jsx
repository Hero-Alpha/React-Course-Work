import { useState } from "react";
import Model from "./Model";
import './Model.css';

function Model_tester() {

    const [showCustomModel , setShowCustomModel] = useState(false);

    function handleToggleButton(){
        setShowCustomModel(!showCustomModel);
    }

    function onCloseClick(){
        setShowCustomModel(false);
    }

    return (
        <div>
            <button className={showCustomModel ? "removed" : "button-42"} onClick={handleToggleButton}> 
                Open Custom Model
            </button>
            {showCustomModel && 
                <Model 
                    onClose={onCloseClick}
                />
            }
        </div>
    );
}

export default Model_tester;