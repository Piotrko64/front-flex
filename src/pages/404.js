import * as React from "react";
import { Link } from "gatsby";
import error from "../images/error.png";
import Baner from "../components/Baner";
import Layout from "../components/Layout";
import "../styles/index";
const NotFoundPage = () => {
    return (
        <Layout>
            <div style={{ background: "#1e1e1e", height: "100vh", width: "100%" }}>
                <Baner img={error} title="" />
                <div style={{ textAlign: "center", color: "white", fontSize: "2.2em" }}>
                    {" "}
                    Oh no! Error 404
                </div>
            </div>
        </Layout>
    );
};

export default NotFoundPage;
