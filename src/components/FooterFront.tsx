import * as React from "react";
import miniLogo from "../images/minilogo.png";
const FooterFront = () => {
    return (
        <div className="footerFront">
            Website made with <span> &#x2764; </span> by Front Flex
            <a href="https://frontflex.netlify.app" target="_blank">
                <img src={miniLogo} alt="my logo" />
            </a>
        </div>
    );
};

export default FooterFront;
