import Nav from "../components/Nav";
import FooterFront from "./FooterFront";
import * as React from "react";
import Footer from "./Footer";
import { useCookies } from "react-cookie";
const Layout = ({ children }) => {
    const [cookies, setCookie, removeCookie] = useCookies(["name", "username"]);
    console.log(cookies, "default");
    setCookie("name", "Adam");
    console.log(cookies, "nameuse");
    removeCookie("name");
    console.log(cookies, "removename");
    setCookie("username", "Kolo");
    console.log(cookies, "usersername");
    removeCookie("name");
    console.log(cookies, "nameremove");
    console.log(cookies.name);
    console.log(cookies.username);
    setCookie("name", "Piotr");
    console.log(cookies.name);
    console.log(cookies.username);
    removeCookie("username");
    console.log(cookies.name);
    console.log(cookies.username);
    return (
        <>
            <Nav />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
