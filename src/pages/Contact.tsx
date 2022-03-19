import * as React from "react";
import { useState } from "react";
import Baner from "../components/Baner";
import "../styles/Contact.scss";
import backContact from "../images/contact.jpg";
import Layout from "../components/Layout";

const Contact = () => {
    async function Send(e) {
        e.preventDefault;
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
                    Simple contact form! Write to me if you want talking about coding or if you want me to
                    make a page for you. Remember that I am willing to cooperate and new experience.
                </div>
                <div className="contact__form">
                    <form action="mailto:Frontflex@gmail.com">
                        <input
                            name="subject"
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
                            name="body"
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
