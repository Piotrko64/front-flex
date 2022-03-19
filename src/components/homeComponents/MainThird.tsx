import React from "react";
import react from "../../images/Icons/react.png";
import mongodb from "../../images/Icons/mongodb.png";
import js from "../../images/Icons/js.png";
import gatsby from "../../images/Icons/gatsby.svg";
import ts from "../../images/Icons/ts.png";
import node from "../../images/Icons/node.png";
import sass from "../../images/Icons/sass.png";
import html from "../../images/Icons/html.png";
import css from "../../images/Icons/css.png";
// import bootstrap from "../images/Icons/bootstrap.png";
export default function MainThird() {
    const arrayOfSkills = [ts, js, react, gatsby, html, css, sass];
    return (
        <>
            <h1>Skills</h1>
            <section className="Skills"></section>
        </>
    );
}
