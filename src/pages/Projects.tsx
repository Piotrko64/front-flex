import * as React from "react";
import "../styles/Projects.scss";
import { dataProjects } from "../components/homeComponents/dataProjects";
import Baner from "../components/Baner";
import backProject from "../images/projects.jpg";
import Layout from "../components/Layout";
import { AiFillGithub } from "react-icons/ai";
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";
const Projects = () => {
    return (
        <Layout>
            <main className="MyProjects">
                <Baner img={backProject} title="Projects" />
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur possimus natus qui,
                    beatae facere dolorem, unde quas doloribus quibusdam maxime nihil dolore consectetur?
                    Quidem dolores, quisquam enim mollitia odit debitis!
                </p>
                {dataProjects.map((e) => (
                    <article className="MyProjects__projectOne">
                        <div className="projectOne__back" style={{ backgroundImage: `url(${e.background})` }}>
                            <div className="projectOne__title">{e.name}</div>
                        </div>
                        <div className="projectOne__describe padding">
                            <div className="projectOne__icons">
                                {e.icons.map((i) => (
                                    <img src={i} alt="" />
                                ))}
                            </div>

                            {e.describe}
                            <div className="projectOne__link">
                                {e?.github ? (
                                    <a href={e.github} target="_blank">
                                        <AiFillGithub />
                                    </a>
                                ) : (
                                    ""
                                )}
                                {e?.host ? (
                                    <a href={e.host} target="_blank">
                                        <BsFillArrowUpRightSquareFill />
                                    </a>
                                ) : (
                                    ""
                                )}
                            </div>
                        </div>
                    </article>
                ))}
            </main>
        </Layout>
    );
};

export default Projects;
