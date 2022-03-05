import React, { useState } from "react";
import { Link } from "gatsby";

// Icons
import { AiFillGithub, AiFillSetting } from "react-icons/ai";

function Nav() {
    const [nav, useNav] = useState<boolean>(false);
    return (
        <nav className="padding">
            <div className="nav__logo"></div>
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
