import React, { useState } from 'react';
import "./CustomButton.css"

const CustomButton = (props) => {
//default for thumbswidgets
    const [buttonClass, setButtonClass] = useState("inactiveThumbs")

    function thumbsHandleClick() {
        // toggle between inactive and active states
        if (buttonClass ==="inactive") {
            setButtonClass("activeThumbsUp";)
        }
        else {
            setButtonClass("inactive")
        }

        return (
            <div>
                <button className={buttonClass} onClick={handleClick}>{props.changeColor}</button>
            </div> //There is no message, but the change of color/state from active to inactive
        )
    }
}
export default CustomButton