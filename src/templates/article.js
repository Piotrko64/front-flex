import { graphql, useStaticQuery } from "gatsby";

import React from "react";

const Article = ({ pageContext: { slug }, data: { article } }) => {
    return (
        <>
            <p>{article.slug}</p>
        </>
    );
};
export const query = graphql`
    query fetchArticle($slug: String) {
        article: datoCmsFlex(slug: { eq: $slug }) {
            slug
        }
    }
`;

export default Article;
