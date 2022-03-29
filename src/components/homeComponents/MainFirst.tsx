import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import mainBack from "../../images/mainBack.svg";

function MainFirst() {
    return (
        <main className="padding" style={{ backgroundImage: `url(${mainBack})` }}>
            <div className="Hello">
                <div className="Hello__left">
                    <div className="Hello__vector">Hello</div>
                    <div className="Hello__Iam">
                        I am Peter
                        <br />
                        <div className="Hello__fav">Junior Front-end Dev</div>
                        This is my webiste
                        <br />
                        <div className="Hello__fav">Front-Flex</div>
                    </div>
                </div>
                <div className="Hello__brand">
                    <StaticImage src="../../images/mainLogo.svg" alt="logo Front-Flex" loading="lazy" />
                    {/* <img src={LOGO} alt="" /> */}
                    <div className="Hello__title">
                        FRONT <span> FLEX</span>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default MainFirst;
