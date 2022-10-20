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
            <div>
                <button type='submit' className={buttonClass} onClick={handleClick}></button>
            </div> //There is no message, but the change of color/state from active to inactive
        )
    }
}
export default CustomButton