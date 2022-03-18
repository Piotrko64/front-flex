import Nav from "../components/Nav";
import * as React from "react";
import Footer from "./Footer";
import { checkCookie, setCookie } from "../functions/Cookie";

const Layout = ({ children }) => {
    console.log(checkCookie("colo"));
    setCookie("colo", "redo");
    return (
        <>
            <Nav />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
