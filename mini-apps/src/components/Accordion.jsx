import { useState } from "react"
import data from '../data/accordion_data';
import './Accordion.css';

export default function Accordion() {

    // Single selection functionality
    const [selected, setSelected] = useState(null);

    // console.log(selected);
    function handleSingleSelection(currentItemId) {
        setSelected(selected === currentItemId ? null : currentItemId);
        console.log(selected);
    }

    //Multiple selection functionality
    const [enableMultipleSelection, setEnableMultipleSelection] = useState(false);
    const [multiple, setMultiple] = useState([]);
    console.log(multiple);
    function handleMultipleSelection(currentItemId) {
        let cpySelection = [...multiple];
        const indexOfCurrentSelection = cpySelection.indexOf(currentItemId);
        if (indexOfCurrentSelection === -1) cpySelection.push(currentItemId);
        else cpySelection.splice(indexOfCurrentSelection, 1);

        setMultiple(cpySelection);
    }

    function toggleSelectionMode() {
        setEnableMultipleSelection(prev => {
            const newMode = !prev;
            if (newMode) {
                setSelected(null); // clear single mode state
            } else {
                setMultiple([]); // clear multiple mode state
            }
            return newMode;
        });
    }


    return (

        <div className="wrapper">
            <div>
                <button className="button-17" onClick={toggleSelectionMode}>
                    {enableMultipleSelection ? "Switch to Single Selection" : "Enable Multiple Selection"}
                </button>

            </div>
            <div className="accordion">
                {
                    data && data.length > 0 ? (
                        data.map((dataItem) => (
                            <div className="item"
                                onClick={
                                    enableMultipleSelection ?
                                        () => handleMultipleSelection(dataItem.id) :
                                        () => handleSingleSelection(dataItem.id)}>
                                <div className="title">
                                    <h2>{dataItem.question}</h2>
                                    <span>&#11167;</span>
                                </div>
                                {
                                    selected === dataItem.id ||
                                        multiple.indexOf(dataItem.id) !== -1 ? (
                                        <div className="description">
                                            {dataItem.answer}
                                        </div>
                                    )
                                        : null
                                }
                            </div>
                        ))
                    )
                        :
                        <div>
                            <h2>
                                No data present to put in the accordion
                            </h2>
                        </div>
                }
            </div>
        </div>
    )
}
