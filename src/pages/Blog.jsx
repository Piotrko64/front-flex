import { graphql, useStaticQuery } from "gatsby";
import blogBack from "../images/blogBackground.jpeg";
import React from "react";
import "../styles/Blog.scss";
import Baner from "../components/Baner";
import "../styles/index.scss";
import Layout from "../components/Layout";
function Blog() {
    let data = useStaticQuery(graphql`
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
    // Custom sorting
    let dataFilter = data.allDatoCmsFlex.edges.sort(
        (a, b) =>
            b.node.data.split("-")[0] * 100 +
            b.node.data.split("-")[1] * 10 +
            b.node.data.split("-")[2] -
            (a.node.data.split("-")[0] * 100 + a.node.data.split("-")[1] * 10 + a.node.data.split("-")[2])
    );

    return (
        <>
            <Layout>
                <div className="blog">
                    <Baner img={blogBack} title="Blog" />
                    <div className="blog__grid">
                        {dataFilter.map(({ node }) => {
                            return (
                                <div className="blog__childOfGrid">
                                    <img src={node.thumbnail.url} alt="" />
                                    <div className="blog__postDescribe">
                                        <data>{node.data}</data>

                                        <h2>{node.title}</h2>
                                        <p>{node.thumbnailtext}</p>

                                        <a href={"/posts/" + node.slug}>Read more</a>
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
