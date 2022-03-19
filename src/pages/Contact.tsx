import * as React from "react";
import { useState } from "react";
import Baner from "../components/Baner";
import "../styles/Contact.scss";
import backContact from "../images/contact.jpg";
import Layout from "../components/Layout";

const Contact = () => {
    async function Send(e) {
        e.preventDefault();
        const response = await fetch("https://nodemailerff.herokuapp.com", {
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",

            body: JSON.stringify({
                email: mess.email,
                body: mess.text,
            }),
        });
        console.log(response); // par
        console.log(
            JSON.stringify({
                email: mess.email,
                body: mess.text,
            })
        );
    }

    const [mess, usemess] = useState<{
        email: string;
        text: string;
    }>({
        email: "",
        text: "",
    });
    return (
        <Layout>
            <main className="contact">
                <Baner img={backContact} title="Contact" />
                <div className="contact__info padding">
                    aLorem ipsum dolor sit amet consectetur adipisicing elit. Error saepe voluptate, excepturi
                    magni sint ipsum iure? Sapiente, mollitia dolore quae ullam nobis voluptatum veniam! Quo,
                    corrupti! Nam unde velit assumenda. Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit. Molestiae magni quis hic tempore explicabo eos nisi vitae voluptate. Eligendi sint
                    est recusandae quam ipsam similique quisquam quia aspernatur libero id. Lorem ipsum dolor
                    sit amet consectetur adipisicing elit. Dolore unde qui eligendi minus voluptates quae ex,
                    eos blanditiis excepturi corporis eaque sunt odio facere voluptatibus fugit iusto
                    aspernatur doloremque deleniti?
                </div>
                <div className="contact__form">
                    <form>
                        <input
                            type="email"
                            placeholder="Your email to contact"
                            value={mess.email}
                            onChange={(e) => {
                                usemess({
                                    email: e.target.value,
                                    text: mess.text,
                                });
                            }}
                        />
                        <textarea
                            placeholder="Write something to me :)"
                            value={mess.text}
                            required
                            onChange={(e) => {
                                usemess({
                                    email: mess.email,
                                    text: e.target.value,
                                });
                            }}
                        ></textarea>
                        <button
                            type="submit"
                            onClick={(e) => {
                                Send(e);
                            }}
                        >
                            Send
                        </button>
                    </form>
                </div>
            </main>
        </Layout>
    );
};

export default Contact;
