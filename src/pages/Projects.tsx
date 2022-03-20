import * as React from "react";
import "../styles/Projects.scss";
import { dataProjects } from "../Others/dataProjects";
import Baner from "../components/Baner";
import { Helmet } from "react-helmet";
import backProject from "../images/projects.jpg";
import Layout from "../components/Layout";
import MyProject from "../components/homeComponents/microComponents/MyProject";
import { MyProjects } from "../Others/Typing";
const Projects = () => {
    return (
        <>
            <Helmet>
                <title>My Projects</title>
            </Helmet>
            <Layout>
                <main className="MyProjects">
                    <Baner img={backProject} title="Projects" />
                    <p>
                        This is my humble gallery for my projects. I use various technologies to gain as much
                        useful experience as possible and to learn as many Front-end tools as possible
                    </p>
                    {dataProjects.map((e: MyProjects) => (
                        <MyProject value={e} key={e.name} />
                    ))}
                </main>
            </Layout>
        </>
    );
};

export default Projects;
