import React, { useContext } from "react";
import backCode from "../../images/backCode.png";
import { Context } from "../Layout";
import { StaticImage } from "gatsby-plugin-image";
function MainSecond() {
    let value = useContext(Context);

    return (
        <section className="About" style={{ backgroundImage: `url(${backCode})` }}>
            <div className="About__photo">
                <StaticImage src="../images/pjoter.webp" alt=""></StaticImage>
            </div>
            <div className="About__describe padding">
                <h1
                    onClick={() => {
                        value.useColor("red"), value.useLanguage("ANG");
                    }}
                >
                    O mnie
                </h1>
                {value.settings.language}
            </div>
        </section>
    );
}

export default MainSecond;
