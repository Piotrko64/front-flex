import { graphql, useStaticQuery } from "gatsby";
import blogBack from "../images/blogBackground.jpeg";
import React from "react";
import Nav from "../components/Nav";
import Baner from "../components/Baner";
import "../styles/index.scss";
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
    console.log(data.allDatoCmsFlex.edges[0].node.thumbnail.url);
    return (
        <>
            <Nav />
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
        </>
    );
}
export default Blog;
