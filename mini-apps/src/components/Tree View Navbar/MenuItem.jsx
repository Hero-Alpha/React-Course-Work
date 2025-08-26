import { useState } from "react";
import { FaPlus, FaMinus } from 'react-icons/fa';
import './menu.css';
import MenuList from "./MenuList";

function MenuItem({ item }) {
    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

    function handleDisplayToggle(getCurrentChildren) {
        setDisplayCurrentChildren(prev => ({
            ...prev,
            [getCurrentChildren]: !prev[getCurrentChildren]
        }));
    }

    return (
        <li className="menu-item" key={item.id}>
            <div className="menu-label-row" onClick={() => handleDisplayToggle(item.label)}>
                <span className="menu-label">{item.label}</span>
                {item.children && item.children.length > 0 && (
                    <span className="menu-icon">
                        {displayCurrentChildren[item.label] ? <FaMinus /> : <FaPlus />}
                    </span>
                )}
            </div>

            {item.children && item.children.length > 0 && displayCurrentChildren[item.label] && (
                <MenuList list={item.children} />
            )}
        </li>
    );
}

export default MenuItem;
