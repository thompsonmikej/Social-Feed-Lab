import React, { useState } from 'react';
import "./CustomButton.css"
// import 'bootstrap/dist/css/bootstrap.min.css'
// https://icons.getbootstrap.com/icons/hand-thumbs-up-fill/

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
            <div>
                <button type='submit' className={buttonClass} onClick={handleClick}>
                        <i className="glyphicon glyphicon-thumbs-up"></i>
                </button>
            </div>
            <div>
                <button type='submit' className={buttonClass} onClick={handleClick}>
                    <i className="glyphicon glyphicon-thumbs-down"></i>
                </button>
            </div>
            </React.Fragment>
        )
    }
}
export default CustomButton;