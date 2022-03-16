import * as React from "react";
import FooterFront from "./FooterFront";
import mail from "../images/Icons/mail.png";
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__flex">
                <div className="footer__oneInfo">
                    <img src={mail} alt="" />
                    <a href="mailto: frontflexemail@gmail.com">frontflexemail@gmail.com</a>
                </div>
            </div>
            <FooterFront />
        </footer>
    );
};

export default Footer;
