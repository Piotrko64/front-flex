import { graphql, useStaticQuery } from "gatsby";
import blogBack from "../images/blogBackground.jpeg";
import React, { useContext } from "react";
import Nav from "../components/Nav";
import Baner from "../components/Baner";
import "../styles/index.scss";
import { Context } from "../components/Layout";
import Layout from "../components/Layout";
function Blog() {
    const data = useStaticQuery(graphql`
        {
            allDatoCmsFlex {
                edges {
                    node {
                        slug
                        title
                        thumbnail {
                            url
                        }
                        thumbnailtext
                        thumbnailtextpl
                        data
                    }
                }
            }
        }
    `);
    let value = useContext(Context);
    return (
        <>
            <Layout>
                <div class="blog">
                    <Baner img={blogBack} title="Blog" />
                    <div class="blog__grid">
                        {data.allDatoCmsFlex.edges.map(({ node }) => {
                            return (
                                <div class="blog__childOfGrid">
                                    <img src={node.thumbnail.url} alt="" />
                                    <div class="blog__postDescribe">
                                        <span>{node.data}</span>
                                        <h2>{node.title}</h2>
                                        <p>
                                            {value.settings.language === "ANG"
                                                ? node.thumbnailtext
                                                : node.thumbnailtextPL}
                                        </p>
                                        <button>
                                            <a href={"/posts/" + node.slug}>Read more</a>
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </Layout>
        </>
    );
}
export default Blog;
