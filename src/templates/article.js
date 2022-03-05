import { graphql, useStaticQuery } from "gatsby";
import { StructuredText } from "react-datocms";
import React from "react";
import Nav from "../components/Nav";
import Helmet from "react-helmet";
import jss from "jss";
import jssPluginGlobal from "jss-plugin-global";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    "@global": {
        body: {
            margin: 0,
            fontSize: "22px",
        },
        a: {
            textDecoration: "underline",
        },
    },
    article: {
        backgroundColor: "#282c2f",
        minHeight: "100vh",
        fontFamily: "OSWALD",
    },
    article__back: {
        backgroundPosition: "center",
        backgroundRepeat: "noRepeat",
        backgroundSize: "cover",

        backgroundAttachment: "fixed",
        height: "25vh",
        maxWidth: "100vw",
        position: "relative",

        textTransform: "uppercase",
        color: "black",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
    },
    h1: {
        margin: 0,
        position: "absolute",
        top: "100%",
        fontWeight: 300,
        transform: "translateY(-50%)",
        padding: "0px 25px",
        backgroundColor: "white",
        fontSize: "3.2rem",
        width: "min - content",

        boxShadow: "0px 0px 24px 0px rgba(0, 0, 0, 1)",
    },
    article__describe: {
        marginTop: "15vh",

        padding: "5px",
        maxWidth: "900px",
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "rgb(41, 41, 41)",
        color: "white",

        boxShadow: "0px 0px 100px -1px rgba(41, 41, 41, 1)",
    },
    span: {
        fontStyle: "italic",
    },
    p: {
        fontWeight: 300,
    },
    article__gallery: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
    img: {
        maxWidth: "340px",
        padding: "20px 0",
    },
});

const Article = ({ pageContext: { slug }, data: { article } }) => {
    const classes = useStyles();
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
            </Helmet>

            <article className={classes.article}>
                <div
                    class={classes.article__back}
                    style={{ backgroundImage: `url(${article.background.url})` }}
                >
                    <h1 class={classes.h1}>{article.title}</h1>
                </div>
                <div class={classes.article__describe}>
                    <span class={classes.span}>{article.data}</span>
                    <StructuredText data={article.content.value} />
                    <div class={classes.article__gallery}>
                        <img src={article.gallery[0].url} class={classes.img} />
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
