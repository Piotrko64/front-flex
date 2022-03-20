import React from "react";
import react from "../../images/Icons/react.png";
import git from "../../images/Icons/git.png";
import angular from "../../images/Icons/angular.png";
import mongodb from "../../images/Icons/mongodb.png";
import js from "../../images/Icons/js.png";
import gatsby from "../../images/Icons/gatsby.svg";
import ts from "../../images/Icons/ts.png";
import node from "../../images/Icons/node.png";
import sass from "../../images/Icons/sass.png";
import html from "../../images/Icons/html.png";
import css from "../../images/Icons/css.png";
import bootstrap from "../../images/Icons/bootstrap.png";
// import bootstrap from "../images/Icons/bootstrap.png";
export default function MainThird() {
    const arrayOfSkills = [ts, js, react, gatsby, html, css, sass, bootstrap, node, mongodb, git, angular];
    return (
        <>
            <h1>Skills</h1>
            <section className="Skills padding">
                {arrayOfSkills.map((e) => (
                    <img src={e} key={e} alt={e} loading="lazy" />
                ))}
            </section>
        </>
    );
}
