import * as React from "react";
import { dataProjects } from "../components/homeComponents/dataProjects";
import Baner from "../components/Baner";
import backProject from "../images/projects.jpg";
import Layout from "../components/Layout";
const Projects = () => {
    return (
        <Layout>
            <main className="MyProjects">
                <Baner img={backProject} title="Projects" />
                <div className="MyProjects__container">
                    {dataProjects.map((e) => (
                        <article className="MyProjects__projectOne">
                            {e.host}
                            <img src={e.icons[0]} alt="" />
                        </article>
                    ))}
                </div>
            </main>
        </Layout>
    );
};

export default Projects;
