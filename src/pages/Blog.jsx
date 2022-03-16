import { graphql, useStaticQuery } from "gatsby";
import blogBack from "../images/blogBackground.jpeg";
import React from "react";

import Baner from "../components/Baner";
import "../styles/index.scss";

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

    return (
        <>
            <Layout>
                <div class="blog">
                    <Baner img={blogBack} title="Blog" />
                    <div class="blog__grid">
                        {data.allDatoCmsFlex.edges.reverse().map(({ node }) => {
                            return (
                                <div class="blog__childOfGrid">
                                    <img src={node.thumbnail.url} alt="" />
                                    <div class="blog__postDescribe">
                                        <data>{node.data}</data>
                                        <h2>{node.title}</h2>
                                        <p>{node.thumbnailtext}</p>
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
