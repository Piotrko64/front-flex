import * as React from "react";
import "../styles/Projects.scss";
import { dataProjects } from "../Others/dataProjects";
import Baner from "../components/Baner";
import backProject from "../images/projects.jpg";
import Layout from "../components/Layout";
import MyProject from "../components/homeComponents/microComponents/MyProject";
import { MyProjects } from "../Others/Typing";
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
                {dataProjects.map((e: MyProjects) => (
                    <MyProject value={e} key={e.name} />
                ))}
            </main>
        </Layout>
    );
};

export default Projects;
