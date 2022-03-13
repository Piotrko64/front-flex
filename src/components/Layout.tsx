import Nav from "../components/Nav";
import FooterFront from "./FooterFront";
import * as React from "react";
export const Context = React.createContext({
    settings: {
        language: localStorage.getItem("language") || "ANG",
        color: localStorage.getItem("color") || "rgb(107, 116, 202)",
    },
    useLanguage: (e: any) => {},
    useColor: (e: any) => {},
});
const Layout = ({ children }) => {
    const [settings, usesettings] = React.useState({
        language: localStorage.getItem("language") || "ANG",
        color: localStorage.getItem("color") || "rgb(107, 116, 202)",
    });
    React.useEffect(() => {
        document.documentElement.style.setProperty(
            "--favourite",
            localStorage.getItem("color") || "rgb(107, 116, 202)"
        );
    }, []);
    return (
        <Context.Provider
            value={{
                settings,
                useLanguage: (e) => {
                    usesettings({
                        language: e,
                        color: settings.color,
                    });
                },
                useColor: (e) => {
                    localStorage.setItem("color", e);
                    document.documentElement.style.setProperty("--favourite", e);
                    usesettings({
                        language: settings.language,
                        color: e,
                    });
                },
            }}
        >
            <Nav />
            {children}
            <FooterFront />
        </Context.Provider>
    );
};

export default Layout;
