import { graphql, useStaticQuery } from "gatsby";
import { StructuredText } from "react-datocms";
import React from "react";
import Nav from "../components/Nav";
import Helmet from "react-helmet";

import { createUseStyles } from "react-jss";
const useStyles = createUseStyles({
    myButton: {
        color: "green",
        margin: {
            // jss-plugin-expand gives more readable syntax
            top: 5, // jss-plugin-default-unit makes this 5px
            right: 0,
            bottom: 0,
            left: "1rem",
        },
        "& span": {
            // jss-plugin-nested applies this to a child span
            fontWeight: "bold", // jss-plugin-camel-case turns this into 'font-weight'
        },
    },
    myLabel: {
        fontStyle: "italic",
    },
});
const Article = ({ pageContext: { slug }, data: { article } }) => {
    const classes = useStyles();
    return (
        <>
            <Helmet>
                <title>{article.title}</title>
            </Helmet>
            <button className={classes.myButton}>
                <span className={classes.myLabel}>analfabeta</span>
            </button>
            <Article>
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
            </Article>
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
