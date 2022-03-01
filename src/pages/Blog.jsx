import { graphql, useStaticQuery } from "gatsby";
import { StructuredText } from "react-datocms";
import React from "react";

function MainSecond() {
    const data = useStaticQuery(graphql`
        {
            allDatoCmsFlex {
                edges {
                    node {
                        id
                        title
                        seotitle
                        gallery {
                            size
                            width
                            height
                            path
                            format
                            isImage
                            notes
                            author
                            copyright
                            filename
                            basename
                            exifInfo
                            mimeType
                            blurhash
                            originalId
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
                    }
                }
            }
        }
    `);
    return (
        <>
            <h1>hej</h1>
            <div>
                {data.allDatoCmsFlex.edges.map(({ node }) => {
                    return (
                        <div key={node.id}>
                            {node.title} ---- {node.data} <StructuredText data={node.content.value} />
                            <img src={node.gallery[0].url} alt="" />
                        </div>
                    );
                })}
            </div>
        </>
    );
}
