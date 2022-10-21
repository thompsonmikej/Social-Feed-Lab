import React, { useState } from 'react';
import "./CustomButton.css"

const CustomButton = (props) => {
//default for thumbswidgets
    const [buttonClass, setButtonClass] = useState("inactive")

    function handleClick() {
        // toggle between inactive and active states
        if (buttonClass ==="inactive") {
            setButtonClass("active");
        }
        else {
            setButtonClass("inactive")
        }

        return (
            <React.Fragment>
            <span>
                <button type='submit' className={buttonClass} onClick={handleClick}>
                    <i className="glyphicon glyphicon-thumbs-up"> </i>
                </button>
            </span> //There is no message, but the change of color/state from active to inactive
            <span>
                <button type='submit' className={buttonClass} onClick={handleClick}>
                    <i className="glyphicon glyphicon-thumbs-down"> </i>
                </button>
                </span>
            </React.Fragment>
        )
    }
}
export default CustomButton