import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import MainFirst from "../components/homeComponents/MainFirst";
import MainSecond from "../components/homeComponents/MainSecond";
import MainFourth from "../components/homeComponents/MainFourth";
import MainThird from "../components/homeComponents/MainThird";
function Main() {
    useEffect(() => {
        window.scroll(0, 0);
        const colors = [
            "#7982db",
            "#ffba26",
            "#972bd6",
            "#3a90c9",
            "#d62b46",
            "#972bd6",
            "#579346",
            "#20678d",
        ];
        const random = Math.floor(Math.random() * colors.length);
        document.documentElement.style.setProperty("--favourite", colors[random]);
    }, []);
    return (
        <>
            <Helmet>
                <title>Front-Flex</title>
            </Helmet>
            <Layout>
                <MainFirst />
                <MainSecond />
                <MainThird />
                <MainFourth />
            </Layout>
        </>
    );
}
export default Main;
