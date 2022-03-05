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
                    }
                }
            }
        }
    `);
    return (
        <>
            <Nav />
            <div class="blog">
                <div class="blog__back" style={{ backgroundImage: `url(${blogBack})` }}>
                    <h1>BLOG</h1>
                </div>
                <div class="blog__grid"></div>
            </div>
            <div>
                {data.allDatoCmsFlex.edges.map(({ node }) => {
                    return (
                        <div key={node.tilte}>
                            <button>
                                <a href={"/Posts/" + node.slug}>Kliknij tuuuuu</a>
                            </button>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
export default Blog;
