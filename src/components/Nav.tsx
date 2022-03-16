import React, { useState } from "react";
import { Link } from "gatsby";

// Icons
import { AiFillGithub, AiFillSetting } from "react-icons/ai";
import miniLogo from "../images/minilogo.png";
function Nav() {
    const [nav, useNav] = useState(false);
    return (
        <nav className="padding">
            <a href="../../../">
                <img src={miniLogo} alt="" className="nav__logo" />
            </a>

            <ul className={nav ? "nav__ul active" : "nav__ul"}>
                <li>
                    <Link to="/Projects">Projects</Link>
                </li>
                <li>
                    <Link to="/Blog">Blog</Link>
                </li>
                <li>
                    <Link to="/Contact">Contact</Link>
                </li>
                <li className="nav__icon">
                    <a href="https://github.com/Piotrko64">
                        <AiFillGithub />
                    </a>
                </li>
            </ul>
            <div
                className={nav ? "nav__btn active" : "nav__btn"}
                onClick={() => {
                    useNav(!nav);
                }}
            >
                <div className="nav__btnline"></div>
                <div className="nav__btnline"></div>
                <div className="nav__btnline"></div>
            </div>
        </nav>
    );
}

export default Nav;
