import { graphql, useStaticQuery } from "gatsby";
import { StructuredText } from "react-datocms";
import React from "react";
import Nav from "../components/Nav";

function Blog() {
    const data = useStaticQuery(graphql`
        {
            allDatoCmsFlex {
                edges {
                    node {
                        id
                        title
                        seotitle
                        gallery {
                            url
                            createdAt
                            alt
                            title
                            customData
                        }
                        data
                        color {
                            rgb
                        }
                        content {
                            value
                        }
                        slug
                    }
                }
            }
        }
    `);
    return (
        <>
            <Nav />
            <h1>hej</h1>
            <div>
                {data.allDatoCmsFlex.edges.map(({ node }) => {
                    return (
                        <div key={node.id}>
                            <button>
                                <a href={node.slug}>Kliknij tuuuuu</a>
                            </button>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
export default Blog;
