import * as React from "react";
import Nav from "../components/Nav";
import Home from "../pages/Main";
import "../styles/index.scss";
import { Router, Link, RouteComponentProps } from "@reach/router";
interface ISignupPageProps extends RouteComponentProps {
    someProp: string;
}
const IndexPage: ISignupPageProps = () => {
    return (
        <>
            <Nav />
            <Router>
                <Home path="/" />
            </Router>
        </>
    );
};

export default IndexPage;
