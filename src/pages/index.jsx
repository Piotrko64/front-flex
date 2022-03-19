import * as React from "react";
import Nav from "../components/Nav";
import Home from "./Main";
import "../styles/index.scss";
import { Router, Link } from "@reach/router";
import NotFoundPage from "./404";
const IndexPage = () => {
    return (
        <>
            <Router>
                <Home path="/" />
                <NotFoundPage default />
            </Router>
        </>
    );
};

export default IndexPage;
