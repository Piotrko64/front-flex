import { graphql, useStaticQuery } from "gatsby";
import { StructuredText } from "react-datocms";
import React from "react";
import Nav from "../components/Nav";
import Helmet from "react-helmet";
const Article = ({ pageContext: { slug }, data: { article } }) => {
    return (
        <>
            <Helmet>
                <title>{article.title}</title>
                <link rel="stylesheet" href="../common.css"></link>
            </Helmet>
            <Nav />
            <article class="article">
                <div class="article__back" style={{ backgroundImage: `url(${article.background.url})` }}>
                    <h1>{article.title}</h1>
                </div>
                <div class="article__describe">
                    <span>{article.data}</span>
                    <StructuredText data={article.content.value} />
                    <div class="article__gallery">
                        <img src={article.gallery[0].url} />
                    </div>
                </div>
            </article>
        </>
    );
};
export const query = graphql`
    query fetchArticle($slug: String) {
        article: datoCmsFlex(slug: { eq: $slug }) {
            slug
            title
            background {
                url
            }
            data
            content {
                value
            }
            gallery {
                url
            }
        }
    }
`;

export default Article;
