import React from "react";
import Project from "./microComponents/Project";
import SA from "../../images/SA2.webp";
import IQuiz from "../../images/IQuiz.jpg";
import CRUD from "../../images/CRUD.png";
export default function MainFourth() {
    return (
        <>
            <h1> My Projects</h1>
            <section className="Projects">
                <>
                    <Project
                        title="CRUD"
                        p="Create, Read, Update, Delete app with back-end"
                        github="https://github.com/Piotrko64/Front-CRUD-Notes"
                        host="https://piotrkocrud64.netlify.app"
                        back={CRUD}
                    />
                    <Project
                        title="SA"
                        p="Music typescript website for Sound Architecture"
                        github="https://github.com/Piotrko64/react-sound-architecture"
                        host="https://soundarchitecture.netlify.app"
                        back={SA}
                    />

                    <Project
                        title="IQuiz"
                        p="Angular quiz app to do and create quiz"
                        github="https://github.com/Piotrko64/IQuiz"
                        host="https://iquizfrontflex.netlify.app"
                        back={IQuiz}
                    />
                </>
            </section>
        </>
    );
}
