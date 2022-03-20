import Nav from "../components/Nav";
import * as React from "react";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import miniLogo from "../images/minilogo.png";
const Layout = ({ children }) => {
    return (
        <>
            <Helmet>
                <link rel="icon" type="image/png" href={miniLogo}></link>
            </Helmet>
            <Nav />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
