import Nav from "../components/Nav";
import FooterFront from "./FooterFront";
import * as React from "react";
const Layout = ({ children }) => {
    return (
        <>
            <Nav />
            {children}
            <FooterFront />
        </>
    );
};

export default Layout;
