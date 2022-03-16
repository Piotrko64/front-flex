import React, { useContext } from "react";
import backCode from "../../images/backCode.png";

import Me from "../../images/pjoter.webp";
function MainSecond() {
    return (
        <section className="About" style={{ backgroundImage: `url(${backCode})` }}>
            <div className="About__photo">
                <img src={Me} alt="" />
            </div>
            <div className="About__describe padding">
                <h1>About me</h1>
            </div>
        </section>
    );
}

export default MainSecond;
