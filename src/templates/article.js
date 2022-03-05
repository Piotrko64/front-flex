import { graphql, useStaticQuery } from "gatsby";
import { StructuredText } from "react-datocms";
import React from "react";
import Nav from "../components/Nav";
import Helmet from "react-helmet";
import styled from "styled-components";
const Article = ({ pageContext: { slug }, data: { article } }) => {
    const Article = styled.article`
        background-color: #282c2f;
        min-height: 100vh;
        font-family: "OSWALD";
        .article__back {
            height: 100px;
            background-position: center;
            background-repeat: no-repeat;
            background-size: cover;
            display: flex;
            justify-content: center;
            background-attachment: fixed;
            height: 30vh;
            max-width: 100vw;
            position: relative;

            text-transform: uppercase;
            color: black;
            text-align: center;
            h1 {
                margin: 0;
                position: absolute;
                top: 100%;
                font-weight: 300;
                transform: translateY(-50%);
                padding: 0px 25px;
                background-color: white;
                font-size: 3.2rem;
                width: min-content;
                -webkit-box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 1);
                -moz-box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 1);
                box-shadow: 0px 0px 24px 0px rgba(0, 0, 0, 1);
            }
        }
        .article__describe {
            margin-top: 15vh;

            padding: 5px;
            max-width: 900px;
            margin-left: auto;
            margin-right: auto;
            background-color: rgb(41, 41, 41);
            color: white;
            -webkit-box-shadow: 0px 0px 100px -1px rgba(41, 41, 41, 1);
            -moz-box-shadow: 0px 0px 100px -1px rgba(41, 41, 41, 1);
            box-shadow: 0px 0px 100px -1px rgba(41, 41, 41, 1);
            span {
                font-style: italic;
            }
            p {
                font-weight: 300;
            }
            .article__gallery {
                display: flex;
                justify-content: center;
                align-items: center;
                img {
                    max-width: 340px;
                    padding: 20px 0;
                }
            }
        }
    `;

    return (
        <>
            <Helmet>
                <title>{article.title}</title>
            </Helmet>
            <Nav />
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
