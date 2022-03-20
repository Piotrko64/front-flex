import * as React from "react";
import { AiFillGithub } from "react-icons/ai";
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";
import { MyProjects } from "../../../Others/Typing";
const MyProject = ({ value }: { value: MyProjects }) => {
    console.log(value);
    return (
        <article className="MyProjects__projectOne">
            <div className="projectOne__back" style={{ backgroundImage: `url(${value.background})` }}>
                <div className="projectOne__title">{value.name}</div>
            </div>
            <div className="projectOne__describe padding">
                <div className="projectOne__icons">
                    {value.icons.map((i) => (
                        <img src={i} alt="" loading="lazy" />
                    ))}
                </div>

                {value.describe}
                <div className="projectOne__link">
                    {value?.github ? (
                        <a href={value.github} target="_blank">
                            <AiFillGithub />
                        </a>
                    ) : (
                        ""
                    )}
                    {value?.host ? (
                        <a href={value.host} target="_blank">
                            <BsFillArrowUpRightSquareFill />
                        </a>
                    ) : (
                        ""
                    )}
                </div>
                <hr />
            </div>
        </article>
    );
};
export default MyProject;
