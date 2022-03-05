import { graphql, useStaticQuery } from "gatsby";
import blogBack from "../images/blogBackground.jpeg";
import React from "react";
import Nav from "../components/Nav";

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
                <div class="blog__back" style={{ backgroundImage: `url(${blogBack})` }}>
                    <h1>BLOG</h1>
                </div>
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
                                        <a href={"/Posts/" + node.slug}>Read more</a>
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
