import React from "react";
import FooterFront from "../components/FooterFront";
import Layout from "../components/Layout";
import MainFirst from "../components/homeComponents/MainFirst";
import MainSecond from "../components/homeComponents/MainSecond";
import MainFourth from "../components/homeComponents/MainFourth";
import MainThird from "../components/homeComponents/MainThird";
function Main() {
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
