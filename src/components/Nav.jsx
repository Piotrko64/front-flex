import React, { useState } from "react";
import { Link } from "gatsby";

// Icons
import { AiFillGithub, AiFillSetting } from "react-icons/ai";
import miniLogo from "../images/minilogo.svg";

function Nav() {
    const [nav, useNav] = useState(false);
    function ChangeNav() {
        useNav(!nav);
    }
    return (
        <nav className="padding">
            <a href="../../../">
                <img src={miniLogo} alt="" className="nav__logo" />
            </a>

            <ul className={nav ? "nav__ul active" : "nav__ul"}>
                <li>
                    <a>{1 ? "Projekty" : "Projects"}</a>
                </li>
                <li>
                    <Link to="/Blog">Blog</Link>
                </li>
                <li>{1 ? "Kontakt" : "Contact"}</li>
                <li className="nav__icon">
                    <a href="https://github.com/Piotrko64">
                        <AiFillGithub />
                    </a>
                </li>
                <li className="nav__icon settings">
                    <AiFillSetting />
                </li>
            </ul>
            <div className={nav ? "nav__btn active" : "nav__btn"} onClick={ChangeNav()}>
                <div className="nav__btnline"></div>
                <div className="nav__btnline"></div>
                <div className="nav__btnline"></div>
            </div>
        </nav>
    );
}

export default Nav;
