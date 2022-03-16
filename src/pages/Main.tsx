import React, { useEffect } from "react";
import FooterFront from "../components/FooterFront";
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
        const random = Math.round(Math.random() * colors.length);
        document.documentElement.style.setProperty("--favourite", colors[random]);
    }, []);
    return (
        <>
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
