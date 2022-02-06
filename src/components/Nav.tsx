import "../styles/Nav.scss";
import * as React from "react";
// import MiniLogo from '../Components/minilogo';

// Icons
import { AiFillGithub, AiFillSetting } from "react-icons/ai";

function Nav() {
    return (
        <nav className="padding">
            <div className="nav__logo"></div>
            <ul className="nav__ul">
                <li>
                    <a>{1 ? "Projekty" : "Projects"}</a>
                </li>
                <li>Blog</li>
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
        </nav>
    );
}

export default Nav;
