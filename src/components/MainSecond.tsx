import React from "react";
import backCode from "../images/backCode.png";
import { StaticImage } from "gatsby-plugin-image";
function MainSecond() {
    return (
        <section className="About" style={{ backgroundImage: `url(${backCode})` }}>
            <div className="About__photo">
                <StaticImage src="../images/pjoter.webp"></StaticImage>
            </div>
            <div className="About__describe padding">
                <h1>O mnie</h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dignissimos quo aut, sed facere
                maiores placeat magnam necessitatibus pariatur ullam officia optio dicta quis fuga vel velit.
                Aut, praesentium. Rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Est quod,
                incidunt consectetur cum doloremque, officiis natus at deleniti cumque odio, voluptatem
                quaerat! Animi iste dolores error tempora voluptates voluptatum cum?
            </div>
        </section>
    );
}

export default MainSecond;
