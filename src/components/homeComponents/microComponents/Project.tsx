import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";
export default function Project({ title, p, github, host, back }) {
    return (
        <div className="Project" style={{ backgroundImage: `url(${back})` }}>
            <h2>{title}</h2>

            <div className="Project__link">
                <p>{p}</p>
                <div className="Project__a">
                    <a href={github} target="_blank" rel="noreferrer">
                        <AiFillGithub />
                    </a>
                    <a href={host} target="_blank" rel="noreferrer">
                        <BsFillArrowUpRightSquareFill />
                    </a>
                </div>
            </div>
        </div>
    );
}
