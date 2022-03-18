import react from "../../images/Icons/react.png";
import mongodb from "../../images/Icons/mongodb.png";
import js from "../../images/Icons/js.png";
import nodemailer from "../../images/Icons/nodemailer.png";
import reactbootstrap from "../../images/Icons/reactbootstrap.svg";
import gatsby from "../../images/Icons/gatsby.svg";
import DatoCMS from "../../images/Icons/DatoCMS.png";
import angular from "../../images/Icons/angular.png";
import ts from "../../images/Icons/ts.png";
import cy from "../../images/Icons/cy.png";
import node from "../../images/Icons/node.png";
import sass from "../../images/Icons/sass.png";
import less from "../../images/Icons/less.svg";
import backSA from "../../images/backgroundProjects/SA.jpg";
import IQuiz from "../../images/backgroundProjects/IQuiz.jpg";
import CRUD from "../../images/backgroundProjects/CRUD.png";
import FF from "../../images/backgroundProjects/FF.png";
export const dataProjects = [
    {
        name: "Sound Architecture",
        describe: `React website for Sound Architecture.
        Invite His channel on Youtube or Bandcamp! I use React and typescript. I think
        that was better choose than Vanilla JS because I wanted well divide website on components.
        Owner of 'SA' have acces to database (MongoDB) to manage music on this website. Thanks by this project I also learned better using MongoDB and NodeJS. If you want you can find 
        code to API for SA on my github.
        `,
        background: backSA,
        github: "https://github.com/Piotrko64/react-sound-architecture",
        host: "https://soundarchitecture.netlify.app",
        icons: [react, ts, sass, node, mongodb],
    },
    {
        name: "IQuiz",
        describe: `This was my first website made with Angular. When I learned React on proper level I started thinking about learning another framerwork. At the beginning I thought about VueJS. I heard that its easy to learn but this time I wanted something more challanging so I chose Angular. Why? Because it is more complicated and has higher demand on labour market.  IQuiz is an app where you can create a quiz! I am still learning Angular. This is interesting and new experience for me to write webiste using both React and Angular.`,
        background: IQuiz,
        github: "https://github.com/Piotrko64/react-sound-architecture",
        host: "https://soundarchitecture.netlify.app",
        icons: [angular, ts, less],
    },
    {
        name: "CRUD Note",
        describe: `This was my first website with Angular. When I learned React on good level I thinking about knowing next framework. At the beginning I thought about VueJS. I heard that Vue is easy to learn but I wanted challenge! I chose Angular. Why? Because it is more hardly and I think that more employer want Angular Developer. IQuiz is app where you can do and made quiz! I still learn Angular. This is interesting new experience write website with React and Angular`,
        background: CRUD,
        github: "https://github.com/Piotrko64/react-sound-architecture",
        host: "https://soundarchitecture.netlify.app",
        icons: [js, react, reactbootstrap, cy, node, mongodb],
    },
    {
        name: "Front Flex",
        describe: `This was my first website with Angular. When I learned React on good level I thinking about knowing next framework. At the beginning I thought about VueJS. I heard that Vue is easy to learn but I wanted challenge! I chose Angular. Why? Because it is more hardly and I think that more employer want Angular Developer. IQuiz is app where you can do and made quiz! I still learn Angular. This is interesting new experience write website with React and Angular`,
        background: FF,
        github: "https://github.com/Piotrko64/react-sound-architecture",

        icons: [gatsby, ts, sass, DatoCMS],
    },
];
