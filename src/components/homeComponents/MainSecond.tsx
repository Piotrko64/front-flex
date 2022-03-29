import React, { useContext } from "react";
import backCode from "../../images/backCode.png";
import Me from "../../images/pjoter.webp";
function MainSecond() {
    return (
        <section className="About" style={{ backgroundImage: `url(${backCode})` }}>
            <div className="About__photo">
                <img src={Me} alt="" title="Hello :D" />
            </div>
            <div className="About__describe padding">
                <h1>About me</h1>
                Hi! I am Piotr. My dream is become <span>Front-end Developer</span>. I have title technician
                informatics and now study economy. My passion create website is with me for two years. I like
                work with <span>JavaScript</span> and others front-end tools
                {"("}React <span>&#x2764;</span>
                {")"}. <span>Front Flex</span> is my website where I can show my projects {"("}and learn how
                to build interesting blog with Gatsby!{")"}. I invite you to look on my projects, my github
                and posts on my blog.If you want to cooperate with me or if you want have a website{" "}
                <span>Write to me!</span>
            </div>
        </section>
    );
}

export default MainSecond;
