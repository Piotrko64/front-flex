import React from "react";
import "../Styles/mainFirst.scss";

function MainFirst() {
    return (
        <main className="padding">
            <div className="Hello">
                <div className="Hello__left">
                    <div className="Hello__vector">Hello</div>
                    <div className="Hello__Iam">
                        {1 ? "Jestem Piotrek" : "I am Peter"}
                        <br />
                        <div className="Hello__fav">
                            {1 ? "Front-Endowiec" : "Junior Front-end"}
                        </div>

                        {1 ? "To jest moja strona" : "This is my webiste"}
                        <br />
                        <div className="Hello__fav">Front-Flex</div>
                    </div>
                </div>
                <div className="Hello__brand">
                    {/* <img src={mainLogo} alt="" /> */}

                    <div className="Hello__title">
                        FRONT <span> FLEX</span>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default MainFirst;
