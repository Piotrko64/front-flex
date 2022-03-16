import * as React from "react";
import { useState } from "react";
import Baner from "../components/Baner";
import backProject from "../images/projects.jpg";
import Layout from "../components/Layout";
const Projects = () => {
    return (
        <Layout>
            <main className="contact">
                <Baner img={backProject} title="Projects" />
            </main>
        </Layout>
    );
};

export default Projects;
