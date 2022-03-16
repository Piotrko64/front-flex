import Nav from "../components/Nav";
import FooterFront from "./FooterFront";
import * as React from "react";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return (
        <>
            <Nav />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
