import * as React from "react";
import { Link } from "gatsby";
import error from "../images/error.png";
import Baner from "../components/Baner";
const NotFoundPage = () => {
    return (
        <div style={{ background: "#1e1e1e", height: "100vh", width: "100%" }}>
            <Baner img={error} title="" />
            <div style={{ textAlign: "center", color: "white", fontSize: "2.2em" }}> Oh no! Error 404</div>
        </div>
    );
};

export default NotFoundPage;
