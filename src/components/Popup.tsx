import * as React from "react";

function Popup() {
    return (
        <div className="Popup">
            Settings
            <hr />
            Language
            <button className="Popup__language" type="button">
                PL
            </button>
            <button className="Popup__language" type="button">
                ANG
            </button>
            Colors
            <button type="button"> red </button>
            <input type="color" />
        </div>
    );
}

export default Popup;
