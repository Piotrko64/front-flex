import * as React from "react";
import Nav from "../components/Nav";
import Home from "../pages/Main";
import "../styles/index.scss";
import { Router, Link, RouteComponentProps } from "@reach/router";

const IndexPage = () => {
    return (
        <>
            <Nav />

            <Home />
        </>
    );
};

export default IndexPage;
