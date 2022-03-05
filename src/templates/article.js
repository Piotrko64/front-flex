import { graphql, useStaticQuery } from "gatsby";
import { StructuredText } from "react-datocms";
import React from "react";
import Nav from "../components/Nav";
import Helmet from "react-helmet";
import { createUseStyles } from "react-jss";
import "../styles/index.scss";

const Article = ({ pageContext: { slug }, data: { article } }) => {
    return (
        <>
            <Helmet>
                <title>{article.title}</title>
                <link rel="preconnect" href="https://fonts.googleapis.com"></link>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
                <link
                    href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;400;500&display=swap"
                    rel="stylesheet"
                ></link>
                <link rel="preconnect" href="../styles/index.scss"></link>
            </Helmet>
            <Nav />
            <article class="article">
                <div className="article__back" style={{ backgroundImage: `url(${article.background.url})` }}>
                    <h1>{article.title}</h1>
                </div>
                <div className="article__describe">
                    <span>{article.data}</span>
                    <StructuredText data={article.content.value} />
                    <div className="article__gallery">
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
